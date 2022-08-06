import PublicNavbar from "./components/PublicNavbar";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Doodle from "./doodle";
import './index.scss';

function App() {
    return (
        <div className='App'>

            <PublicNavbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>


    );
}





export default App;
