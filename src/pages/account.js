import React from 'react'
const Account = () => {
    return (
        <>
            <h1>ACCOUNT</h1>
            <div class="columns is-mobile is-centered">
                <div class="column is-half">
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
                            <p class="title">Status</p>
                            <p class="title has-text-grey is-size-4">นักศึกษาปัจจุบัน</p>
                        </div>
                        <div class="columns">
                            <div class="column is-four-fifths"></div>
                            <div class="column">
                                <div class="card-content">
                                    <button class="button is-large has-text-white is-danger is-rounded ">LOGOUT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Account;