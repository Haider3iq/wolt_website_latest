import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import pMinDelay from "p-min-delay";
import loadable from "@loadable/component";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import ChartDonught2 from "../Sego/Home/donught2";

import BarChart from "../Sego/Home/BarChart";
// import RadialBarChart from "../Sego/Home/RadialBarChart";

import { FAST_FOOD, MONEY, NOTE, CONTACT_PERSON} from "../SVGComponent/SVGICON";


// // Map
// import World from "@svg-maps/world";
// import { SVGMap } from "react-svg-map";
// //** Import Image */




import SummaryWidget from "../CustomeComponents/SummaryWidget";
import RevenueWidget from "../CustomeComponents/RevenueWidget";
import CustomerMapWidget from "../CustomeComponents/CustomerMapWidget";
import SquareWidget from "../CustomeComponents/SquareWidget";
import DailylListWidget from "../CustomeComponents/DailyListWidget";


export default function Home() {
  



  useEffect(() => {
  document.querySelector("#BarChart canvas").classList.add("lineChart");
  });










  return (
    <>
      {/* //#add addMenusWidget */}
      <div className="modal fade" id="addOrderModalside">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Menus</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="text-black font-w500">Food Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Order Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Food Price</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      


      
      <div className="row">

            {/* //#111 SQUARES  */}
            <>
               
                <SquareWidget heading={"Total Menus"} IconName={FAST_FOOD} amount={"459"} circleAmount={75}
                svgWidth={30} svgHeight={30}/>


                <SquareWidget heading={"Total Revenue"} IconName={MONEY} amount={"$ 87,561"} circleAmount={50}svgWidth={40} svgHeight={40}/>


                <SquareWidget heading={"Total Oders"} IconName={NOTE} amount={"247"} circleAmount={90}svgWidth={40} svgHeight={40}/>


                <SquareWidget heading={"Total Customers"} IconName={CONTACT_PERSON} amount={"872"} circleAmount={50} svgWidth={40} svgHeight={40}/>

            </>





        {/* //#222 SummaryWidget */}
        <SummaryWidget title={"Orders Summary"} discription={"Lorem ipsum dolor sit amet, consectetur"}/>




        {/* //#333 Revenue widget */}
        <RevenueWidget title={"Revenue"} discription={"Lorem ipsum dolor sit amet, consectetur"}/>





        {/* //TODO ANONTHER DIV */}
        <div className="col-xl-9 col-xxl-8">
          <div className="row">



            {/* //#444 CustomerMapWidget */}
            <CustomerMapWidget title={"Customer Map"} discription={"Lorem ipsum dolor sit amet, consectetur"}/>








            {/* //#555 transcation summary */}
            <div className="col-xl-8 col-xxl-12 col-lg-8">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="text-black fs-20 mb-0">
                    Transactions Summary
                  </h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 mb-sm-0 mb-3">
                      <div className="media align-items-center">
                        <div className="d-inline-block mr-3 position-relative donut-chart-sale2">
                          <ChartDonught2
                            backgroundColor="#53CB50"
                            backgroundColor2="#FAFAFA"
                            height="100"
                            width="100"
                            value="75"
                          />
                          <small className="text-black">86%</small>
                        </div>
                        <div>
                          <h4 className="fs-28 font-w600 text-black mb-0">
                            585
                          </h4>
                          <span>Succesfull Order</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="media align-items-center">
                        <div className="d-inline-block mr-3 position-relative donut-chart-sale2">
                          <ChartDonught2
                            backgroundColor="#FD376F"
                            backgroundColor2="#FAFAFA"
                            height="100"
                            width="100"
                            value="40"
                          />
                          <small className="text-black">14%</small>
                        </div>
                        <div>
                          <h4 className="fs-28 font-w600 text-black mb-0">
                            165
                          </h4>
                          <span>Unsuccesfull Order</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>







            {/* //#666 Average */}
            <div className="col-xl-4 col-xxl-12 col-lg-4">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="text-black fs-20 mb-0">Average</h4>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-end" id="BarChart">
                    <div>
                      <h4 className="fs-28 font-w600 text-black mb-0">
                        87,456
                      </h4>
                      <span>Order</span>
                    </div>
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>
        






       {/* //#771 DailylyListWidget */}
        <DailylListWidget title={"Daily Trending Menus"} discription={"Lorem ipsum dolor"} />



      </div>
    </>
  );
}

