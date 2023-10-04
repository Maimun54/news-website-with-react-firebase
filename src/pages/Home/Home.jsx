
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navber/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import Newscard from "./Newscard";

const Home = () => {
    const news =useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <h2 className="text-2xl font-poppins">This is Home</h2>
            <div className="grid grid-cols-1  lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news  */}
                <div className="col-span-2">
                <h2 className="text-2xl">News Coming soon</h2>
                {
                    news.map(aNews=>
                         <Newscard 

                         key={aNews._id}
                        news={aNews}
                         >

                         </Newscard>)
                }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;