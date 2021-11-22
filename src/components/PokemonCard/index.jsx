import PropTypes from 'prop-types';

import SPokemonCard from './style';

export default function PokemonCard({ id, name, url }) {
  return (
    <SPokemonCard>
      <img src={url} alt={name} />
      <h2>
        {id} - {name}
      </h2>
    </SPokemonCard>
  );
}

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
