export default function ContactForm() {
	return <form action={import.meta.env.FORMSPARK_URL} className={"grid grid-cols-2 text-xl lg:w-1/2"}>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" name="name" placeholder="Name" required />

			<label htmlFor="email">Email</label>
			<input type="email" id="email" name="email" placeholder="Email" required />
			<label htmlFor="message">Message</label>
			<textarea
				id="message"
				name="message"
				placeholder="Message"
				required
			></textarea>
		<button className={"inline-block w-fit border-2 rounded-md px-2 bg-secondary hover:text-background font-display text-xl uppercase"} type="submit">Send</button>
	</form>

}