import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { RiLock2Fill } from "react-icons/ri";
import CategoriesMenu from "./categoriesMenu";
import signIn from "./signIn";
import ActionCard from "../Card/Card";
import Footer from "../Footer/footer";
import { data } from "../../components/Data/data";
// import CategoriesMenu from './categoriesMenu';

export const Header = () => {
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
    <div>
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

      {/* //Green Bar of Sign In */}
      <div className="discount-bar d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center">
          <RiLock2Fill style={style} />
          <span className="discount-text">
            <p>Sign in to save 15% or more!</p>
          </span>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-end">
          <div>
            <button className="book-online-btn">Book Online</button>
          </div>
          <div>
            <button className="book-online-btn">
              Sort By <IoIosArrowDown />
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {data.map((da) => (
            <div className="col-lg-3 d-flex justify-content-center card-main-wrapper">
              <ActionCard da={da} />
            </div>
          ))}
        </div>
      </div>
      <div className="footer-index">
        <Footer />
      </div>
    </div>
  );
};
