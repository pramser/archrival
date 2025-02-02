export enum Category {
  GalactasGuide = "Galacta's Guide",
  RivalryRising = "Rivalry Rising",
  HeroicJourney = "Heroic Journey",
  ChronoverseSaga = "Chronoverse Saga",
}

export interface Achievement {
  category: Category
  name: string
  description: string
  points: number
}

export const ACHIEVEMENTS: Achievement[] = [
  // Galacta's Guide
  {
    category: Category.GalactasGuide,
    name: "Hello, World!",
    description: "Send your first message in the chat.",
    points: 5,
  },
  {
    category: Category.GalactasGuide,
    name: "Now, THAT'S a Party!",
    description: "Add 20 friends",
    points: 5,
  },
  {
    category: Category.GalactasGuide,
    name: "You Do You",
    description: "Use the customizable wheel once",
    points: 5,
  },
  {
    category: Category.GalactasGuide,
    name: "Window Dressing",
    description: "Switch up five different nameplates",
    points: 5,
  },
  {
    category: Category.GalactasGuide,
    name: "Member When...?",
    description: "Relive a Highlight in your Career",
    points: 5,
  },
  {
    category: Category.GalactasGuide,
    name: "Self Made",
    description: "Earn 3,000 Chrono Tokens",
    points: 10,
  },
  {
    category: Category.GalactasGuide,
    name: "Dooms' Rise",
    description: "Unlock all Dooms' Rise gallery cards",
    points: 10,
  },
  {
    category: Category.GalactasGuide,
    name: "Challenge Accepted!",
    description: "Complete 20 missions",
    points: 10,
  },
  {
    category: Category.GalactasGuide,
    name: "Rising Star",
    description: "Reach level 20",
    points: 10,
  },
  {
    category: Category.GalactasGuide,
    name: "Heroic Honor",
    description: "Read 33 hero stories",
    points: 20,
  },
  {
    category: Category.GalactasGuide,
    name: "Always on Duty",
    description: "Unlock five Hero costumes",
    points: 20,
  },
  {
    category: Category.GalactasGuide,
    name: "Multiversal Veterans",
    description: "Raise the Proficiency of two heroes to Captain",
    points: 20,
  },
  {
    category: Category.GalactasGuide,
    name: "Sticking Around",
    description: "Log in for 30 days",
    points: 20,
  },
  {
    category: Category.GalactasGuide,
    name: "What a Team-Up!",
    description: "Read 15 Team-Up stories",
    points: 20,
  },
  // Rivalry Rising
  {
    category: Category.RivalryRising,
    name: "Onslaught!",
    description: "Land a 3-player KO streak.",
    points: 5,
  },
  {
    category: Category.RivalryRising,
    name: "Thumbs Up",
    description: "Upvote 1 player",
    points: 5,
  },
  {
    category: Category.RivalryRising,
    name: "On Fire!",
    description: "Win three consecutive matches in Quick Match",
    points: 5,
  },
  {
    category: Category.RivalryRising,
    name: "Heating Up!",
    description: "Take down 50 AI enemies in Practice VS. AI",
    points: 5,
  },
  {
    category: Category.RivalryRising,
    name: "Master of Modes",
    description: "Complete on Arcade match",
    points: 5,
  },
  {
    category: Category.RivalryRising,
    name: "Assemble!",
    description: "Team up with a friend for a match",
    points: 5,
  },
  {
    category: Category.RivalryRising,
    name: "Ring Master",
    description: "Rank Gold or higher in Competitive mode",
    points: 10,
  },
  {
    category: Category.RivalryRising,
    name: "All Eyes on Me!",
    description: "Score MVP five times",
    points: 10,
  },
  {
    category: Category.RivalryRising,
    name: "Here to Represent",
    description: "Join a Tournament match with your faction",
    points: 10,
  },
  {
    category: Category.RivalryRising,
    name: "Inevitable!",
    description: "Win 100 matches",
    points: 10,
  },
  // Chronoverse Saga
  {
    category: Category.ChronoverseSaga,
    name: "Spore Sport",
    description: "Shatter 50 Symbiote Spores in Klyntar",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "VENI VIDI V...?",
    description: "Spray one time toward the Celestial Codex in Klyntar",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "What Are Safe... For Now",
    description: "Stop Knull's Essence from going underground in Klyntar",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Explosive Sendoff",
    description: "Deliver Knull's Essence underground in Klyntar",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Shero of Wakanada",
    description: "Listen to General Okoye's message in the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Mind Palace",
    description: "Listen to Shuri's findings in the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Spreading Darkness",
    description: "Stop Bast, the Panther God, fro returning to her rightful place in the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Knowledge of Sin",
    description:
      "Activate the Vibrani-Chronovium force field stabalizer in the Imperial Institute of Science of the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Mystical Power",
    description: "Unleash the spiritual energy of the Heart-Shaped Herb in the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Scientific Strength",
    description: "Advance the Vibrani-Chronovium research in the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Divine House Divided",
    description: "Listen to the chat between K'Liluna and Bast in the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Wakanda Forever",
    description: "Purify Bast, the Panther God, in the Intergalactic Empire of Wakanda",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Let Her Speak!",
    description: "Chat with Spider-Zero in the Mech Lab of Tokyo 2099: Spider-Islands",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "As You Wish",
    description: "Help the Master Weaver repair the Web of Life and Destiny in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "All or Nothing!",
    description: "Help Spider-Zero repair the Web of Life and Destiny in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Tough Business",
    description: "Listen to the Fujikawa Mall's uniform and broadcast in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Public Relations",
    description: "Listen to the Stark-Fujikawa promo broadcast in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Eye Witness",
    description: "Listen to the Public Eye's internal comms in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Whispers from the Web",
    description: "Listen to Spider-Zero's holographic message in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Halfway Dropout",
    description: "Listen to Spider-Zero's advance to Budokan in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "The Path to the Spider's Nest",
    description: "Escort the Spider-Zero to Budokan in Tokyo 2099",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Thor's Alliance",
    description: "Help Thor fight against Loki in Yggsgard",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Loki's Accomplice",
    description: "Help Loki maintain his rule in Yggsgard",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Histrionic Perfection",
    description: "Use one emote on the throne in Yggsard",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Illusive Truth",
    description: "Shatter the deception and unveil the murai's truth in the Throne Room of Yggsgard",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Tyrant Tumbles",
    description: "Shatter the Loki statue area in Yggsgard's Bifrost Garden",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "I Say Thee Nay!",
    description: "Safeguard the sapping device to wither Yggdraisill in Yggsgard",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "For Asgard!",
    description: "Destroy the sapping device and save Yggdraisill in Yggsgard",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Wakey Wakey",
    description: "",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Call of the Hive",
    description: "Open the Maveth Portal in Hydra Charteris Base",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Cut off One Head",
    description: "Destroy the Hydra Charteris Base",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Not on My Watch",
    description: "Shut down the production line of Super-Soldier Factory in Hydra Charteris Base",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Wide Open",
    description: "Blast the protective barrier of Frozen Airfield in Hydra Charteris Base",
    points: 5,
  },
  {
    category: Category.ChronoverseSaga,
    name: "Enter the Hydra",
    description: "Activate the entrace to Frozen Airfield in Hydra Charteris Base",
    points: 5,
  },
]
