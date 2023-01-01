import Cliente from "../core/Cliente";
import { useState, useEffect } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel,exibirFormulario,formularioVisivel,exibirTabela} = useTabelaOuForm()

    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  
    useEffect(obterTodos, [])
  
    function obterTodos(){
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente) {
      setCliente(cliente)
      exibirFormulario()
    }
  
   async function excluirCliente(cliente: Cliente) {
     await repo.excluir(cliente)
     obterTodos()
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
  
    async function salvarCliente(cliente: Cliente){
     await  repo.salvar(cliente)
      obterTodos()
    }

    return {
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
    }
  
}