import {Link} from "react-router-dom";
import './Menu.css'
export function Menu() {


    

  return (
    <>
    
      <nav  className="fondo2 navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/historia">
                  Historia
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/integrantes">
                  Integrantes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/albumes">Albumes</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </>
  );
}
