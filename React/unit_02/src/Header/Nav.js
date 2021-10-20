function Nav(props) {
    let data = props.nav;
    return (
        <nav>
            <ul className="main-navigation">
                {data.map(item =>
                    <li key={item.link}>
                        <a href={item.link}>{item.text}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Nav;