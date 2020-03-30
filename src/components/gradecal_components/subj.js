import React, { useState } from "react";
import "./css/list.css";
const Subj = () => {

    addSubject(){
        this.setState({subjects: [this.state.subjects]});
    }

    return(
        <div className="App">
            <h1> GRADE CALCULATE</h1>

            <hr />
            {
                this.state.subjects.map((subject.index)=>{
                    return(
                        <div key={index}>
                            <input value={subject} />
                        </div>
                    )
                })
            }

            <hr />


            <button onClick={(e)=>this.addSubject(e)}>Add Subject Code</button>

            <hr />

            <button>Submit</button>
        </div>
    );
}
export default Subj;