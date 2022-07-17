import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";




// import RadialBarChart from "../Sego/Home/RadialBarChart";



// // Map
// import World from "@svg-maps/world";
// import { SVGMap } from "react-svg-map";
// //** Import Image */



import HorizontalMealList from "../../MyComponents/HorizontalMenuList";


import "../../../css/homePage.css"
import AdHorizontalList from "../../MyComponents/AdHorizontalList";
import HorizontalFoodList from "../../MyComponents/HorizontalFoodList";
import AdCarousel from "../../MyComponents/AdCarousel";


export default function Home() {
  


  

  const Title = ({title}) => {

    return(
      <div className="titleDiv">
        <div className="titleText">{title}</div>
      </div>
    )
  } 








  return (
    <div className="HomeDiv" id="testtestsets">


             {/* // Horizontal add list #111*/}
             <Title title={"Deals and discounts"}/>
              <AdHorizontalList/>


              {/* // Horizontal meal list #222*/}
              <Title title={"Menu"}/>
              <HorizontalMealList/>




              {/* //Ad carsol #333 */}
              {/* <AdCarousel/> */}












              <Title title={"Deals and discounts"}/>
              <AdHorizontalList/>









              {/* // Horizontal meal list #444*/}
              <Title title={"Random meals"}/>
              <HorizontalFoodList/>


      

              


             
    </div>
  );
}

