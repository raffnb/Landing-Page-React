import ImgGoogle from '../img/imgGoogle.svg'
import Iconsearch from '../img/iconSearch.svg'
import IconTeclado from '../img/iconTeclado.svg'
import IconMic from '../img/iconMic.svg'
import styles from  '../componentes/Centerpage.module.css'

function CenterGoogle(){
    return(
        <div className = {styles.center}>
            <img src = {ImgGoogle} alt = {'Google'} />

           <div className = {styles.iconcenter}>
            <div className = {styles.iconMicTec}>
            <img  src = {IconTeclado} alt = {'tec'} />
            <img  src = {IconMic} alt = {'mic'} />
            </div>
            
            <img className = {styles.iconSearch} src = {Iconsearch} alt = {'search'} />
           </div>
            <input type="text"  name="fname"/>

        </div>

    )
}

export default CenterGoogle