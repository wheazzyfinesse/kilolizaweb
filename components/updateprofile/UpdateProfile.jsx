"use client";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { TbPasswordUser } from "react-icons/tb";
import styles from "./updateprofile.module.css";
import { useState } from "react";
import { CiEdit, CiUser } from "react-icons/ci";
import { FaRegAddressBook } from "react-icons/fa";
import { SlPhone } from "react-icons/sl";
import { PiCityLight, PiGlobeHemisphereEastLight } from "react-icons/pi";
import { PiGlobeHemisphereEastThin } from "react-icons/pi";

function UpdateProfile() {
	const [disabled, setDisabled] = useState(true);
	const updateprofile = () => setDisabled(!disabled);

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.section_title}>
					Acount details
					<CiEdit color="blue" onClick={() => updateprofile()} />
				</h1>
				<div className={styles.content}>
					<form className={styles.form}>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<CiUser className={styles.icon} size={25} color={"blue"} /> Name
							</span>
							<input
								disabled={disabled}
								type="text"
								name="email"
								className={styles.input}
							/>
						</div>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<MdOutlineEmail
									className={styles.icon}
									size={25}
									color={"blue"}
								/>
								Email
							</span>
							<input
								disabled
								type="email"
								name="email"
								className={styles.input}
							/>
						</div>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<SlPhone className={styles.icon} size={25} color={"blue"} />{" "}
								Phone
							</span>
							<input
								disabled
								type="email"
								name="email"
								className={styles.input}
							/>
						</div>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<FaRegAddressBook
									className={styles.icon}
									size={25}
									color={"blue"}
								/>
								Address
							</span>
							<input
								disabled
								type="email"
								name="email"
								className={styles.input}
							/>
						</div>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<PiCityLight className={styles.icon} size={25} color={"blue"} />{" "}
								City
							</span>
							<input
								disabled
								type="email"
								name="email"
								className={styles.input}
							/>
						</div>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<PiCityLight className={styles.icon} size={25} color={"blue"} />{" "}
								State
							</span>
							<input
								disabled
								type="email"
								name="email"
								className={styles.input}
							/>
						</div>
						<div className={styles.formGroup}>
							<span className={styles.label}>
								<PiGlobeHemisphereEastLight
									className={styles.icon}
									size={25}
									color={"blue"}
								/>{" "}
								Country
							</span>
							<input
								disabled
								type="email"
								name="email"
								className={styles.input}
							/>
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
							<input
								disabled
								type="password"
								name="password"
								className={styles.input}
							/>
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
							<input
								disabled
								type="password"
								name="password"
								className={styles.input}
							/>
						</div>
						{!disabled && (
							<button className={styles.button} type="submit">
								update
							</button>
						)}
					</form>
				</div>
			</div>
		</>
	);
}

export default UpdateProfile;
