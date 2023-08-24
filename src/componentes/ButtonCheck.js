import styles from '../componentes/BtnCheck.module.css'
import IconSeguranca from '../img/iconSeguranca.svg'

function ButtonCheck(){
    return(
        <div >
        <div className = {styles.btn}>
            <button type = "button">Pesquisa Google</button>
            <button type = "button">Estou com sorte</button>
        </div>
        <div className = {styles.check}>
        <img src = {IconSeguranca} alt = {'check'} />
        <p>Faça o Check-up de privacidade</p>

        </div>


        </div>
    )
}

export default ButtonCheck