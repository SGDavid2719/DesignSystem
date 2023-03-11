import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { DropdownOption } from "../../molecules/dropdown/Dropdown";

interface AccessibilityModalProps {
    sidebarOptions: DropdownOption[][];
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({
    sidebarOptions,
}) => {
    const [showModal, setShowModal] = useState(false);

    const [selectedOption, setSelectedOption] = useState(0);

    const ModalContent = () => {
        return (
            <div className="flex gap-4">
                <Sidebar
                    sidebarOptions={sidebarOptions}
                    selectOption={(id: number) => setSelectedOption(id)}
                    sideBarClassName="p-2 w-1/3"
                />
                <div className="p-2 w-full">
                    <p>{selectedOption}</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="center"></div>
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
                    modalTitle="Modal title"
                    modalBody={ModalContent()}
                />
            )}
        </>
    );
};
