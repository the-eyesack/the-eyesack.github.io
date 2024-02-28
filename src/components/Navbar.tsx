export default function Navbar() {
	return (
		<section className={"bg-[#595c5a]"}>
			<ul className={"font-display uppercase text-xl flex justify-around"}>
				<li><a href="/" className={"hover:text-background"}>Home</a></li>
				<li><a href="/projects" className={"hover:text-background"}>Projects</a></li>
				<li><a href="/contact" className={"hover:text-background"}>Contact Me</a></li>
			</ul>
		</section>
	)
}