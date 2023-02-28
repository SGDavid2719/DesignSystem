interface SpanProps {
    children: React.ReactNode | string;
    spanClassName?: string;
}

export const Span: React.FC<SpanProps> = ({ children, spanClassName }) => {
    return <span className={[spanClassName].join(" ")}>{children}</span>;
};
