import ComponenteUnidad from "./ComponenteUnidad"
import ComponenteEje from "./ComponenteEje"
import ComponenteLlanta from "./ComponenteLlanta"
import SpareTire from "./SpareTire"

export default function ComponenteTorton({tires}){
    return (
        <ComponenteUnidad templateName={"TORTON"} frame="long">
            <SpareTire position={"-4%"} tireProps={tires.SPARE_TIRE} />
            <svg viewBox="0 0 27.54 90" x={AxlePositions.STEERING_AXLE}>
                <ComponenteEje position={0}>
                    {tires.STEERING_AXLE.map(props => <ComponenteLlanta {...props}/>)}
                </ComponenteEje>
            </svg>
            <ComponenteEje position={AxlePositions.FIRST_DRIVE_AXLE} variant="Axle-Differential">
                {tires.FIRST_DRIVE_AXLE.map(props => <ComponenteLlanta {...props}/>)}
            </ComponenteEje>
            <ComponenteEje position={AxlePositions.SECOND_DRIVE_AXLE} variant="Axle-Differential">
                {tires.SECOND_DRIVE_AXLE.map(props => <ComponenteLlanta {...props}/>)}
            </ComponenteEje>
        </ComponenteUnidad>
    )
}

export const AxlePositions = {
    STEERING_AXLE: "-33.5%",
    FIRST_DRIVE_AXLE: "18.38%",
    SECOND_DRIVE_AXLE: "33.62%",
}
