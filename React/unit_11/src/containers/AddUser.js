import {useDispatch} from "react-redux";
import {addNewUsers} from "../action";

const AddUser = () => {
  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const data = event.target.elements;
    dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value));
  }

  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <input type="text" name="passport" defaultValue="0000 000000"/>
        </div>
        <div>
          <input type="text" name="name" defaultValue="name"/>
        </div>
        <div>
          <input type="number" name="age" defaultValue={0} />
        </div>
        <div>
          <button type="submit">Add new user</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser;