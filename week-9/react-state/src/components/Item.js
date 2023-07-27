import React from "react";

function Item(props) {
  return (
    <div>{`Item: ${props.item.item}, price: ${
      props.discount
        ? Math.floor(props.item.price * (1 - props.item.discount))
        : Math.floor(props.item.price)
    }`}</div>
  );
}

export default Item;
