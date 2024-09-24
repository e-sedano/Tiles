import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function Tiles() {
  return (
    <div className='flex justify-center items-center w-screen h-[calc(100vh_-_56px)]'>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map 
          defaultCenter={{lat: 33.783042, lng: -118.1118519}}
          defaultZoom={14}
          disableDefaultUI={true}
        >
          {/* Draw each user's visited tiles */}
        </Map>
      </APIProvider>
    </div>
  )
}