import { DashboardLayout } from '@/components/dashboard-layout';

export default function GuardianCommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout role="guardian">{children}</DashboardLayout>;
}
