import './App.css';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const navHome = [
  { link: "/", text: "Главная" },
  { link: "/about", text: "О сайте" },
  { link: "/cat", text: "Категории" },
]

const navCat = [
  { link: "/notebook", text: "Ноутбуки" },
  { link: "/monitor", text: "Мониторы" },
  { link: "/cellphone", text: "Мобильные телефоны" },
]

function App() {
  return (
    <>
      <Header data={navHome} />
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/cat' render={() => <Category data={navCat} />} />
          <Route path='/cat/:CatName' component={CategoryDescription} />
          <Route component={Error} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
