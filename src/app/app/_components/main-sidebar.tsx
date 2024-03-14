"use client";
import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain
} from "@/components/dashboard/sidebar";
import { BookOpenText } from "@phosphor-icons/react/dist/ssr/BookOpenText";
import { Sliders } from "@phosphor-icons/react/dist/ssr/Sliders";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./user-dropdown";
import { Session } from "next-auth";

type MainSidebarProps = {
  user: Session["user"];
};

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };

  if (!user) return;

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <h1></h1>
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink active={isActive("/app")} href="/app">
              Tarefas
              <BookOpenText size={24} />
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              Configurações
              <Sliders size={24} />
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/" active={isActive("/ajuda")}>
              Ajuda
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}
