import React, {Component} from 'react';

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      vet_name: '',
      vet_id: '',
    };
    
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount(){
    this.setState({
      vet_name: this.props.vet.vet_name,
      vet_id: this.props.vet.id,
      vet_location: this.props.vet.vet_location,
    })
  }


  onSubmit(event){
    event.preventDefault();
    this.props.onAccept(this.state.vet_name, this.state.vet_id, this.state.vet_location)
  }

  render () {

    console.log(this.props)
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input type="submit" value="Swipe Right" />
      </form>
      </div>
    )
  }
}


export default Right;