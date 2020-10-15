import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Leaflet from 'leaflet';
//import mapIcon from '../utils/mapIcon'; //CORRIGIR ISSO Rápido


import mapMakerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';


const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,

  iconSize: [58, 68],
  iconAnchor: [29,68],
  popupAnchor: [170, 2],
});

function OrphanageMap() {
  return (
    <div id="page-map">

      <aside>

        <header>
          <img src={ mapMakerImg } alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Goiânia</strong>
          <span>Goiás</span>
        </footer>

      </aside>

      <Map 
        center={[-16.6838756,-49.2596639]} 
        zoom={14}
        style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}` }/>

          <Marker 
            icon = {mapIcon}
            position={[-16.6838756,-49.2596639]}
          >

            <Popup closeButton={false} minWidth= {240} maxWidth={240} className="map-popup">
              Lar das Meninas
              <Link to="orphanages/1">
                <FiArrowRight size = {20} color="#FFF" />
              </Link>
            </Popup>



          </Marker>
          </Map>

          

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanageMap;