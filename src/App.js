import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 16;
  // apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "{Paste your API key here}";

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" height={3} progress={progress} />
        <Switch>
          <Route exact path="/">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="General"
              counrty="in"
              category="General"
              pageSize={pageSize}
              headlineCategory="Top Headlines"
            />
          </Route>
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="Business"
              counrty="in"
              category="Business"
              pageSize={pageSize}
              headlineCategory="Top Business News"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="Entertainment"
              counrty="in"
              category="Entertainment"
              pageSize={pageSize}
              headlineCategory="Top Entertainment News"
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="Health"
              counrty="in"
              category="Health"
              pageSize={pageSize}
              headlineCategory="Top Health News"
            />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="Science"
              counrty="in"
              category="Science"
              pageSize={pageSize}
              headlineCategory="Top Science News"
            />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="Sports"
              counrty="in"
              category="Sports"
              pageSize={pageSize}
              headlineCategory="Top Sports News"
            />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="Technology"
              counrty="in"
              category="Technology"
              pageSize={pageSize}
              headlineCategory="Top Technology News"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
