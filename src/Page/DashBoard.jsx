import DashboardAllPower  from "../components/Chart/Dashboard/DashboardAllPower"
import DashboardBattery  from "../components/Chart/Dashboard/DashboardBattery"
import DashboardFule from "../components/Chart/Dashboard/DashboardFule"
import DashboardOverall from "../components/Chart/Dashboard/DashboradOverall"
// import DashboardOverallWithoutChart  from "../components/Chart/Dashboard/DashboardOverallWithoutChart"
import DashboradTotalVot  from "../components/Chart/Dashboard/DashboradTotalVot"
import DashboradTotalVotBarChart  from "../components/Chart/Dashboard/DashboardTotalVotBarChart"
import DashboradTotalVotSeparate  from "../components/Chart/Dashboard/DashboardTotalVotSeparate"
import DashboardPowerTime from "../components/Chart/Dashboard/DashboardPowerTime"




function DashBoard() {
  return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* DashboardOverall OR DashboardOverallWithoutChart */}
            < DashboardOverall/>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* DashboardOverall OR DashboardOverallWithoutChart */}
            {/* < DashboardOverallWithoutChart/> */}
          </div>



          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-1">
            {/* DashboradTotalVot OR DashboradTotalVotBarChart OR DashboradTotalVotSeparate */}
            <DashboradTotalVot/>
            <DashboradTotalVotBarChart/>
            <DashboradTotalVotSeparate/>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-2">
            {/* DashboardFule AND DashboardBattery */}
            <DashboardFule/>
            <DashboardBattery/>
          </div>

          <div className="grid auto-rows-min gap-4 md:grid-cols-1 lg:grid-cols-2">
            {/* DashboardPowerTime AND DashboardAllPower */}
            <DashboardPowerTime/>
            <DashboardAllPower/>
          </div>

        </div>
  );
}

export default DashBoard;
