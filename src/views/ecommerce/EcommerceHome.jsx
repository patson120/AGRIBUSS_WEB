import LandingFooter from '../../partials/footer/LandingFooter'
import AppNavbar from '../../partials/navBar/AppNavbar'
import {EcommercenavLinks} from '../../constants/objects'
import Crops from './components/Crops'
import Categories from './components/categories'
import Deals from './components/deals'
import NavMenu from '../../partials/navBar/NavMenu'
import Hero from './components/hero'

export default function EcommerceHome(){
	return(
		<div className="w-screen">	
			<div className="relative ">
				<AppNavbar array={EcommercenavLinks} see={true}/>
				<NavMenu array={EcommercenavLinks}/>
			</div>
			<Hero/>
			<Crops/>
			<Categories/>
			<Deals/>
			<LandingFooter/>
		</div>
	)
}