import { TbInvoice } from "react-icons/tb";
import styles from "./page.module.css";
import Link from "next/link";
import { CiHeart, CiUser } from "react-icons/ci";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import UpdateProfile from "@/components/updateprofile/UpdateProfile";
import { PiUsersThreeLight } from "react-icons/pi";
function ProfilePage() {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<UpdateProfile />
			</div>
			<div className={styles.menu}>
				<nav>
					<ul className={styles.navbar}>
						<Link className={styles.auth_link} href="/cart">
							<CiUser size={25} className={styles.icon} />
							<li className={styles.menuItem}>Account</li>
						</Link>
						<Link className={styles.auth_link} href="/cart">
							<CiHeart size={25} className={styles.icon} />

							<li className={styles.menuItem}>Wishlist</li>
						</Link>
						<Link className={styles.auth_link} href="/cart">
							<LiaFileInvoiceDollarSolid size={25} className={styles.icon} />
							<li className={styles.menuItem}>Orders</li>
						</Link>
						{/* Admin */}
						<Link className={styles.auth_link} href="/cart">
							<VscGitPullRequestCreate size={25} className={styles.icon} />
							<li className={styles.menuItem}>Create Product</li>
						</Link>
						<Link className={styles.auth_link} href="/cart">
							<TbInvoice size={25} className={styles.icon} />
							<li className={styles.menuItem}>Manage Orders </li>
						</Link>
						<Link className={styles.auth_link} href="/cart">
							<AiOutlineProduct size={25} className={styles.icon} />
							<li className={styles.menuItem}>Manage Products </li>
						</Link>
						<Link className={styles.auth_link} href="/cart">
							<PiUsersThreeLight size={25} className={styles.icon} />
							<li className={styles.menuItem}>Manage Users </li>
						</Link>
					</ul>
				</nav>

				<div className={styles.footer}>
					<Link className={styles.auth_link} href="/cart">
						<CiLogout size={25} className={styles.icon} />
						<li className={styles.menuIcon}>Logout</li>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ProfilePage;
