
const ShowProduct = ({ product }) => {
    const { img, review, title, price } = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <p>{review}</p>
                <h2 className="card-title">{title}</h2>
              
                <div className="card-actions">
                    <button className="btn btn-primary">price: ${price}</button>
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;