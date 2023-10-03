import { useEffect, useState } from "react";
import {  NavLink } from "react-router-dom";


const LeftSideNavbar = () => {

    const [category, setCategory] = useState([]);


    useEffect(() => {

        fetch('/categories.json')
        .then(response => response.json())
        .then(data => setCategory(data))

    },[])

    return (
        <div className="shadow-lg">

            <div>
              <h1 className="text-xl font-bold"> All Category</h1>
            </div>

            <div className="space-y-8 mt-7">

                {
                    category.map(newsCategory => <NavLink  className="block text-xl font-sm" key={newsCategory.id} to={`/newsCategory/${newsCategory.id}`} > {newsCategory.name}</NavLink>)
                }

            </div>
            
        </div>
    );
};

export default LeftSideNavbar;