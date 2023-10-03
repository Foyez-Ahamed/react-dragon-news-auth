import Header from "../Shared/Header/Header";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>

            <Header></Header>
            <div className="mt-10">
            <BreakingNews></BreakingNews>
            </div>
            
            <div className="mt-10">
            <Navbar></Navbar>
            </div>

            <section className="mt-16 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">

                {/* left side navbar */}

                <div className="border">
                <LeftSideNavbar></LeftSideNavbar>
                </div>

                {/* middle news section */}

                <div className=" col-span-2 border">
                    <h1>This is news channel</h1>
                </div>

                {/* right side navbar */}

                <div className="border">
                    <RightSideNavbar></RightSideNavbar>
                </div>

            </section>
            
        </div>
    );
};

export default Home;