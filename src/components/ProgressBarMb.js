import { useState, useEffect } from "react";

const Progress = ({done}) => {
	const [style, setStyle] = useState({});
	let health = done;
    let color;
    //let pokemonRotate;
    //health <= 0 ? pokemonRotate = 180 : pokemonRotate = 0;
    health > 50 ? color = "#39FF14" : health > 20 ? color = "#FF4500": color = "red";
    useEffect(() => {
		const newStyle = {
			opacity: 1,
			width: `${health}%`,
            background: `${color}`,
            //rotate: `${pokemonRotate}deg`,
		}
		
		setStyle(newStyle);
	}, [health, color]);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				
			</div>
		</div>
	)
}

export default Progress;