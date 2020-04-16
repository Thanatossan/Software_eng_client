import React from 'react'
const Login = () => {
    return (
        <>
            <div class="columns is-centered has-text-centered" style={{ position: "absolute" }, { margin: "0" }, { transform: "translate(0%,50%)" }}>
                <div class="column is-half">
                    <div class="box" style={{borderRadius: "25px"}}>
                            <div class="card-content">
                                <p class="title is-1">SIGN IN</p>
                                <button style={{ backgroundColor: "#ffc30b"}} class="button is-large has-text-white">Login with CMU Account</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;