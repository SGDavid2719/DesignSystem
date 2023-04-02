interface BackdropProps {
    /**
     * Propiedad obligatoria para indicar que acción debe lanzarse al hacer click.
     */
    onOutsideClick: () => void;
    /**
     * Propiedad opcional para indicar el estilo.
     */
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
            data-testid="backdrop"
        />
    );
};
