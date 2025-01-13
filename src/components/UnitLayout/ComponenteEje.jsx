import Eje from "./Eje"
import Eje_Diferencial from "./Eje-Diferencial"

var ComponenteEje = ({ position, children, variant = "Basic"}) => {

	function getAxleType(variant) {
		switch(variant){
			case "Basic": 
				return <Eje/>
			case "Axle-Differential":
				return <Eje_Diferencial/>
		}
	}

	return (
		<>
			<svg viewBox="0 0 3.06 9" version="1.1"  x={position}>

				{getAxleType(variant)}

				<g id="layer1">
					{children}
				</g>

			</svg>
		</>
	)
}

export const TirePositions = Object.freeze({
    IZQUIERDA_EXTERIOR: "44%",
    IZQUIERDA_INTERIOR: "28%",
    DERECHA_EXTERIOR: "-44%",
    DERECHA_INTERIOR: "-28%",
})

export default ComponenteEje