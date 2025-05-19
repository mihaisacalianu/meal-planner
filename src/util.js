export function transformIngredients(ingredients) {
  const split = ingredients.split(/[;,]\s*/);
  console.log(split);
  return split.map(item => item.trim()).filter(item => item.length > 0);
}
