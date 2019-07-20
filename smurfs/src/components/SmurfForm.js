import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addSmurf} from '../actions'

class SmurfForm extends Component {
	constructor(props) {
		super(props);
        this.state={
            smurfs:[],
			smurf: {
                age: "",
				height: "",
				name: "",
			
			}
		};
	}

	
	handleSubmit = e => {
		e.preventDefault();
		this.props.addSmurf(this.state.smurf);
		this.setState( {
			
			smurf: {
                age: "",
				height: "",
				name: "",
			
			}
		});
}
	handleInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

	render() {
		return (


<div className="SmurfForm">

    <form onSubmit={this.handleSubmit}>
    <input
    onChange={this.handleInputChange}
    placeholder="age"
    value={this.state.age}
    name="age"
    />
    <input
    onChange={this.handleInputChange}
    placeholder="height"
    value={this.state.height}
    name="height"
    />
    <input
        onChange={this.handleInputChange}
        placeholder="name"
        value={this.state.name}
        name="name"
    />
        <button type="submit">Add to the village</button>
        </form>
        </div>
    );
}
}
const mapStateToProps=state => {
    return {
        smurfs: state.smurfs,
        smurf: state.smurf,
        addSmurf:state.addSmurf
        
    }
}

const mapDispatchToProps={
    fetch: fetch,
    addSmurf:addSmurf
  }


export default connect( 
  mapStateToProps,
  mapDispatchToProps)( SmurfForm)

