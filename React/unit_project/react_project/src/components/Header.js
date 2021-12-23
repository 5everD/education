import {NavLink} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function Header() {
    const componentRef = useRef(null);
    const [refresh, setRefresh] = useState(false)
    const [load, setload] = useState(false)


    function go() {
        setRefresh(true)
    }
    useEffect(()=>{

    },[])

    useEffect(() => {
        const lis = componentRef.current.querySelectorAll('.list');
        const nlink = componentRef.current.querySelectorAll('.navlink');
        function activeLink() {
            for (let i = 0; i < nlink.length; i++) {
                if (nlink[i].classList.contains('active')) {
                    for (let k = 0; k < lis.length; k++) {
                        lis[k].classList.remove('active')
                    }
                    lis[i].classList.add('active')
                }
            }
        }
        activeLink()
        setRefresh(false)
    }, [refresh])


    return (
        <div ref={componentRef}>
            <nav className="navigation">
                <ul>
                    <li className="list" onClick={go}>
                        <NavLink exact to="/" className="navlink">
                            <span className="icon">
                                <ion-icon name="home-outline"/>
                            </span>
                            <span className="text">Home</span>
                        </NavLink>
                    </li>
                    <li className="list" onClick={go}>
                        <NavLink exact to="/create" className="navlink">
                            <span className="icon">
                                <ion-icon name="code-download-outline"/>
                            </span>
                            <span className="text">Create</span>
                        </NavLink>
                    </li>
                    <li className="list" onClick={go}>
                        <NavLink exact to="/note" className="navlink">
                            <span className="icon">
                                <ion-icon name="document-text-outline"/>
                            </span>
                            <span className="text">Note</span>
                        </NavLink>
                    </li>
                    <li className="list" onClick={go}>
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