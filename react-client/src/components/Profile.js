import React, { Component } from 'react';




function Profile(props) {
	console.log(props)
  return (
    <div>
    	<div>Vet Name: {props.vet.vet_name}</div>
      <div>Vet Location: {props.vet.vet_location}</div>
      <div>Vet Score:{props.vet.score}</div>
    </div>
  )
}

export default Profile;