import React, { useState, useEffect, Fragment } from "react";

function Legenda() {
  const [legenda, setLegenda] = useState([]);

  const getData = () => {
    fetch(
      "https://gist.githubusercontent.com/nubioknupppd/d3c1f674e2a9405df8a394d86c83a715/raw/89572e284c491879abb5b25113d0964d3dddb962/empresas.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        var arr = [];
        var arrLeg = [];
        Object.keys(myJson.Empresas).forEach(function (key) {
          if (arr.indexOf(myJson.Empresas[key].Cor) === -1) {
            arr.push(myJson.Empresas[key].Cor);
            arrLeg.push({
              Cor: myJson.Empresas[key].Cor,
              Grupo: myJson.Empresas[key].Grupo,
            });
          }
        });
        setLegenda(arrLeg);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleFocus = (grupo, cor) => {
    var elementos = document.getElementsByClassName(grupo);
    Object.keys(elementos).forEach(function (key) {
      if (elementos[key].getAttribute("readonly") === "true") {
        elementos[key].style.backgroundColor = "unset";
        elementos[key].style.color = cor;
        elementos[key].removeAttribute("readonly");
      } else {
        elementos[key].style.backgroundColor = cor;
        elementos[key].style.color = "#202e38";
        elementos[key].setAttribute("readonly", "true");
      }
    });
  };

  return (
    <Fragment>
      <div className="legend-table">
        <div className="legend-table__wrapper">
          {legenda.map((e, i) => {
            return (
              <Fragment key={i}>
                <span
                  className="legend-table__marker"
                  style={{ backgroundColor: e.Cor }}
                ></span>
                <span
                  className="legend-table__text"
                  onClick={() => toggleFocus(e.Grupo, e.Cor)}
                >
                  {e.Grupo}
                </span>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default Legenda;
