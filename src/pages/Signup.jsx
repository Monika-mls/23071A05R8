function Signup(){
    return(
        <div>
            <h1>Signup</h1>
            <form>
                Enter Username: <input type="text" placeholder="Username" /><br /><br />
                Enter Password: <input type="password" placeholder="Password" /><br /><br />
                Enter Email id: <input type="text" placeholder="Email" /><br /><br />
                Enter Phone Number: <input type="text" placeholder="Phone Number" /><br /><br />
                Enter Address: <input type="text" placeholder="Address" /><br /><br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Signup;