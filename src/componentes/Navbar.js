import styles from './Cnav.module.css'
import Img1 from "../img/img1.png"
import Img2 from "../img/img2.png"


function Navbar(){
return(
    <div className = {styles.nav}>

        <img src={Img2} alt={"logo"}/>
        <img src={Img1} alt={"logo"}/>
        <p>Imagens</p>
        <p>Gmail</p>

    </div>

)
}

export default Navbar