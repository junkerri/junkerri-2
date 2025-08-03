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
      <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
        <SheetHeader className="px-6 py-4 border-b border-border">
          <SheetTitle className="text-left font-semibold">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col py-4">
          <a
            href="/"
            className="flex items-center mx-6 px-3 py-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
            onClick={() => setIsOpen(false)}
          >
            <Home className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-accent-foreground" />
            <span>Home</span>
          </a>
          <a
            href="/blog"
            className="flex items-center mx-6 px-3 py-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
            onClick={() => setIsOpen(false)}
          >
            <FileText className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-accent-foreground" />
            <span>Blog</span>
            <Badge
              variant="secondary"
              className="ml-auto h-5 px-2 text-xs font-medium"
            >
              New
            </Badge>
          </a>
          <a
            href="/about"
            className="flex items-center mx-6 px-3 py-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-4 w-4 mr-3 text-muted-foreground group-hover:text-accent-foreground" />
            <span>About</span>
          </a>

          <Separator className="my-6" />

          <div className="px-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-muted-foreground">
                Connect
              </span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="flex-1" asChild>
                <a
                  href="https://github.com/withastro/astro"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span className="text-xs">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="flex-1" asChild>
                <a
                  href="https://twitter.com/astrodotbuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex items-center justify-center gap-2"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="text-xs">Twitter</span>
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-6 mx-6 p-4 bg-muted/50 rounded-lg border">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                AA
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Aastha Karki</p>
                <p className="text-xs text-muted-foreground truncate">
                  Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
