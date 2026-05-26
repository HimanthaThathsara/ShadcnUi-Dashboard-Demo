import { Battery,Power,CalendarClock,DatabaseZap    } from 'lucide-react';
import {ChartContainer} from '@/components/ui/chart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, CartesianGrid, Line } from 'recharts';

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};



const DashboardOverall = () => {
    return (
      <>
            <Card className="col-span-1 p-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 pb-0">
                <CardTitle className="text-sm font-medium">Total Power</CardTitle>
                <Power size={18} />
              </CardHeader>
              <CardContent className="p-2">
                <div className="text-2xl font-bold">15,231 <span className='text-lg'>v</span></div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                <div className="h-[80px] w-[100%]">
                  <ResponsiveContainer width="100%" height="100%">  
                    <ChartContainer config={chartConfig}>
                      <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                          top: 24,
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} horizontal={false} />

                        <Line
                          dataKey="desktop"
                          type="natural"
                          stroke="var(--color-desktop)"
                          strokeWidth={2}
                          dot={{
                            fill: "var(--color-desktop)",
                          }}
                          activeDot={{
                            r: 6,
                          }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card> 

            <Card className="col-span-1 p-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 pb-0">
                <CardTitle className="text-sm font-medium">Total Runtime</CardTitle>
                <CalendarClock  size={18} />
              </CardHeader>
              <CardContent className="p-2">
                <div className="text-2xl font-bold">100 <span className='text-lg'>h</span></div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                <div className="h-[80px] w-[100%]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ChartContainer config={chartConfig}>
                      <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                          top: 24,
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} horizontal={false} />

                        <Line
                          dataKey="desktop"
                          type="natural"
                          stroke="var(--color-desktop)"
                          strokeWidth={2}
                          dot={{
                            fill: "var(--color-desktop)",
                          }}
                          activeDot={{
                            r: 6,
                          }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 p-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 pb-0">
                <CardTitle className="text-sm font-medium">Total Battery Power</CardTitle>
                <Battery  size={18} />
              </CardHeader>
              <CardContent className="p-2">
                <div className="text-2xl font-bold">15,231.89 <span className='text-lg'>v</span></div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
                <div className="h-[80px] w-[100%]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ChartContainer config={chartConfig}>
                      <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                          top: 24,
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} horizontal={false} />

                        <Line
                          dataKey="desktop"
                          type="natural"
                          stroke="var(--color-desktop)"
                          strokeWidth={2}
                          dot={{
                            fill: "var(--color-desktop)",
                          }}
                          activeDot={{
                            r: 6,
                          }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 p-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 pb-0">
                <CardTitle className="text-sm font-medium">Total Generator Power</CardTitle>
                <DatabaseZap size={18} />
              </CardHeader>
              <CardContent className="p-2">
                <div className="text-2xl font-bold">1,231 <span className='text-lg'>v</span></div>
                <p className="text-xs text-muted-foreground">-20.1% from last month</p>
                <div className="h-[80px] w-[100%]">
                  <ResponsiveContainer width="100%" height="100%">
                    <ChartContainer config={chartConfig}>
                      <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                          top: 24,
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} horizontal={false} />

                        <Line
                          dataKey="desktop"
                          type="natural"
                          stroke="var(--color-desktop)"
                          strokeWidth={2}
                          dot={{
                            fill: "var(--color-desktop)",
                          }}
                          activeDot={{
                            r: 6,
                          }}
                        />
                      </LineChart>
                    </ChartContainer>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

          </>
    );
}   

export default DashboardOverall;