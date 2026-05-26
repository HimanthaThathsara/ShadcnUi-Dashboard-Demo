import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {Card,CardContent,CardDescription,CardHeader,CardTitle,} from "@/components/ui/card"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import {ChartContainer,ChartLegend,ChartLegendContent,ChartTooltip,ChartTooltipContent,} from "@/components/ui/chart"


const chartData = [
  { date: "2024-04-01", AC: 222, DC: 150 },
  { date: "2024-04-02", AC: 97, DC: 180 },
  { date: "2024-04-03", AC: 167, DC: 120 },
  { date: "2024-04-04", AC: 242, DC: 260 },
  { date: "2024-04-05", AC: 373, DC: 290 },
  { date: "2024-04-06", AC: 301, DC: 340 },
  { date: "2024-04-07", AC: 245, DC: 180 },
  { date: "2024-04-08", AC: 409, DC: 320 },
  { date: "2024-04-09", AC: 59, DC: 110 },
  { date: "2024-04-10", AC: 261, DC: 190 },
  { date: "2024-04-11", AC: 327, DC: 350 },
  { date: "2024-04-12", AC: 292, DC: 210 },
  { date: "2024-04-13", AC: 342, DC: 380 },
  { date: "2024-04-14", AC: 137, DC: 220 },
  { date: "2024-04-15", AC: 120, DC: 170 },
  { date: "2024-04-16", AC: 138, DC: 190 },
  { date: "2024-04-17", AC: 446, DC: 360 },
  { date: "2024-04-18", AC: 364, DC: 410 },
  { date: "2024-04-19", AC: 243, DC: 180 },
  { date: "2024-04-20", AC: 89, DC: 150 },
  { date: "2024-04-21", AC: 137, DC: 200 },
  { date: "2024-04-22", AC: 224, DC: 170 },
  { date: "2024-04-23", AC: 138, DC: 230 },
  { date: "2024-04-24", AC: 387, DC: 290 },
  { date: "2024-04-25", AC: 215, DC: 250 },
  { date: "2024-04-26", AC: 75, DC: 130 },
  { date: "2024-04-27", AC: 383, DC: 420 },
  { date: "2024-04-28", AC: 122, DC: 180 },
  { date: "2024-04-29", AC: 315, DC: 240 },
  { date: "2024-04-30", AC: 454, DC: 380 },
  { date: "2024-05-01", AC: 165, DC: 220 },
  { date: "2024-05-02", AC: 293, DC: 310 },
  { date: "2024-05-03", AC: 247, DC: 190 },
  { date: "2024-05-04", AC: 385, DC: 420 },
  { date: "2024-05-05", AC: 481, DC: 390 },
  { date: "2024-05-06", AC: 498, DC: 520 },
  { date: "2024-05-07", AC: 388, DC: 300 },
  { date: "2024-05-08", AC: 149, DC: 210 },
  { date: "2024-05-09", AC: 227, DC: 180 },
  { date: "2024-05-10", AC: 293, DC: 330 },
  { date: "2024-05-11", AC: 335, DC: 270 },
  { date: "2024-05-12", AC: 197, DC: 240 },
  { date: "2024-05-13", AC: 197, DC: 160 },
  { date: "2024-05-14", AC: 448, DC: 490 },
  { date: "2024-05-15", AC: 473, DC: 380 },
  { date: "2024-05-16", AC: 338, DC: 400 },
  { date: "2024-05-17", AC: 499, DC: 420 },
  { date: "2024-05-18", AC: 315, DC: 350 },
  { date: "2024-05-19", AC: 235, DC: 180 },
  { date: "2024-05-20", AC: 177, DC: 230 },
  { date: "2024-05-21", AC: 82, DC: 140 },
  { date: "2024-05-22", AC: 81, DC: 120 },
  { date: "2024-05-23", AC: 252, DC: 290 },
  { date: "2024-05-24", AC: 294, DC: 220 },
  { date: "2024-05-25", AC: 201, DC: 250 },
  { date: "2024-05-26", AC: 213, DC: 170 },
  { date: "2024-05-27", AC: 420, DC: 460 },
  { date: "2024-05-28", AC: 233, DC: 190 },
  { date: "2024-05-29", AC: 78, DC: 130 },
  { date: "2024-05-30", AC: 340, DC: 280 },
  { date: "2024-05-31", AC: 178, DC: 230 },
  { date: "2024-06-01", AC: 178, DC: 200 },
  { date: "2024-06-02", AC: 470, DC: 410 },
  { date: "2024-06-03", AC: 103, DC: 160 },
  { date: "2024-06-04", AC: 439, DC: 380 },
  { date: "2024-06-05", AC: 88, DC: 140 },
  { date: "2024-06-06", AC: 294, DC: 250 },
  { date: "2024-06-07", AC: 323, DC: 370 },
  { date: "2024-06-08", AC: 385, DC: 320 },
  { date: "2024-06-09", AC: 438, DC: 480 },
  { date: "2024-06-10", AC: 155, DC: 200 },
  { date: "2024-06-11", AC: 92, DC: 150 },
  { date: "2024-06-12", AC: 492, DC: 420 },
  { date: "2024-06-13", AC: 81, DC: 130 },
  { date: "2024-06-14", AC: 426, DC: 380 },
  { date: "2024-06-15", AC: 307, DC: 350 },
  { date: "2024-06-16", AC: 371, DC: 310 },
  { date: "2024-06-17", AC: 475, DC: 520 },
  { date: "2024-06-18", AC: 107, DC: 170 },
  { date: "2024-06-19", AC: 341, DC: 290 },
  { date: "2024-06-20", AC: 408, DC: 450 },
  { date: "2024-06-21", AC: 169, DC: 210 },
  { date: "2024-06-22", AC: 317, DC: 270 },
  { date: "2024-06-23", AC: 480, DC: 530 },
  { date: "2024-06-24", AC: 132, DC: 180 },
  { date: "2024-06-25", AC: 141, DC: 190 },
  { date: "2024-06-26", AC: 434, DC: 380 },
  { date: "2024-06-27", AC: 448, DC: 490 },
  { date: "2024-06-28", AC: 149, DC: 200 },
  { date: "2024-06-29", AC: 103, DC: 160 },
  { date: "2024-06-30", AC: 446, DC: 400 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  AC: {
    label: "AC",
    color: "hsl(var(--chart-1))",
  },
  DC: {
    label: "DC",
    color: "hsl(var(--chart-2))",
  },
};

function DashboradTotalVot() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card>
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Power Usage</CardTitle>
          <CardDescription>
            Showing total Power Usage for the last 30 Day
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-AC)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-AC)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-DC)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-DC)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="DC"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-DC)"
              stackId="a"
            />
            <Area
              dataKey="AC"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-AC)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


export default DashboradTotalVot;