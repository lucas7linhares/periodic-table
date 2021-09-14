import React, { Fragment } from "react";

import "antd/dist/antd.css";

import { Switch } from "antd";

import Tabela from "../Tabela";
import Legenda from "../Legenda";

function App() {
  const [theme, setTheme] = React.useState("dark");

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  return (
    <Fragment>
      <div className={theme}>
        <div className="header">
          <h1>Periodic Table of Internet</h1>
          <Switch onChange={changeTheme} defaultChecked />
        </div>
        <Tabela />
        <Legenda />
      </div>
    </Fragment>
  );
}

export default App;
