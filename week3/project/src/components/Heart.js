import { useContext } from 'react';
import heartUnchecked from '../assets/heart-regular.svg';
import heartChecked from '../assets/heart-solid.svg';
import { GlobalContext } from '../GlobalContext';

export default function Heart({ id }) {
  const { handleFavorites, isFavorite } = useContext(GlobalContext);
  const inFav = isFavorite(id);

  return (
    <>
      <img
        src={inFav ? heartChecked : heartUnchecked}
        alt="favHeart"
        className="fav_icon"
        onClick={() => handleFavorites(id)}
      />
    </>
  );
}
