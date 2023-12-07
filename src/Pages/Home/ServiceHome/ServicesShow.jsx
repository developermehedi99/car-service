import { FaArrowCircleRight } from "react-icons/fa";

const ServicesShow = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                </h2>
                <div className="text-red-600 flex">
                    <p >price: ${price}</p>
                    <FaArrowCircleRight></FaArrowCircleRight>
                </div>
            </div>
        </div>
    );
};

export default ServicesShow;