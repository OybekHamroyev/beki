import React from "react";

function Menu() {
  return (
    <div className="d-flex align-items-center px-4 py-2 justify-content-between">
      <div className="dropdown">
        <button className="dropbtn">Oliy Madrasa</button>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <h5>Yangiliklar</h5>
      <h5>Maqolalar</h5>
      <h5>Ma'naviy kuni</h5>
      <h5>Interaktiv xizmatlar</h5>
      <h5>Xalqaro</h5>
      <h5>Qabul</h5>
      <h5>Buxoroi sharif</h5>
    </div>
  );
}

export default Menu;
