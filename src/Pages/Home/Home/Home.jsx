import AboutHome from "../AboutHome/AboutHome";
import Banner from "../Banner/Banner";
import Customer from "../Customer/Customer";
import Product from "../Product/Product";
import ServiceHome from "../ServiceHome/ServiceHome";
import Team from "../Team/Team";
import TestContect from "../TestContect/TestContect";
import Why from "../Why/Why";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutHome></AboutHome>
            <ServiceHome></ServiceHome>
            <TestContect></TestContect>
            <Product></Product>
            <Team></Team>
            <Why></Why>
            <Customer></Customer>
        </div>
    );
};

export default Home;