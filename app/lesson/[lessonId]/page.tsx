import { getLesson, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Quiz } from "../quiz";

type Props = {
  params: {
    lessonId: number;
  };
};

const LessonIdPage = async ({ params }: Props) => {
  // console.log(params.lessonId);
  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const intialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={intialPercentage}
      userSubscription={undefined}
    />
  );
};

export default LessonIdPage;
