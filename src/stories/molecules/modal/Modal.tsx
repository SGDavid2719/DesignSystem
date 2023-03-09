import { Button } from "../../atoms/button/Button";
import { Backdrop } from "../../atoms/backdrop/Backdrop";

export interface ModalProps {
    modalTitle: string;
    modalBody: React.ReactNode;
    setShowModal: () => void;
}

export const Modal: React.FC<ModalProps> = ({
    modalTitle,
    modalBody,
    setShowModal,
}) => {
    return (
        <div className="relative block m-0 w-[100vw] h-[100vh]">
            <Backdrop
                onOutsideClick={() => {
                    setShowModal();
                }}
                backdropClassName="bg-gray-500"
            >
                <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
                    <div className="border-b px-4 py-2 flex justify-between items-center">
                        <h3 className="font-semibold text-lg">{modalTitle}</h3>
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
                    <div className="p-3">{modalBody}</div>
                </div>
            </Backdrop>
        </div>
    );
};
