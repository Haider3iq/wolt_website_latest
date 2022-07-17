import React from "react";
import MobileNavigation from "../components/Mobile/MobileNavigation";

const Footer = () => {



  







  return (
    <div className="customFooterMainDiv">
        <div className="custom-footer">
          <div className="custom-copyright">
            <p>
              Copyright © Designed &amp; Developed by{" "}
              <a href="http://dexignzone.com/" target="_blank"  rel="noreferrer">
                DexignZone
              </a>{" "}
              2022
            </p>
          </div>
        </div>


        {/* // Mobile botom navigation */}
        <div>
        <MobileNavigation/>
        </div>
    </div>
  );
};







export default Footer;
