import { Link } from "react-router-dom";


const Newscard = ({news}) => {
    const {title,image_url,details,thumbnail_url,_id}=news
    return (
        <div className="card  bg-base-100 shadow-xl mb-5">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
            details.length>200 ? <p>
                {details.slice(0,200)}
                
                <Link to={`/news/${_id}`} className="text-green-600 font-bold">Read more...</Link>
            </p> :
            <p>{details}</p>
          }
        </div>
      </div>
    );
};

export default Newscard;