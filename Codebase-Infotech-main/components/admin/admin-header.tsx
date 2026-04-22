"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import {
  LayoutDashboard, FileText, LogOut, Briefcase, Plus,
  ChevronRight, User, Menu, X, ArrowLeft, Clock
} from "lucide-react";

export interface AdminHeaderProps {
  /** Main page title shown in the header */
  title?: string;
  /** Small subtitle or breadcrumb context */
  subtitle?: string;
  /** If provided, shows a back arrow — call this function on click */
  onBack?: () => void;
  /** Primary action button config — e.g. "+ New Project" */
  actionButton?: {
    label: string;
    icon?: ReactNode;
    onClick: () => void;
  };
}

export default function AdminHeader({
  title = "Dashboard",
  subtitle,
  onBack,
  actionButton,
}: AdminHeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) +
        " • " +
        now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <>
      {/* ====== DARK PREMIUM HEADER matching sidebar ====== */}
      <header
        className={`fixed top-0 right-0 left-0 lg:left-64 z-40 transition-all duration-300 bg-[#020617] ${
          scrolled
            ? "shadow-lg shadow-black/20 border-b border-white/[0.06]"
            : "border-b border-white/[0.04]"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* ═══ Left Side ═══ */}
            <div className="flex items-center gap-3 min-w-0">
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </button>

              {/* Back button */}
              {onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-blue-300 hover:text-white transition-all duration-200 group"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </button>
              )}

              {/* Divider after back */}
              {onBack && (
                <div className="w-px h-5 bg-white/[0.08]" />
              )}

              {/* Title area */}
              <div className="min-w-0">
                <h1 className="text-sm sm:text-base font-bold text-white truncate">
                  {title}
                </h1>
              </div>
            </div>

            {/* ═══ Right Side ═══ */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Action button */}
              {actionButton && (
                <button
                  onClick={actionButton.onClick}
                  className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-xs font-bold shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {actionButton.icon || <Plus className="w-3.5 h-3.5" />}
                  {actionButton.label}
                </button>
              )}

              {/* Mobile action button */}
              {actionButton && (
                <button
                  onClick={actionButton.onClick}
                  className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/25"
                >
                  {actionButton.icon || <Plus className="w-4 h-4" />}
                </button>
              )}

              {/* Live time pill */}
              <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                <span className="text-[11px] font-medium text-blue-200/50 tracking-wide">{currentTime}</span>
              </div>

              {/* User + Logout */}
              <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-white/[0.06]">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md shadow-blue-500/20 ring-2 ring-white/[0.08]">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden xl:block">
                  <p className="text-[11px] font-bold text-white leading-none">Admin</p>
                  <p className="text-[10px] text-blue-300 font-medium mt-0.5">Codebase IT</p>
                </div>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="flex items-center justify-center w-8 h-8 rounded-xl bg-red-500/10 text-red-400/60 hover:bg-red-500/20 hover:text-red-400 transition-all"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ====== MOBILE SLIDE-DOWN NAV ====== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="absolute top-14 left-0 right-0 bg-[#0a1628] border-b border-white/[0.06] shadow-2xl shadow-black/40 p-4 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileNavLink
              href="/admin/dashboard"
              icon={<FileText className="w-4 h-4 text-blue-400" />}
              label="All Blogs"
              active={pathname === "/admin/dashboard"}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="/admin/dashboard"
              icon={<LayoutDashboard className="w-4 h-4 text-cyan-400" />}
              label="Manage Projects"
              active={false}
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavLink
              href="/admin/dashboard"
              icon={<Briefcase className="w-4 h-4 text-purple-400" />}
              label="Job Openings"
              active={false}
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="border-t border-white/[0.06] my-2" />
            <button
              onClick={() => { setMobileMenuOpen(false); handleLogout(); }}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400/70 hover:text-red-400 hover:bg-red-500/10 text-sm font-medium transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-14" />
    </>
  );
}

function MobileNavLink({
  href,
  icon,
  label,
  active,
  onClick,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
        active
          ? "bg-white/[0.06] text-white"
          : "text-blue-200/50 hover:text-white hover:bg-white/[0.04]"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}
