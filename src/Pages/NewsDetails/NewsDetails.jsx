import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import { AiOutlineArrowLeft } from 'react-icons/ai';


const NewsDetails = () => {

    const newses = useLoaderData();

    // console.log(newses);

    const {id} = useParams();

    const singleNewses = newses.find(singleNews => singleNews._id == id);

    const {image_url, title, details} = singleNewses || {};

    return (
        <div>

            <Header></Header>

            <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* news details */}
                <div className="col-span-3 mt-10">
                
                <h1 className="text-3xl">News details</h1>

                
                <div className="mt-7">
                <img src={image_url} alt="" />
                <h1 className="text-xl font-bold mt-4">{title}</h1>
                <p className="mt-4">{details}</p>

                <Link to='/'><button className="px-8 py-2 mt-5 text-white flex items-center gap-2 bg-[#D72050] rounded-md" > <AiOutlineArrowLeft className="text-xl"></AiOutlineArrowLeft> All news in this category</button></Link>
                </div>
                </div>

                {/* right side navbar */}
                <div className="col-span-1 mt-10">
                    <RightSideNavbar></RightSideNavbar>
                </div>

            </section>
            
        </div>
    );
};

export default NewsDetails;