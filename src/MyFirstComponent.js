import React, { Component } from 'react';

class MyFirstComponent extends Component{
		
	
	state = {
        textdata: ''
      }
	  
	componentDidMount() {
        fetch('http://127.0.0.1:8080/test')
        .then(res => res.json())
        .then((data) => {
          this.setState({ textdata: data.test })
        })
        .catch(console.log)
		console.log("textdata : ",this.state.textdata) ;
      }
	  
	 
	render(){
		return(
			<div>{this.state.textdata}</div>
    		);
  	}	
	
	
}

export default MyFirstComponent;