import React from "react";
const Home = () => {
  const handleClick = () => {
    window.location =
      "https://oauth.cmu.ac.th/v1/Authorize.aspx?response_type=code&client_id=g3xcpyFcFNHH7g65uyxJJg7PXQWjjUCR47makKkd&redirect_uri=http://localhost:3000/callback&scope=cmuitaccount.basicinfo&state=xyz";
  };
  return (
    <React.Fragment>
      {/* <div class="container columns">
        <div class="column">
          <a href="https://oauth.cmu.ac.th/v1/Authorize.aspx?response_type=code&client_id=g3xcpyFcFNHH7g65uyxJJg7PXQWjjUCR47makKkd&redirect_uri=http://localhost:3000/callback&scope=cmuitaccount.basicinfo&state=xyz">
            {" "}
            login here{" "}
          </a>
        </div>
      </div> */}

      <div
        class="columns is-centered has-text-centered"
        style={({ position: "absolute" }, { margin: "0" })}
      >
        <div class="column is-half">
          <h1> STUDY PLANNER FOR CMU STUDENT</h1>
          <div class="box" style={{ borderRadius: "25px" }}>
            <div class="card-content">
              <p class="title is-1">SIGN IN</p>
              <div class="column is-half"></div>
              <div>
                <button
                  style={{ backgroundColor: "#ffc30b" }}
                  class="button is-large has-text-white is-rounded"
                  onClick={handleClick}
                >
                  <figure
                    class="image is-32x32"
                    style={{ margin: "0%", paddingRight: "5px" }}
                  >
                    <img
                      alt="lock "
                      src="https://img.icons8.com/metro/104/000000/lock.png"
                    />
                  </figure>
                  Login with CMU Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
