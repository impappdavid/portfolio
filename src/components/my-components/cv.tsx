"use client"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function CV() {
  return (
    <div className="fixed bottom-4 right-4 animate-[downblur_2s_ease-in-out]">
      <Link href="/Papp_Dávid_CV.pdf" className="hover:bg-zinc-900/90 dark:hover:bg-zinc-100/80 transition-all p-2 rounded-full  transition-all w-12 h-12 flex items-center justify-center text-sm font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black" target="_blank">
        CV
      </Link>
    </div>
  )
}
