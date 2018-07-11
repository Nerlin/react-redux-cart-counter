import {connect} from "react-redux";
import Cart from "../components/Cart";


const mapStateToProps = (state) => ({
  itemsCount: state.cart.itemsCount
});

export default connect(mapStateToProps)(Cart);