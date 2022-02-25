import { IProduct } from "../models/product.model";

const BASIC_TAX: number = 10;
const IMPORT_TAX: number = 5;

export const calculateRawTotalPrice = (items: IProduct[]) => {
  const totalRawPrice = items.reduce((prevItem, currItem) => {
    return prevItem + (currItem.price * currItem.amount)
  }, 0)

  return totalRawPrice;
}

export const calculateTotalTaxes = (items: IProduct[]) => {
  const totalSalesTaxes = items.reduce((prevItem, currItem) => {
    let totalTaxes = calculateSingleProductTaxes( currItem, prevItem);   
    return totalTaxes;
  }, 0);

  return totalSalesTaxes;
};

export const calculateSingleProductTaxes = (currItem: IProduct, prevItem: number = 0) => {
  if (currItem.taxesFree && !currItem.imported) {
    return prevItem;
  } else if (currItem.taxesFree && currItem.imported) {
    return prevItem + (currItem.amount * currItem.price * IMPORT_TAX) / 100;
  } else if (!currItem.taxesFree && currItem.imported) {
    return prevItem + ((currItem.amount * currItem.price * (BASIC_TAX + IMPORT_TAX)) / 100);
  } else if (!currItem.taxesFree && !currItem.imported) {
    return prevItem + (currItem.amount * currItem.price * BASIC_TAX) / 100;
  } else {
    return 0;
  }
}

export const roundtoNearestDecimal = (num: number) => {
    return Number((Math.ceil(num *20) /20).toFixed(2));
}
