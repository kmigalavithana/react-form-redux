import {Route, Routes} from "react-router";
import Home from "../componets/Home/Home.jsx";

const Routers = () => {
    return (
       <Routes>
          <Route path="/" element={<Home/>}/>
       </Routes>
    );
};

export default Routers;