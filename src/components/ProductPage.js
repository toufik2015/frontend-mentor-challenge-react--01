import React from "react";
import classes from "./ProductPage.module.css";
import MinusIcon from "../images/icon-minus.svg";
import PlusIcon from "../images/icon-plus.svg";
import CartIcon from "./CartIcon";
import { useState } from "react";

function ProductPage(props) {
  const [currentThumbnail, setCurrentThumbnail] = useState("1");
  let previewImgUrl;
  const clickOnThumbnailHandler = (e) => {
    e.preventDefault();
    setCurrentThumbnail(e.target.closest("a").id);
  };
  previewImgUrl = "../images/image-product-" + currentThumbnail + ".jpg";

  return (
    <main>
      <div className="container">
        <div className={classes["page-content"]}>
          <div className={classes["product-preview"]}>
            <div className={classes["preview"]}>
              <img
                src={require("../images/image-product-" +
                  currentThumbnail +
                  ".jpg")}
              />
            </div>
            <div className={classes["thumbnails"]}>
              <a
                onClick={clickOnThumbnailHandler}
                id="1"
                href="#"
                className={
                  currentThumbnail !== "1"
                    ? `${classes["thumbnail"]}`
                    : `${classes["thumbnail"]} ${classes["current"]} `
                }
              >
                <img src={require("../images/image-product-1-thumbnail.jpg")} />
              </a>
              <a
                onClick={clickOnThumbnailHandler}
                id="2"
                href="#"
                className={
                  currentThumbnail !== "2"
                    ? `${classes["thumbnail"]}`
                    : `${classes["thumbnail"]} ${classes["current"]} `
                }
              >
                <img src={require("../images/image-product-2-thumbnail.jpg")} />
              </a>
              <a
                onClick={clickOnThumbnailHandler}
                id="3"
                href="#"
                className={
                  currentThumbnail !== "3"
                    ? `${classes["thumbnail"]}`
                    : `${classes["thumbnail"]} ${classes["current"]} `
                }
              >
                <img src={require("../images/image-product-3-thumbnail.jpg")} />
              </a>
              <a
                onClick={clickOnThumbnailHandler}
                id="4"
                href="#"
                className={
                  currentThumbnail !== "4"
                    ? `${classes["thumbnail"]}`
                    : `${classes["thumbnail"]} ${classes["current"]} `
                }
              >
                <img src={require("../images/image-product-4-thumbnail.jpg")} />
              </a>
            </div>
          </div>
          <div className={classes["product-details"]}>
            <div className={classes["product-details-container"]}>
              <h3>SNEACKER COMPANY</h3>
              <h1>
                Fall Limited Edition <br /> Sneacker
              </h1>
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they’ll
                withstand everything the weather can offer.
              </p>

              <div className={classes["pricing"]}>
                <div className={classes["current-price"]}>
                  $125.00 <span>50%</span>
                </div>

                <div className={classes["original-pricing"]}>$250.00</div>
              </div>

              <div className={classes["cart-actions"]}>
                <div className={classes["items-number"]}>
                  <button
                    onClick={props.addItems}
                    id="minus"
                    className={classes["minus-btn"]}
                  >
                    <img src={MinusIcon} />
                  </button>
                  <span> {props.itemsNumber} </span>
                  <button
                    onClick={props.addItems}
                    id="plus"
                    className={classes["minus-btn"]}
                  >
                    <img src={PlusIcon} />
                  </button>
                </div>

                <button
                  onClick={props.addToCart}
                  className={classes["addtocart-btn"]}
                >
                  <CartIcon fill="#ffffff" /> <span>Add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
