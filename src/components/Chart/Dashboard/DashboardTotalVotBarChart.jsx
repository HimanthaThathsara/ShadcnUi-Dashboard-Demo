import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"
import {ChartContainer,ChartTooltip,ChartTooltipContent} from "@/components/ui/chart"

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
  views: {
    label: "Page Views",
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

function DashboradTotalVotBarChart() {
  const [activeChart, setActiveChart] = React.useState("AC")

  const total = React.useMemo(
    () => ({
      AC: chartData.reduce((acc, curr) => acc + curr.AC, 0),
      DC: chartData.reduce((acc, curr) => acc + curr.DC, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Power Usage</CardTitle>
          <CardDescription>
            Showing total Power Usage for the last 30 Day
          </CardDescription>
        </div>
        <div className="flex">
          {["AC", "DC"].map((key) => {
            const chart = key
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
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
          <BarChart
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
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default DashboradTotalVotBarChart;