import './App.css';
import Footer from './Footer';
import About from './About';
import Home from './Home';
import Category from './Category';
import CategoryDescription from './CategoryDescription';
import Error from './Error';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
      <Router>
        <nav>
          {navHome.map(item => <li key={item.link}><Link to ={item.link}>{item.text}</Link></li>)}
        </nav>
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
