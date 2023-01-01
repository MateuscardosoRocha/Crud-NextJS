import styles from '../styles/layout.module.css'
import Titulo from './Titulo'

interface LayoutProps{
    titulo: string
    children: any
}


export default function Layout(props:LayoutProps){
    return(
        <div className={styles.center}>
            <div>
                <Titulo>
                    {props.titulo}
                </Titulo>
                <div className={styles.childrens}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}