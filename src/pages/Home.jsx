import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Weather from "../component/Weather";

export default function Home() {
  return (
    <div>
      <Header />
      <Menu />
      <Weather />
    </div>
  );
}
