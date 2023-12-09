import { useEffect, useState } from "react";
import ServicesShow from "./ServicesShow";

const ServiceHome = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className="my-12">
            <div className="text-center mb-12">
                <h3 className="text-[#FF3811] text-xl font-bold">Service</h3>
                <h1 className="text-5xl font-bold text-black mb-5">Our Service Area</h1>
                <p className="text-[#737373] text-base">the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which do not look even slightly believable. </p>
                <h1>service:{services.length}</h1>
            </div>
            <div className="md:grid grid-cols-3 gap-6 mb-8">
                {
                    services.map(service => <ServicesShow
                        key={service._id}
                        service={service}
                    ></ServicesShow>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline">More Services</button>
            </div>
        </div>
    );
};

export default ServiceHome;