import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
            {/* using ternary operator to use boolean value of search bar to display search bar  */}
            {props.searchBar ? <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> : ""}
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  title : "Your Default Title Here!!",
  searchBar: false
}
//proptypes are used so that we can get warnings if we mistakenly use wrong type of data
Header.propTypes = {
  title: PropTypes.string,
  searchBar : PropTypes.bool.isRequired
}
