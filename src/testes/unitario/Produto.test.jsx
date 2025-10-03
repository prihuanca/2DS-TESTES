import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Produto } from "../../componentes/Produto";

describe("Teste do componente Produto", () => {
  it("Deve renderizar o nome do produto corretamente", () => {
    render(<Produto nome="Chuteira" preco="800" />);

    const elementoProduto = screen.getByText("Chuteira");

    expect(elementoProduto).toBeInTheDocument();
  });

  it("Deve renderizar o nome do produto corretamente", () => {
    render(<Produto nome="Bola" preco="400" />);

    const componenteProdutoComPreco = screen.getByText("R$ 400,00");

    expect(componenteProdutoComPreco).toBeInTheDocument();
  });
});
