import React from 'react'
const Account = () => {
    return (
        <div class="columns" style={{ padding: 30 }}>
            <div class="column is-two-thirds" style={{ paddingLeft: 30 }}>
                <p class="title is-size-1">ACCOUNT</p>
                <div class="card" style={{ borderRadius: "25px" }}>
                    <div class="card-content">
                        <p class="title">CMU Account</p>
                        <p class="title has-text-grey is-size-4">studyP@cmu.ac.th</p>
                        <p class="title">First name</p>
                        <p class="title has-text-grey is-size-4">myfirstname</p>
                        <p class="title">Last name</p>
                        <p class="title has-text-grey is-size-4">mylastname</p>
                        <p class="title">Student Code</p>
                        <p class="title has-text-grey is-size-4">600610xxx</p>
                        <p class="title">Faculty</p>
                        <p class="title has-text-grey is-size-4">engineering</p>
                        <button style={{ backgroundColor: "#ffc30b" }} class="button is-large has-text-white">EDIT</button>
                    </div>
                    <div class="columns">
                    <div class="column is-four-fifths"></div>
                    <div class="column">
                    <div class="card-content">
                        <button class="button is-large has-text-white is-danger">LOGOUT</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="column" style={{ paddingTop: 50 }}>
                {/* <div class="card">
                <div class="card-content">
                    <div class="card-image" >
                        <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/b6/83/63/b683639f-bd63-47f7-a2d9-6d89e93b6776/source/256x256bb.jpg"></img>
                    </div>
                    <button style={{ backgroundColor: "#ffc30b" }} class="button is-large has-text-white">UPLOAD YOUR PICTURE</button>
                </div>
                <div class="card-content">
                
                </div>
            </div> */}
            </div>
        </div >
    )
}
export default Account;