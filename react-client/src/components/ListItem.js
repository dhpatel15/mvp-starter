import React from 'react';


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
    };

    
    this.onSubmit = this.onSubmit.bind(this)
  }


  onSubmit(event){
    event.preventDefault();
    // this.props.viewProfile(this.state.vet_name, this.state.vet_id, this.state.vet_location)
  }

  render () {

    console.log(this.props)
    return (
    <div>
      <div>Vet Name: {this.props.vet.vet_name}</div>
      <div>Vet Location: {this.props.vet.vet_location}</div>
      <div>Vet Score:{this.props.vet.score}</div>
      <form onSubmit={this.onSubmit}>
        <input type="submit" value="View PROFILE" />
      </form>
      <br />
      <br />
      <br />

    </div>
    )
  }
}


export default ListItem;

// function ListItem({ vet }) {
// 	console.log
//   return (
//     <div>
//       <div>Vet Name : {vet.vet_name}</div>
//       <div>Vet Location: {vet.vet_location}</div>
//       <div>Vet Score:{vet.score}</div>
//       <input type="submit" value="View PROFILE" />
//       <br />
//       <br />
//       <br />


//     </div>
//   )
// }

// export default ListItem;