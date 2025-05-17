import BatteryCircle from "../components/Chart/Battery/BatteryCircle"
import BatteryTemperature from "../components/Chart/Battery/BatteryTemperature"



function Battery() {
  return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-2">
            < BatteryCircle/>
            < BatteryTemperature/>            
          </div>

          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-2">
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-2">            
          </div>

        </div>
  );
}

export default Battery;
