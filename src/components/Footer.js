import React from "react";
import logo from "../Img/Group 4214.png"
import { IoMdCall } from "react-icons/io"
import { GoMail } from "react-icons/go"
import { ImLocation2 } from "react-icons/im"
import { GrFacebookOption } from "react-icons/gr"
function Footer()
{
  return <div className="Footer">
    <div className="content">
      <div className="Footer-box-top">
        <img src={logo} alt="logo img" className="Footer-logo" />

        <div className="box-section">
          <div className="section">
            <h4>Contact</h4>
            <div className="section-box">
              <IoMdCall className="icon" />
              <span>00 11 223233</span>
            </div>
            <div className="section-box">
              <GoMail className="icon" />
              <span>info@domain.com</span>
            </div>
            <div className="section-box">
              <ImLocation2 className="icon" />
              <span className="address">Street Address
                City, and Postcode
                Country</span>
            </div>
          </div>
          <div className="section">
            <h4>Our Products</h4>
            <div className="section-box">
              <span className="num"> 2 </span>
              <span> 2 step process</span>
            </div>
            <div className="section-box">
              <span className="num"> 4 </span>
              <span> 4 step process</span>
            </div>

          </div>
          <div className="section">
            <h4>Social</h4>
            <div className="section-box">
              <GrFacebookOption className="icon" />
              <span> @facebookNZ</span>
            </div>
          </div>
        </div>



      </div>

    </div>
    <div className="Footer-box-bottom">
      <p>Sitemap | Disclaimer | © Copyright 2022 | All Rights Reserved - Enterprise name.All Rights Reserved. </p>
    </div>

  </div>;
}

export default Footer;
