import ComponenteEje from "./ComponenteEje.jsx"
import ComponenteUnidad from "./ComponenteUnidad.jsx"
import ComponenteLlanta from "./ComponenteLlanta.jsx"
import { UnitsTemplates } from "./ComponenteUnidad.jsx"

let ComponenteCaja = ({variant = "TwoAxles", tires}) => {

	return (
		<ComponenteUnidad templateName={"CAJA SECA"} frame="long">
			<svg viewBox="0 0 30.6 90" x={"-10%"}>
                <svg viewBox="0 0 30.6 30.6">
                    <g transform="rotate(270) translate(-30.6,0)">
                        <ComponenteLlanta {...tires.SPARE_TIRE} />
                    </g>
                </svg> 
            </svg>
			{
				variant == "ThreeAxles" ? (
					<>
						<ComponenteEje position={AxlePositions.threeAxles.FirstAxle}>
							{tires.FirstAxle.map(props => <ComponenteLlanta {...props}/>)}
						</ComponenteEje>
						<ComponenteEje position={AxlePositions.threeAxles.SecondAxle}>
							{tires.SecondAxle.map(props => <ComponenteLlanta {...props}/>)}
						</ComponenteEje>
						<ComponenteEje position={AxlePositions.threeAxles.ThirdAxle}>
							{tires.ThirdAxle.map(props => <ComponenteLlanta {...props}/>)}
						</ComponenteEje>
					</>
				) : (
					<>
						<ComponenteEje position={AxlePositions.twoAxles.FirstAxle}>
							{tires.FirstAxle.map(props => <ComponenteLlanta {...props}/>)}
						</ComponenteEje>
						<ComponenteEje position={AxlePositions.twoAxles.SecondAxle}>
							{tires.SecondAxle.map(props => <ComponenteLlanta {...props}/>)}
						</ComponenteEje>
					</>
				)
			}
		</ComponenteUnidad>
	)
}
//15.24 -7.62

export const AxlePositions = {
	twoAxles: {
		FirstAxle: "16.38%",
		SecondAxle: "31.62%",
	},
	threeAxles: {
		FirstAxle: "8.76%",
		SecondAxle: "24%",
		ThirdAxle: "39.24%"
	}
}

export default ComponenteCaja