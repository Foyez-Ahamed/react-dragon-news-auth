import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import qZoneOne from "../../../assets/qZone1.png"
import qZoneTwo from "../../../assets/qZone2.png"
import qZoneThree from "../../../assets/qZone3.png"

const RightSideNavbar = () => {
    return (
        <div>

              <section className="shadow-lg">
                {/* github and google */}
                <div>

                    <h1 className="text-xl font-bold">Login with</h1>

                    <div className="mt-6 text-center px-4 py-2">

                    <button className='flex items-center gap-2 w-full outline outline-blue-100 p-1 rounded-md bg-gray-100'>
                      <FaGoogle></FaGoogle>
                      Login with google
                    </button>

                    <button className='mt-4 flex items-center gap-2 w-full outline outline-blue-100 p-1 rounded-md bg-gray-100'>
                      <FaGithub></FaGithub>
                      Login with github
                    </button>

                    </div>

                </div>
                {/* github and google */}


                {/* social media */}
                <div className='mt-8'>
                <div>
                <h1 className="text-xl font-bold">Find us on</h1>

                 <div className="mt-6">

                    <a className='flex items-center gap-3 py-3 bg-gray-100' href=""><FaFacebook></FaFacebook> Facebook</a>

                    <a className='flex items-center gap-3 py-3 bg-gray-100 mt-3' href=""><FaTwitter></FaTwitter> Twitter</a>

                    <a className='flex items-center gap-3 py-3 bg-gray-100 mt-3' href=""><FaInstagram></FaInstagram> Instagram</a>
                 
                 </div>

                </div>
                </div>
                {/* social media */}


                {/* q-zone */}
                <div className='mt-8'>

                <h1 className="text-xl font-bold">Q-Zone</h1>

                <div>
                    <img src={qZoneOne} alt="" />
                    <img src={qZoneTwo} alt="" />
                    <img src={qZoneThree} alt="" />
                </div>


                </div>
                {/* q-zone */}
            </section>
            
        </div>
    );
};

export default RightSideNavbar;