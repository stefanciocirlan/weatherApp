import React, { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { DEFAULT_POSITION } from './helpers/constants';

let DefaultIcon = L.icon({
    iconUrl: icon,
    iconSize: [35, 46],
    iconAnchor: [17, 46],
    shadowUrl: iconShadow,
});

export default function Map(props) {
    const [position, setPosition] = useState(DEFAULT_POSITION);
    let map;
    let marker;
    useEffect(() => {
        const container = L.DomUtil.get("map");

        if (container != null) {
            container._leaflet_id = null;
        }

        map = L.map("map").setView([position.lat, position.lng], 4);
        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
                maxZoom: 13,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken:
                    "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
            }
        ).addTo(map);
        map.once('focus', function () { map.scrollWheelZoom.enable(); });
        L.Marker.prototype.options.icon = DefaultIcon;
        marker = L.marker([position.lat, position.lng]).addTo(map);
        //marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
        map.addEventListener('click', handleClick);
    }, []);



    const handleClick = (event) => {
        const {handlePosition} = props;
        const latlng = { ...event.latlng };
        console.log(event);
        setPosition(latlng);
        //  dispatch(positionSliceActions.getPosition(latlng));
        handlePosition({ lat: latlng.lat, lng: latlng.lng });
        handleMarker(latlng);
    }

    const handleMarker = (pos) => {
        map.removeLayer(marker);
        marker = L.marker([pos.lat, pos.lng]);
        marker.addTo(map);
    }
    return <div id="map" className="map"></div>;
}