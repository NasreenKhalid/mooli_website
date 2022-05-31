import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import "../../components/header/style.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CategoriesMenu from "../../components/header/categoriesMenu";
import { RiNotification2Line } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

import oneimg from "../../../src/assets/oneimg.webp";

import Footer from "../../components/Footer/footer";
const OfferDetails = () => {
  const [showCategories, setshowCategories] = useState(false);
  const [showAuth, setshowAuth] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const categoriesMenu = () => <div>categories menu</div>;

  const handleCatagoriesClick = () => {
    setshowCategories(!showCategories);
  };

  const handleSignIn = () => {
    setshowAuth(!showAuth);
  };

  const style = { color: "#006E2E", fontSize: "24px" };
  return (
    <div className="container">
      <div className="top-header">
        <span>
          <Link className="top-nav-link" to="/">
            Sign up
          </Link>
        </span>
        <span>
          <Link className="top-nav-link" to="/">
            Sell
          </Link>
        </span>
        <span>
          <Link className="top-nav-link" to="/">
            <AiOutlineHeart /> My Wishlist{" "}
          </Link>
        </span>
        <span>
          <Link className="top-nav-link" to="/">
            Help
          </Link>
        </span>
        <span>
          <Link className="top-nav-link" to="/">
            Get The Mooli App
          </Link>{" "}
        </span>
      </div>
      <div className="header">
        <span className="brand-name">Mooli</span>

        <div>
          <div>
            <button className="header-btn" onClick={handleCatagoriesClick}>
              Categories{" "}
              {showCategories ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {showCategories && (
              <CategoriesMenu showCategories={showCategories}></CategoriesMenu>
            )}
          </div>
        </div>

        <span className="header-search">
          <span>
            <AiOutlineSearch /> <input placeholder="Seach Offer" />
          </span>
          <span className="border-right">
            <IoLocationSharp /> <input placeholder="Seach Location" />
          </span>
        </span>
        <button className="search-btn">
          {" "}
          <AiOutlineSearch size={22} />
        </button>
        <button className="notification-icon">
          {" "}
          <RiNotification2Line size={22} />
        </button>
        <span>
          <button className="header-btn" onClick={handleSignIn}>
            {" "}
            Sign In {showAuth ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>{" "}
          {showAuth && <signIn showAuth={showAuth}></signIn>}
        </span>
      </div>
      <div>
        <div className="offer-detail-heading">
          <h4>The Wink Beauty</h4>
        </div>
        <div className="offer-detail-address">
          <h6>601 North Martingale Road, Schaumburg</h6>
        </div>
        .
        <div className="offer-details-discount">
          <h4>Up to 45% Off on Facial at The Wink Beauty</h4>
        </div>
      </div>
      <div className="row offer-details-image">
        <div className="col-lg-8">
          <div>
            <img src={oneimg} />
          </div>
          <div className="col-lg-4">
            <div className="d-flex">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-index">
        <Footer />
      </div>
    </div>
  );
};

export default OfferDetails;
