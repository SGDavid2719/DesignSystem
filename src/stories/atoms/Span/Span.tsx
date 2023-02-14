interface SpanProps {
    text: string;
}

const Span: React.FC<SpanProps> = ({ text }) => {
    return <span>{text}</span>
}

export default Span;