export default function ProjectCard(props: {
	github: string, title: string, text: string, link: string }) {
	return (
		<div className="border-2">
			<div className="card-body">
				<h3 className="text-3xl">{props.title}</h3>
				<p className="card-text">{props.text}</p>
				{props.link ?
					<a href={props.link} target={'_blank'} className={"group"}>
						<i className="fa-solid fa-arrow-up-right-from-square group-hover:text-red-700"></i>
					</a> : null}
				{props.github ?
					<a href={props.github} target={'_blank'} className={"group"}>
						<i className="fa-solid fa-arrow-up-right-from-square group-hover:text-red-700"></i>
					</a> : null}
			</div>
		</div>
	)
}