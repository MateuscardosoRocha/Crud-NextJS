import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import styles from "../styles/index.module.css";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home() {

 const { excluirCliente,novoCliente, cliente,clientes,exibirTabela, obterTodos,selecionarCliente,salvarCliente, tabelaVisivel} = useClientes()



  return (
    <div className={styles.center}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <Botao onClick={novoCliente}>Novo Cliente</Botao>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExluido={excluirCliente}
            ></Tabela>
          </>
        )
        :(
          <Formulario
           cliente={cliente}
           clienteMudou={salvarCliente}
           cancelado={() => exibirTabela()}
           />
        )}
      </Layout>
    </div>
  );
}
