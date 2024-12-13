import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import AppNavbar from '../../partials/navBar/AppNavbar';
import { EcommercenavLinks } from '../../constants/objects';
import image from '../../constants/images';
import { useLocation } from 'react-router-dom';

// Create custom marker icons
const createCustomIcon = (color) => {
    return L.divIcon({
        className: 'custom-marker',
        html: `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 20 30">
            <path d="M10 0C15.523 0 20 4.477 20 10c0 5.25-4 10-10 20C4 20 0 15.25 0 10 0 4.477 4.477 0 10 0zm0 16c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" fill="${color}"/>
            <circle cx="10" cy="10" r="2" fill="white" />
          </svg>
        `,
        iconSize: [20, 30],
        iconAnchor: [10, 30],
    });
};

const TrackOrderPage = () => {
    const location = useLocation();
    const { order } = location.state; // Get the passed order data

    // Coordinates for driver's and delivery's locations
    const driverPosition = [4.0720, 9.7085]; // Example coordinates
    const deliveryPosition = [4.0660, 9.7740]; // Example coordinates

    const driverIcon = createCustomIcon('black');
    const deliveryIcon = createCustomIcon('green');

    const [route, setRoute] = useState([]);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const fetchRoute = async () => {
            const response = await fetch(`https://router.project-osrm.org/route/v1/driving/${driverPosition[1]},${driverPosition[0]};${deliveryPosition[1]},${deliveryPosition[0]}?geometries=geojson`);
            const data = await response.json();
            if (data.routes && data.routes.length > 0) {
                const routeCoordinates = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
                setRoute(routeCoordinates);
            }
        };

        fetchRoute();
    }, [driverPosition, deliveryPosition]);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
        setIsFullscreen(!isFullscreen);
    };

    return (
        <div>
            <AppNavbar array={EcommercenavLinks} see={false}/>
            <div className='flex flex-col md:flex-row gap-5 p-2 w-full bg-gray-50'>
                <div className='md:w-1/3 ring-1 shadow-lg shadow-gray-400 rounded-lg ring-gray-300 bg-white'>
                    <h1 className="text-2xl text-gray-800 font-bold p-2 text-center border-b-2 rounded-t-lg bg-gray-100 mb-4">Order Tracking</h1>
                    <div className='w-full flex flex-col p-6'>
                        <p>{order}</p>
                        <img src={image.HERO_Forum} className='self-center my-2 bg-gray-200 rounded shadow-lg shadow-gray-400 w-72 h-48' />
                        <p className='text-center font-semibold text-gray-700'>{order.name}</p>
                        <p className='text-center my-1 text-xs'><span className='p-1 rounded-full px-2 bg-blue-200 text-blue-800'>In transport</span></p>
                        <div className="mt-4 bg-green-100 rounded p-1">
                            <p className="text-sm">Driver Location: <span className='font-semibold'>{driverPosition.join(', ')}</span></p>
                            <p className="text-sm">Delivery Location: <span className='font-semibold'>{deliveryPosition.join(', ')}</span></p>
                            <p className="text-sm">Estimated Delivery Time: <span className='font-semibold'>3:30 PM</span></p>
                        </div>
                        {/* <button 
                            onClick={toggleFullscreen}
                            className="w-fit bg-blue-500 text-white px-4 py-2 rounded-lg z-10"
                        >
                            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        </button> */}
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col bg-gray-100">
                    <div className="relative">
                        <MapContainer center={driverPosition} zoom={13} className="w-full rounded-lg h-[714px]">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={driverPosition} icon={driverIcon} />
                            <Marker position={deliveryPosition} icon={deliveryIcon} />
                            {route.length > 0 && <Polyline positions={route} color="blue" />}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackOrderPage;