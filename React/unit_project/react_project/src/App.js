import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Error from './components/Error';


function App() {
    const [active, setActive] = useState(false);
    function switchState() {
        setActive(true);
    }


    return (
        <div className="main">
            <Router>
                <Header active={active} setActive={setActive}>
                </Header>
                <Switch>
                    <Route exact path="/" render={() => <Main switchState={switchState}/>}/>
                    <Route path="/about" component={About}/>
                    <Route path="/create" component={Create}/>
                    {/*<Route exact path="/note" component={Note}/>*/}
                    <Route exact path="/note" render={() => <Note switchState={switchState}/>}/>
                    <Route exact path="/note/:noteURL" render={() => <Note switchState={switchState}/>}/>
                    <Route component={Error}/>
                </Switch>
            </Router>
            <Footer>
            </Footer>
        </div>
    );
}

export default App;
