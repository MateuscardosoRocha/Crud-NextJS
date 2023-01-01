import Cliente from "../core/Cliente"
import style from '../styles/Tabela.module.css'


interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExluido?: (cliente: Cliente) => void
}


export default function Tabela(props: TabelaProps){
    

    const exibirAcoes = props.clienteExluido || props.clienteSelecionado 
    function renderizarCabecalho(){
        return(
            
            <tr>
                <th className={style.th}>Código</th>
                <th className={style.th}>Nome</th>
                <th className={style.th}>Idade</th>
                {exibirAcoes ? <th className={style.th}>Ações</th> : false}
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id}>
                    <td className={style.td}>{cliente.id}</td>
                    <td className={style.td}>{cliente.nome}</td>
                    <td className={style.td}>{cliente.idade}</td>
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                  
                </tr>
            )
        })
    }

    function renderizarAcoes(cliente: Cliente){
        return (
            <td>
                {props.clienteSelecionado ? (
            <button onClick={() => props.clienteSelecionado?.(cliente)}>Editar</button>
                ) : false} 
            
                {props.clienteExluido ? (
                    <button onClick={() => props.clienteExluido?.(cliente)}>Apagar</button>
           

                ) : false} 
            
            </td>
        )

        
    }


    return(
       <table className={style.table}>
        <thead className={style.thead}>
     {   renderizarCabecalho()}
        </thead>
        <tbody>
            {renderizarDados()}
        </tbody>
       </table>
    )
}