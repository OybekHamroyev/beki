import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import ins from "../images/ins.svg";
import you from "../images/you.svg";
import tel from "../images/tel.svg";
import face from "../images/face.svg";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { homePageActions } from "../redux/reducers/homeReducer";

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.homeReducer);
  const { setWeather } = homePageActions;

  const [sec, setsec] = useState(new Date().getSeconds());
  useEffect(() => {
    setHours();
    dispatch(setWeather(12));
    console.log(state);
  }, []);

  function setHours() {
    setInterval(() => {
      setsec(new Date().getSeconds());
    }, 1000);
  }
  return (
    <div className="d-flex bg-success align-items-center px-4 py-2 justify-content-between ">
      <div className="d-flex bg-success gap-2">
        <img src={logo} alt="" />
        <h6 className="header_logo-title my-1"> Mir Arab oliy madrasasi</h6>
      </div>
      <div>
        <h6>
          Soat:{new Date().getHours()}:{new Date().getMinutes()}:
          {sec < 10 ? "0" + sec : sec}
        </h6>
        <h6>Havo Harorati: 21°C</h6>
      </div>
      <div>
        <h6 className="text-center">Buxoro Namoz Vaqtlari</h6>
        <div className="d-flex gap-3">
          <h6>Bomdod 06:00</h6>
          <h6>Peshin 13:00</h6>
          <h6>Asr 17:00</h6>
        </div>
      </div>
      <div className="d-flex gap-3">
        <img src={you} alt="" width={40} />
        <img src={tel} alt="" width={40} />
        <img src={face} alt="" width={40} />
        <img src={ins} alt="" width={40} />
        <select>
          <option value="UZ">Uz</option>
          <option value="RU">Ru</option>
          <option value="EN">En</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
