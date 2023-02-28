interface ParagraphProps {
    text: string;
    textClassName?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ text, textClassName }) => {
    return <p className={textClassName}>{text}</p>
}