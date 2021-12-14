import { Route, Routes } from "react-router-dom";
import { PokemonInformations } from "../components/PokemonInformations";
import { SetPokemonsData } from '../components/SetPokemonsData'

export function MainRoutes() {
    return (
            <Routes>
                <Route path="/" element={<SetPokemonsData />} />
                <Route path="/pokemonsInformation/:id" element={<PokemonInformations />} />
            </Routes>
    )
}