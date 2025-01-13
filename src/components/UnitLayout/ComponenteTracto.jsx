import ComponenteUnidad from "./ComponenteUnidad"
import { UnitsTemplates } from "./ComponenteUnidad"
import ComponenteEje from "./ComponenteEje"
import ComponenteLlanta from "./ComponenteLlanta"

export default function ComponenteTracto({tires, variant = "ThreeAxles"}){
    return (
        <ComponenteUnidad templateName={"TRACTOCAMION"}>
            <svg viewBox="0 0 30.6 90">
                <svg viewBox="0 0 30.6 30.6">
                    <g transform="rotate(270) translate(-30.6,5.268)" >
                        <ComponenteLlanta {...tires.SPARE_TIRE} />
                    </g>
                </svg> 
            </svg>
            <ComponenteEje position={AxlePositions.STEERING_AXLE}>
                {tires.STEERING_AXLE.map(props => <ComponenteLlanta {...props}/>)}
            </ComponenteEje>
            {
                variant != "TwoAxles" ? (
                    <>
                        <ComponenteEje position={AxlePositions.FIRST_DRIVE_AXLE} variant="Axle-Differential">
                            {tires.FIRST_DRIVE_AXLE.map(props => <ComponenteLlanta {...props}/>)}
                        </ComponenteEje>
                        <ComponenteEje position={AxlePositions.SECOND_DRIVE_AXLE} variant="Axle-Differential">
                            {tires.SECOND_DRIVE_AXLE.map(props => <ComponenteLlanta {...props}/>)}
                        </ComponenteEje>
                    </>
                    
                ) : (
                    <ComponenteEje position={AxlePositions.DRIVE_AXLE} variant="Axle-Differential">
                        {tires.DRIVE_AXLE.map(props => <ComponenteLlanta {...props}/>)}
                    </ComponenteEje> 
                )
            }
        </ComponenteUnidad>
    )
}

export const AxlePositions = {
    STEERING_AXLE: "-30%",
    FIRST_DRIVE_AXLE: "18%",
    SECOND_DRIVE_AXLE: "38%",
    DRIVE_AXLE: "38%",
}