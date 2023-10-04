import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const newses = useLoaderData();

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

                <div>
                <LeftSideNavbar></LeftSideNavbar>
                </div>

                {/* middle news section */}

                <div className=" col-span-2">
                    <h1 className="text-xl font-bold">Dragon News Home</h1>
                    {
                        newses.map(news => <NewsCard key={news._id} news = {news}></NewsCard> )
                    }
                </div>

                {/* right side navbar */}

                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>

            </section>
            
        </div>
    );
};

export default Home;