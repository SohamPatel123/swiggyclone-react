import styles from "./OfferHeader.module.css";
import { offerImages } from "../../Helper/imageFolder";
import { memo, useEffect, useRef, useState } from "react";

function OfferHeader(props) {
  let [offerScroll, setOfferScroll] = useState(0);
  let rightScroll = useRef();
  let leftScroll = useRef();
  let offerWrapper = useRef();
  let offset = 310;

  useEffect(() => {
    offerWrapper.current.style.marginLeft = offerScroll + "px";
    leftScroll.current.style.display = offerScroll < 0 ? "block" : "none";
    rightScroll.current.style.display =
      offerScroll > -offset * (offerImages.length - 4) ? "block" : "none";
  }, [offerScroll, offset]);

  function offersCards() {
    return Object.entries(offerImages).map((index) => (
      <span className={styles.cards} id="cards" key={index}>
        <img
          src={index[1]}
          id={index[0]}
          alt="offers"
          width="260px"
          height="260px"
        />
      </span>
    ));
  }

  let handleCarouselScroll = (event) => {
    setOfferScroll((prev) =>
      (event.target.id === "rightScroll" ||
        event.target.id === "rightScrollImage") === true
        ? Math.max(prev - offset, -offset * (offerImages.length - 1))
        : Math.min(prev + offset, 0)
    );
  };

  return (
    <div className={styles.offerSpace}>
      <div className={styles.buttonWrapper}>
        <div className={styles.offerHeader}>
          <div
            className={styles.offerWrapper}
            data-testid="offerWrapper"
            ref={offerWrapper}
          >
            {offersCards()}
          </div>
        </div>
        <button
          onClick={handleCarouselScroll}
          className={styles.rightArrowKey}
          id="rightScroll"
          ref={rightScroll}
        >
          <img
            className={styles.rightArrowKeyImage}
            src="https://img.icons8.com/ios-filled/2x/long-arrow-right.png"
            alt="rightScroll"
          />
        </button>
        <button
          onClick={handleCarouselScroll}
          className={styles.leftArrowKey}
          id="leftScroll"
          ref={leftScroll}
        >
          <img
            className={styles.leftArrowKeyImage}
            src="https://img.icons8.com/ios-filled/2x/long-arrow-right.png"
            alt="leftScroll"
          />
        </button>
      </div>
    </div>
  );
}

export default memo(OfferHeader);
