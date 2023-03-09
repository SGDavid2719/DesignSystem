interface BackdropProps {
    onOutsideClick: () => void;
    backdropClassName?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({
    onOutsideClick,
    backdropClassName,
}) => {
    return (
        <div
            className={[
                "h-screen w-full fixed left-0 top-0",
                backdropClassName,
            ].join(" ")}
            onClick={onOutsideClick}
        />
    );
};
