import Image from "next/image";
import styles from "./page.module.css";
import logo from "../public/logo.png";
import banner from "../public/banner.png";

export default function HomePage() {
	return (
		<main className={styles.main}>
			<div className={styles.hero}>
				<div className={styles.container}>
					<h2 className={styles.heading}>Why cook with Devon King’s?</h2>
					<p className={styles.paragraph}>
						Whether it is quality, affordability or freshness for you, Devon
						King’s is the right Cooking Oil because it consistently delivers for
						your family’s everyday needs and offers unbeatable value with every
						pack size you purchase.
					</p>
				</div>
				<div className={styles.bannerContainer}>
					<Image className={styles.banner} src={banner} alt="banner" />
				</div>
			</div>
		</main>
	);
}
