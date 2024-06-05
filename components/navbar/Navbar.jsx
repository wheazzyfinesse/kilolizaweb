"use client";
import styles from "./navbarstyle.module.css";
import Link from "next/link";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../public/logo.png";
import Image from "next/image";

const Navbar = () => {
	return (
		<header className={styles.header}>
			<Link href="/" className={styles.logo}>
				<Image className={styles.logo} src={logo} alt="King's oil logo" />
			</Link>
			<nav className={styles.navbar}>
				<ul>
					<Link className={styles.menuItem} href="/">
						<li className={styles.menuIcon}>Home</li>
					</Link>
					<Link className={styles.menuItem} href="/products">
						<li className={styles.menuIcon}>Shop</li>
					</Link>
					<Link className={styles.menuItem} href="/contact">
						<li className={styles.menuIcon}>Contact</li>
					</Link>
				</ul>
				<div className={styles.auth}>
					<Link className={styles.auth_link} href="/cart">
						<IoCartOutline size={25} className={styles.icon} />
						<span className={styles.cartQuantity}>0</span>
					</Link>

					<Link className={styles.auth_link} href="/wishlist">
						<CiHeart size={25} className={styles.icon} />
					</Link>
					<Link className={styles.auth_link} href="/login">
						<CiUser size={25} className={styles.icon} />
					</Link>
					<Link className={styles.auth_link} href="/login">
						<IoIosLogOut size={25} className={styles.icon} />
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
