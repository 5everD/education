import { useParams } from "react-router-dom";

function CategoryDescription() {
    let { CatName } = useParams();
    return (
        <div>
            <h1>Category: {CatName} </h1>
            <a href="/cat">Назад</a>

        </div>
    );
}

export default CategoryDescription;