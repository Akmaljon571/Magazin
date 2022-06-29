import reklama from '../../img/2taliRasm.png'
import './reklama.scss'


function Reklama() {
    return ( 
        <div className="reklama">
            <h1 className="reklama_h1">Аксессуары для 
            Iphone 13 Pro Max</h1>
            <img src={reklama} className = 'reklama_img' alt="reklama" />
        </div>
     );
}

export default Reklama
