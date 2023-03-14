import styles from "./RestaurantNavigation.module.css";
import { memo } from "react";

function RestaurantNavigation(args) {
  return (
    <nav className={styles.restaurantNavigation}>
      <div className={styles.navigationWrapper}>
        <div className={styles.restaurantCount}>100 restaurants</div>
        <ul className={styles.filtersWrapper}>
          <li className={styles.filterOptions}>Relevance</li>
          <li className={styles.filterOptions}>Delivery Time</li>
          <li className={styles.filterOptions}>Rating</li>
          <li className={styles.filterOptions}>Cost: Low to High</li>
          <li className={styles.filterOptions}>Cost: Low to High</li>
          <li className={styles.filterOptions}>
            <span>Filters</span>
            <span className={styles.filterImageWrapper}>
              <img
                src="https://as1.ftcdn.net/v2/jpg/04/02/77/08/1000_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg"
                alt="hi"
                className={styles.filterImage}
              />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default memo(RestaurantNavigation);
