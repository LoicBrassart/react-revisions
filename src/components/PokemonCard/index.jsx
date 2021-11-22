import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SPokemonCard from './style';

export default function PokemonCard({ id, name, url }) {
  return (
    <SPokemonCard>
      <Link to={`/${id}`}>
        <img src={url} alt={name} />
        <h2>
          {id} - {name}
        </h2>
      </Link>
    </SPokemonCard>
  );
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
