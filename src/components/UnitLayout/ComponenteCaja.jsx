import ComponenteEje from "./ComponenteEje.jsx"
import ComponenteUnidad from "./ComponenteUnidad.jsx"
import ComponenteLlanta from "./ComponenteLlanta.jsx"
import SpareTire from "./SpareTire.jsx"
import { UnitsTemplates } from "./ComponenteUnidad.jsx"

let ComponenteCaja = ({variant = "TwoAxles", tires}) => {

	return (
		<ComponenteUnidad templateName={"CAJA SECA"} frame="long">
			<SpareTire position={"-10%"} tireProps={tires.SPARE_TIRE}/>
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