import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import {
  URL_MARKER_CURRENT,
  URL_MARKER_DEFAULT,
} from '../../constants/constants';
import 'leaflet/dist/leaflet.css';
import { CurrentOffer, OffersProps } from '../../types/offers';
import useMap from '../../hooks/use-map';

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

type MapProps = {
  offers: OffersProps[];
  currentOffer?: CurrentOffer[];
  selectedPoint?: OffersProps | undefined;
};

function Map({ offers, selectedPoint, currentOffer }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((el) => {
        const marker = new Marker({
          lat: el.location.latitude,
          lng: el.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== undefined && el.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      if (currentOffer) {
        currentOffer.forEach((el) => {
          const marker = new Marker({
            lat: el.location.latitude,
            lng: el.location.longitude,
          });
          marker.setIcon(currentCustomIcon).addTo(markerLayer);
        });
      }
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, currentOffer, selectedPoint]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}
export default Map;
