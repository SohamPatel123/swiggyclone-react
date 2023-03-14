import styles from "./AllRestaurantsContainer.module.css";
import Cards from "../../Helper/Cards";
import { RestaurantDetails } from "../../Helper/RestaurantDetails";

export function AllRestaurantsContainer(args) {
  function allCards() {
    return RestaurantDetails.map((item, index) => {
      if (index % 4 === 0) {
        return (
          <div className={styles.outerCont} key={index}>
            <Cards index={index} />
            <Cards index={index + 1} />
            <Cards index={index + 2} />
            <Cards index={index + 3} />
          </div>
        );
      }
      return null;
    });
  }

  return (
    <div className={styles.allRestaurantsContainer}>
      <div className={styles.RestaurantWrapper}>{allCards()}</div>
    </div>
  );
}
