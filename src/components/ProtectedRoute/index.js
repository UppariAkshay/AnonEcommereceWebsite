import { Redirect, Route } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const jwtToken = JSON.parse(localStorage.getItem('jwt_token'))

    if (jwtToken === null)
    {
        return <Redirect to='/login' />
    }
    return <Route {...props} />
}

export default ProtectedRoute