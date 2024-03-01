import styles from "./CountryItem.module.css";
import Flag from "../flag/Flag";

function CountryItem({ country }) {
    return (
        <li className={styles.countryItem}>
            <span>
                <Flag flag={country.emoji} />
            </span>
            <span>{country.country}</span>
        </li>
    );
}

export default CountryItem;
