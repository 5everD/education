import {connect} from "react-redux";
import List from '../components/List';

const mapStateToProps = (state) => {
  const {users} = state;
  return {user: users};
}

export default connect(
  mapStateToProps,
  null
)(List);