"use client"

import { ACHIEVEMENTS, Achievement } from "@/achievements"
import AchievementBadge from "@/components/achievement-badge"
import { useState } from "react"

export default function Home() {
  const MAX_PINNED_ACHIEVEMENTS = 3
  const [pinnedAchievements, setPinnedAchievements] = useState<Achievement[]>([])

  const addPinnedAchievement = (achievement: Achievement) => {
    if (pinnedAchievements.length < MAX_PINNED_ACHIEVEMENTS) {
      setPinnedAchievements([...pinnedAchievements, achievement])
    }
  }

  const removePinnedAchievement = (index: number) => {
    setPinnedAchievements(pinnedAchievements.filter((_, i) => i !== index))
  }

  return (
    <div className="items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row gap-2 row-start-1 items-center">
        {pinnedAchievements.map((_, i) => (
          <div key={i} onClick={() => removePinnedAchievement(i)}>
            <AchievementBadge key={i} {...pinnedAchievements[i]} />
          </div>
        ))}
      </header>
      <main className="flex flex-wrap flex-row gap-2 row-start-2 items-center sm:items-start">
        {ACHIEVEMENTS.map((achievement, i) => (
          <div key={i} onClick={() => addPinnedAchievement(achievement)}>
            <AchievementBadge {...achievement} />
          </div>
        ))}
      </main>
    </div>
  )
}
