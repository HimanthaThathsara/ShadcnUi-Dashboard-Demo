import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"
import {ChartContainer,ChartTooltip,ChartTooltipContent} from "@/components/ui/chart"


const chartData = [
  { date: "2024-04-01", Battery: 222, Generator: 150 },
  { date: "2024-04-02", Battery: 97, Generator: 180 },
  { date: "2024-04-03", Battery: 167, Generator: 120 },
  { date: "2024-04-04", Battery: 242, Generator: 260 },
  { date: "2024-04-05", Battery: 373, Generator: 290 },
  { date: "2024-04-06", Battery: 301, Generator: 340 },
  { date: "2024-04-07", Battery: 245, Generator: 180 },
  { date: "2024-04-08", Battery: 409, Generator: 320 },
  { date: "2024-04-09", Battery: 59, Generator: 110 },
  { date: "2024-04-10", Battery: 261, Generator: 190 },
  { date: "2024-04-11", Battery: 327, Generator: 350 },
  { date: "2024-04-12", Battery: 292, Generator: 210 },
  { date: "2024-04-13", Battery: 342, Generator: 380 },
  { date: "2024-04-14", Battery: 137, Generator: 220 },
  { date: "2024-04-15", Battery: 120, Generator: 170 },
  { date: "2024-04-16", Battery: 138, Generator: 190 },
  { date: "2024-04-17", Battery: 446, Generator: 360 },
  { date: "2024-04-18", Battery: 364, Generator: 410 },
  { date: "2024-04-19", Battery: 243, Generator: 180 },
  { date: "2024-04-20", Battery: 89, Generator: 150 },
  { date: "2024-04-21", Battery: 137, Generator: 200 },
  { date: "2024-04-22", Battery: 224, Generator: 170 },
  { date: "2024-04-23", Battery: 138, Generator: 230 },
  { date: "2024-04-24", Battery: 387, Generator: 290 },
  { date: "2024-04-25", Battery: 215, Generator: 250 },
  { date: "2024-04-26", Battery: 75, Generator: 130 },
  { date: "2024-04-27", Battery: 383, Generator: 420 },
  { date: "2024-04-28", Battery: 122, Generator: 180 },
  { date: "2024-04-29", Battery: 315, Generator: 240 },
  { date: "2024-04-30", Battery: 454, Generator: 380 },
  { date: "2024-05-01", Battery: 165, Generator: 220 },
  { date: "2024-05-02", Battery: 293, Generator: 310 },
  { date: "2024-05-03", Battery: 247, Generator: 190 },
  { date: "2024-05-04", Battery: 385, Generator: 420 },
  { date: "2024-05-05", Battery: 481, Generator: 390 },
  { date: "2024-05-06", Battery: 498, Generator: 520 },
  { date: "2024-05-07", Battery: 388, Generator: 300 },
  { date: "2024-05-08", Battery: 149, Generator: 210 },
  { date: "2024-05-09", Battery: 227, Generator: 180 },
  { date: "2024-05-10", Battery: 293, Generator: 330 },
  { date: "2024-05-11", Battery: 335, Generator: 270 },
  { date: "2024-05-12", Battery: 197, Generator: 240 },
  { date: "2024-05-13", Battery: 197, Generator: 160 },
  { date: "2024-05-14", Battery: 448, Generator: 490 },
  { date: "2024-05-15", Battery: 473, Generator: 380 },
  { date: "2024-05-16", Battery: 338, Generator: 400 },
  { date: "2024-05-17", Battery: 499, Generator: 420 },
  { date: "2024-05-18", Battery: 315, Generator: 350 },
  { date: "2024-05-19", Battery: 235, Generator: 180 },
  { date: "2024-05-20", Battery: 177, Generator: 230 },
  { date: "2024-05-21", Battery: 82, Generator: 140 },
  { date: "2024-05-22", Battery: 81, Generator: 120 },
  { date: "2024-05-23", Battery: 252, Generator: 290 },
  { date: "2024-05-24", Battery: 294, Generator: 220 },
  { date: "2024-05-25", Battery: 201, Generator: 250 },
  { date: "2024-05-26", Battery: 213, Generator: 170 },
  { date: "2024-05-27", Battery: 420, Generator: 460 },
  { date: "2024-05-28", Battery: 233, Generator: 190 },
  { date: "2024-05-29", Battery: 78, Generator: 130 },
  { date: "2024-05-30", Battery: 340, Generator: 280 },
  { date: "2024-05-31", Battery: 178, Generator: 230 },
  { date: "2024-06-01", Battery: 178, Generator: 200 },
  { date: "2024-06-02", Battery: 470, Generator: 410 },
  { date: "2024-06-03", Battery: 103, Generator: 160 },
  { date: "2024-06-04", Battery: 439, Generator: 380 },
  { date: "2024-06-05", Battery: 88, Generator: 140 },
  { date: "2024-06-06", Battery: 294, Generator: 250 },
  { date: "2024-06-07", Battery: 323, Generator: 370 },
  { date: "2024-06-08", Battery: 385, Generator: 320 },
  { date: "2024-06-09", Battery: 438, Generator: 480 },
  { date: "2024-06-10", Battery: 155, Generator: 200 },
  { date: "2024-06-11", Battery: 92, Generator: 150 },
  { date: "2024-06-12", Battery: 492, Generator: 420 },
  { date: "2024-06-13", Battery: 81, Generator: 130 },
  { date: "2024-06-14", Battery: 426, Generator: 380 },
  { date: "2024-06-15", Battery: 307, Generator: 350 },
  { date: "2024-06-16", Battery: 371, Generator: 310 },
  { date: "2024-06-17", Battery: 475, Generator: 520 },
  { date: "2024-06-18", Battery: 107, Generator: 170 },
  { date: "2024-06-19", Battery: 341, Generator: 290 },
  { date: "2024-06-20", Battery: 408, Generator: 450 },
  { date: "2024-06-21", Battery: 169, Generator: 210 },
  { date: "2024-06-22", Battery: 317, Generator: 270 },
  { date: "2024-06-23", Battery: 480, Generator: 530 },
  { date: "2024-06-24", Battery: 132, Generator: 180 },
  { date: "2024-06-25", Battery: 141, Generator: 190 },
  { date: "2024-06-26", Battery: 434, Generator: 380 },
  { date: "2024-06-27", Battery: 448, Generator: 490 },
  { date: "2024-06-28", Battery: 149, Generator: 200 },
  { date: "2024-06-29", Battery: 103, Generator: 160 },
  { date: "2024-06-30", Battery: 446, Generator: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  Battery: {
    label: "Battery",
    color: "hsl(var(--chart-1))",
  },
  Generator: {
    label: "Generator",
    color: "hsl(var(--chart-2))",
  },
};

function DashboradTotalVotSeparate() {
  const [activeChart, setActiveChart] = React.useState("Battery")

  const total = React.useMemo(
    () => ({
      Battery: chartData.reduce((acc, curr) => acc + curr.Battery, 0),
      Generator: chartData.reduce((acc, curr) => acc + curr.Generator, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Battery Usage</CardTitle>
          <CardDescription>
            Showing total Battery and Generator Usage for the last 30 Day
          </CardDescription>
        </div>
        <div className="flex">
          {["Battery", "Generator"].map((key) => {
            const chart = key
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
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
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default DashboradTotalVotSeparate;
