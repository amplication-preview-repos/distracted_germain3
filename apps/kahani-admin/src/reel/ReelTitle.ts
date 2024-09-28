import { Reel as TReel } from "../api/reel/Reel";

export const REEL_TITLE_FIELD = "title";

export const ReelTitle = (record: TReel): string => {
  return record.title?.toString() || String(record.id);
};
