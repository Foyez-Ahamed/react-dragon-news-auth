import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex justify-center items-center">

            <div>
            <img src={logo} alt="" />
            <h1 className="mt-4 text-center text-xl">{moment().format(" dddd, MMMM D YYYY ")}</h1>
            </div>
            
        </div>
    );
};

export default Header;