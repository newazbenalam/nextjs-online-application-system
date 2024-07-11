import db from '@/app/lib/db.js';

export const GetNotices = async () => {
  try {
    const notices = await db.notice.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return notices;
  } catch (error) {
    console.error("GetNotices", error);
    return [];
  }
}
