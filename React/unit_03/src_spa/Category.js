import { useRouteMatch, Link } from 'react-router-dom';

function Category(props) {
  let match = useRouteMatch();
  return (
    <div>
      <h1>Category</h1>
      <Link to ="/">Назад</Link>
      <ul>
        {props.data.map(item => <li key={item.link}><Link to ={`${match.url}${item.link}`}>{item.text}</Link></li>)}
      </ul>
    </div >
  );
}

export default Category;