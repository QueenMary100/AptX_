import { DashboardLayout } from '@/components/dashboard-layout';

export default function TeacherCommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="teacher">{children}</DashboardLayout>;
}
