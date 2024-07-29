import React from "react";
import "./Hero.css";
import { RocketIcon } from "@primer/octicons-react";
import Number from "./Number";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <div className="head">
            Discover
            <br /> Digital Art & <br />
            Collect Nfts
          </div>
          <h5 className="sub">
            Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And
            Sell Art From More Than 20k Nft Artists.
          </h5>
          <div class="get mt-4">
            <div class="link_get">
              <a href="google.com">Get Started</a>
              <div class="icon">
                <RocketIcon size={30} className="ro" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-5 pt-4">
            <Number num={240} des={"Total Sale"} />
            <Number num={100} des={"Auctions"} />
            <Number num={240} des={"Artists"} />
          </div>
        </div>
        <div className="col-6">
          <div className="card"></div>
          <img
            src="assets\Image Placeholder.png"
            alt="space"
            className="cardimg"
          ></img>
          <div className="info d-flex">
            <img src="assets\Avatar.png" alt="dp" className="dp"></img>
            <div className="content">
              <h4>animakid</h4>
              <p>
                <span>Total Sales :</span> 34.53 ETH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
