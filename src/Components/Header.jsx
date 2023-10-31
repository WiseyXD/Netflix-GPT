import Logo from "../assets/netflixLogo2.avif";
export default function Header() {
	return (
		<div className="navbar ">
			<div className="flex-1">
				<img src={Logo} alt="Logo" className="w-32" />
			</div>
			<div className="flex-none">
				<button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-red-600 text-white">
					Sign In
				</button>
			</div>
		</div>
	);
}
