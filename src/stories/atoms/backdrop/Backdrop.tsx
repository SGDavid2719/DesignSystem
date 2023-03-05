interface BackdropProps {
    onOutsideClick: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({ onOutsideClick }) => {
    return (
        <div
            className="absolute left-0 top-0 right-0 bottom-0 z-10"
            onClick={onOutsideClick}
        />
    );
};
