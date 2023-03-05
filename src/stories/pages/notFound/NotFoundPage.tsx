import { Redirect } from "../../atoms/redirect/Redirect";

export const NotFoundPage = () => {
    return (
        <Redirect
            href={"/?path=/story/pages-doippage--default"}
            ariaLabel={"Home"}
            children={"404. Not Found. Volver a la página de inicio"}
            redirectClassName="text-sm text-center hover:text-blue-600"
        />
    );
};
