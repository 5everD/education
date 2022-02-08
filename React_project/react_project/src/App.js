import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';

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
            <Header active={active} setActive={setActive}>
            </Header>
            <Routes>
                <Route path="/" element={<Main switchState={switchState}/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="create" element={<Create/>}/>
                <Route path="note" element={<Note switchState={switchState}/>}/>
                <Route path="note/:noteURL" element={<Note switchState={switchState}/>}/>
                <Route path="*" element={Error}/>
            </Routes>
            <Footer>
            </Footer>
        </div>
    );
}

export default App;
