import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form'
import axios from 'axios'

const intialUsers = [];
const intialformValues = {
  username: '',
  email: '',
  password: '',
  terms: false
}

function App() {
const [ formValues, setFormValues ] = useState(intialformValues);
const  [ users, setUser ]  = useState(intialUsers);

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUser(res.data)
  })
  .catch(err => console.log(err))
}

const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users')
  .then(res => {
    setUser([...res.data, newUser]);
  })
  .catch(err => console.log(err))
  .finally( () => setFormValues(intialformValues))
}

const submitForm = () => {
  const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    terms: formValues.terms.trim()
  }
  postNewUser(newUser)
}

const change =  (name, value) => {
    setFormValues({
      ...formValues, [name]: value
    })
}

  return (
    <div className="App">
      <Form 
      values={formValues}
      change={change}
      submit={submitForm}/>
    </div>
  );
}

export default App;
