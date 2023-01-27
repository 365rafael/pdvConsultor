import Realm from "realm";

import FornecedorSchema from "../Schemas/FornecedorSchema";
import ProdutoSchema from "../Schemas/ProdutoSchema";
import VendaSchema from "../Schemas/VendaSchema";

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [FornecedorSchema, ProdutoSchema, VendaSchema],
    schemaVersion: 1,
  });

  return realm;
};
