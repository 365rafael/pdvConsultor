const VendaSchema = {
  name: "Venda",
  primaryKey: "id",
  properties: {
    id: "string",
    cliente: "string",
    produto: "produto",
    preco: "float",
    quantidade: "float",
  },
};

export default VendaSchema;
