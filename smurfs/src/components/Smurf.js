import React from "react";
import {connect} from "react-redux"
const Smurf = ({name, height, age}) => {
	return (
		<div className="Smurf">
			<h3>{name}</h3>
			<strong>{height} cm tall</strong>
			<p>{age} smurf years old</p>
		</div>
	);
};

Smurf.defaultProps = {
	name: "",
	height: "",
	age: "",
};


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
	mapDispatchToProps)( Smurf )
  