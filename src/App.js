import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarCustom from './components/NavbarCustom/NavbarCustom';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
import MainContact from './components/Contact/MainContact';
import Portfolio from './components/Portfolio/Portfolio';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCustom />
        <Route path="/" exact component={Main} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={MainContact} />
        <Footer></Footer>
      </BrowserRouter>


    </>
  );
}

export default App;
