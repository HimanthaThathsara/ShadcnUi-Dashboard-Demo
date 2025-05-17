import { Battery,Power,CalendarClock,DatabaseZap    } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';


const DashboardOverallWithoutChart = () => {
    return (
                <>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Power
                    </CardTitle>
                    <Power size={16}/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231.89 <span className='text-lg'>v</span></div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>

                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Runtimes
                    </CardTitle>
                    <CalendarClock size={16}/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231.89 <span className='text-lg'>h</span></div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>


                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Battery power
                    </CardTitle>
                    <Battery size={16}/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231.89 <span className='text-lg'>v</span></div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>


                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Generate power
                    </CardTitle>
                    <DatabaseZap size={16}/>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">45,231.89 <span className='text-lg'>v</span></div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                </>
    );
}

export default DashboardOverallWithoutChart;