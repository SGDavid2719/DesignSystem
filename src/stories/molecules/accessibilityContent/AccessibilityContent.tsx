import { Tag } from "../tag/Tag";

export interface AccessibilityContentProps {
    title: string;
    tags: string[];
    body: string;
}

export const AccessibilityContent: React.FC<AccessibilityContentProps> = ({
    title,
    tags,
    body,
}) => {
    return (
        <div>
            <h1 className="font-semibold text-xl mb-4">{title}</h1>
            <div className="flex gap-2 mb-4">
                {tags.map((tag) => {
                    return <Tag key={tag} text={tag} />;
                })}
            </div>
            <div>{body}</div>
        </div>
    );
};
