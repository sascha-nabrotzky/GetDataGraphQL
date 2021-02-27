import './App.scss';
import Header from "./components/header.jsx"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reporting from "./reporting"
import Anfragen from './anfragen';



function App() {
  return (
    <Router>
    <Header />

      <Switch>
        <Route path="/reporting" component={Reporting} />
        <Route path="/anfragen" component={Anfragen} />
      </Switch>
    </Router>
    
  );
}

export default App;
