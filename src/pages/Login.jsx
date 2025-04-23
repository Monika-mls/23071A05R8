function Login() {
    return (
        <div className="login-container">
            <h3>Login</h3>
            <form>
                <label htmlFor="username">Username:</label><br/>
                <input type="text" id="username" name="username"/><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" name="password"/><br/><br/>
                <input type="submit" value="Login"/><br />
            </form>
            <p>Don't have an account? <a href="/register">Register here</a></p>
        </div>
    )
}

export default Login;