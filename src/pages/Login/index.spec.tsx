import { fireEvent, render, screen } from "@testing-library/react";
import Login from ".";

const navigateMock = vi.fn();

describe("Test the Login component", () => {

    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock;
        },
        Link: vi.fn().mockImplementation((props)=>props.children)
    }))

    test("Should have a title Sign In", async () => {
        render(<Login />);

        const title = await screen.findByRole("heading", {
            name: "Sign In"
        });
        expect(title).toBeInTheDocument();
    })

    test("Should have two inputs in the page", async () => {
        render(<Login />);

        const inputs = await screen.findAllByRole("textbox");
        expect(inputs).toHaveLength(2);
    })

    test("Should a button in the page", async () => {
        render(<Login />);

        const button = await screen.findByRole("button");
        expect(button.textContent).toBe("Login");
    })

    test("Should have a input for email", async () => {
        render(<Login />);

        const inputEmail = await screen.findByPlaceholderText("Digite seu e-mail");
        expect(inputEmail).toBeInTheDocument();
    })

    test("Should have a input for password", async () => {
        render(<Login />);

        const inputPassword = await screen.findByPlaceholderText("Digite sua senha");
        expect(inputPassword).toBeInTheDocument();
    })

    test("Should click the Login button", async () => {
        render(<Login />);

        const button = await screen.findByRole("button");
        fireEvent.click(button);

        expect(navigateMock).toHaveBeenCalledTimes(1);
    })

    test("Should have a link to go to the SignUp page", async () => {
        render(<Login />);

        const link = await screen.findByText("Não tem cadastro? Clique aqui!");
        expect(link).toBeInTheDocument();
    })
})