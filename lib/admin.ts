import { auth } from "@clerk/nextjs";

const adminsIds = ["user_2lplxTtR9v2TQFisrjDbAEh61ml"];

export const getIsAdmin = async () => {
  const { userId } = await auth();
  if (!userId) {
    return false;
  }

  return adminsIds.indexOf(userId) !== -1;
};
