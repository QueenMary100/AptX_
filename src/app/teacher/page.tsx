import Link from 'next/link';
import { PlusCircle, FileText, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const recentCurriculums = [
  { id: '1', title: 'Solar System 101', status: 'ready', uploaded: '2 days ago' },
  { id: '2', title: 'Introduction to Algebra', status: 'processing', uploaded: '5 days ago' },
  { id: '3', title: 'Jungle Animals', status: 'ready', uploaded: '1 week ago' },
];

export default function TeacherDashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild>
            <Link href="/teacher/upload">
              <PlusCircle className="h-4 w-4 mr-2" />
              Upload Curriculum
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Curriculums</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Currently being simplified by AI</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ready for Students</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11</div>
             <p className="text-xs text-muted-foreground">Ready to be assigned</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>
            An overview of your most recently uploaded curriculums.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Curriculum</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Uploaded</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentCurriculums.map((curriculum) => (
                <TableRow key={curriculum.id}>
                  <TableCell className="font-medium">{curriculum.title}</TableCell>
                  <TableCell>
                    <Badge variant={curriculum.status === 'ready' ? 'default' : 'secondary'} className={curriculum.status === 'ready' ? 'bg-green-500' : ''}>
                      {curriculum.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{curriculum.uploaded}</TableCell>
                  <TableCell>
                     <Button asChild variant="outline" size="sm">
                        <Link href={`/teacher/curriculum/${curriculum.id}`}>View</Link>
                     </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
