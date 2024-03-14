import { cn } from "@/lib/utils";
import Link from "next/link";

export type DashboardSidebarGenericProps<T = unknown> = {
  children: React.ReactNode;
  className?: String;
} & T;

export function DashboardSidebar({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <aside className={cn(["border-r border-border flex flex-col", className])}>
      {children}
    </aside>
  );
}

export function DashboardSidebarHeader({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}

export function DashboardSidebarHeaderTitle({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <h2 className={cn(["", className])}>{children}</h2>;
}
export function DashboardSidebarMain({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <main className={cn(["px-3", className])}>{children}</main>;
}
export function DashboardSidebarNav({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <nav className={cn(["", className])}>{children}</nav>;
}
export function DashboardSidebarNavHeader({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <header className={cn(["", className])}>{children}</header>;
}
export function DashboardSidebarNavHeaderTitle({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <h4
      className={cn([
        "text-xs uppercase text-muted-foreground ml-3",
        className
      ])}
    >
      {children}
    </h4>
  );
}

export function DashboardSidebarNavMain({
  className,
  children
}: DashboardSidebarGenericProps) {
  return <main className={cn(["flex flex-col", className])}>{children}</main>;
}

type DashboardSidebarNavLinkProps = {
  href: string;
  title?: string;
  active?: boolean;
};
export function DashboardSidebarNavLink({
  className,
  children,
  href,
  title,
  active
}: DashboardSidebarGenericProps<DashboardSidebarNavLinkProps>) {
  return (
    <Link
      href={href}
      title={title}
      className={cn([
        "text-xs px-3 py-2 rounded-md transition-all duration-300 flex gap-4 items-center justify-between",
        active && "bg-secondary",
        className
      ])}
    >
      {children}
    </Link>
  );
}

export function DashboardSidebarFooter({
  className,
  children
}: DashboardSidebarGenericProps) {
  return (
    <footer className={cn(["p-6 mt-auto border-t border-border", className])}>
      {children}
    </footer>
  );
}
