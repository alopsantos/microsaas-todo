import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="link" className="space-x-2">
          <Avatar>
            <AvatarFallback>AL</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1 gap-2 flex-1 text-left">
            <p className="text-sm font-medium leading-none">Anderson Lopes</p>
            <p className="text-xs leading-none text-muted-foreground">
              anderson_lops@hotmail.com
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <div className="flex flex-col space-y-1 gap-2 flex-1 text-left">
            <p className="text-sm font-medium leading-none">Anderson Lopes</p>
            <p className="text-xs leading-none text-muted-foreground">
              anderson_lops@hotmail.com
            </p>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Configurações</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Upgrade</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
