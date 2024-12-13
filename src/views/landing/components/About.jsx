
import style from "./style.module.css";
import image from "../../../constants/images";
import Button from "../../../components/Button/button";
import { Fade } from "react-awesome-reveal";

function About(){
    return(
        <div id="about" className={`w-full overflow-x-hidden text-right flex flex-col-reverse md:flex-row py-20 md:px-40 px-10 gap-20 h-full`}>
            <div className="md:w-1/2  bg-pending rounded-full self-center h-full">
                <img src={image.HERO_Forum} alt="About us image" className="w-full rounded-full h-full"/>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 h-full">
                {/*<p className=" underline text-xl font-semibold text-left text-primary">About Us</p>*/}
                <Fade    direction="right" duration={1500} className="flex flex-col gap-y-4">
                    <h1 className="text-5xl md:text-6xl text-center md:text-left font-bold py-6">We are changing the way farmers works</h1>
                
                    <p className="text-lg text-justify">
                        AgriBUSS is an agribusiness compny founded on the premise that farming condition shoul be made easy.
                        Chime uses an explanatory approach by sharing its partnerships with regional banks and highlighting the value proposition that separates it from competitors.

                        This is not a surprising approach for a company like Chime. The fintech industry has many regulations, and Chime wants its customers to understand why its tech is different
                    </p>
                </Fade>
                
                <button className="bg-btngrade py-2 rounded-lg hover:scale-105 text-white font-bold cursor-pointer shadow px-6">Learn More</button>
                
            </div>
        </div>
    )
}

export default About;