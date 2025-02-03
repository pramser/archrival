import { Achievement } from "@/achievements"

type AchievementBadgeProps = Achievement & {
  onClick: () => void
}

export default function AchievementBadge({ category, name, description, points, onClick }: AchievementBadgeProps) {
  return (
    <div className="flex flex-row justify-between w-full h-24 bg-slate-100 border-b-4 border-b-slate-300 p-4" onClick={onClick}>
      <span>
        <h1 className="font-bold">{name}</h1>
        <p className="text-sm line-clamp-2 text-ellipsis">{description}</p>
      </span>
      <span className="border-l-slate-200 border-l-2 h-16 flex flex-col justify-center items-center px-4">
        <p className="font-bold text-lg text-slate-600">{points}</p>
      </span>
    </div>
  )
}
