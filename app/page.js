import Image from "next/image";
import styles from "./page.module.css";
import logoSmall from "../public/icon.ico";
import plates from "../public/plates.png";
import banner from "../public/banner.png";
import { TbCircleArrowRight } from "react-icons/tb";
import Product from "@/components/product/Product";

export default function HomePage() {
	return (
		<>
			<header className={styles.header}>
				<h1 className={styles.title}>KILO LIZA MART</h1>
				<h2 className={styles.subTitle}>
					Shop for your quality and affordable Devon King&apos;s Vegetable Oil
				</h2>
				<p className={styles.details}>
					Devon King&apos;s cooking oil is a quality cooking oil that has been
					imported into Nigeria for over half a century and has over the years
					been a trusted brand for consumers. While staying true to its
					heritage, PZ Wilmar has added more value to Devon King’s oil as it is
					now locally produced in Nigeria.
				</p>
				<p className={styles.details}>
					We sell all Devon King&apos;s Vegetable Oil in wholesales and retails
					<br />
					Visit our shop page to view our stocks and start making your orders
				</p>
				<button className={styles.button} type="submit">
					SHOP NOW <TbCircleArrowRight className={styles.arrow} />
				</button>
			</header>
			<main className={styles.main}>
				<div className={styles.container}>
					<h2 className={styles.heading}>Why cook with Devon King’s?</h2>
					<p className={styles.paragraph}>
						Whether it is quality, affordability or freshness for you, Devon
						King’s is the right Cooking Oil because it consistently delivers for
						your family’s everyday needs and offers unbeatable value with every
						pack size you purchase.
					</p>
					<button className={styles.button} type="submit">
						Learn more <TbCircleArrowRight className={styles.arrow} />
					</button>
				</div>
				<Image className={styles.banner} src={plates} alt="banner" />
			</main>
			<Product />
			<main className={styles.main}>
				<Image className={styles.banner2} src={banner} alt="banner" />

				<div className={styles.container}>
					<h2 className={styles.heading}>
						<i>Devon King’s…King of Value</i>
					</h2>
					<ul>
						<li className={styles.benefits}>
							<Image className={""} src={logoSmall} alt="icon-oil-droplet" />{" "}
							<span className={""}>Great Prices</span>
						</li>

						<li className={styles.benefits}>
							<Image className={""} src={logoSmall} alt="icon-oil-droplet" />{" "}
							<span className={""}>Unbeatable Value</span>
						</li>
						<li className={styles.benefits}>
							<Image className={""} src={logoSmall} alt="icon-oil-droplet" />{" "}
							<span className={""}>Wide Range of Pack Sizes</span>
						</li>
						<li className={styles.benefits}>
							<Image className={""} src={logoSmall} alt="icon-oil-droplet" />{" "}
							<span className={""}>Freshness</span>
						</li>
						<li className={styles.benefits}>
							<Image className="mr-2" src={logoSmall} alt="icon-oil-droplet" />{" "}
							<span className="text-green-600 font-bold text-xl">
								Quality (Unadulterated) Oil
							</span>
						</li>
						<li className={styles.benefits}>
							<Image className="mr-2" src={logoSmall} alt="icon-oil-droplet" />{" "}
							<span className={""}>Tamper-evident</span>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}
