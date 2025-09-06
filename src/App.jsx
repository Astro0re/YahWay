import './App.css'
import yahwaylogo from './assets/Yahway Logo.svg'
import communityImage from './assets/137891.jpg'
import partner1 from './assets/x1oIWTes_400x400.jpg'
import partner2 from './assets/Esi4Hxj9_400x400.jpg'
import partner3 from './assets/HOTR.png'
import partner4 from './assets/rccg-for-web-150x150.png'
import pastorImage from './assets/IMG-20220926-WA0074.jpg'
import Events from './components/Events'
import Store from './components/Store'
function App() {
	return (
		<div className="bg-teal-900 text-gray-800 min-h-screen p-4">
			{/* Header Section */}
			<section className="flex flex-row p-3 gap-5 justify-between">   
				<img 
					src={yahwaylogo} 
					alt="Logo"
					style={{
						width: '200px',
						height: 'auto',
						justifyItems: 'center',
						alignItems: 'center',
						paddingTop: '20px'
					}}
					className="h-20 w-auto lg:w-200" 
				/>
				<div className="bg-white p-6 rounded-lg shadow gap-8 justify-right items-right">
					<nav className="flex flex-row gap-8 text-lg justify-center items-center">
						<a href="Maps.html">Map</a>
						<a href="Store.html">Store</a>
						<a href="Events.html">Events</a>
						<a href="Partners.html">Partners</a>
						<a href="Sign-Up.html">Sign Up</a>
					</nav>
				</div>
			</section>
			<Events />
			<Store />
			{/* Hero Section */}
			<section id="hero_" className="bg-white p-10 m-2 rounded-lg justify-center items-center text-center">
				<p className="text-8xl p-1">Welcome to YahWay</p>
				<p className="text-3xl p-1">LET'S HELP YOU GET CLOSER TO GOD TODAY</p>
				<p className="text-2xl p-1">With our carefully scouted and trusted church partners</p>
				<p className="text-2xl p-1">Let's connect you with a church to call home</p>
			</section> 
			
			{/* About Section - 2 columns */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-0 m-5">
				<section id="about_" className="bg-white p-6 m-0 rounded-lg shadow justify-center items-center text-center">
					<h2>What do we do?</h2>
					<p>We offer christian community building services</p>
					<p>Allowign for the connection of more people to the love of God.</p>
				</section>
				<section id="about_" className="bg-white p-0 m-0 rounded-lg shadow justify-center items-center text-center">
					<img src={communityImage} alt="Community" className="h-fit w-fit" />
				</section>
			</div>

			{/* Services Section - 2 columns */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-0 m-5">
				<section id="services_" className="bg-white p-0 m-0 rounded-lg shadow justify-center items-center text-center">
					<img src={communityImage} alt="Community" className="h-fit w-fit" />
				</section>
				<section id="about_" className="bg-white p-6 m-0 rounded-lg shadow justify-center items-center text-center">
					<h3>Our Goal</h3>
					<p>Connect our users to christ loving chruches closest to them(map)</p>
					<p>Provide a platform for the sale of christian essentials(store)</p>
					<p>Give access to life changing events(events)</p>
					<h3>Our Mission</h3>
					<p>To fufill the great commision.</p>
				</section>
			</div>
		
			{/* Services Section - 2 columns */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-0 m-5">
				<section id="services_" className="bg-white p-6 m-0 rounded-lg shadow justify-center items-center text-center">
					<h2>Our Services</h2>
					<p>Get in contact with the church of your choice closest to you.</p>
					<p>For all your chirstian fits and essentials.</p>
					<p>Get tickets to impactful events that are sure to change your life.</p>  
				</section> 
				
				<section id="about_" className="bg-white p-0 m-0 rounded-lg shadow justify-center items-center text-center">
					<img src={communityImage} alt="Community" className="h-fit w-fit" />
				</section>
			</div>
		
			{/* Partners Section */}
			<section id="partners_" className="bg-white p-6 m-2 rounded-lg shadow gap-2 justify-center items-center text-center">
				<h2>Our Partners</h2>
				<div className="flex gap-5 m-5 align-center">
					<img src={partner1} alt="Partners" className="rounded h-20 w-auto mx-auto max-w-2xl md:text-center" />
					<img src={partner2} alt="Partners" className="rounded h-20 w-auto mx-auto max-w-2xl md:text-center" />
					<img src={partner3} alt="Partners" className="rounded h-20 w-auto mx-auto max-w-2xl md:text-center" />
					<img src={partner4} alt="Partners" className="rounded h-20 w-auto mx-auto max-w-2xl md:text-center" />
				</div>
				<a href="Partners.html" className="text-blue-500 p-2">View All</a>
			</section>
		 
			{/* Words From Leaders Section */}
			<section className="bg-white p-6 m-2 gap-5 rounded-lg shadow justify-center items-center text-center">
				<p>Words From Our Leaders</p>
				<div id="Words_From_Leaders" className="grid grid-cols-1 md:grid-cols-2 bg-white p-6 m-2 gap-5 justify-center items-center text-center">
					
					<div className="h-200 w-30 p-5 m-1 shadow">
						<img src={pastorImage} className="h-60 width-auto mx-auto max-w-2xl md:text-center rounded" alt="Pastor Cosmas" />
						<p className="text-3xl">Pastor Cosmas Illechucku</p>
						<p>General Overseer</p>
						<p>Charismatic Renewal Ministries</p>
					</div>
					<div className="h-200 w-70 p-2 m-1 rounded shadow">
						<p className="text-2xl">"And thus says the lord..."</p>
					</div>
				</div>  
			</section>
			

			{/* Footer */}
			<footer>
				<section className="bg-white p-6 m-2 rounded-lg shadow justify-left items-left text-left">
					<h2 className="text-center text-3xl">Contact Us</h2>
					<p className="text-center">For any inquiries, please contact us at:</p>
				
					<div className="grid grid-cols-2 md:grid-cols-3 justify-between m-5 gap-3">
						
						<div className="justify-center text-left">
							<p>Official</p>
							<p>Phone:</p>
							<p className="hover:text-blue-500">080-123-4567</p>
							<p>Email:</p>
							<p className="hover:text-blue-500">example@gmail.com</p>
						</div> 
						
						<div className="text-left justify-center">
							<p>Socials </p>
							<a className="hover:text-blue-500">@yahway</a>
							<p>Instagram</p>
							<a className="hover:text-blue-500">@yahway</a>
							<p>Twitter</p>
							<a className="hover:text-blue-500">@yahway</a>
							<p>Facebook</p>
							<a className="hover:text-blue-500">@yahway</a>
						</div>  
						
						<div className="grid grid-cols-1 justify-center text-left">
							<a className="hover:text-blue-500">Terms</a>
							<a className="hover:text-blue-500">Privacy</a>
							<a className="hover:text-blue-500">Docs</a>
							<a className="hover:text-blue-500">Help</a>
						</div> 
					</div>
					
					<div className="text-center">
						&copy; 2025 YahWay. All right reserved
					</div>
				</section>
			</footer>     
		</div>
	)
}

export default App
