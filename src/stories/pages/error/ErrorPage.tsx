import { Redirect } from "../../atoms/redirect/Redirect";

export const ErrorPage = () => {
    return (
        <Redirect
            rel={"next"}
            href={"/?path=/story/pages-doippage--default"}
            ariaLabel={"Home"}
            children={"Error. Volver a la página de inicio"}
            redirectClassName="text-sm text-center hover:text-blue-600"
        />
    );
};
