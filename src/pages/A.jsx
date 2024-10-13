import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Weather from "../component/Weather";

export default function A() {
  return (
    <div>
      A
      <Outlet />
    </div>
  );
}
