import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header with Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Cars</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <NavigationMenuLink href="/docs">
                      <div className="font-medium">Jeep</div>
                      <div className="text-muted-foreground text-sm">
                        Conquer Any Terrain, Command Every Adventure
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/docs/installation">
                      <div className="font-medium">Sedans</div>
                      <div className="text-muted-foreground text-sm">
                        Elegance Meets Comfort On Every Journey
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/docs/installation">
                      <div className="font-medium">Sports Cars</div>
                      <div className="text-muted-foreground text-sm">
                        Unleash Pure Speed, Feel Ultimate Thrill
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/docs/installation">
                      <div className="font-medium">Special Cars</div>
                      <div className="text-muted-foreground text-sm">
                        Experience Ultimate Luxury, Drive Pure Prestige
                      </div>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Booking</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <NavigationMenuLink href="/components/button">
                      <div className="font-medium">Rent</div>
                      <div className="text-muted-foreground text-sm">
                        Reserve Your Dream Ride in Seconds
                      </div>
                    </NavigationMenuLink>
                    <NavigationMenuLink href="/components/card">
                      <div className="font-medium">Card</div>
                      <div className="text-muted-foreground text-sm">
                        Container for content sections
                      </div>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/components/card">Contact</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Start building amazing experiences with our component library.
          </p>
        </div>
      </main>
    </div>
  );
}