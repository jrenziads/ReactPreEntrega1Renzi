import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div className="navbar-menu">
    <div className="navbar-start">
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="#">
          Categorías
        </a>
        <div className="navbar-dropdown">
          <a href="#" className="navbar-item">Modelo</a>
          <a href="#" className="navbar-item">Versión</a>
          <a href="#" className="navbar-item">Año</a>
        </div>
      </div>
    </div>
    <CartWidget/>
  </div>
  )
};

export default NavBar;
