import ServicoDePagamento from "../src/servicoDePagamento.js";
import assert from "node:assert";

describe("Classe de Serviço de Pagamento", () => {
  it("Validar que um pagamento de R$99,99 recebe categoria padrão", function () {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar("1111-1111-1111", "Empresa A", 99.99);

    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento.categoria, "padrão");
  });

  it("Validar que um pagamento de R$100,00 recebe categoria padrão", function () {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar("2222-2222-2222", "Empresa B", 100.0);

    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento.categoria, "padrão");
  });

  it("Validar que um pagamento de R$100,01 recebe categoria cara", function () {
    // Arrange
    const servicoDePagamento = new ServicoDePagamento();

    // Act
    servicoDePagamento.pagar("3333-3333-3333", "Empresa C", 100.01);

    const ultimoPagamento = servicoDePagamento.consultarUltimoPagamento();

    // Assert
    assert.equal(ultimoPagamento.categoria, "cara");
  });
});
