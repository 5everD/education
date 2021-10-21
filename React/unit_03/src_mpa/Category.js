import { useRouteMatch } from 'react-router-dom';

function Category(props) {
    let match = useRouteMatch();
    return (
        <div>
            <h1>Category</h1>
            <a href="/">Назад</a>
            <ul>
                {props.data.map(item => <li key={item.link}><a href={`${match.url}${item.link}`}>{item.text}</a></li>)}
            </ul>
        </div >
    );
}

export default Category;