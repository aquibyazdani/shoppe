export function sortProducts(products, criteria, order) {
  // Create a copy of the original array to avoid modifying it
  const sortedProducts = [...products];

  return sortedProducts.sort((a, b) => {
    let comparison = 0;

    if (criteria === "alphabetic") {
      comparison = a.name.localeCompare(b.name);
    } else if (criteria === "numeric") {
      comparison = parseInt(a.id) - parseInt(b.id);
    } else if (criteria === "price") {
      const priceA = parseInt(a.offerPrice.replace("₹ ", ""));
      const priceB = parseInt(b.offerPrice.replace("₹ ", ""));
      comparison = priceA - priceB;
    }

    return order === "asc" ? comparison : -comparison;
  });
}

export function linkToProduct(product) {
  console.log("product: ", product);
  const link_product = product?.name
    ?.split(" ")
    .join("-")
    .toLowerCase()
    .replace("%", "");
  console.log("link_product: ", link_product);
  return `/products/${link_product}`;
}

export function linkToCollection(name) {
  const link_collection = name?.split(" ").join("-").toLowerCase();
  return `/collection/${link_collection}`;
}
