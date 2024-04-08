import { faker } from "@faker-js/faker";
import { PokemonType } from "../types/PokemonType"
import { fetchPokemonDetail, fetchPokemonList } from "./PokemonService";

global.fetch = vi.fn();

function createFetchResponse(data: any) {
    return { json: () =>  new Promise((resolve) => resolve(data)) } 
};

describe("Test the service PokemonService", () => {
    test("Should check if a get list was done for the correct url", async () => {
        const pokemonListResponse: PokemonType[] = [
            {
                id: 1,
                image: faker.image.urlPlaceholder(),
                name: faker.animal.bear.name,
                type: faker.animal.type()
            },
            {
                id: 2,
                image: faker.image.urlPlaceholder(),
                name: faker.animal.bear.name,
                type: faker.animal.type()
            }
        ];

        fetch.mockResolvedValue(createFetchResponse(pokemonListResponse));

        const pokemonList = await fetchPokemonList();
        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon");
        expect(pokemonList).toStrictEqual(pokemonListResponse)
    });

    test("Should check if a get detail was done for the correct url", async () => {
        const pokemonDetailResponse: PokemonType = 
        {
            id: 1,
            name: faker.animal.bear.name,
            image: faker.image.urlPlaceholder(),
            type: faker.animal.type()
        } 

        fetch.mockResolvedValue(createFetchResponse(pokemonDetailResponse));

        const pokemonList = await fetchPokemonDetail(1);
        expect(fetch).toHaveBeenCalledWith("http://localhost:3000/pokemon/1");
        expect(pokemonList).toStrictEqual(pokemonDetailResponse)
    })
})