"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

const NAV = [
  { href: "/homepage", label: "Homepage Builder" },
  { href: "/programs", label: "Programs" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    api.me().catch(() => router.replace("/login"));
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onLogout() {
    await api.logout();
    router.replace("/login");
  }

  if (!ready) return null;

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-sidebar__brand">Landmark Admin</div>
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={pathname?.startsWith(item.href) ? { background: "rgba(255,255,255,0.12)" } : undefined}
          >
            {item.label}
          </Link>
        ))}
        <button onClick={onLogout}>Log out</button>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
