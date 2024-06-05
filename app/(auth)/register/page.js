import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import styles from "../login/page.module.css";

function RegisterPage() {
	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.section_title}>Register</h1>
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
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<TbPasswordUser
									className={styles.icon}
									size={25}
									color={"blue"}
								/>
								Confirm Password
							</span>
							<input type="password" name="password" className={styles.input} />
						</div>
						<button className={styles.button} type="submit">
							Register
						</button>
					</form>

					<div className={styles.links}>
						<span>Already have an account? </span>
						<a href="/login">Login</a>
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

export default RegisterPage;
