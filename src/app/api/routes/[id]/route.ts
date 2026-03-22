import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/db"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params

    const route = await prisma.route.findFirst({
      where: { id, userId: session.user.id },
      include: { stops: { orderBy: { orderIndex: "asc" } } },
    })

    if (!route) {
      return NextResponse.json({ error: "Route not found" }, { status: 404 })
    }

    return NextResponse.json({ route })
  } catch (error) {
    console.error("Route fetch error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { id } = await params
    const { name, stops } = await req.json()

    // Verify ownership
    const existing = await prisma.route.findFirst({
      where: { id, userId: session.user.id },
    })

    if (!existing) {
      return NextResponse.json({ error: "Route not found" }, { status: 404 })
    }

    // Delete existing stops and recreate
    await prisma.routeStop.deleteMany({ where: { routeId: id } })

    const route = await prisma.route.update({
      where: { id },
      data: {
        name: name || existing.name,
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
      include: { stops: { orderBy: { orderIndex: "asc" } } },
    })

    return NextResponse.json({ success: true, route })
  } catch (error) {
    console.error("Route update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
