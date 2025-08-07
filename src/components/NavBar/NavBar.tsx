import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "../ui/toggle";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b bg-white">
      <div>
        <img src={logo} alt="" className="w-15 " />
      </div>
      <div className="text-2xl font-bold text-center ">
        Library Management System
      </div>

      {/* Desktop Links */}

      <div className="hidden md:flex gap-6 text-sm font-medium">
        <a href="" className="hover:text-blue-600">
          <Toggle></Toggle>
        </a>
        <a href="/allBooks" className="hover:text-blue-600">
          All Books
        </a>
        <a href="/addBook" className="hover:text-blue-600">
          Add Books
        </a>
        <a href="/borrowSummary" className="hover:text-blue-600">
          Borrow Summary
        </a>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Toggle></Toggle>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/allBooks">All Books</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/addBooks">Add Books</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="/borrowSummary">Borrow Summary</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
