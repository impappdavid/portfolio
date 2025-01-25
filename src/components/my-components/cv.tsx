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

export default function CV() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="fixed bottom-4 right-4 rounded-full w-12 h-12 bg-zinc-300 dark:bg-zinc-900">CV</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-transparent">
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex flex-col gap-2">
          <DropdownMenuItem className="flex justify-center items-center" onClick={() => {
            window.open('/Papp_Dávid_CV.pdf', '_blank');
          }}>
            EN
          </DropdownMenuItem>
          <DropdownMenuItem className="flex justify-center items-center">
            HU
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
