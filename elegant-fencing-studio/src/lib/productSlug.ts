export const slugifyProductName = (value: string): string => {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export const getProductSlug = (product: { title?: string; name?: string; id?: string }): string => {
  const source = product.title || product.name || "";
  const slug = slugifyProductName(source);
  return slug || (product.id ?? "");
};

