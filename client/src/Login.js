import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Signup from './Signup'
import Carousel from './Carousel';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

function Login({setCurrentUser}) {
    const navigate = useNavigate()
    const [showForm, setShowForm] = useState(true)
    const [passwordShown, setPasswordShown] = useState(false)
    const [loginData, setLoginData] = useState({
        user_name: "",
        password: ""
      })

    const {user_name, password} = loginData
    
//Login submission logic 
    function onSubmit(e) {
        e.preventDefault();
        const user = {
            user_name, 
            password}

        fetch('/login', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 
            'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    setCurrentUser(user)
                    navigate('/purgatory')
                })

//Error Handling

            } 
            else {
                res.json().then(json => (alert(json.error)))
            }
           
        })
    }
//Handle the character change on inputs to form fields
    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
      }

//Hide password characters
      const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

//Hide form
      const loginForm = () => {
        setShowForm(!showForm)
      }


  return (
    <div className='form-div'>
        <Carousel />
        { showForm ?
        <Form 
        className='form'
        onSubmit={onSubmit}>
            <FormGroup>
                <Label
                for="username"
                hidden
                >
                Username
                </Label>
                <Input
                id="username"
                name="user_name"
                placeholder="Username"
                type="name"
                onChange={handleChange}
                />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label
                for="password"
                hidden
                >
                Password
                </Label>
                <Input
                id="password"
                name="password"
                placeholder="Password"
                type={passwordShown ? 'text' : 'password'}
                onChange={handleChange}
                />
            </FormGroup>
            {' '}
            <Button className='button'>
                Login
            </Button>
            <br/>
            <Button 
            className='button'
            onClick={togglePassword}>
                Show Password
            </Button>
        </Form>
        : null }
        <br/>
        <button 
            className='button'
            onClick= {loginForm}>Login Form</button>
        <br/>
        <Signup setCurrentUser={setCurrentUser}/>
    </div>
  )
}

export default Login