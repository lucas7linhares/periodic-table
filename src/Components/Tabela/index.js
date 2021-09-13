import React, { useState, useEffect, Fragment } from "react";

import Item from "../Item";

function Tabela() {
  const [elementos, setElementos] = useState([]);

  const getData = () => {
    fetch(
      "https://gist.githubusercontent.com/nubioknupppd/d3c1f674e2a9405df8a394d86c83a715/raw/89572e284c491879abb5b25113d0964d3dddb962/empresas.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        var arr = [];
        Object.keys(myJson.Empresas).forEach(function (key) {
          arr.push(myJson.Empresas[key]);
        });
        setElementos(arr);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="periodic-table">
        {elementos.map((e, i) => {
          return <Item key={i} item={e}></Item>;
        })}
      </div>
    </Fragment>
  );
}

export default Tabela;
