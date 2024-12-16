import './index.css'
import { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
// import {Oval} from 'react-loader-spinner'

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setLoading] = useState(false)

    const history = useHistory()

    const onSubmitLogin = async (e) => {
        e.preventDefault()

        const loginUrl = 'https://fakestoreapi.com/auth/login'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName,
                password: password
            })
        }

        try 
        {
            const loginResponse = await fetch(loginUrl, options)
            const jwtToken = await loginResponse.json()

            
            
            history.replace('/')

            localStorage.setItem('jwt_token', JSON.stringify(jwtToken))
        }
        catch (error){
            alert('Invalid Credentials')
        }
            
        
        
    }

    // const displayLoginForm = () => {
        
    // }

    const jwtToken = JSON.parse(localStorage.getItem('jwt_token'))

    if (jwtToken)
    {
        return <Redirect to='/login' />
    }

    // return isLoading ? <Oval />  : displayLoginForm()

    // return displayLoginForm()

    return (
        <div className="loginPageContainerDIV">
            <h1>Login</h1>

            <form onSubmit={(e) => onSubmitLogin(e)} className='loginFORM border border-info rounded p-3'>
                <label className='mt-3' htmlFor='userName'>User Name: </label>
                <input id='userName' value={userName} onChange={(e) => setUserName(e.target.value)}  className="form-control" type="text" placeholder="Enter your name"/>
                <label className='mt-3' htmlFor='password'>Password</label>
                <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type='password' placeholder="Enter your password" />
                <button type='submit' className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    )
    
}

export default Login