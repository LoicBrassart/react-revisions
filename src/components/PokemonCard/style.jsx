import styled from 'styled-components';

const SPokemonCard = styled.article`
  border: 2px dotted blue;
  width: 10em;
  aspect-ratio: 4/5;
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 1;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    aspect-ratio: 5/1;
  }
`;

export default SPokemonCard;
