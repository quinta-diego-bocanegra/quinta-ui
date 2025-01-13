import UnitComponentFactory from "./UnitComponentFactory";

function UnitLayout({UnitObject, selected, onSelected}) {
  
  let unitFactory = new UnitComponentFactory();
  
  const unit = unitFactory.createUnit(UnitObject, selected, onSelected);

    return (
      <>
        <div id="UnitLayout">{unit}</div>
      </>
    )
    
  }
  
  export default UnitLayout