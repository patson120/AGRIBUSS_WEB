import LandingNavbar from "../../partials/LandingNavbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import LandingFooter from "./../../partials/footer/LandingFooter"
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

function LandingPage(){

    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        switch (pathname) {
          case "/":
            document
              .getElementById("hero")
              ?.scrollIntoView({ behavior: "smooth" });
            break;

          case "/about":
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
            break;
          case "/feature":
            document
              .getElementById("feature")
              ?.scrollIntoView({ behavior: "smooth" });
          
          default:
            break;
        }
    }, [pathname]);


    return(
        <div className="overflow-x-hidden">
            <LandingNavbar/>
            <Hero/>
            <About/>
            <Feature/>
            <LandingFooter/>
       </div>
    )
}

export default LandingPage;