import { useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";

export const Produto = ({ nome, preco }) => {
  const [productCount, setProdurctCount] = useState(1);

  //USESTATE - o estado é uma condição que ele esta hoje, pode ser o modo claro ou mode escuro,
  //pode ser a quantidade de coisas em um carreinho, tudo que é uma interação é um estado 

  const converterValorEmReais = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div>
      <h4>{nome}</h4>
      <p>{converterValorEmReais(preco)}</p>

      <Counter
        onIncrement={() => {setProdurctCount ((prev) =>  prev +1); 
        }}

        onDecrement={() => {setProdurctCount ((prev) =>(prev > 1 ? prev - 1 : 1)); 
        }}

      />
  
    <Button
      data-testid="add-to-cart-button"
      onClick={() => {
        // alert(`${nome} - ${converterValorEmReais(preco)}`);
        alert(nome + "-" + converterValorEmReais(preco));
      }}
    >
      Adicionar ao Carrinho ({productCount} produtos)
      </Button>
    </div>

  );
};
