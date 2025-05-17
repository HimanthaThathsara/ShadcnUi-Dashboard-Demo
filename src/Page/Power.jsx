import PowerDistro from "./../components/Chart/Power/PowerDistro"; 
import PowerACandDC from "./../components/Chart/Power/PowerACandDC";   
import PowerMaxandMin from "./../components/Chart/Power/PowerMAXandMIN";
import PowerVoltagestatus from "./../components/Chart/Power/PowerVoltagestatus";
import PowerDistroPieChart from "./../components/Chart/Power/PowerDistroPieChart";
import PowerDistroSpiderChart from "./../components/Chart/Power/PowerDistroSpiderChart";
import PowerAmpoier from "./../components/Chart/Power/PowerAmpoier";



function PowerBoard() {
  return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-1">
            <PowerACandDC />
            <PowerAmpoier/>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-2">
              {/* <PowerDistro /> */}
              <PowerDistroPieChart />
              <PowerDistroSpiderChart />
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-1">
            <PowerVoltagestatus />
            <PowerMaxandMin />
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-1">
          <PowerDistro />
          </div>



        </div>
  );
}

export default PowerBoard;
