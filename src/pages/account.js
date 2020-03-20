import React from 'react'
const Account = () => {
    return (
        <div class="columns">
            <div class="column">
                <p class="title">ACCOUNT</p>
                <p class="titile">First name</p>
                <div class="content">
                    <input style={{ background: "#FFEAEA" }} class="input is-rounded is-large" type="text" placeholder="Firstname"></input>
                    <p class="title">Last name</p>
                    <div class="content" >
                        <input style={{ background: "#FFEAEA" }} class="input is-rounded is-large" type="text" placeholder="Last name"></input>
                        <p class="title">Student Code</p>
                        <div class="content" >
                            <input style={{ background: "#FFEAEA" }} class="input is-rounded is-large" type="text" placeholder="Number"></input>
                        </div>
                        <button style={{ backgroundColor: "#ffc30b"}} class="button is-large has-text-white">EDIT</button>
                    </div>
                </div>
            </div>
            <div class="column">
                Second column
                <button style={{ backgroundColor: "#ffc30b"}} class="button is-large has-text-white">UPLOAD YOUR PICTURE</button>
                <button style={{ backgroundColor: "#ffc30b"}} class="button is-large has-text-white">LOG OUT</button>
            </div>
        </div>
    )
}
export default Account;