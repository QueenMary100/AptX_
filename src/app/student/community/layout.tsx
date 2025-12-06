import { DashboardLayout } from '@/components/dashboard-layout';

export default function StudentCommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="student">{children}</DashboardLayout>;
}
