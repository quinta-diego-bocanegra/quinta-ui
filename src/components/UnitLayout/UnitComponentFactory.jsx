import ComponenteTracto from "./ComponenteTracto"
import ComponeneteCaja from "./ComponenteCaja"
import UnitType from "@/core/enums/UnitType"

class UnitComponentFactory {
	
	createUnit(unitData, selected, onSelected) {

		switch (unitData.unitType) {

			case UnitType.TRACTOR_TRUCK:
				return <ComponenteTracto unitData={unitData} selected={selected} onSelected={onSelected} />

			case UnitType.DRY_VAN:
				return <ComponeneteCaja unitData={unitData} selected={selected} onSelected={onSelected} />
				
		}

	}

}

export default UnitComponentFactory