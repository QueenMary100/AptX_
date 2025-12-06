'use client';

import Link from 'next/link';
import {
  CircleUser,
  Home,
  BookOpen,
  Upload,
  BarChart3,
  GraduationCap,
  HeartPulse,
  Menu,
  Users,
  Smile,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AptxLogo } from './icons';
import type { Role } from '@/lib/types';
import { cn } from '@/lib/utils';

type NavItem = {
  href: string;
  icon: React.ElementType;
  label: string;
};

const navItems: Record<Role, NavItem[]> = {
  student: [
    { href: '/student', icon: Home, label: 'Dashboard' },
    { href: '/student/lessons', icon: BookOpen, label: 'My Lessons' },
    { href: '/student/checkin', icon: Smile, label: 'Daily Check-in' },
    { href: '/student/community', icon: Users, label: 'Community' },
  ],
  teacher: [
    { href: '/teacher', icon: Home, label: 'Dashboard' },
    { href: '/teacher/upload', icon: Upload, label: 'Upload Curriculum' },
    { href: '/teacher/curriculums', icon: BookOpen, label: 'My Curriculums' },
    { href: '/teacher/community', icon: Users, label: 'Community' },
  ],
  guardian: [
    { href: '/guardian', icon: BarChart3, label: 'Progress' },
    { href: '/guardian/students', icon: GraduationCap, label: 'My Student' },
    { href: '/guardian/wellbeing', icon: HeartPulse, label: 'Well-being' },
    { href: '/guardian/community', icon: Users, label: 'Community' },
  ],
};

export function DashboardLayout({
  children,
  role,
}: {
  children: ReactNode;
  role: Role;
}) {
  const pathname = usePathname();
  const currentNavItems = navItems[role];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-card md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <AptxLogo className="h-6 w-6 text-primary" />
              <span className="">AptX</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {currentNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                    (pathname === item.href || (item.href !== `/${role}` && pathname.startsWith(item.href))) &&
                      'bg-muted text-primary'
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                >
                  <AptxLogo className="h-6 w-6 text-primary" />
                  <span className="sr-only">AptX</span>
                </Link>
                {currentNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground',
                      (pathname === item.href || (item.href !== `/${role}` && pathname.startsWith(item.href))) &&
                        'bg-muted text-foreground'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* Can add a search bar here later */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
