import '../css/map.css';
import map from '../assets/map.jpg';

function Map(){
    return(
        <section className="map">
            <h2 className="mapTitle">Mapa</h2>
            <img src={map} alt="mapa do parque Busch Gardens Tampa Bay" className="mapImg"></img>
        </section>
    );
}


export default Map;