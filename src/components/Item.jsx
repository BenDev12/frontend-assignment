import React from "react";

function Item(props) {
  return (
    <tr className="item">
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>{props.title}</td>
      <td>{props.address}</td>
      <td>{props.type}</td>
      <td className="delete" value={props.value} onClick={props.delBtn}>
        Delete
      </td>
    </tr>
  );
}

export default Item;
