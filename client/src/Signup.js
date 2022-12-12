import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

function Signup() {
    const navigate = useNavigate()
    const [showForm, setShowForm] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const [loginData, setLoginData] = useState({
        user_fullname: '',
        user_name: '',
        email: '',
        password: ''
    })

    const {user_fullname, user_name, user_email, password} = loginData

//Signup submission logic
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            user_fullname,
            user_name,
            user_email,
            password
        }
        fetch('/users', {
            method: 'POST',
            headers: { 'Accept' : 'application/json',
            'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    navigate('/purgatory')
                })
            } else {
//Error Handling
                res.json().then(json => (alert(json.errors)))
            }
        })
    }

//Handle the character change on inputs to form fields
    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value}) 
    }

//Hide password characters
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }

//Hide form
    const toggleSignupForm = () => {
      setShowForm(!showForm)
    }

    
  return (
    <div className='form-div'>
        { showForm ?
            <Form 
            className='form'
            onSubmit={onSubmit}>
                <FormGroup>
                    <Label
                    for="fullname"
                    hidden
                    >
                    Full Name
                    </Label>
                    <Input
                    id="fullname"
                    name="user_fullname"
                    placeholder="Full Name"
                    type="name"
                    onChange={handleChange}
                    />
                </FormGroup>
                {' '}
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
                    for="email"
                    hidden
                    >
                    Email
                    </Label>
                    <Input
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    type="email"
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
                    Signup
                </Button>
                <br/>
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
            onClick= {toggleSignupForm}>Signup Form</button>
    </div>
  )
}

export default Signup