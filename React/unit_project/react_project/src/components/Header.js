import {NavLink} from "react-router-dom";
import {useEffect, useRef} from "react";

function Header() {
    const componentRef  = useRef(null);

    useEffect(()=>{
        const lis = componentRef.current.querySelectorAll('.list');
        // const nlink = componentRef.current.querySelectorAll('.navlink');
        function activeLink(){
            lis.forEach((item)=>
                item.classList.remove('active'));
            this.classList.add('active')
        }
        lis.forEach((item)=>
        item.addEventListener('click', activeLink))
    },[])



    return (
        <div ref={componentRef}>
            <nav className="navigation">
                <ul>
                    <li className="list">
                        <NavLink exact to="/"  className="navlink">
                            <span className="icon">
                                <ion-icon name="home-outline"/>
                            </span>
                            <span className="text">Home</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/create" className="navlink">
                            <span className="icon">
                                <ion-icon name="code-download-outline"/>
                            </span>
                            <span className="text">Create</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/note" className="navlink">
                            <span className="icon">
                                <ion-icon name="document-text-outline"/>
                            </span>
                            <span className="text">Note</span>
                        </NavLink>
                    </li>
                    <li className="list">
                        <NavLink exact to="/about" className="navlink">
                            <span className="icon">
                                <ion-icon name="information-circle-outline"/>
                            </span>
                            <span className="text">About</span>
                        </NavLink>
                    </li>
                    <div className="indicator">
                    </div>
                </ul>
            </nav>

        </div>
    );
}

export default Header;