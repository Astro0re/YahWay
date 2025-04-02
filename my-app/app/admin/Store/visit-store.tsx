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
          <h1>Welcome to Yahway</h1>
          <p>Let us help you get closer to God today</p>
          </div>

          <div className="p-6">
          <h2>What do we do?</h2>
          <p>We offer christian community building services</p>
          <p>Allowign for the connection of more people to the love of God.</p>
          </div>

          <div className="p-6">
          <h3>Our Goal</h3>
          <p>Connect our users to christ loving chruches closest to them(map)</p>
          <p>Provide a platform for the sale of christian essentials(store)</p>
          <p>Give access to life changing events(events)</p>
          <h3>Our Mission</h3>
          <p>To fufill the great commision.</p>
          </div>
          
          <div className="p-6">
          <h2>Our Services</h2>
            <p>Get in contact with the church of your choice closest to you.</p>
            
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
          <p>For all your chirstian fits and essentials.</p>
          <p>Get tickets to impactful events that are sure to change your life.</p>
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
