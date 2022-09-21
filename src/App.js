import "./App.css";
import LinkButton from "./LinkButton";
import Partners from "./Partners";
import logo from "./img/logo.png";

function App() {
	// let LinksList;

	return (
		<div className='App'>
			<div className='main-wrapper'>
				<img src={logo} alt='Logo de harajuku tranding' className='logo' />
				<h1>
					Harajuku Tranding
					<span>Edicion Aniversario</span>
				</h1>
				<div className='links'>
					<LinkButton />
				</div>
				<Partners />
				<footer>
					<div className='date'>22 de Octubre del 2022</div>
					<div className='location'>Wynwood Park - NaguaNagua</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
