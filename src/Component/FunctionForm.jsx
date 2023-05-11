 import React,{useState} from 'react';
 
 
 function FunctionForm() {
    const [name,dataName] =useState("");
    const [email,dataEmail] =useState("");
    const [gen,dataGen] =useState("");
  

    const handleNameChange=(e)=>{
        e.preventDefault();
        dataName(e.target.value);
    }
    
    const handleEmailChange=(e)=>{
        e.preventDefault();
        dataEmail(e.target.value);
    }

    const handleGenChange=(e)=>{
        e.preventDefault();
        dataGen(e.target.value);
    }
    
   

    const handleSubmit = (e) => {
		e.preventDefault();
    
		let studentsDetails= {
			name,
			email,
			gen
            
		};
    console.log(studentsDetails)  
    dataName("")
    dataEmail("")
    dataGen("")
    }

  return (
<div>
        <form onSubmit={handleSubmit}>
            <h1>STUDENT FUNCTION INFO</h1>
        <label>Full name</label>
        <input type="text" id='fullname' value={name} onChange={handleNameChange}/>
        <br />
        <label>Email</label>
        <input type="email" id='email' value={email} onChange={handleEmailChange}/>
        <br />
        <label>Gen</label>
        <input type="text" id='gen' value={gen} onChange={handleGenChange}/>
        <br />
        
        
        <input type="submit"  value="submit"/>
      
        </form>
       </div>
        
        
       
    );
  };



export default FunctionForm;