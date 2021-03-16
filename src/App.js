import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main/Main';
import { BrowserRouter, Route } from 'react-router-dom';
import NavbarCustom from './components/NavbarCustom/NavbarCustom';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarCustom />
        <Route path="/" exact component={Main} />
        <Route path="/resume" component={Resume} />
        <Footer></Footer>
      </BrowserRouter>


    </>
  );
}

export default App;
