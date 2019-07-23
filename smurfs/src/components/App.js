import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs, addSmurf} from '../actions';
import SmurfForm from "./SmurfForm"
import Smurfs from "./Smurfs";


import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'', age: '', height: '',
    };

}
componentDidMount(){
  this.props.fetchSmurfs();

}
  handleAddSmurf=( {name, age, height} ) => {
  
  this.props.addSmurf( {name,age,height} );
};
render() {
      return (
        <div className="App">
          <SmurfForm handleAddSmurf={this.handleAddSmurf} title="Add Smurf" />
          {this.props.fetchSmurfstate? (<div>Loading SmurfNation...</div> ):( <Smurfs smurfs={this.props.smurfs}/> )}
        </div>
        );
      }
    }

const mapStateToProps=state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfstate: state.fetchSmurfstate,
    
  };
};
export default connect(
  mapStateToProps, {fetchSmurfs, addSmurf} )( App );