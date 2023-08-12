import { useState } from 'react';

function Item({ id, name, borderColor, OnClick }) {
  return (
    <>
      <p onClick={OnClick} style={{ border: "solid", borderColor: borderColor,cursor:"pointer" }}key={id}>
        {name}
      </p>
    </>
  );
}

export default Item;
