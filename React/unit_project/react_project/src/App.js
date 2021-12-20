import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Create from "./components/Create";
import Main from "./components/Main";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import Error from "./components/Error";


function App() {
  return (
    <div className="main">
      <Router>
        <Header>

        </Header>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/about" component={About}/>
          <Route path="/create" component={Create}/>
          <Route exactpath="/note" component={Note}/>
          <Route exactpath="/note/:noteURL" component={Note}/>
        </Switch>
      </Router>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
