import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div>

            <div className="border bg-gray-100 p-2 flex items-center">
                
                <button className="px-5 py-2 rounded-sm text-white bg-[#D72050] ">Latest</button>

                <Marquee>
                I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>
            
        </div>
    );
};

export default BreakingNews;