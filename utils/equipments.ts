export function formatShortDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }); // "Jul"
  return `${day} ${month}`;
}