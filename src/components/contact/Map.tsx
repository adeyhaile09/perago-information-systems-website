// import { useEffect, useRef, useMemo } from 'react';
// import { Loader } from '@googlemaps/js-api-loader';

// type MapProps = {
//   address: string;
// };

// const Mapp = ({ address }: MapProps) => {
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   const geocoder = useMemo(() => new google.maps.Geocoder(), []);

//   useEffect(() => {
//     const loader = new Loader({
//       // apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
//       apiKey: 'AIzaSyC5snlRNPZvV7P93E32zjxbT4hBAEvbSkA',
//       version: 'weekly',
//     });

//     loader.load().then(() => {
//       geocoder.geocode(
//         { address: address },
//         (
//           results: google.maps.GeocoderResult[] | null,
//           status: google.maps.GeocoderStatus
//         ) => {
//           if (status === 'OK' && results) {
//             const map = new google.maps.Map(mapRef.current!, {
//               center: results[0].geometry!.location,
//               zoom: 8,
//             });

//             const marker = new google.maps.Marker({
//               map,
//               position: results[0].geometry!.location,
//             });
//           } else {
//             console.error(
//               `Geocode was not successful for the following reason: ${status}`
//             );
//           }
//         }
//       );
//     });
//   }, [address, geocoder]);

//   return <div style={{ height: '400px' }} ref={mapRef} />;
// };
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, Group } from '@mantine/core';

const Mapp = () => {
  const containerStyle = {
    width: '75%',
    height: '350px',
  };

  const center = {
    lat: 9.015497976247856,
    lng: 38.78639063952975,
  };
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!googleMapsApiKey) {
    return <div>Error: Google Maps API Key is missing</div>;
  }
  return (
    <Group position="center">
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Add markers or other map components here */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </Group>
  );
};

export default Mapp;

// export default Mapp;
