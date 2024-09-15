import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { UserProgress } from "@/components/user-progress";
import { getTopTenUsers, getUserProgress } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";

const LeaderBoardPage = async () => {
  const userProgressData = getUserProgress();
  const leaderboardData = getTopTenUsers();

  const [userProgress, leaderboard] = await Promise.all([
    userProgressData,
    leaderboardData,
  ]);

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
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/leaderboard.svg"
            alt="leaderboard"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            LeaderBoard
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            See where you stand among other learners in the community.
          </p>
          <Separator className="mb-4 h-0.5 rounded-full" />
          {leaderboard.map((userprogress, idx) => (
            <div
              className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
              key={userprogress.userId}
            >
              <p className="font-bold text-lime-700 mr-4">{idx + 1}</p>
              <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
                <AvatarImage
                  src={userprogress.userImageSrc}
                  className="object-cover"
                />
              </Avatar>
              <p className="font-bold text-neutral-800 flex-1">
                {userprogress.userName}
              </p>
              <p className="text-muted-foreground">{userprogress.points} XP</p>
            </div>
          ))}
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LeaderBoardPage;
