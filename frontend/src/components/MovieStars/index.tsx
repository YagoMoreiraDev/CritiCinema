import './style.css';
import imgStarFull from '../../assets/star-full.svg';
import imgStarHalf from '../../assets/star-half.svg';
import imgStarEmpty from '../../assets/star-empty.svg';

export default function MovieStars() {
  return (
    <>
      <div className="movie-stars-container">
        <img src={imgStarFull} alt="" />
        <img src={imgStarFull} alt="" />
        <img src={imgStarFull} alt="" />
        <img src={imgStarHalf} alt="" />
        <img src={imgStarEmpty} alt="" />
      </div>
    </>
  )
}

