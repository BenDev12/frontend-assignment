import React from "react";
// component is a template for the packages
function Item(props) {
  return (
    <tr className="item">
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td className="pTitle">{props.title}</td>
      <td>{props.address}</td>
      <td>{props.type}</td>
      {/* delete button  */}
      <td className="delete" value={props.value} onClick={props.delBtn}>
        Delete
      </td>
    </tr>
  );
}

export default Item;
