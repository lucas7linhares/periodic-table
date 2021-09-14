import React, { Fragment, useState } from "react";
import { Modal, Button } from "antd";

function Item(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bgColour, setBgColour] = useState("unset");
  const [colour, setColour] = useState(props.item.Cor);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleHoverOn = () => {
    let e = document.getElementsByClassName(
      "periodic-element " + props.item.Grupo
    );
    if (e[0].getAttribute("readonly") !== "true") {
      setBgColour(props.item.Cor);
      setColour("#202e38");
    }
  };

  const toggleHoverOff = () => {
    let e = document.getElementsByClassName(
      "periodic-element " + props.item.Grupo
    );
    if (e[0].getAttribute("readonly") !== "true") {
      setBgColour("unset");
      setColour(props.item.Cor);
    }
  };

  const style = {
    color: colour,
    gridColumn: props.item.Coluna,
    gridRow: props.item.Linha,
    background: bgColour,
  };

  return (
    <Fragment>
      <Button
        className={"periodic-element " + props.item.Grupo}
        onClick={showModal}
        style={style}
        onMouseEnter={toggleHoverOn}
        onMouseLeave={toggleHoverOff}
        onFocus={toggleHoverOn}
        onBlur={toggleHoverOff}
      >
        <span className="title">{props.item.Abreviacao}</span>
        <span className="description">{props.item.Nome}</span>
      </Button>
      <Modal
        title={props.item.Nome}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
      >
        <p>{props.item.Descricao}</p>
      </Modal>
    </Fragment>
  );
}

export default Item;
