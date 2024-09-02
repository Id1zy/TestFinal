import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Gamepad2 } from "lucide-react"
import Link from "next/link"

const groups = [
  { name: "AJEDREZ", icon: <Gamepad2 className="h-6 w-6" /> },
  { name: "BINGO", icon: <Gamepad2 className="h-6 w-6" /> },
  { name: "LOL", icon: <Gamepad2 className="h-6 w-6" /> },
]

export default function Group() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <div className="w-full max-w-md mx-auto space-y-4 bg-white rounded-lg shadow-lg p-6">
      <div>Grupos</div>
        <div className="space-y-2">
          {groups.map((group) => (
            <Card key={group.name} className="bg-gray-50 hover:bg-gray-100 transition-colors">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {group.icon}
                  <span className="font-bold">{group.name}</span>
                </div>
                <Button asChild>
                  <Link href="#">UNIRME</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}