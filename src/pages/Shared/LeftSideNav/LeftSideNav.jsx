import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
          fetch('categories.json')
          .then(res=>res.json())
          .then(data=>setCategories(data))
    },[])
    return (
        <div className="space-y-6">
     <h2  className="text-2xl">Left side Nav:{categories.length}</h2>
     {
        categories.map(categori=> <Link className="block ml-4 text-xl p-4" key={categori.id} to={`./categories/${categori.id}`}>{categori.name}</Link>)
     }
        </div>
    );
};

export default LeftSideNav;