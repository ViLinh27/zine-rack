import strawberryIcon from "../../assets/herobanner/strawberry/pexels-sydney-troxell-223521-718754.jpg";

import strawberry1 from "../../assets/herobanner/strawberry/pexels-anyaleto-3186961.jpg";
import strawberry2 from "../../assets/herobanner/strawberry/pexels-fotios-photos-4739934.jpg";
import strawberry3 from "../../assets/herobanner/strawberry/pexels-shotbyrain-6944172.jpg";
import styles from "./HeroBanner.css";
export const strawberryScene = {
    icon:{src: strawberryIcon, alt: "Strawberry Icon"},
    text: "Strawberry",
    images: [
        {src: strawberry1, alt: "Strawberry 1", className: styles.heroBannerImg},
        {src: strawberry2, alt: "Strawberry 2", className: styles.heroBannerImg},
        {src: strawberry3, alt: "Strawberry 3", className:styles.heroBannerImg},
    ],
};