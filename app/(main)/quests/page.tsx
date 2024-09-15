import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { quests } from "@/constants";
import { getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();

  const [userProgress] = await Promise.all([userProgressData]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-col-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourses={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
        <Promo />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/quests.svg" alt="quests" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Quests
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Completed Quests by earning points.
          </p>
          <ul className="w-full">
            {quests.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;
              return (
                <div
                  className="flex items-center w-full p-4 gap-y-4 border-t-2"
                  key={quest.title}
                >
                  <Image
                    src="/points.svg"
                    alt="points"
                    height={60}
                    width={60}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 text-xl font-bold">
                      {quest.title}
                    </p>
                    <Progress value={progress} className="h-3" />
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
