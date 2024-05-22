import './style.css';
import imgArrow from '../../assets/arrow.svg';
export default function Pagination() {
  return (
    <>
      <div className="movie-pagination-container">
        <div className="movie-pagination-box">
          <button className="movie-pagination-button" disabled={true} >
              <img src={imgArrow} alt="arrow" />
          </button>
          <p>{`${1} de ${3}`}</p>
          <button className="movie-pagination-button" disabled={false} >
            <img src={imgArrow} alt="arrow" className="movie-flip-horizontal" />
          </button>
        </div>
      </div>
    </>
  )
}

