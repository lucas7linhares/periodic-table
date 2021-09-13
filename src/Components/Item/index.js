import React from "react";

function Item(props) {
  const style = {
    color: props.item.Cor,
    backgroundColor: props.item.Cor,
    gridColumn: props.item.Coluna,
    gridRow: props.item.Linha,
  };

  return (
    <div className="periodic-element" style={style} grupo={props.item.Grupo}>
      <div className="periodic-element-inner">
        <div className="title">{props.item.Abreviacao}</div>
        <div className="description">{props.item.Nome}</div>
      </div>
    </div>
  );
}

export default Item;
