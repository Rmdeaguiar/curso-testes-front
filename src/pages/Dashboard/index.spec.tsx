import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from ".";
import { fetchPokemonList } from "../../services/PokemonService";
import { faker } from '@faker-js/faker';

const mockFetchListPokemonFn = vi.fn(fetchPokemonList).mockImplementation(async () => {
    return [
        {
            id: 1,
            name: 'Pikachu',
            image: faker.image.urlPlaceholder(),
            type: 'Eletrico'
        },
        {
            id: 2,
            name: 'Charmander',
            image: faker.image.urlPlaceholder(),
            type: 'Fogo'
        }
    ]
})

const navigateMock = vi.fn();

describe("Test the Dashboard component", () => {
    vi.mock("react-router-dom", () => ({
        useNavigate() {
            return navigateMock;
        }
    }))

    test("Should have a title Dashboard", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

        const title = await screen.findByRole("heading", {
            name: "Dashboard"
        });
        expect(title).toBeInTheDocument();
    })

    test("Should have a list with 2 pokemons", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

        const items = await screen.findAllByRole("listitem");
        expect(items).toHaveLength(2);
    })

    test("Should have a Pikachu on the list", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

        const pikachu = await screen.findByText("Pikachu");
        expect(pikachu).toBeInTheDocument();
    })

    test("Should be possible to click on LI to open the detail's page from pokemon", async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

        const link = await screen.findByText("Pikachu");
        fireEvent.click(link);

        expect(navigateMock).toHaveBeenCalledTimes(1);
    })

})