import { useState } from "react";
import Item from "./Item";

const List = () => {
  const listItem = [
    {
      id: 1,
      content: 'keke',
    },
    {
      id: 2,
      content: 'hihi',
    },
    {
      id: 3,
      content: 'haha',
    },
    {
      id: 4,
      content: 'meme',
    },
    {
      id: 5,
      content: 'mimi',
    },
    {
      id: 6,
      content: 'mama',
    },
  ];
  const [selected, setSelected] = useState(0);
  const handleClick = (index) => {
    setSelected(index);
  };
  return (
    <>
      {listItem.map((item, index) => (
        <Item borderColor={index === selected ? "red" : "white"} OnClick={() => handleClick(index)} key={item.id} id={item.id}name={item.content}/>
      ))}
    </>
  );
};

export default List;
