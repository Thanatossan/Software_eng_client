import React from "react";
const Home = () => {
  return (
    <React.Fragment>
      <div class="container columns">
        <div class="column">
          <a href="https://oauth.cmu.ac.th/v1/Authorize.aspx?response_type=code&client_id=g3xcpyFcFNHH7g65uyxJJg7PXQWjjUCR47makKkd&redirect_uri=http://localhost:3000/callback&scope=cmuitaccount.basicinfo&state=xyz">
            {" "}
            login here{" "}
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
