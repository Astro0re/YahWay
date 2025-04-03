import Image from "next/image";
import { Button } from "@/components/ui/button"


export default function Home() {
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
          
          <div className="p-6">
            
            <Button
              className="mt-4"
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = "/find-church"}
            >
              Find a Church
            </Button>
            <Button
              className="mt-4"
              variant="secondary"
              size="lg"
              onClick={() => window.location.href = "/visit-store"}
            >
              Visit Our Store
            </Button>
            <Button
              className="mt-4"
              variant="outline"
              size="lg"
              onClick={() => window.location.href = "/explore-events"}
            >
              Explore Events
            </Button>
          
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
