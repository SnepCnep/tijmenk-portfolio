"use server"

import { prisma } from "@/lib/prisma"

export async function getMyProjects() {
    try {
        const projects = await prisma.myProjects.findMany()
        return projects
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : String(error))
    }
}