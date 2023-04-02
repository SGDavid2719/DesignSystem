import { Modal } from "./Modal";
import { render, screen } from "@testing-library/react";

describe("Modal", () => {
    it("debería renderizar un modal con un body", () => {
        render(
            <Modal
                modalTitle="Modal Title"
                modalBody={<p className="p-4">Modal body</p>}
                setShowModal={() => {}}
                showModal={true}
            />
        );
        expect(screen.getByText("Modal body")).toBeInTheDocument();
    });

    it("no debería renderizar el modal", () => {
        render(
            <Modal
                modalTitle="Modal Title"
                modalBody={<p className="p-4">Modal body</p>}
                setShowModal={() => {}}
                showModal={false}
            />
        );
        expect(screen.queryByText("Modal body")).not.toBeInTheDocument();
    });
});
