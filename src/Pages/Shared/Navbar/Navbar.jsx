import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

    const {user, userLogout} = useContext(AuthContext);

    const handleLogout = () => {
        userLogout()
        .then(() => {
            console.log('user logged out successfully');
        })
        .catch(() => {
            console.log('user not logged out');
        })
    }

    return (
        <div>

            <section className="flex justify-between">
                {/* left side */}
                <div>

                </div>
                {/* nav item */}
                <div>
                <nav>
                    <ul className="flex gap-2 lg:gap-6">
                        <NavLink to='/'><li>Home</li></NavLink>

                        <NavLink to='/about'><li>About</li></NavLink>

                        <NavLink to='/career'><li>Career</li></NavLink>
                    </ul>
                </nav>
                </div>
                
                {/* login  */}
                <div className="flex gap-2">

                  <img className="w-[40px]" src={userDefaultPicture} alt="" />

                    {
                        user ? <Link><button onClick={handleLogout} className="px-5 py-2 rounded-md bg-[#403F3F] text-white">Logout</button></Link> : 

                        <Link to='/login'><button className="px-5 py-2 rounded-md bg-[#403F3F] text-white">Login</button></Link>
                    }

                </div>

            </section>
            
        </div>
    );
};

export default Navbar;