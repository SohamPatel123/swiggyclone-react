import { React } from "react";
import { locationDropDown, globalOptionsLogo } from "../../Helper/imageFolder";
import styles from "./MainHeader.module.css";
import { SearchBar } from "./SearchBar";

export default function MainHeader({ searchInput, setSearchInput, ...args }) {
  const location = "Gurugram, Haryana";

  function globalOptions() {
    return Object.entries(globalOptionsLogo).map((values) => (
      <div className={styles.globalOption} key={values}>
        {values[0] === "Search" ? (
          <SearchBar text={values[0]} icon={values[1]} />
        ) : (
          <>
            <span>{values[1]}</span>
            <span>{values[0]}</span>
          </>
        )}
      </div>
    ));
  }

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.mainHeader}>
        <div className={styles.wrapper}>
          <a
            href="args.logoURL"
            className={`${styles.logo} ${styles.logoImage}`}
          >
            {args.logoSvg}
          </a>
          <div className={styles.userLocation}>
            <span className={styles.preciseLocation} id="preciseLocation">
              Sector 42
            </span>
            <span className={styles.locationValue} id="locationValue">
              {location}
            </span>
            <span className={styles.locationDropDown}>{locationDropDown}</span>
          </div>
        </div>
        <div className={styles.globalOptionsMenu}>{globalOptions()}</div>
      </div>
    </div>
  );
}
