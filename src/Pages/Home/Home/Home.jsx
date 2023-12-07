import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import ServiceHome from "../ServiceHome/ServiceHome";
import TestContect from "../TestContect/TestContect";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutHome></AboutHome>
            <ServiceHome></ServiceHome>
            <TestContect></TestContect>
            <Product></Product>
        </div>
    );
};

export default Home;