import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex justify-center items-center text-center">

            <div>
            <img src={logo} alt="" />
            <h1 className="mt-3 text-xl">Journalism Without Fear or Favour</h1>
            <h1 className="mt-4 text-center text-xl">{moment().format(" dddd, MMMM D YYYY ")}</h1>
            </div>

        </div>
    );
};

export default Header;