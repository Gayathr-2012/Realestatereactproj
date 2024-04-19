import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <div className="row bg-warning d-flex align-items-center">
            <div className = "col-sm-3 my-2">
            <Link to="/" > <img className = "w-25" src="/imgs/logo.jpeg" alt="logo here" /> </Link>

            </div>
            <div className = "col-sm-5">
                <h3><i>Get your Dream house with us!</i></h3>
            </div> 
            <div className = "col-sm-4">
            <Link to="/login" >  <button className="btn btn-primary mx-2"> Login </button>  </Link>
                <Link to="/signup">   <button className="btn btn-success"> Signup </button> </Link>

            </div>

        </div>
     );
}
 
export default Header;