export interface BadgeDataProps {
  name: string;
  color: string;
  isContained?: boolean
}

export const badgeData: BadgeDataProps[] = [
  { name: "All Status", color: "#718096", isContained: true },
  { name: "Transporting", color: "#3182CE" },
  { name: "Packaging", color: "#DD6B20" },
  { name: "Delivered", color: "#25855A" },
  { name: "Canceled", color: "#C53030" }
];