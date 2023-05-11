import React, { Component } from 'react';


class ClassForm extends Component {
    constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			gen: "",
            phone:""
		};
	}

    handleNameChange = (e) => {
		e.preventDefault();
		this.setState({ name: e.target.value });
		
	};
	handleEmailChange = (e) => {
		e.preventDefault();
		this.setState({ email: e.target.value });
	};
	handleGenChange = (e) => {
		e.preventDefault();
		this.setState({ gen: e.target.value });
	};
    
	handleSubmit = (e) => {
		e.preventDefault();
		let studentsDetails = {
			name: this.state.name,
			email: this.state.email,
			gen: this.state.gen,
		};
		console.log(studentsDetails);
		this.setState({
			name: "",
			email: "",
			gen: "",
           
		});
	};

    
    
  render() {
    return (
       <div>
        <form onSubmit={this.handleSubmit}>
            <h1>STUDENT CLASS INFO</h1>
        <label>Full name</label>
        <input type="text" id='fullname' value={this.state.name} onChange={this.handleNameChange}/>
        <br />
        <label>Email</label>
        <input type="email" id='email' value={this.state.email} onChange={this.handleEmailChange}/>
        <br />
        <label>Gen</label>
        <input type="text" id='gen' value={this.state.gen} onChange={this.handleGenChange}/>
        <br />
       
        <br />
        <input type="submit"  value="submit"/>
      
        </form>
       </div>
        
        
       
    );
  };
}

export default ClassForm





	
		
		

	