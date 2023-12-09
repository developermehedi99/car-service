import { useEffect, useState } from "react";
import ShowProduct from "./ShowProduct";

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="text-center mb-12">
                <h3 className="text-[#FF3811] text-xl font-bold">Popular Products</h3>
                <h1 className="text-5xl font-bold text-black mb-5">Browse Our Products</h1>
                <p className="text-[#737373] text-base">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
                <h2>product: {products.length}</h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    products.map((product, index) => <ShowProduct
                        key={index}
                        product={product}
                    ></ShowProduct>)
                }
            </div>
        </div>
    );
};

export default Product;