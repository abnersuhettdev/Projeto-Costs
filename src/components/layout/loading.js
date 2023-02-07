import styles from './loading.module.css'
import loading from '../../img/loading.svg'

function Loading (){

    return(
        <div className={styles.loader_container}>
            <img src={loading} alt="Loading" />
        </div>
    )
}

export default Loading