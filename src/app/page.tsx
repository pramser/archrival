import { ACHIEVEMENTS } from "@/achievements"
import AchievementBadge from "@/components/achievement-badge"

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-wrap flex-row gap-2 row-start-2 items-center sm:items-start">
        {ACHIEVEMENTS.map((achievement, i) => (
          <AchievementBadge key={i} {...achievement} />
        ))}
      </main>
    </div>
  )
}
