import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesShow = ({ service }) => {
    const {_id, img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="text-red-600 flex">
                    <p >price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <FaArrowCircleRight></FaArrowCircleRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesShow;