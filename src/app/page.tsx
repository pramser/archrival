"use client"

import { ACHIEVEMENTS, Achievement } from "@/achievements"
import AchievementBadge from "@/components/achievement-badge"
import { useState } from "react"

export default function Home() {
  const MAX_PINNED_ACHIEVEMENTS = 3
  const [pinnedAchievements, setPinnedAchievements] = useState<Achievement[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const addPinnedAchievement = (achievement: Achievement) => {
    if (pinnedAchievements.length < MAX_PINNED_ACHIEVEMENTS) {
      setPinnedAchievements([...pinnedAchievements, achievement])
    }
  }

  const removePinnedAchievement = (index: number) => {
    setPinnedAchievements(pinnedAchievements.filter((_, i) => i !== index))
  }

  const searchAchievements = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className="items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col">
        <h1 className="text-xl font-bold">Pinned Achievements</h1>
        <p className="text-sm text-gray-500">Click on an achievement to pin it.</p>
        <div className="flex flex-row gap-2 row-start-1 items-center h-24">
          {pinnedAchievements.map((_, i) => (
            <div key={i} onClick={() => removePinnedAchievement(i)}>
              <AchievementBadge key={i} {...pinnedAchievements[i]} />
            </div>
          ))}
        </div>
        <hr className="my-8 border-gray-200" />
        <h1 className="text-xl font-bold">Search Achievements</h1>
        <p className="text-sm text-gray-500">Search for achievements to pin.</p>
        <input
          type="text"
          placeholder="Search achievements..."
          className="w-full p-2 text-lg border border-gray-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          onChange={(e) => searchAchievements(e.target.value)}
        />
        <br />
      </header>
      <main className="flex flex-col">
        <h1 className="text-xl font-bold">All Achievements</h1>
        <div className="flex flex-wrap flex-row gap-2 row-start-2 items-center sm:items-start">
          {ACHIEVEMENTS.filter(({ name }) => name.toLowerCase().includes(searchQuery.toLowerCase())).map((achievement, i) => (
            <div key={i} onClick={() => addPinnedAchievement(achievement)}>
              <AchievementBadge {...achievement} />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
