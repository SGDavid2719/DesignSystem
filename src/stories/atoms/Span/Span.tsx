interface SpanProps {
    /**
     * Propiedad obligatoria para indicar el contenido del componente.
     */
    children: React.ReactNode | string;
    /**
     * Propiedad opcional para indicar el estilo.
     */
    spanClassName?: string;
}

export const Span: React.FC<SpanProps> = ({ children, spanClassName }) => {
    return <span className={[spanClassName].join(" ")}>{children}</span>;
};
