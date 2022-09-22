import "./Partners.css";
import wynwood from "./img/wynwood.png";
import bubbleTea from "./img/bubble-tea.png";
import bunkoStore from "./img/bunko-store.png";
import kStore from "./img/k-store.png";
import hobbies from "./img/hobbies.png";

function Partners() {
	return (
		<div className='wrapper'>
			<img src={wynwood} alt='wynwood park' />
			<img src={hobbies} alt='hobbies place' />
			<img src={bubbleTea} alt='bubble tea panda' />
			<img src={bunkoStore} alt='Bunko manga Store' />
			<img src={kStore} alt='Korean magic?' />
		</div>
	);
}

export default Partners;
