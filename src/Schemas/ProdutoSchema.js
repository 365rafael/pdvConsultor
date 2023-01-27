const ProdutoSchema = {
  name: "Produto",
  primaryKey: "id",
  properties: {
    id: "string",
    name: "string",
    preco: "float",
    fornecedor: "Fornecedor",
    estoque: "float",
  },
};

export default ProdutoSchema;
