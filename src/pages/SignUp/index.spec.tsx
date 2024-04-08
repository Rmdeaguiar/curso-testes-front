import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from ".";

const navigateMock = vi.fn();

describe("Test the SignUp component", () => {

    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock;
        },
        Link: vi.fn().mockImplementation((props)=>props.children)
    }))

    test("Should have 3 inputs in the screen", async () => {
        render(<SignUp />);

        const inputs = await screen.findAllByRole("textbox");
        expect(inputs).toHaveLength(3);
    })

    test("Should have an input for name, email and password", async () => {
        render(<SignUp />);

        const inputName = await screen.findByPlaceholderText("Digite seu nome");
        expect(inputName).toBeInTheDocument();

        const inputEmail = await screen.findByPlaceholderText("Digite seu e-mail");
        expect(inputEmail).toBeInTheDocument();

        const inputPassword = await screen.findByPlaceholderText("Digite sua senha");
        expect(inputPassword).toBeInTheDocument();
    })

    test("Should have a button in the screen", async () => {
        render(<SignUp />);

        const button = await screen.findByRole("button");
        expect(button).toHaveTextContent("Sign Up");
    })

    test("Should have a title 'Cadastre-se'", async () => {
        render(<SignUp />);

        const title = await screen.findByRole("heading", {
            level: 2
        });
        expect(title.textContent).toBe("Cadastre-se")
    })

    test("Should go to the Dashboard page", async () => {
        render(<SignUp />);
        const button = await screen.findByRole("button");
        fireEvent.click(button);
        expect(navigateMock).toHaveBeenCalledTimes(1);

    })

    test("Should have a link to go to Login page", async () => {
        render(<SignUp />);

        const link = screen.getByText("Já tem cadastro? Clique aqui!");
        expect(link).toBeInTheDocument();
    })
    
})