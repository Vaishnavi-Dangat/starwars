import './App.css';
import People from './components/People';
import PeopleDetails from './components/PeopleDetails';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="main_div">
    <Navbar/>
     <Switch>
      <Route exact path="/"  component={Home}></Route>
      <Route exact path="/people"  component={People}></Route>
      <Route exact path="/people/:id"  component={PeopleDetails}></Route>
    </Switch>
   </div>
  );
}

export default App;
