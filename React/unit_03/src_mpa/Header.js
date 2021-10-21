function Header(props) {


    return (
        <nav>
            <ul>
                {props.data.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)}
            </ul>
        </nav>
    );
}

export default Header;