import { Registry } from "../common/store/registry";
import { AuthStore } from "./AuthStore";
import { ProductsStore } from "./ProductsStore";

Registry.addStore([
  AuthStore,
  ProductsStore
]);
