import { FaCalendarAlt } from "react-icons/fa";
import { FiPhoneOutgoing } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

const TestContect = () => {
    return (
        <div className=" my-20">
            <div className="bg-[#151515] py-20 text-white flex justify-evenly">
                <div className="flex items-center gap-6">
                    <div className="text-4xl text-red-500">
                        <FaCalendarAlt></FaCalendarAlt>
                    </div>
                    <div>
                        <h2>We are open monday-friday</h2>
                        <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-4xl text-red-500">
                        <FiPhoneOutgoing></FiPhoneOutgoing>
                    </div>
                    <div>
                        <h2>We are open monday-friday</h2>
                        <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-4xl text-red-500">
                        <ImLocation2></ImLocation2>
                    </div>
                    <div>
                        <h2>We are open monday-friday</h2>
                        <h1 className="text-2xl font-bold">7:00 am - 9:00 pm</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestContect;