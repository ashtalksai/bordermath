import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { name, stops } = await req.json()

    if (!stops || !Array.isArray(stops) || stops.length === 0) {
      return NextResponse.json({ error: "At least one stop is required" }, { status: 400 })
    }

    const route = await prisma.route.create({
      data: {
        userId: session.user.id,
        name: name || "My Route",
        status: "compliant",
        stops: {
          create: stops.map((stop: {
            countryCode: string
            countryName: string
            flag: string
            bandType: string
            entryDate: string
            exitDate: string
          }, index: number) => ({
            countryCode: stop.countryCode,
            countryName: stop.countryName,
            flag: stop.flag,
            bandType: stop.bandType || "other",
            entryDate: new Date(stop.entryDate),
            exitDate: new Date(stop.exitDate),
            orderIndex: index,
          })),
        },
      },
      include: { stops: true },
    })

    return NextResponse.json({ success: true, routeId: route.id })
  } catch (error) {
    console.error("Route creation error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const routes = await prisma.route.findMany({
      where: { userId: session.user.id },
      include: { stops: { orderBy: { orderIndex: "asc" } } },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({ routes })
  } catch (error) {
    console.error("Routes fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
