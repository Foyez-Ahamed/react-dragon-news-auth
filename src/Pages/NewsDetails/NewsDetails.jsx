import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";


const NewsDetails = () => {

    const {id} = useParams();

    return (
        <div>

            <Header></Header>

            <section className="grid grid-cols-1 lg:grid-cols-4">
                {/* news details */}
                <div className="col-span-3 mt-10">
                
                <h1 className="text-3xl">News details</h1>

                <p>{id}</p>

                <Link to = '/'><button className="btn btn-primary">Go home</button></Link>

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