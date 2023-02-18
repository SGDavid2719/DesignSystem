interface SpanProps {
    text: string;
    spanClassName?: string;
}

export const Span: React.FC<SpanProps> = ({ text, spanClassName }) => {
    return <span className={[spanClassName].join(" ")}>{text}</span>
}