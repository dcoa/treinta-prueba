import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const center = {
    lat: 4.6097100,
    lng: -74.0817500
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '50vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBhhNfbFNW9eZkA0q-wUXNYVWEoDX9b91Q" }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals

            >
                <AnyReactComponent
                    lat={4.6097100}
                    lng={ -74.0817500}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map
