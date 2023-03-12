import { Span } from "../../atoms/span/Span";

export interface TagProps {
    text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <div className="items-center justify-center min-w-[4rem] w-fit rounded-full py-1 px-4 bg-blue-700 text-white text-xs">
            <Span children={text} spanClassName="text-center w-full block" />
        </div>
    );
};
