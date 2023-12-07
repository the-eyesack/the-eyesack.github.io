// TODO: IMPLEMENT SMALL SCREEN SUPPORT
export default function ProjectCard(props: {
	image: string;
	github: string, title: string, text: string, link: string }) {
	return (
		<div className="xl:flex justify-center">
		<div className="lg:w-fit md:block lg:flex justify-between group/img lg:mx-3 xl:mx-10 pb-20 xl:pb-24">
			{/*text*/}
			<div className={"cursor:mb-14"}>
				<a target={'_blank'} className="text-3xl font-display underline cursor:text-black" href={props.link}>{props.title}</a>

				{/*no cursor github*/}
				{props.github ?
					<a href={props.github} target={'_blank'} className={"group"}>
						<i className="fa-brands ml-2 text-3xl fa-github cursor:hidden group-hover:text-red-700"></i>
					</a> : null}

				<p className="card-text">{props.text}</p>

			</div>

			{/*image*/}
			<div className={"lg:space-x-10 xl:space-x-16 lg:space-y-0 flex justify-center flex-col cursor:flex-row"}>

				{/*links*/}
				<div className={"z-10 flex flex-row cursor:group-hover/img:opacity-100 space-x-12 transition-all opacity-0 absolute delay-75  lg:group-hover/img:translate-x-6 xl:group-hover/img:translate-x-12"}>
				{props.link ?
					<a href={props.link} target={'_blank'} className={"group"}>
						<i className="fa-solid fa-arrow-up-right-from-square
						text-6xl hidden cursor:inline-block  group-hover:text-red-700"></i>
					</a> : null}
				{props.github ?
					<a href={props.github} target={'_blank'} className={"group"}>
						<i className="fa-brands fa-github
						text-6xl hidden cursor:inline-block group-hover:text-red-700"></i>
					</a> : null}

				</div>

				<img src={props.image} alt={props.title} className={"-skew-y-6 mx-auto -skew-x-2 drop-shadow-xl transition-transform lg:group-hover/img:translate-x-6 cursor:group-hover/img:opacity-30 cursor:group-hover/img:scale-125 cursor:group-hover/img:skew-y-0 cursor:group-hover/img:skew-x-0 rounded-lg max-w-xs md:max-w-md xl:max-w-xl"}/>

			</div>
		</div>
		</div>
	)
}