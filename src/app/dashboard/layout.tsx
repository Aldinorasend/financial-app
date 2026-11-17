import { AppSideBar } from "@/components/layout/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="flex-1 p-4">
        <SidebarTrigger className="mb-4" />
        {children}
      </main>
    </SidebarProvider>
  );
}
