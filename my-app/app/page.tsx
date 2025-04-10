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

        <section className="bg-white p-6 rounded-lg shadow">
            
            <h2 className="text-2xl font-bold mb-4">Welcome to YahWay</h2>
            <div className="mb-4">
                <p>Let us help you get closer to God today</p>
            </div>
                
        </section>
        

        <section className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4 p-2">
        <h2>What do we do?</h2>
          <p>We offer christian community building services</p>
          <p>Allowign for the connection of more people to the love of God.</p>
        </div>
        </section>


        
        <section className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4 p-2">
          <h3>Our Goal</h3>
          <p>Connect our users to christ loving chruches closest to them(map)</p>
          <p>Provide a platform for the sale of christian essentials(store)</p>
          <p>Give access to life changing events(events)</p>
          <h3>Our Mission</h3>
          <p>To fufill the great commision.</p>
          </div>
        </section>


        <section className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4 p-2">
        <h2>Our Services</h2>
          <p>Get in contact with the church of your choice closest to you.</p>
          <p>For all your chirstian fits and essentials.</p>
          <p>Get tickets to impactful events that are sure to change your life.</p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
        <div className="mb-4 p-2">
        <h2>Our Partners</h2>
          <div className="flex ">
            <div>
              <Image
              aria-hidden
              src="/Yahway Logo.svg"
              alt="Partner"
              width={90}
              height={90}
              className="items- center"
              />
              <p></p>
            </div>
              
          
          </div>  
        </div>
        </section>
          

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
