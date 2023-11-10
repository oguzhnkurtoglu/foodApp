import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HeadlineCards from "./components/HeadlineCards"
import Food from "./components/Food"
import Category from "./components/Category"
import { useState } from "react"

function App() {
	const [input, setInput] = useState("")

	return (
		<>
			<Navbar setInput={setInput} />
			<Hero />
			<HeadlineCards />
			<Food input={input} />
			<Category />
		</>
	)
}

export default App
