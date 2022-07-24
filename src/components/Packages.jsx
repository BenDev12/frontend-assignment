import React, { useState } from "react";
import ItemList from "../data/itemList";
import Item from "./Item";

function Packages() {
  const [data, setData] = useState(ItemList);
  // function to delete the items
  function delBtn(e) {
    e.preventDefault();
    const delItem = e.target.getAttribute("value");
    setData(
      data.filter((item) => {
        console.log(ItemList);
        return item.type !== delItem;
      })
    );
  }
  return (
    <div className="packages">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataRow) => {
            return (
              <Item
                title={dataRow.title}
                address={dataRow.address}
                type={dataRow.type}
                value={dataRow.type}
                delBtn={delBtn}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Packages;
