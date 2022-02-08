import {NavLink} from "react-router-dom";

function Main({switchState}) {

    return (
        <div className="container">
            <div className="main">
                <div className="note__create">
                    <NavLink onClick={switchState} to="/create" >создать note</NavLink>
                </div>
                <div className="note__view">
                    <NavLink onClick={switchState} to="/note" >посмотреть note</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Main;