export const toMinSec = (ms: number) => {
  const min = Math.floor((ms / 1000 / 60) << 0);
  const sec = Math.floor((ms / 1000) % 60);

  return `${min}:${sec.toString().padStart(2, "0")}`;
};
