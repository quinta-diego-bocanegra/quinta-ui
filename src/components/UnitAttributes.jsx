import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faImage } from "@fortawesome/free-solid-svg-icons"
import InternationalIcon from "@/assets/International"
import SimpleInput from "@/components/customs/SimpleInput"
import SimpleSelect from "@/components/customs/SimpleSelect"
import { useGetUnitTypeList } from "@/pages/TM/hooks/unit"
import { useGetBranchList } from "@/pages/TM/hooks/branch"
import KenworthIcon from "@/assets/Kenworth"
import FreightlinerIcon from "@/assets/Freightliner"
import ScaniaIcon from "@/assets/Scania"
import VolkswagenIcon from "@/assets/Volkswagen"

export default function UnitAttributes({unit, isReadMode, form, AttributeBuilder}) {

    return (
        <div className="px-3 pt-3 pb-1 rounded-xl border-2 border-gray-100 flex flex-col">
            <BrandModel brand={unit.designation.brand} model={unit.designation.model} getIcon={getBrandIcon} isReadMode={isReadMode} form={form}/>
            <div className="basis-full grow-0 overflow-auto flex flex-col divide-y">
                {
                    Object.keys(unit.attributes).map(key => {
                        const attributeCardData = AttributeBuilder(key, unit.attributes[key])

                        return <AttributeCard data={attributeCardData} isReadMode={isReadMode} form={form}/>
                    })
                }
            </div>
        </div>
    )
}

function BrandModel ({brand, model, getIcon, isReadMode, form}) {
    return (
        <div className={" shrink-0 grow-0 px-4 justify-center bg-gray-100 rounded-xl flex " + (isReadMode ? "basis-16" : "basis-20")}>

            <div className="basis-16 grow-0 flex items-center">
                <div className="bg-white min-h-12 basis-12 grow-0 rounded-full shadow-md flex items-center justify-around" >
                    {getIcon(brand)}
                </div>
            </div>
            <div className="flex-auto flex flex-row items-center gap-4">
                <div className="flex-auto flex flex-col">
                    <p className={"text-xs font-uncut text-gray-400 leading-none mb-2"}>Marca</p>
                    {
                        isReadMode ? (
                            <p className="text-gray-600 leading-none ">
                                {brand}
                            </p>
                        ) : (
                            <SimpleInput form={form} placeholder={"Agrega un valor al campo"} name={"marca"}/>
                        )
                    }
                </div>
                <div className="flex-auto flex flex-col">
                    <p className={"text-xs font-uncut text-gray-400 leading-none mb-2 " + (isReadMode ? "text-right" : "text-left")}>Modelo</p>
                    {
                        isReadMode ? (
                            <p className="text-gray-600 leading-none text-right ">
                                {model}
                            </p>
                        ) : (
                            <SimpleInput form={form} placeholder={"Agrega un valor al campo"} name={"modelo"}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

function AttributeCard({data, isReadMode, form}) {

    return (
        <div className={"basis-16 px-4 grow-0 shrink-0 flex flex-row "}>
            <div className="basis-16 shrink-0 grow-0 flex items-center justify-start">
                <div className="min-h-12 basis-12 grow-0 bg-slate-200 rounded-full flex flex-row items-center justify-center">
                    <FontAwesomeIcon icon={data.icon} size="lg"/>
                </div>
            </div>
            <div className="flex-auto flex flex-row justify-between items-center">
                <p className="font-uncut text-xs text-gray-400 leading-none">{data.title}</p>
                {
                    isReadMode ? (
                        <p className="text-gray-600 leading-none text-right ">
                            {data.value}
                        </p>
                    ) : (
                        (data.input.type == "text" || data.input.disabled) ? (
                            <SimpleInput form={form} disabled={data.input.disabled} placeholder={"Agrega un valor al campo"} name={data.name} rules={data.input.rules}/>
                        ) : (
                            <AttributeSelect attributeData={data} form={form}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

function AttributeSelect({attributeData, form}){
    const {getUnitTypeList} = useGetUnitTypeList()
    const {getBranchList} = useGetBranchList()
    const { isPending, isError, data} = getOptionsSource(attributeData.name)

    function getOptionsSource(AttributeName) {
        switch(AttributeName){
            case 'tipounidad':
                return getUnitTypeList(unitTypesSelectAdapter);
            case 'sucursal':
                return getBranchList(branchesSelectAdapter);
            default: 
                return {isPending: false, isError: false, data: []} 
        }
    }

    return (
        <SimpleSelect
            form={form}
            placeholder={
                isPending ? (
                    "Cargando..."
                ) : (
                    isError ? "Ocurrio un error" : "Selecciona una opcion"
                )
            } 
            name={ (!isPending && !isError) ? attributeData.name : 'random'} 
            options={ (!isPending && !isError) ? data : []}
            rules={attributeData.input.rules}/>
    )
}

function branchesSelectAdapter(rawBranchesList){

    const branchesList = rawBranchesList.map(
        (branch) => {

            const {
                nombre: label,
                sucursal: value,
            } = branch

            return {
                label,
                value,
            }
        }
    )

    return branchesList

}

function unitTypesSelectAdapter(rawUnitTypes){
    const unitTypes = rawUnitTypes.map(
        (unitType) => {
            const {
                clave: value
            } = unitType;

            return {
                value,
                label: value,
            }
        }
    )

    return unitTypes;
}

function getBrandIcon(brand) {
    switch(brand){
        case 'INTERNATIONAL':
            return (
                <InternationalIcon width={"80%"}/>
            )
        case 'SCANIA':
            return (
                <ScaniaIcon width={"80%"}/>
            )
        case 'VOLKSWAGEN':
            return (
                <VolkswagenIcon width={"80%"}/>
            )
        case 'FREIGHTLINER':
            return (
                <FreightlinerIcon width={"80%"}/>
            )
        case 'KENWORTH':
            return (
                <KenworthIcon width={"70%"}/>
            )
        default:
            return (
                <FontAwesomeIcon icon={faImage} size="lg"/>
            )
    }
}