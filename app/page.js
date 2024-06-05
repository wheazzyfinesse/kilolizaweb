import Image from "next/image";
import styles from "./page.module.css";
import logo from "../public/logo.png";
import banner from "../public/banner.png";

export default function HomePage() {
	return (
		<main className={styles.main}>
			<Image className={styles.image} src={logo} alt="King's oil logo" />
			<div className={styles.hero}>
				<div className={styles.container}>
					<h2 className={styles.heading}>Why cook with Devon King’s?</h2>
				</div>
				`
				<div className={styles.container}>
					<Image className={styles.banner} src={banner} alt="banner" />
				</div>
			</div>
		</main>
	);
}
