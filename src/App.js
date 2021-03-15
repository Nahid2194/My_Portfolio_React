import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import Details from './components/Details/Details';
import NavbarCustom from './components/NavbarCustom/NavbarCustom';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCustom />
        <Route path="/" exact component={Main} />
      </BrowserRouter>


    </>
  );
}

export default App;
