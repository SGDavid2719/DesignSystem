import { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import {
    DropdownOption,
    DropdownOptions,
} from "../../molecules/dropdown/Dropdown";

interface AccesibilityModalContent extends DropdownOption {
    content?: JSX.Element;
}

interface AccessibilityModalContents extends DropdownOptions {
    dropDownOptions: AccesibilityModalContent[];
}

interface ModalContentProps {
    accessibilityModalContents: AccessibilityModalContents[];
}

export const ModalContent: React.FC<ModalContentProps> = ({
    accessibilityModalContents,
}) => {
    const [selectedOption, setSelectedOption] = useState(0);

    const contentToDisplay = (
        accessibilityModalContents: AccessibilityModalContents[]
    ) => {
        const selectedContent = accessibilityModalContents
            .find((accessibilityModalContent) =>
                accessibilityModalContent.dropDownOptions.find(
                    (modalContent) => modalContent.id === selectedOption
                )
            )
            ?.dropDownOptions?.find(
                (modalContent) => modalContent.id === selectedOption
            );

        let contentToReturn: JSX.Element | null = <p>No content available</p>;

        if (selectedContent && selectedContent.content) {
            contentToReturn = selectedContent.content;
        } else if (selectedOption === 0) {
            contentToReturn = null;
        }

        return contentToReturn;
    };

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
                {contentToDisplay(accessibilityModalContents)}
            </div>
        </div>
    );
};
