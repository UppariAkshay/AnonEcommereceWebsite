import './index.css'

const Login = () => {
    console.log('login rendered')
    return (
        <div className="loginPageContainerDIV">
            <h1>Login</h1>

            <form className='loginFORM border border-info rounded p-3'>
                <label className='mt-3' htmlFor='userName'>User Name: </label>
                <input id='userName' className="form-control" type="text" placeholder="Enter your name"/>
                <label label className='mt-3' htmlFor='password'>Password</label>
                <input id='password' className="form-control" type='password' placeholder="Enter your password" />
                <button className="btn btn-primary mt-3">Login</button>
            </form>
        </div>
    )
}

export default Login