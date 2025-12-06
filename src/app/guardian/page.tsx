import {
  Activity,
  ArrowUp,
  BookOpen,
  CheckCircle,
  Clock,
  HelpCircle,
  Smile,
  TrendingUp,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProgressChart } from '@/components/guardian/progress-chart';
import { MoodMirrorChart } from '@/components/guardian/mood-mirror-chart';
import { Badge } from '@/components/ui/badge';

export default function GuardianDashboard() {
  return (
    <>
      <h1 className="text-lg font-semibold md:text-2xl font-headline">Alex's Progress & Well-being</h1>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Mood
            </CardTitle>
            <Smile className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Happy</div>
            <p className="text-xs text-muted-foreground">
              Feeling great after the "Solar System" lesson.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Positive Mood Streak
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4 Days</div>
            <p className="text-xs text-muted-foreground">
              Consistently positive emotional state.
            </p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">
              <ArrowUp className="inline h-3 w-3 text-green-500" /> +5% from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Spent (Today)</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45 mins</div>
            <p className="text-xs text-muted-foreground">
              +10 mins from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Performance Over Time</CardTitle>
            <CardDescription>
              Exam scores from the last 7 days, showing academic progress.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <ProgressChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Weekly Mood Mirror</CardTitle>
            <CardDescription>
              Emotional well-being over the last week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MoodMirrorChart />
          </CardContent>
        </Card>
      </div>
      
       <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
          <CardDescription>
            A summary of recently completed lessons and mastered concepts.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
            <div className='flex items-start gap-4'>
                <div className='bg-green-100 dark:bg-green-900/50 p-3 rounded-full'>
                    <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                    <h3 className='font-semibold'>Lesson Completed: "Solar System"</h3>
                    <p className='text-muted-foreground text-sm mb-2'>Finished on {new Date().toLocaleDateString()}.</p>
                    <div className='flex flex-wrap gap-2'>
                        <Badge variant='secondary'>Identified the Sun</Badge>
                        <Badge variant='secondary'>Recognized Planet Earth</Badge>
                         <Badge variant='secondary'>Distinguished Mars</Badge>
                    </div>
                </div>
            </div>
             <div className='flex items-start gap-4'>
                <div className='bg-green-100 dark:bg-green-900/50 p-3 rounded-full'>
                    <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                    <h3 className='font-semibold'>Lesson Completed: "Jungle Animals"</h3>
                    <p className='text-muted-foreground text-sm mb-2'>Finished 2 days ago.</p>
                     <div className='flex flex-wrap gap-2'>
                        <Badge variant='secondary'>Identified a Lion</Badge>
                        <Badge variant='secondary'>Recognized an Elephant</Badge>
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
    </>
  );
}
