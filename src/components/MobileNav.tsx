import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Menu, Home, FileText, User, Github, Twitter } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-6">
          <a
            href="/"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <Home className="h-4 w-4 mr-3" />
            Home
          </a>
          <a
            href="/blog"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <FileText className="h-4 w-4 mr-3" />
            Blog
            <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
              New
            </Badge>
          </a>
          <a
            href="/about"
            className="flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-4 w-4 mr-3" />
            About
          </a>

          <Separator className="my-4" />

          <div className="flex items-center justify-between px-4">
            <span className="text-sm font-medium">Connect</span>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/withastro/astro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://twitter.com/astrodotbuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-3 px-4 py-3 bg-muted rounded-lg">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-medium">
              AA
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Aastha Karki</p>
              <p className="text-xs text-muted-foreground truncate">
                Developer
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
