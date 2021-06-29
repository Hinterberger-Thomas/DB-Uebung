import Login from "./components/Login"
import Register from "./components/Register"
import Overview from "./components/Overview"
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    < Router >
      <div>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/overview" component={Overview}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
