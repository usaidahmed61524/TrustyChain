"use client";
import { useEffect } from "react";
import "./styles/section2.css";
import dogIma2 from "../images/dog2.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);
  return (
    <div className="section2Container">
      <div className="disflexsection2">
        <div className="left1">
          <div
            className="messageImagContainer2"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="contentMessage">
              <h2>Doges love memes</h2>
              <p>
                Dogecoin started as a meme and evolved to be so much more!
                Inspired by that the first product by Doge Art Club is the NFT
                Meme Generator
                <br />
                It s a tool to empower creative individuals to easily turn their
                art into NFTs without a single line of code and for free!
              </p>
            </div>
          </div>
          <div className="btn btn-lg btn-color-yellow mt-4">Proof of men</div>
        </div>

        <div className="right1" data-aos="zoom-in-up" data-aos-duration="1000">
          <Image src={dogIma2} alt="dog image" className="dog2image" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
