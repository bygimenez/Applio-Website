"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react"

// Remove for local development
export const runtime = "edge";

export default function Discord() {
    useEffect(() => {
        redirect("https://discord.gg/urxFjYmYYh")
    }, [])
    
    return (
        <main className="mt-24 flex justify-center items-center flex-col m-auto">
            <h1 className="text-xs text-neutral-300">Redirecting... if it doesn't do it automatically <a href="https://discord.gg/urxFjYmYYh" className="text-xs text-neutral-200 underline hover:text-white slow">click here</a>.</h1>
            
        </main>
    )
}

