import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { useState } from "react";

interface AccessibilityModalProps {}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = () => {
    const [showModal, setShowModal] = useState(false);

    const ModalContent = () => {
        return <p>Modal Content</p>;
    };

    return (
        <>
            {!showModal && (
                <Button
                    label="Show Accessibility Modal"
                    onClick={() => setShowModal(true)}
                    btnClassName={
                        "bg-white text-[#555] hover:font-bold hover:text-black w-fit justify-center"
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
