
import {BsGeoAltFill} from 'react-icons/bs'
import Recat from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from 'google-map-react'


export default function Map({location, zoomLevel}){

		const Location = {
		  address: '1600 Amphitheatre Parkway, Mountain View, california.',
		  lat: 37.42216,
		  lng: -122.08427,
		}


	return(
		  <div className="w-50 h-50">
		    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

		    <div className="google-map">
		      <GoogleMapReact
		        bootstrapURLKeys={{ key: '' }}
		        defaultCenter={Location}
		        defaultZoom={9}
		      >
		        <LocationPin
		          lat={Location.lat}
		          lng={Location.lng}
		          text={Location.address}
		        />
		      </GoogleMapReact>
		    </div>
		  </div>
	)
}