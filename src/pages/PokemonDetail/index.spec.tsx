import { render, screen } from "@testing-library/react";
import PokemonDetail from ".";
import { fetchPokemonDetail } from "../../services/PokemonService";
import { faker } from "@faker-js/faker";
import * as rrd from 'react-router-dom';

const mockFn = vi.fn(fetchPokemonDetail);
const mockFetchPokemonDetailFn = mockFn.mockImplementation(async () => {
    return {
        id: 1,
        name: "Pikachu",
        image: faker.image.urlPlaceholder(),
        type: "Eletric"
    }
})

describe("Test the PokemonDetail component", () => {
    vi.mock("react-router-dom", () => {
        return {
            useParams: () => ({
                id: 1
            }),
            Link: vi.fn().mockImplementation((props) => props.children),
        }
    })

    test("Should have a title in the page", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const pikachu = await screen.findByText("Pikachu");
        expect(pikachu).toBeInTheDocument();
    })

    test("Should have a link to go back", async () => {
        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const linkBack = await screen.findByText("Voltar");
        expect(linkBack).toBeInTheDocument();
    })

    test("Should validate when do not exists a param on route", async () => {
        vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({ id: "0" }));

        render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />)

        const errorText = await screen.findByText("O id não é válido");
        expect(errorText).toBeInTheDocument();
    })
})