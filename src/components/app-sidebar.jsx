import {
  DatabaseZap,
  Power,
  Settings,
  CircleUser,
  Battery,
  LayoutDashboard,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {


  user: {
    name: "Himantha",
    email: "maxpaney288@gmail.com",
    avatar: "#",
  },


  navMain: [
    {
      name: "Dashboard",
      url: "../../Page/DashBoard",
      icon: LayoutDashboard ,
      isActive: true,
    },
    {
      name: "Power",
      url: "../../Page/Power",
      icon: Power
    },
    {
      name: "Battery",
      url: "../../Page/Battery",
      icon: Battery
    },
    {
      name: "Generator",
      url: "../../Page/Generator",
      icon: DatabaseZap
    },
  ],


  projects: [
    {
      name: "Settings",
      url: "/Settings",
      icon: Settings,
    },
    {
      name: "Account",
      url: "/Account",
      icon: CircleUser,
    },
  ],


}

export function AppSidebar({...props}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
