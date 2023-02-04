// venue listing
import { Button } from "antd";
import React from "react";
import CategoryCard from "../components/home/CategoryCard";

const Home = () => {
  return (
    <div style={{ flex: 1, flexDirection: "row" }}>
      <div style={{ width: "50%" }}>
        <div className="home-title">Just Tain</div>
        <div>
          Change Your Body,Change your MindSet, Our Sports has everything of
          your need
        </div>
        <div style={{ alignSelf: "center" }}>
          <CategoryCard />
        </div>
      </div>

      <div style={{ width: "50%", float: "right" }}>
        <img
          src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
          alt="homepage"
        />
      </div>
    </div>
  );
};

export default Home;
