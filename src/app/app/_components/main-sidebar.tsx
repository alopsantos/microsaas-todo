"use client";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderTitle,
  SidebarMain,
  SidebarNav,
  SidebarNavHeader,
  SidebarNavHeaderTitle,
  SidebarNavLink,
  SidebarNavMain
} from "@/components/dashboard/sidebar";
import { BookOpenText } from "@phosphor-icons/react/dist/ssr/BookOpenText";
import { Sliders } from "@phosphor-icons/react/dist/ssr/Sliders";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./user-dropdown";
export function MainSidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <Sidebar>
      <SidebarHeader>
        <h1></h1>
      </SidebarHeader>
      <SidebarMain className="flex flex-col flex-grow">
        <SidebarNav>
          <SidebarNavMain>
            <SidebarNavLink active={isActive("/app")} href="/app">
              Tarefas
              <BookOpenText size={24} />
            </SidebarNavLink>
            <SidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              Configurações
              <Sliders size={24} />
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>

        <SidebarNav className="mt-auto">
          <SidebarNavHeader>
            <SidebarNavHeaderTitle>Extras</SidebarNavHeaderTitle>
          </SidebarNavHeader>
          <SidebarNavMain>
            <SidebarNavLink href="/" active={isActive("/ajuda")}>
              Ajuda
            </SidebarNavLink>
          </SidebarNavMain>
        </SidebarNav>
      </SidebarMain>
      <SidebarFooter>
        <UserDropdown />
      </SidebarFooter>
    </Sidebar>
  );
}
