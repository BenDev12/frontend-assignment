import React from 'react'
import ItemList from '../data/itemList'

function PackageComponent() {
  return (
    <div>
        {ItemList.map((item, index)=>(
          <h1>{item.title}</h1>
        ))}
    </div>
  )
}

export default PackageComponent