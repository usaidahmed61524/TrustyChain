"use client";
import { useEffect } from "react";
import Image from "next/image";
import "./styles/section3.css";
import dogIma2 from "../images/dog3.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Section3 = () => {
  useEffect(() => {
    const AOS = require("aos");
    AOS.init();
  }, []);
  return (
    <div className="section3Container">
      <div className="disflexsection3">
        <div className="left2" data-aos="zoom-in-up" data-aos-duration="1000">
          <Image src={dogIma2} alt="dog image" className="dog3image" />
        </div>

        <div className="right2">
          <div
            className="messageImag2Container"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div className="contentMessage2">
              <h2 className="text-white">Doges love art</h2>
              <p className="text-white">
                The Doge Art Club NFT collection is absolutely unique with
                artwork custom designed from scratch by Polish artist - graphic
                designer with a background in street art and murals.
                <br />
                Together we created 9001 Doges using over 200 unique traits.
                Your minted Doge will be like no other on Ethereum blockchain.
              </p>
            </div>
          </div>
          <div className="btn btn-lg btn-color-yellow my-4">
            Doges instagram
          </div>
          <br />

          <div className="btn btn-lg btn-color-yellow">Artists instagram</div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
