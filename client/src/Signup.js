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
    const [errors, setErrors] = useState([])
    const [passwordShown, setPasswordShown] = useState(false)
    const [loginData, setLoginData] = useState({
        user_fullname: '',
        user_name: '',
        email: '',
        password: ''
        
    })

    const {user_fullname, user_name, user_email, password} = loginData

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
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json().then(user => {
                    navigate(`/users/${user.id}`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value}) 
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }


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

        {errors?errors.map(e => <div> {e[0]+':'+ e[1]} </div>) : null}
    </div>
  )
}

export default Signup