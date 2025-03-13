import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  
} from "@/components/ui/navigation-menu"





export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
  
      
      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Map</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink  href=""
            target="_blank"
            rel="noopener noreferrer">Map</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink  href="/my-app/app/Shop.tsx"
            target="_blank"
            rel="noopener noreferrer">Shop</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Events</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/my-app/app/Events.tsx"
            target="_blank"
            rel="noopener noreferrer">Events</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Partners</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="/my-app/app/Partners.tsx"
            target="_blank"
            rel="noopener noreferrer">Partners</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

      
       
    
      <main className="flex flex-col gap-[80px] row-start-2 items-center justifty-center sm:items-start">
       

        <div className="flex gap-4 items-center flex-col">
        <Image
      src="/Yahway Logo.svg"
      alt="logo"
      height={100}
      width={100}
      />
    <h1>Welcome to YahWay</h1>
        <h2>LET US HELP YOU GET CLOSER TO GOD TODAY</h2>
        <p>With our carefully scouted and trusted church partners</p>
        <p> Let us connect you with a church to call home</p>
    </div>
    
    <div className="flex gap-4 items-center flex-col">
      <h2>What do we do?</h2>
        <p>We offer christian community building services</p>
        <p>Allowign for the connection of more people to the love of God.</p>
        
        <h3>Our Goal</h3>
        <p>Connect our users to christ loving chruches closest to them(map)</p>
        <p>Provide a platform for the sale of christian essentials(store)</p>
        <p>Give access to life changing events(events)</p>
        
        <h3>Our Mission</h3>
        <p>To fufill the great commision.</p>
    </div>

        <div>
          <h2>Our Partners</h2>

        </div>

        <div className="flex gap-5 items-center flex-col ">
          <h2>OUR SERVICES</h2>
          <p>MAP: Get in contact with the church of your choice closest to you</p>
          <p>SHOP: For all your christian fits and essentials.</p>
          <p>EVENTS: Get tickets to impactful events that are sure to change your life for the better</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">


      </div>  
      <div>
      <Button>Click me</Button>
    </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
    
  );
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
