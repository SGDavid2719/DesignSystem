import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import {
    DropdownOption,
    DropdownOptions,
} from "../../molecules/dropdown/Dropdown";
import { Align } from "../../../shared/types";

interface AccesibilityModalContent extends DropdownOption {
    content?: React.ReactNode;
}

interface AccessibilityModalContents extends DropdownOptions {
    dropDownOptions: AccesibilityModalContent[];
}

interface AccessibilityModalProps {
    accessibilityModalTitle: string;
    accessibilityModalContents: AccessibilityModalContents[];
    align?: Align;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
    accessibilityModalTitle,
    accessibilityModalContents,
    align = "left",
}) => {
    const [showModal, setShowModal] = useState(false);

    const [selectedOption, setSelectedOption] = useState(0);

    const ModalContent = () => {
        const contentToDisplay = accessibilityModalContents
            .find((accessibilityModalContent) =>
                accessibilityModalContent.dropDownOptions.find(
                    (modalContent) => modalContent.id === selectedOption
                )
            )
            ?.dropDownOptions?.find(
                (modalContent) => modalContent.id === selectedOption
            );

        return (
            <div className="flex gap-4">
                <Sidebar
                    sidebarOptions={accessibilityModalContents.map(
                        (accessibilityModalContent) => {
                            const { dropDownTitle, dropDownOptions } =
                                accessibilityModalContent;

                            return {
                                dropDownTitle: dropDownTitle,
                                dropDownOptions: dropDownOptions.map(
                                    (dropDownOption) => {
                                        return {
                                            title: dropDownOption.title,
                                            id: dropDownOption.id,
                                        };
                                    }
                                ),
                            };
                        }
                    )}
                    selectOption={(id: number) => setSelectedOption(id)}
                    sideBarClassName="p-2 h-screen w-1/2"
                />
                <div className="p-2 h-screen w-full">
                    {contentToDisplay && contentToDisplay.content ? (
                        contentToDisplay.content
                    ) : selectedOption === 0 ? null : (
                        <p>No content available</p>
                    )}
                </div>
            </div>
        );
    };

    return (
        <>
            {!showModal && (
                <Button
                    label="A11y"
                    onClick={() => setShowModal(true)}
                    btnClassName={
                        "rounded-full fixed bottom-5 right-8 z-50 bg-blue-700 text-white h-11 w-11 items-center justify-center"
                    }
                />
            )}
            {showModal && (
                <Modal
                    setShowModal={() => setShowModal(false)}
                    modalTitle={accessibilityModalTitle}
                    modalBody={ModalContent()}
                    align={align}
                />
            )}
        </>
    );
};
