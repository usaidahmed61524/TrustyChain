"use client";
import MyNavbar from "./navbar";
import "./styles/section1.css";
import Image from "next/image";
import image from "../images/moveimg.png";

const Section1 = () => {
  return (
    <>
      <div className="section1Container">
        <MyNavbar />
        <div className="mainTextSection1">
          <div className="moveuptodown">
            <Image src={image} alt="image" className="moveimage" />
          </div>
        </div>
        <div className="mycontainer">
          <h1 className="fHading">HELLO DOG</h1>
          <p className="fpara">Scroll down and join the club</p>
        </div>
      </div>
    </>
  );
};

export default Section1;
