import { Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:id" element={<PokemonDetails />} />
      </Routes>
    </>
  );
}
