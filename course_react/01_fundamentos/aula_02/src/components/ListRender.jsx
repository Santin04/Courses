//importando oque iremos usar
import { useState } from "react";

//criando a função que vai exibir os itens da lista
const ListRender = () => {

  //criando a lista que vamos exibir todos os valores de dentro
  const [nomes, setNomes] = useState(['Mateus', 'Bruno', 'Márcio']);

  //criando a função que deleta um item
  const deleteItem = () => {
    //sorteando um item aleatório
    const randomNumber = Math.floor(Math.random() * 3);

    //pegando os itens da lista e colocando um filtro para excluir aquele que
    //tem um índice igual ao número sorteado
    setNomes((prevNomes) => {
      console.log(prevNomes);
      return prevNomes.filter((item, i) => randomNumber !== i);
    })
  }

  return (
    <div>
      {/* pegando o valor dos item e colocando dentro da variavel item */}
      {/* pegando o indice, para usar como se fosse o id do dado para */}
      {/* evitar um erro de key */}
      {nomes.map((item, i) => (<li key={i}>{item}</li>))}
      <button onClick={deleteItem}>Deletar um item</button>
    </div>
  )
}

export default ListRender;