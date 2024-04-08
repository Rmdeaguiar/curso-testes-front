import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import MainRoutes from "../routes"

describe("Tests the component Main routes", () => {
    test("Should render the Login page", async () => {
        render(
            <MemoryRouter initialEntries={["/"]}>
                <MainRoutes />
            </MemoryRouter>)

        expect(screen.getByText('Sign In')).toBeInTheDocument();
    })

    test("Should render the SignUp page", async () => {
        render(
            <MemoryRouter initialEntries={["/sign-up"]}>
                <MainRoutes />
            </MemoryRouter>)

        expect(screen.getByText('Cadastre-se')).toBeInTheDocument();
    })

    test("Should render the Dashboard page", async () => {
        render(
            <MemoryRouter initialEntries={["/dashboard"]}>
                <MainRoutes />
            </MemoryRouter>)

        expect(screen.getByText('Dashboard')).toBeInTheDocument();
    })

    test("Should render the Error page", async () => {
        render(
            <MemoryRouter initialEntries={["/qualquer-rota"]}>
                <MainRoutes />
            </MemoryRouter>)

        expect(screen.getByText('404 Page Not Found')).toBeInTheDocument();
    })
})