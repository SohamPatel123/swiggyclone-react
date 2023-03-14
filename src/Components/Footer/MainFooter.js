import { memo } from "react";
import styles from "./MainFooter.module.css";

function MainFooter() {
  return (
    <div className={styles.mainFooterTemplate}>
      <div className={styles.footerWrapper}>
        <div className={styles.companySupports}>
          <ul>
            <li>Company</li>
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Swiggy Blog</li>
            <li>Bug Bounty</li>
            <li>Swiggy One</li>
            <li>Swiggy Corporate</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>Email: swiggyclonesupport@swiggy.com</li>
            <li>Instagram: _swiggy_clone_</li>
            <li>Helpline no: (+91)9876543210</li>
          </ul>
          <ul>
            <li>Details</li>
            <li>This is a task.</li>
            <li>Cloned from www.swiggy.com</li>
          </ul>
          <ul>
            <li>Social media handles</li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2880px-Google_Play_Store_badge_EN.svg.png?20220907104002"
              alt="download options image"
              className={styles.downloadOptions}
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="image for app store"
              className="{styles.downloadOptions}"
            />
          </ul>
        </div>
        <ul className={styles.availableLocations}>
          {/* {locationsTemplate()} */}
        </ul>
      </div>
    </div>
  );
}

export default memo(MainFooter);
