import React, { Component } from 'react';
import SmurfForm from "./SmurfForm"
import Smurf from './Smurf';
import {connect} from "react-redux"

class Smurfs extends Component {
 
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs&&this.props.smurfs.map(smurf => {
            return ( <div>
              
              key={smurf.name}  
              name={this.props.smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              />
              
              </div>
            );
          })}
        </ul>
      </div>
    );

  }
}
const mapStateToProps=state => {
  return {
    smurfs:state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

  const mapDispatchToProps={
    fetch:fetch
  }


export default connect( 
  mapStateToProps,
  mapDispatchToProps)(Smurfs)

Smurf.defaultProps = {
 smurfs: [],
};
;