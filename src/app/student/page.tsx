import Link from 'next/link';
import { BookOpen, PlayCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const lessons = [
    { id: 'solar-system', title: 'Our Solar System', description: 'Learn about the sun, planets, and moons!', imageId: 'lesson-planets-1' },
    { id: 'jungle-animals', title: 'Jungle Animals', description: 'Meet the lions, elephants, and monkeys.', imageId: 'lesson-animals-1' },
    { id: 'ocean-life', title: 'Ocean Life', description: 'Discover the creatures of the deep blue sea.', imageId: 'lesson-animals-2' },
    { id: 'basic-shapes', title: 'Fun with Shapes', description: 'Learn to identify circles, squares, and triangles.', imageId: 'curriculum-review-1' },
    { id: 'counting-to-10', title: 'Counting to 10', description: 'Let\'s count numbers together!', imageId: 'login-hero'},
    { id: 'primary-colors', title: 'Colorful World', description: 'Explore the wonderful world of colors.', imageId: 'community-avatar-1' },
    { id: 'farm-animals', title: 'On the Farm', description: 'Moo, oink, and cluck with farm animals.', imageId: 'community-avatar-2' },
    { id: 'telling-time', title: 'Telling Time', description: 'Learn to read the clock.', imageId: 'community-avatar-3' },
    { id: 'healthy-foods', title: 'Healthy Foods', description: 'Discover yummy and healthy snacks.', imageId: 'community-avatar-4' },
    { id: 'seasons', title: 'The Four Seasons', description: 'Learn about Spring, Summer, Fall, and Winter.', imageId: 'teacher-avatar-1' },
    { id: 'community-helpers', title: 'Community Helpers', description: 'Meet the people who help us every day.', imageId: 'guardian-avatar-1' },
    { id: 'my-body', title: 'All About Me', description: 'Learn about different parts of your body.', imageId: 'student-avatar-1' },
]

export default function StudentDashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl font-headline">My Dashboard</h1>
      </div>
      <div
        className="flex flex-1 items-start justify-start rounded-lg border border-dashed shadow-sm p-8"
      >
        <div className="grid w-full gap-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Welcome back, Alex!</h2>
                <p className="text-muted-foreground">Ready to learn something new today?</p>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {lessons.map(lesson => {
                    const image = PlaceHolderImages.find(p => p.id === lesson.imageId);
                    return (
                        <Card key={lesson.id}>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-primary"/>
                                    {lesson.title}
                                </CardTitle>
                                <CardDescription>{lesson.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
                                     {image ? (
                                        <Image src={image.imageUrl} alt={image.description} fill className="object-cover" data-ai-hint={image.imageHint} />
                                     ) : (
                                        <p className="text-sm text-muted-foreground">Image preview</p>
                                     )}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full">
                                    <Link href={`/student/lesson/${lesson.id}`}>
                                        <PlayCircle className="mr-2 h-4 w-4"/>
                                        Start Lesson
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
      </div>
    </>
  );
}
