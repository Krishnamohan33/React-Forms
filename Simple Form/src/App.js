import React,{useState} from "react";
import "./SimpleForm.css";

function SimpleForm()
{

  const[name , setName] = useState('');
  const[email , setEmail] = useState('');
  const[message , setMessage] = useState('');

  const handleSumbit = (e) => 
    {
      e.preventDefault();
      console.log('Form Sumbitted:', {name,email,message});
      // you can also connect to server also...........
      
    };

    return (
      <div>
        <h1>Simple Form</h1>
        <form onSubmit={handleSumbit}>
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  
  export default SimpleForm;
  


