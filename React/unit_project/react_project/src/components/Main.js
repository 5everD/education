import {NavLink} from "react-router-dom";

function Main() {

    return (
        <div className="container">
            <div className="main">
                <div className="note__create">
                    <NavLink exact to="/create">Создать Note</NavLink>
                </div>
                <div className="note__view">
                    <NavLink exact to="/note">Посмотреть Note</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Main;