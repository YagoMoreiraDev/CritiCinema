import './style.css';
import imgIcon from '../../assets/github.svg';
export default function Navbar() {
  return (
    <>
      <header>
        <nav className="container">
          <div className="movie-nav-content">
              <h1>DSMovie</h1>
              <a href="https://github.com/YagoMoreiraDev" target="_blank" rel="noreferrer">
                <div className="movie-contact-container">
                  <img src={imgIcon} alt="Imagem Github" />  
                  <p className="movie-contact-link">/yagomoreiradev</p>
                </div>
              </a>
          </div>
        </nav>
      </header>
    </>
  )
}

