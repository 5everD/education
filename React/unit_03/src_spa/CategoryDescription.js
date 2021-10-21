import { useParams, Link } from "react-router-dom";

function CategoryDescription() {
  let { CatName } = useParams();
  return (
    <div>
      <h1>Category: {CatName} </h1>
      <Link to ="/Cat">Назад</Link>
    </div>
  );
}

export default CategoryDescription;