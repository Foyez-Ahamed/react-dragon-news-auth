import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsCard = ({news}) => {
    
    const {title, image_url, details, _id, total_view} = news || {};

    return (
        <div>

<div className="card card-compact w-full bg-base-100 shadow-xl">
   <div className="card-body">
   <h2 className="card-title">{title}</h2>
   </div>
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    
    {
        details.length > 200 ? <p> {details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-[#FF8C47]'>Read more</Link></p> : <p>{details}</p>
    }


    <span className='flex items-center gap-1'> <FaEye></FaEye> {total_view}</span>
  </div>
</div>
            
        </div>
    );
};

export default NewsCard;