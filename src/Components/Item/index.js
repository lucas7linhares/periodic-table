import React, { Fragment, useState } from "react";
import { Modal, Button } from "antd";

function Item(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const style = {
    color: props.item.Cor,
    backgroundColor: props.item.Cor,
    gridColumn: props.item.Coluna,
    gridRow: props.item.Linha,
  };

  return (
    <Fragment>
      <Button
        className="periodic-element"
        onClick={showModal}
        style={style}
        grupo={props.item.Grupo}
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
