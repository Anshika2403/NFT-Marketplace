import React from "react";
import TrendingCard from "./TrendingCard";

function Trending() {
  return (
    <div className="container">
      <h1 className="fw-bold">Trending Collection</h1>
      <h5 style={{ marginTop: "18px" }}>
        Checkout Our Weekly Updated Trending Collection.
      </h5>
      <div className="d-flex justify-content-between">
        <div>
          <TrendingCard
            main="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-1@2x.png"
            blocka="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder@2x.png"
            blockb="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-1@2x.png"
            type="Dsgn Animals"
            disp="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder@2x.png"
            username="MrFox"
          />
        </div>
        <div>
          <TrendingCard
            main="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder@2x.png"
            blocka="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-2@2x.png"
            blockb="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-3@2x.png"
            type="Magic Mushrooms"
            disp="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png"
            username="Shroomie"
          />
        </div>
        <div>
          <TrendingCard
            main="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/primary-photo-placeholder-5@2x.png"
            blocka="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-10@2x.png"
            blockb="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/secondary-photo-placeholder-11@2x.png"
            type="Disco Machines"
            disp="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-54@2x.png"
            username="BeKind2Robots"
          />
        </div>
      </div>
    </div>
  );
}

export default Trending;
