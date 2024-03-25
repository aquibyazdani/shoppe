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
