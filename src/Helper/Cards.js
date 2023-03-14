import styles from "../Components/MainBody/AllRestaurantsContainer.module.css";
import {
  StarImageSVG,
  DiscountImageSVG,
  defaultImage,
} from "./RestaurantDetails";
import { RestaurantDetails } from "./RestaurantDetails";

export default function Cards({ index = 0 }) {
  let cardIndex = index % 4;
  let i = index - cardIndex;

  let validate = (validateStr, defaultVal) => {
    let validStr = validateStr.length > 0 ? validateStr : defaultVal;
    return validStr;
  };

  let validatingPromotion = (i, cardIndex) => {
    if (
      validate(RestaurantDetails[i + cardIndex].RestaurantPromotionTag, "")
        .length > 0
    ) {
      return (
        <>
          <div className={styles.RestaurantPromotionTag}>
            {RestaurantDetails[i + cardIndex].RestaurantPromotionTag}
          </div>
          <span className={styles.RestaurantPromotionBanner}></span>
        </>
      );
    }
    return <div className={styles.dontDisplay}></div>;
  };

  return (
    <div>
      <div className={styles.Card}>
        <img
          className={styles.RestaurantCardImage}
          src={validate(
            RestaurantDetails[i + cardIndex].RestaurantImageSrc,
            defaultImage
          )}
          alt="hi"
        />
        <div className={styles.RestaurantName}>
          {validate(
            RestaurantDetails[i + cardIndex].RestaurantName,
            "Restaurant Name"
          )}
        </div>
        <div className={styles.RestaurantDishes}>
          {validate(
            RestaurantDetails[i + cardIndex].RestaurantDishes,
            "No dishes"
          )}
        </div>
        <div className={styles.InnerWrapper}>
          <div className={styles.ratingWrapper}>
            {/* <StarImageSVG /> */}
            <span className={styles.RestaurantRating}>
              {validate(
                RestaurantDetails[i + cardIndex].RestaurantRating,
                "0.0"
              )}
            </span>
          </div>
          <span>•</span>
          <span className={styles.RestaurantTime}>
            {validate(
              RestaurantDetails[i + cardIndex].RestaurantTime,
              "10 MINS"
            )}
          </span>
          <span>•</span>
          <span className={styles.RestaurantServingSize}>
            {validate(
              RestaurantDetails[i + cardIndex].RestaurantServingSize,
              "₹500 FOR TWO"
            )}
          </span>
        </div>
        {validatingPromotion(i, cardIndex)}
        <div className={styles.RestaurantOffers}>
          {/* <DiscountImageSVG /> */}
          <div className={styles.offerSyntax}>
            {validate(
              RestaurantDetails[i + cardIndex].RestaurantOffers,
              "50% Off | Use WELCOME50"
            )}
          </div>
        </div>
        <div className={styles.quickView}>QUICK VIEW</div>
      </div>
    </div>
  );
}
