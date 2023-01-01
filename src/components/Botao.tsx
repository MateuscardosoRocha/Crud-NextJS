import styles from '../styles/button.module.css'

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps){
    return(
        <button onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    )
}