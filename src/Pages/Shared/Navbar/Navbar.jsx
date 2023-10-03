import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png"

const Navbar = () => {
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

                    <Link to='/'><button className="px-5 py-2 rounded-lg bg-[#403F3F] text-white">Login</button></Link>
                </div>

            </section>
            
        </div>
    );
};

export default Navbar;