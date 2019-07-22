import React, {Component} from "react";

class SmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			height: "",
			age: "",
		};
	}

	handleInputChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	};

    handleSubmit=( e ) => {
        e.preventDefault();
        const {name, age, height}=this.state;
        console.log( "before this.props.handleAddSmurf", name, age, height )
        this.props.handleAddSmurf( {name, age, height} );
        console.log( "after this.props.handleAddSmurf", name, age, height )
        this.setState( {name: "", age: "", height: "", } );
        console.log( "after this.setState", name, age, height )
    }

	render() {
		const {name, age, height} = this.state;
		return (
			<div className="SmurfForm">
				<form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
						onChange={this.handleInputChange}
						placeholder="name"
						value={name}
						name="name"
					/>
                    <input
                        type="text"
						onChange={this.handleInputChange}
						placeholder="height"
						value={height}
						name="height"
					/>
                    <input
                        type="text"
						onChange={this.handleInputChange}
						placeholder="age"
						value={age}
						name="age"
					/>
					<button type="submit">Add to the village</button>
				</form>
			</div>
		);
	}
}
export default SmurfForm;
