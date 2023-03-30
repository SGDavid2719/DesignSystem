import { Button } from "../../atoms/button/Button";
import { Backdrop } from "../../atoms/backdrop/Backdrop";
import { Align } from "../../../shared/types";

export interface ModalProps {
    /**
     * Propiedad obligatoria para indicar el título del modal.
     */
    modalTitle: string;
    /**
     * Propiedad obligatoria para indicar el body del modal.
     */
    modalBody: React.ReactNode;
    /**
     * Propiedad obligatoria para indicar la funciona que muestra / oculta el modal.
     */
    setShowModal: () => void;
    /**
     * Propiedad obligatoria para indicar si mostrar u ocultar el modal.
     */
    showModal: boolean;
    /**
     * Propiedad opcional para indicar si el modal es central o lateral.
     */
    align?: Align;
}

export const Modal: React.FC<ModalProps> = ({
    modalTitle,
    modalBody,
    setShowModal,
    showModal = false,
    align = "center",
}) => {
    const modalStyle =
        align === "center"
            ? "w-8/12 h-72"
            : align === "left"
            ? "left-0 top-0 w-2/3 h-screen"
            : "top-0 right-0 w-2/3 h-screen";

    if (showModal) {
        return (
            <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
                <Backdrop
                    onOutsideClick={() => {
                        setShowModal();
                    }}
                    backdropClassName="backdrop-blur-sm z-10"
                />
                <div
                    className={[
                        "fixed z-20 bg-white rounded shadow-lg",
                        modalStyle,
                    ].join(" ")}
                >
                    <div className="border-b px-4 py-2 flex justify-between items-center">
                        <h1 className="font-semibold text-lg">{modalTitle}</h1>
                        <Button
                            label="Close"
                            renderIcon="cross"
                            align="start"
                            onClick={() => {
                                setShowModal();
                            }}
                            btnClassName={
                                "bg-white text-[#555] hover:font-bold hover:text-black w-[6rem] justify-center"
                            }
                        />
                    </div>
                    <div>{modalBody}</div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};
