/**
 * Printful Product
 */

import { BaseModule } from "../BaseModule";
import { Variants } from "./Variants";
import { RequestHelper } from "../../RequestHelper";

type ProductQuery = {
  offset?: string;
  limit?: string;
};

class Products extends BaseModule {
  public variants: Variants;

  constructor(requestHelper: RequestHelper) {
    super(requestHelper);
    this.variants = new Variants(requestHelper);
  }

  get(id: number): Promise<Response> {
    //Get one Product
    return this._execute(`/products/${id}`, {
      method: "Get",
    });
  }

  getAll(category_ids: string[]): Promise<Response> {
    //Get all Products with given category_ids
    const category_id = category_ids.join(",");
    return this._execute(`/products?category_id=${category_id}`, {
      method: "Get",
    });
  }
}

export { Products };
