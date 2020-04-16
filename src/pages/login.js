import React from 'react'
const Login = () => {
    return (
        <>
            <div class="columns is-centered has-text-centered" style={{ position: "absolute" }, { margin: "0" }, { transform: "translate(0%,50%)" }}>
                <div class="column is-half">
                    <div class="box" style={{borderRadius: "25px"}}>
                            <div class="card-content">
                                <p class="title is-1">SIGN IN</p>
                                <div class="content" >
                                    <input style={{background: "#FFEAEA"}} class="input is-rounded is-large" type="text" placeholder="Username"></input>
                                </div>
                                <div class="content">
                                    <input style={{background: "#FFEAEA"}} class="input is-rounded is-large" type="text" placeholder="Password"></input>
                                </div>
                                <button style={{ backgroundColor: "#ffc30b"}} class="button is-large has-text-white">LOGIN</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;