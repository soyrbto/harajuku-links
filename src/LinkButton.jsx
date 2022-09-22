import "./LinkButton.css";
import star from "./img/stars.png";

const LinkButton = (props) => {
	let links = props.linksList.map((info) => (
		// aqui va un wrapper para poder definir cual es el ultimo boton
		<div className='wrapper'>
			<button key={info.toString()}>
				<img src={star} alt='star icon' />
				<a href={info.link}>{info.text}</a>
			</button>
		</div>
	));
	return links;
};

export default LinkButton;
