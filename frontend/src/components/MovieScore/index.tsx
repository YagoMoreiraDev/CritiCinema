import MovieStars from '../MovieStars';
import './style.css';

export default function MovieScore() {

  const score:number = 3.5;
  const count:number = 13;
  return (
    <>
      <div className="movie-score-container">
        <p className="movie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
        <MovieStars />
        <p className="movie-score-count">{count} avaliações</p>
      </div>
    </>
  )
}

