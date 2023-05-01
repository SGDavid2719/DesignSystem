import { Button } from "../../atoms/button/Button";
import { Modal } from "../../molecules/modal/Modal";
import { useState } from "react";
import {
    DropdownOption,
    DropdownOptions,
} from "../../molecules/dropdown/Dropdown";
import { Align } from "../../../shared/types";
import { ModalContent } from "./ModalContent";

interface AccesibilityModalContent extends DropdownOption {
    content?: JSX.Element;
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
            <Modal
                setShowModal={() => setShowModal(false)}
                modalTitle={accessibilityModalTitle}
                modalBody={
                    <ModalContent
                        accessibilityModalContents={accessibilityModalContents}
                    />
                }
                align={align}
                showModal={showModal}
            />
        </>
    );
};
