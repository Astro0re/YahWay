import Image from "next/image";
import { Button } from "@/components/ui/button"






export default function Find_Church() {
  return (
  <div className=" text-sm md:text-lg text-center p-6">

      <main className=" p-6">
        <Image
            aria-hidden
            src="/Yahway Logo.svg"
            alt="Globe icon"
            width={150}
            height={150}
            className="items- center"
          />
          
          <div className=" flex flex-row gap-8 text-lg">
        <a 
        href="/user/find-church.tsx">Map</a>
        <a 
        href="/user/visit-store.tsx">Store</a>
        <a 
        href="/user/explore-events.tsx">Events</a>
        <a 
        href="/user/partners.tsx">Partners</a>
        </div>
        
      </main>

      <footer >

        <h1>Contact Us</h1>

        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
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
          Email
        </a>

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
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
          href=""
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
          href=""
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
        </div>
      </footer>
    
   </div>
    
  );
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
