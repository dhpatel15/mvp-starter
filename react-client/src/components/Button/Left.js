import React, {Component} from 'react';

class Left extends React.Component {
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
      vet_id: this.props.vet.id
    })
  }


  onSubmit(event){
    event.preventDefault();
    this.props.onReject(this.state.vet_name, this.state.vet_id)
  }

  render () {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input type="submit" value="Swipe Left" />
      </form>
      </div>
    )
  }
}


export default Left;