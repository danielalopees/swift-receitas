import { Card, CardContent } from "@/components/ui/card"

interface Stats {
  recipes: number
  likes: number
  ranking: number
}

interface UserStatsProps {
  stats: Stats
}

export function UserStats({ stats }: UserStatsProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="grid grid-cols-3 gap-4">
        <div>
          <h4 className="font-bold text-lg">{stats.recipes}</h4>
          <p className="text-sm text-gray-500">Receitas</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">{stats.likes}</h4>
          <p className="text-sm text-gray-500">Likes</p>
        </div>
        <div>
          <h4 className="font-bold text-lg">{stats.ranking}</h4>
          <p className="text-sm text-gray-500">Ranking</p>
        </div>
      </CardContent>
    </Card>
  )
}
