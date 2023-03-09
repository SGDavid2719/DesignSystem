interface BackdropProps {
    onOutsideClick: () => void;
    backdropClassName?: string;
    children?: React.ReactNode;
}

export const Backdrop: React.FC<BackdropProps> = ({
    onOutsideClick,
    backdropClassName,
    children,
}) => {
    return (
        <div
            className={[
                "z-10 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-opacity-50",
                backdropClassName,
            ].join(" ")}
            onClick={onOutsideClick}
        >
            {children}
        </div>
    );
};
