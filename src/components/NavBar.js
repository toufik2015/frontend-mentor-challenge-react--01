import React from "react";
import classes from "./NavBar.module.css";
import logo from "../images/logo.svg";
import Avatar from "../images/image-avatar.png";
import CartIcon from "./CartIcon";
import CartImage from "../images/image-product-1-thumbnail.jpg";

import DeleteIcon from "../images/icon-delete.svg";
function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className={classes["navbar"]}>
          <div className={classes["nav-links"]}>
            <div className={classes["logo-box"]}>
              <img src={logo} alt="Logo" />
            </div>
            <div className={classes["nav-items"]}>
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className={classes["account"]}>
            <div className={classes["cart"]}>
              <button className={classes["cart-btn"]}>
                <span className={classes["badge"]}>3</span>
                <CartIcon fill="#111111" />
                <div className={classes["popup"]}>
                  <div className={classes["popup-header"]}>
                    <h3>Cart</h3>
                  </div>
                  <div className={classes["cart-items"]}>
                    <ul>
                      <li>
                        <div className={classes["item-content"]}>
                          <div className={classes["image-box"]}>
                            <img src={CartImage} />
                          </div>
                          <p>
                            Fall limited Edition Sneackers <br /> $125.00x3
                            <span> $375.00</span>
                          </p>
                          <button className={classes["dlt-btn"]}>
                            <img src={DeleteIcon}></img>
                          </button>
                        </div>
                        <button className={classes["checkout-btn"]}>
                          Checkout
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </button>
            </div>
            <div className={classes["profile"]}>
              <img src={Avatar} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
