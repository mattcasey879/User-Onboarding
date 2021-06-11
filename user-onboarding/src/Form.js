import React from 'react';
import './App.css'


 export default function Form (props) {
     const { values, change, submit, disabled , errors } = props;

     const onSubmit = (event) => {
         event.preventDefault();
         submit();
     }

     const onChange = (event) => {
         const { name, value, checked, type, } = event.target;
         const valueToUse = type === 'checkbox' ? checked : value;
         change(name, valueToUse);
     }
     return (
         <div className='container'>
             <div className='error-msg'>
                <div name='val-user'>{errors.first_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
             </div>
             
         <div className='form'>
             <h1 className='title'>Please fill out this form:</h1>
             <form onSubmit={onSubmit}>
                 <label>Name:
                     <input type='text' name='first_name' value={values.first_name} onChange={onChange}/>
                 </label>
                 <label>Email:
                     <input type='text' name='email' value={values.email} onChange={onChange}/>
                 </label>
                 <label>Password:
                     <input type='password' name='password' value={values.password} onChange={onChange}/>
                 </label>
                 <label>Agree to Terms of Service:
                    <input type='checkbox' name='terms' checked={values.terms} onChange={onChange}/>
                 </label>
                <div className='button-container'><button id='button' disabled={disabled}>Submit</button></div>
            </form>
         </div>
         
         </div>
     )
 }