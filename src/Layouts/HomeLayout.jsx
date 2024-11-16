import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
	return (
		<div className="font-poppins">
			{/* header section  */}
			<header>
				<Header></Header>
			</header>

			{/* latest news container  */}
			<section className="w-11/12 mx-auto">
				<LatestNews></LatestNews>
			</section>

			{/* Navbar section container  */}
			<nav className="w-11/12 mx-auto py-2">
				<Navbar></Navbar>
			</nav>

			{/* main section container here  */}
			<main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
				<aside className="col-span-3">
					<LeftNavbar></LeftNavbar>
				</aside>
				<section className="col-span-6 p-4">
					<Outlet></Outlet>
				</section>
				<aside className="col-span-3">
					<RightNav></RightNav>
				</aside>
			</main>
		</div>
	);
};

export default HomeLayout;