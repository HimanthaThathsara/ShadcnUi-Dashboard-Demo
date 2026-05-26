import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {SidebarInset,SidebarProvider,SidebarTrigger,} from "@/components/ui/sidebar"
import {Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import DashBoard from "./Page/DashBoard"
import { CalendarDateRangePicker } from "@/components/date-range-picker"

import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
        <SidebarInset>

          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 ">
              <SidebarTrigger className="-ml-1" />

              <Separator orientation="vertical" className="mr-2 h-4" />

                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">{"Dashboard"}</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">{"Components"}</BreadcrumbLink>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>

            </div>
          </header>

          <main className="flex-1 px-4">
              <div className="hidden flex-col md:flex">
                <div className="flex-1 space-y-4 px-4 pb-4">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
                        <div className="flex items-center space-x-2">
                          <CalendarDateRangePicker />
                          <Button>Download</Button>
                        </div>
                    </div>
                      <Tabs defaultValue="overview" className="space-y-4">
                        <TabsList>
                          <TabsTrigger value="overview">Overview</TabsTrigger>
                          <TabsTrigger value="analytics" >
                            Analytics
                          </TabsTrigger>
                          <TabsTrigger value="reports" >
                            Reports
                          </TabsTrigger>
                          <TabsTrigger value="notifications" >
                            Notifications
                          </TabsTrigger>
                        </TabsList>
                      </Tabs>
                </div>
              </div>
            <DashBoard/>
          </main>
          
        </SidebarInset>
    </SidebarProvider>
  );
}

export default App;



