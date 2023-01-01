import styles from '../styles/Titulo.module.css'
export default function Titulo(props:any){
    console.log(props.children)
    return(
        <div className={styles.titulo}>
        <h1 className={styles.h1Master}>
            {props.children}
            </h1>
        <hr className={styles.hr}/>
        </div>
    )
}