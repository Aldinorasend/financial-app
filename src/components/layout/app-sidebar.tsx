"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { BanknoteIcon, CoinsIcon, LayoutDashboardIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const sideBarItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboardIcon />,
  },

  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: <BanknoteIcon />,
  },
];

export function AppSideBar() {
  const pathName = usePathname();

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="gap-2 flex-row items-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard">
                <CoinsIcon className="size-5! text-primary" />
                <h1 className="text-lg font-bold text-primary">
                  Financial App
                </h1>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="flex flex-col gap-2">
            {sideBarItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  asChild
                  tooltip={item.label}
                  className={cn(
                    "py-6 px-5 text-md",
                    pathName === item.href
                      ? "bg-primary text-primary-foreground font-semibold hover:bg-primary hover:text-primary-foreground"
                      : "text-primary",
                  )}
                >
                  <Link href={item.href}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
