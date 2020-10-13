import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages.css';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';



import mapMakerImg from '../images/map-marker.svg';
//import {  } from 'leaflet';

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
        </Map>
      

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanageMap;