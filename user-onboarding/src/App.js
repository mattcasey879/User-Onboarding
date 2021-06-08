import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/schema'

const intialUsers = [];
const intialformValues = {
  username: '',
  email: '',
  password: '',
  terms: false
}
const intitialErrors = {
  username: '',
  email: '',
  password: '',
}
const initialDisabled = true
function App() {
const [ formValues, setFormValues ] = useState(intialformValues);
const  [ users, setUser ]  = useState(intialUsers);
const [errors, setErrors] = useState(intitialErrors);
const [disabled, setDisabled] = useState(initialDisabled)

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setErrors({ ...errors, [name]: ''}))
    .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
}

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => { 
    setUser(res.data.data)
  })
  .catch(err => console.log(err))
}
useEffect(() => {
 getUsers();
},[])

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUser([res.data, ...users]);
    
  })
  .catch(err => console.log(err))
  .finally( () => setFormValues(intialformValues))
}

const submitForm = () => {
  const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    terms: formValues.terms
  }
  postNewUser(newUser)
}

const change =  (name, value) => {
  validate(name,value)
    setFormValues({
      ...formValues, [name]: value
    })
}

  return (
    <div className="App">
      <Form 
      values={formValues}
      change={change}
      submit={submitForm}
      disabled={disabled}
      errors={errors}/>
    </div>
  );
}

export default App;
