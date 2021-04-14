import Brand from "./Brand";
import NavBar from "../NavBars/NavBar";
import "./BrandHeader.css";

function BrandHeader({title}){
    return(
        <header>
            <Brand title={title}></Brand>
            <NavBar></NavBar>
        </header>
    );
}

export default BrandHeader;