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
