import Tracto from "./Tracto"
import Caja from "./Caja"
import Torton from "./Torton"

export default function ComponenteUnidad ({ frame = "default", templateName, children }) {

	return (
		<>
			<svg viewBox={frame === "long" ? "0 0 21 9" : "0 0 16 9"} version="1.1">
				{
					UnitsTemplates[templateName]
				}
				<g id="layer1">
					{children}
				</g>
			</svg>
		</>
	)
}

export const UnitsTemplates = {
	"TRACTOCAMION": <Tracto/>,
	"CAJA SECA": <Caja/>,
	"TORTON": <Torton/>,
}

