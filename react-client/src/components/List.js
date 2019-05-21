import React, { Component } from 'react';
import ListItem from './ListItem'



function List({ vets }) {
  return (
    <div>
    HERE ARE ALL THE VETS!!
      {vets.map( vet => {
        return <ListItem vet={vet} />
      })}
    </div>
  )
}

export default List;