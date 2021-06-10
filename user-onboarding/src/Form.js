import React from 'react';



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
         <div>
             <div>{errors.username}</div>
             <div>{errors.email}</div>
             <div>{errors.password}</div>
             <div>{errors.terms}</div>
             
         <div className='form'></div>
         <div className='form'></div>
         <div className='form'></div>
         <div className='form'>
             <form onSubmit={onSubmit}>
                 <label>Name:
                     <input type='text' name='username' value={values.username} onChange={onChange}/>
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
                <button disabled={disabled}>Submit</button>
            </form>
         </div>
         
         </div>
     )
 }