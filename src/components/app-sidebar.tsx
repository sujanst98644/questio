import * as React from "react";
import {
  ChevronRight,
  Home,
  FileText,
  Search,
  BookOpen,
  Star,
  Users,
  HelpCircle,
  Inbox,
  MessageSquareWarning,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { url } from "inspector";

const sidebarData = [
  {
    title: "Main Menu",
    items: [
      { title: "Home", url: "/", icon: Home },
      { title: "Solved Questions", url: "/solved", icon: FileText },
      { title: "Unsolved Questions", url: "/unsolved", icon: FileText },
      { title: "Show All", url: "/all", icon: Search },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Past Year Questions",
        url: "/past-questions",
        icon: BookOpen,
      },
      { title: "Notes", url: "/notes", icon: FileText },
    ],
  },
  {
    title: "Exclusive Offers",
    items: [
      { title: "1 Month Plan", url: "/offers/1month", icon: Star },
      { title: "1 Year Plan", url: "/offers/1year", icon: Star },
      { title: "Dashain Tika Offer", url: "/offers/dashain", icon: Star },
    ],
  },
  {
    title: "Top Solvers",
    items: [
      { title: "User001", url: "/users/001", icon: Users },
      { title: "User002", url: "/users/002", icon: Users },
      { title: "User003", url: "/users/003", icon: Users },
    ],
  },
  {
    title: "Support & Help",
    items: [
      { title: "FAQ", url: "/help/faq", icon: HelpCircle },
      { title: "Contact Us", url: "/help/contact", icon: Inbox },
      {
        title: "Report a Problem",
        url: "/help/report",
        icon: MessageSquareWarning,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar
      className=" bg-sidebar-bg text-sidebar-text z-20 pt-[55px]"
      side="left"
      collapsible="icon"
    >
      <SidebarContent
        className="gap-0 overflow-scroll "
        style={{ scrollbarWidth: "thin" }}
      >
        {sidebarData.map((section) => (
          <Collapsible
            key={section.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label hover:bg-sidebar-accent px-3 py-1.5 text-sm font-medium"
              >
                <CollapsibleTrigger className="flex items-center w-full text-left">
                  {section.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu className="">
                    {section.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
                            {item.icon && <item.icon className="mr-2" />}
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
