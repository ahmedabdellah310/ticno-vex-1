import "../index.css";
import Hder from "./Hder";
import HomeFace from "./HomeFace";
import About from "./About";
import Projects from "./Sarvers";
import Form from "./Form"
import Foter from "./Foter";

/* 
*/
function Home(params) {
    return (
        <div   >
            <Hder />
             
            <HomeFace />
            <About />
            <Projects />
            <Form/>
            <Foter />
      
            {/**
             */}


        </div>
    )
}
export default Home