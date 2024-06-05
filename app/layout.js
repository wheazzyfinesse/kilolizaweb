import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Kilo Liza Mart | Oil shop",
	description: "Online vegetable oil shop in Nigeria, Ekpoma.",
	icons: {
		icon: "/favicon.ico",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<link rel="icon" href="/images/rahul.png" sizes="any" />
				<Navbar />
				{children}
			</body>
		</html>
	);
}
