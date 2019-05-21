import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './components/List';
import Profile from './components/Profile';
import Left from './components/Button/Left';
import Right from './components/Button/Right';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vets: [],
      vetProfile: ''
    }
    this.onReject = this.onReject.bind(this)
    this.onAccept = this.onAccept.bind(this)
  }

  componentDidMount(){
    this.onLoad()
  }

  onLoad(){
    axios.get('/api/getVets')
    .then(({ data }) =>  {
      this.setState({
        vets: data
      })
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
  }


  onReject(vetName, vetID){
    axios.post('/api/deleteVet', {
      vetName: vetName,
      vetID: vetID
    })
    .then(({ data }) =>  {
      console.log("Deleted Vet");
      this.onLoad()
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })

  }

  onAccept(vetName, vetID, vet_location){
    axios.post('/api/addVet', {
      vetName: vetName,
      vetID: vetID,
      vetLocation: vet_location
    })
    .then(({ data }) =>  {
       console.log("Added Vet");
       this.onLoad()
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })

  }



  render () {
    return (
    <div>
      {this.state.vets.length >= 1 ? <List vets={this.state.vets} /> : <div></div>}
      {this.state.vets.length >= 1 ? <Left vet={this.state.vets[0]} onReject={this.onReject} /> : <div></div>}
      {this.state.vets.length >= 1 ? <Right vet={this.state.vets[0]} onAccept={this.onAccept} /> : <div></div>}
      {this.state.vets.length >= 1 ? <Profile vet={this.state.vets[0]} /> : <div></div>}
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));