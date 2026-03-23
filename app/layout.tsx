import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Wieni's Cocktails",
	description: "Our most popular cocktails in Wieni",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-pampas`}>
				<Navbar />
				<div className="container mx-auto p-6">{children}</div>
			</body>
		</html>
	);
}
