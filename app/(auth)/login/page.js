import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import styles from "./page.module.css";

function LoginPage() {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.section_title}>Login</h1>
				<div className={styles.content}>
					<form className={styles.form}>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<MdOutlineEmail
									className={styles.icon}
									size={25}
									color={"blue"}
								/>
								Email
							</span>
							<input type="email" name="email" className={styles.input} />
						</div>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<TbPasswordUser
									className={styles.icon}
									size={25}
									color={"blue"}
								/>
								Password
							</span>
							<input type="password" name="password" className={styles.input} />
						</div>
						<button className={styles.button} type="submit">
							Login
						</button>
					</form>

					<div className={styles.links}>
						<span>Don't have an account? </span>
						<a href="/register">Register</a>
					</div>
					<div className={styles.links}>
						<span>Forgotten password? </span>
						<a href="/register">reset password here</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default LoginPage;
