
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function LandingFooter(){

	const linkStyle = 
	"text-sm font-medium hover:text-gray-600 text-gray-500"
	const TitleStyle = "font-bold text-green-800"
	const containerStyle = "flex flex-col gap-4"

	return(
		<div className="bg-black w-full h-full p-12 text-gray-100">
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
				<div className={containerStyle}>
					<p className={TitleStyle}>CONTENT</p>
					<Link to="/"  className={linkStyle}>New Assets</Link>
					<Link to="/"  className={linkStyle}>Most popular products</Link>
					<Link to="/"  className={linkStyle}>Search Trends</Link>
					<Link to="/"  className={linkStyle}>Blog</Link>
				</div>
				<div className={containerStyle}>
					<p className={TitleStyle}>INFORMATION</p>
					<Link to="/"  className={linkStyle}>About Us</Link>
					<Link to="/"  className={linkStyle}>Products</Link>
					<Link to="/"  className={linkStyle}>Features</Link>
					<Link to="/"  className={linkStyle}>AgriBUSS guidelines</Link>
					<Link to="/"  className={linkStyle}>Events</Link>
				</div>
				<div className={containerStyle}>
					<p className={TitleStyle}>LEGAL</p>
					<Link  to="/"  className={linkStyle}>Terms of use</Link>
					<Link  to="/"  className={linkStyle}>License agreement</Link>
					<Link  to="/"  className={linkStyle}>Privacy policy</Link>
					<Link  to="/"  className={linkStyle}>cookies policiy</Link>
					<Link  to="/"  className={linkStyle}>Cookies settingd</Link>
					<div className={containerStyle}>
						<p className={TitleStyle}>SUPPORT</p>
						<Link to="/"  className={linkStyle}>FAQ</Link>
						<Link  to="/"  className={linkStyle}>Search guide</Link>
						<Link  to="/"  className={linkStyle}>Contact</Link>
					</div>
				</div>
				<div className={containerStyle}>
					<p className={TitleStyle}>SOCIAL MEDIA</p>
					<div className="flex gap-2">
						<Link to="/" className={linkStyle}><BsFacebook size={20}/></Link>
						<Link to="/"  className={linkStyle}><BsInstagram size={20}/></Link>
						<Link to="/" className={linkStyle} ><BsWhatsapp size={20}/></Link>
						<Link to="/" className={linkStyle} ><BsTwitter size={20}/></Link>
					</div>				
				</div>
			</div> 
			<div className="pt-8 flex justify-center border-t-2 mt-8 gap-2 border-gray-900">
				<p className="font-bold text-2xl">Agri<span className="text-primary">BUSS</span> </p>
				<p className="text-sm text-gray-500 py-2">Copyright ©  {new Date().getFullYear()}. All rights reserved</p>
			</div> 
		</div>
	)
}