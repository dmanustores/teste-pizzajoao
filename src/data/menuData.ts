export interface MenuItem {
  id: string;
  name: string;
  price: number;
  ingredients?: string;
  category: string;
  subcategory: string;
}

// PIZZAS TRADICIONAIS
export const pizzasTradicionais: MenuItem[] = [
  { id: "pt1", name: "Bauru c/ Brócolis", price: 58.90, ingredients: "Molho, presunto, catupiry, brócolis, milho, tomate, cebola, alho frito, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt2", name: "Bauru c/ Provolone e Milho", price: 55.90, ingredients: "Molho, presunto, catupiry, provolone, milho, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt3", name: "Bauru c/ Provolone e Bacon", price: 56.90, ingredients: "Molho, presunto, catupiry, bacon, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt4", name: "Bauru c/ Frango", price: 56.90, ingredients: "Molho, presunto, catupiry, frango, milho, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt5", name: "Bauru c/ Lombo", price: 58.90, ingredients: "Molho, presunto, catupiry, lombo, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt6", name: "Bauru c/ Milho e Bacon", price: 58.90, ingredients: "Molho, presunto, catupiry, milho, bacon, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt7", name: "Mussarela", price: 49.90, ingredients: "Molho, mussarela, tomate, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt8", name: "Presunto e Queijo", price: 49.90, ingredients: "Molho, presunto, mussarela, tomate, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt9", name: "Portuguesa", price: 56.90, ingredients: "Molho, presunto, ervilha, tomate, cebola, ovos, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt10", name: "Portuguesa Especial", price: 62.90, ingredients: "Molho, presunto, ervilha, tomate, cebola, ovos, palmito, parmesão, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt11", name: "Portuguesa à Moda", price: 69.90, ingredients: "Molho, presunto, catupiry, frango desfiado, ervilha, milho, palmito, parmesão, tomate, cebola, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt12", name: "Calabresa", price: 56.90, ingredients: "Molho, mussarela, calabresa, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
  { id: "pt13", name: "Calabresa Especial", price: 59.90, ingredients: "Molho, catupiry, provolone, calabresa, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "tradicionais" },
];

// PIZZAS ESPECIAIS
export const pizzasEspeciais: MenuItem[] = [
  { id: "pe1", name: "Quatro Queijos", price: 62.90, ingredients: "Molho, musarela, catupiry, provolone, gorgonzola, tomate, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe2", name: "Napolitana", price: 54.90, ingredients: "Molho, mussarela, parmesão, tomate, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe3", name: "Frango", price: 56.90, ingredients: "Molho, frango, tomate, cebola, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe4", name: "Frango com Catupiry", price: 59.90, ingredients: "Molho, mussarela, catupiry, frango, milho, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe5", name: "Frango à Moda", price: 69.90, ingredients: "Molho, frango, milho, palmito, parmesão, tomate, cebola, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe6", name: "Caipira", price: 59.90, ingredients: "Molho, catupiry, frango, milho, ovos, batata palha, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe7", name: "Atum", price: 59.90, ingredients: "Molho, atum, tomate, cebola, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe8", name: "Atum com Catupiry", price: 64.90, ingredients: "Molho, mussarela, catupiry, atum, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe9", name: "Atum à Moda", price: 69.90, ingredients: "Molho, atum, milho, palmito, parmesão, tomate, cebola, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe10", name: "Aliche", price: 59.90, ingredients: "Molho, mussarela, aliche, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe11", name: "Brócolis", price: 56.90, ingredients: "Molho, mussarela, brócolis, tomate, cebola, milho, alho frito, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe12", name: "Brócolis c/ Catupiry e Bacon", price: 65.90, ingredients: "Molho, mussarela, catupiry, brócolis, tomate, cebola, milho, alho frito, bacon, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe13", name: "Palmito", price: 59.90, ingredients: "Molho, palmito, ervilha, tomate, cebola, coberta com mussarela, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe14", name: "Vegetariana", price: 64.90, ingredients: "Molho, mussarela, brócolis, palmito, ervilha, milho, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe15", name: "Calabresa com Catupiry", price: 62.90, ingredients: "Molho, mussarela, catupiry, calabresa, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe16", name: "Calabresa c/ Provolone e Bacon", price: 69.90, ingredients: "Molho, mussarela, provolone, calabresa, tomate, cebola, bacon, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe17", name: "Baiana", price: 58.90, ingredients: "Molho, mussarela, calabresa, tomate, cebola, pimenta, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe18", name: "Baiana à Moda", price: 64.90, ingredients: "Molho, mussarela, catupiry, calabresa, ovos, tomate, cebola, pimenta, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe19", name: "Lombo", price: 58.90, ingredients: "Molho, musarela, lombo, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe20", name: "Lombo com Catupiry", price: 64.90, ingredients: "Molho, musarela, lombo, catupiry, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe21", name: "Lombo à Moda", price: 66.90, ingredients: "Molho, catupiry, provolone, lombo, milho, palmito, tomate, cebola, coberto com mussarela, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe22", name: "Lombo c/ Provolone e Bacon", price: 64.90, ingredients: "Molho, mussarela, provolone, lombo, tomate, cebola, bacon, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe23", name: "Milho", price: 54.90, ingredients: "Molho, musarela, milho, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe24", name: "Milho c/ Catupiry", price: 58.90, ingredients: "Molho, musarela, catupiry, milho, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe25", name: "Milho c/ Catupiry e Bacon", price: 64.90, ingredients: "Molho, musarela, catupiry, milho, tomate, cebola, bacon, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe26", name: "Milho à Moda", price: 66.90, ingredients: "Molho, catupiry, provolone, milho, palmito, tomate, cebola, coberto com mussarela, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe27", name: "Dois Queijos", price: 56.90, ingredients: "Molho, mussarela, provolone, tomate, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe28", name: "Três Queijos", price: 59.90, ingredients: "Molho, mussarela, provolone, gorgonzola, tomate, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe29", name: "Bacon", price: 58.90, ingredients: "Molho, mussarela, bacon, milho, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe30", name: "Moda da Casa", price: 69.90, ingredients: "Molho, presunto, mussarela, provolone, salame, ervilha, milho, ovos, bacon, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe31", name: "Carne Seca", price: 64.90, ingredients: "Molho, mussarela, carne seca, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
  { id: "pe32", name: "Carne Seca à Baiana", price: 68.90, ingredients: "Molho, mussarela, catupiry, carne seca, ovos, pimenta, tomate, cebola, azeitonas e orégano", category: "pizza", subcategory: "especiais" },
];

// PIZZAS DOCES
export const pizzasDoces: MenuItem[] = [
  { id: "pd1", name: "Brigadeiro", price: 49.90, ingredients: "Chocolate, creme de leite, leite condensado e granulado", category: "pizza", subcategory: "doces" },
  { id: "pd2", name: "Confeti", price: 49.90, ingredients: "Chocolate, creme de leite, leite condensado e confeti", category: "pizza", subcategory: "doces" },
  { id: "pd3", name: "Prestígio", price: 49.90, ingredients: "Chocolate, creme de leite, leite condensado e coco", category: "pizza", subcategory: "doces" },
  { id: "pd4", name: "Califórnia", price: 54.90, ingredients: "Presunto, queijo, figo, pêssego em calda, abacaxi e banana", category: "pizza", subcategory: "doces" },
];

// BROTOS
export const brotosNames = [
  "Quatro Queijos", "Dois Queijos", "Frango", "Frango c/ Catupiry", "Calabresa",
  "Calabresa c/ Catupiry", "Atum", "Atum c/ Catupiry", "Portuguesa Especial",
  "Portuguesa", "Bacon", "Milho", "Milho c/ Catupiry e Bacon", "Baiana",
  "Lombo", "Lombo c/ Catupiry", "Palmito", "Mussarela", "Presunto e Queijo",
  "Aliche", "Carne Seca", "Brócolis", "Brócolis c/ Catupiry e Bacon"
];

export const brotos: MenuItem[] = brotosNames.map((name, i) => ({
  id: `br${i + 1}`,
  name,
  price: 20.00,
  category: "pizza",
  subcategory: "brotos",
}));

export const brotosDoces: MenuItem[] = [
  { id: "brd1", name: "Brigadeiro (Broto)", price: 20.00, category: "pizza", subcategory: "brotos-doces" },
  { id: "brd2", name: "Confeti (Broto)", price: 20.00, category: "pizza", subcategory: "brotos-doces" },
  { id: "brd3", name: "Prestígio (Broto)", price: 20.00, category: "pizza", subcategory: "brotos-doces" },
  { id: "brd4", name: "Califórnia (Broto)", price: 25.00, category: "pizza", subcategory: "brotos-doces" },
];

// LANCHES
export const lanchesBaby: MenuItem[] = [
  { id: "lb1", name: "Baby Hambúrguer", price: 20.00, ingredients: "Hambúrguer e queijo (acompanha fritas)", category: "lanche", subcategory: "baby" },
  { id: "lb2", name: "Baby Frango", price: 20.00, ingredients: "Frango desfiado e queijo (acompanha fritas)", category: "lanche", subcategory: "baby" },
  { id: "lb3", name: "Baby Salsicha", price: 20.00, ingredients: "Salsicha e queijo (acompanha fritas)", category: "lanche", subcategory: "baby" },
];

export const lanchesHamburguer: MenuItem[] = [
  { id: "lh1", name: "X Burguer", price: 17.00, ingredients: "Hambúrguer e queijo", category: "lanche", subcategory: "hamburguer" },
  { id: "lh2", name: "X Burguer Duplo", price: 20.00, ingredients: "Dois hambúrgueres e queijo", category: "lanche", subcategory: "hamburguer" },
  { id: "lh3", name: "X Salada", price: 22.00, ingredients: "Hambúrguer, queijo, catupiry, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh4", name: "X Salada c/ Presunto", price: 24.00, ingredients: "Hambúrguer, queijo, catupiry, presunto, milho, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh5", name: "X Salada c/ Palmito", price: 25.00, ingredients: "Hambúrguer, queijo, catupiry, palmito, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh6", name: "X Salada c/ Frango", price: 25.00, ingredients: "Hambúrguer, queijo, catupiry, frango desfiado, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh7", name: "X Salada Especial", price: 24.00, ingredients: "Hambúrguer, queijo, provolone, milho, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh8", name: "X Bacon", price: 25.00, ingredients: "Hambúrguer, queijo, catupiry, bacon, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh9", name: "X Egg Bacon", price: 27.00, ingredients: "Hambúrguer, queijo, catupiry, ovo, bacon, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh10", name: "X Egg Salada", price: 23.00, ingredients: "Hambúrguer, queijo, catupiry, ovo, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh11", name: "X Tudo", price: 28.00, ingredients: "Hambúrguer, queijo, catupiry, presunto, ovo, calabresa, milho, bacon, tomate e alface", category: "lanche", subcategory: "hamburguer" },
  { id: "lh12", name: "X Tudo Especial", price: 28.00, ingredients: "Hambúrguer, queijo, catupiry, presunto, ovo, frango desfiado, milho, bacon, tomate e alface", category: "lanche", subcategory: "hamburguer" },
];

export const lanchesFrango: MenuItem[] = [
  { id: "lf1", name: "Filé Salada", price: 28.00, ingredients: "Filé de frango, queijo, catupiry, tomate e alface", category: "lanche", subcategory: "frango" },
  { id: "lf2", name: "Frango Especial", price: 26.00, ingredients: "Frango desfiado, queijo, presunto, provolone, milho, tomate e alface", category: "lanche", subcategory: "frango" },
  { id: "lf3", name: "Frango Salada c/ Palmito", price: 26.00, ingredients: "Frango desfiado, queijo, palmito, tomate e alface", category: "lanche", subcategory: "frango" },
];

export const lanchesContraFile: MenuItem[] = [
  { id: "lcf1", name: "Paulista", price: 28.00, ingredients: "Bife, queijo, tomate e alface (pão francês)", category: "lanche", subcategory: "contra-file" },
  { id: "lcf2", name: "Americano", price: 30.00, ingredients: "Bife, queijo, presunto, ovo, tomate e alface (pão francês)", category: "lanche", subcategory: "contra-file" },
];

export const lanchesSalsicha: MenuItem[] = [
  { id: "ls1", name: "Cachorro Quente Simples", price: 15.00, ingredients: "Salsichas, vinagrete, batata palha e alface", category: "lanche", subcategory: "salsicha" },
  { id: "ls2", name: "Cachorro Quente Especial", price: 20.00, ingredients: "Salsichas, queijo, catupiry, milho, bacon, vinagrete, batata palha e alface", category: "lanche", subcategory: "salsicha" },
];

export const beirutes: MenuItem[] = [
  { id: "be1", name: "Beirute de Carne", price: 38.90, ingredients: "Pão sírio, contra-filé, queijo, presunto, ovo, bacon, palmito, tomate e alface (acompanha fritas)", category: "lanche", subcategory: "beirute" },
  { id: "be2", name: "Beirute de Frango", price: 36.90, ingredients: "Pão sírio, filé de frango, queijo, presunto, ovo, bacon, palmito, tomate e alface (acompanha fritas)", category: "lanche", subcategory: "beirute" },
  { id: "be3", name: "Beirute de Lombo", price: 36.90, ingredients: "Pão sírio, lombo, queijo, presunto, ovo, bacon, palmito, tomate e alface (acompanha fritas)", category: "lanche", subcategory: "beirute" },
  { id: "be4", name: "Beirute Frango Defumado", price: 25.90, ingredients: "Pão sírio, fatia de peito frango defumado, queijo, presunto, ovo, bacon, tomate e alface (acompanha fritas)", category: "lanche", subcategory: "beirute" },
  { id: "be5", name: "Beirute de Presunto", price: 28.90, ingredients: "Pão sírio, presunto, queijo, provolone, ovo, bacon, tomate e alface (acompanha fritas)", category: "lanche", subcategory: "beirute" },
];

export const porcoes: MenuItem[] = [
  { id: "po1", name: "Fritas pequena (~250g)", price: 18.00, category: "lanche", subcategory: "porcao" },
  { id: "po2", name: "Fritas peq. c/ bacon (~250g)", price: 25.00, category: "lanche", subcategory: "porcao" },
  { id: "po3", name: "Fritas peq. c/ cheddar e bacon (~250g)", price: 28.00, category: "lanche", subcategory: "porcao" },
  { id: "po4", name: "Fritas média (~400g)", price: 25.00, category: "lanche", subcategory: "porcao" },
  { id: "po5", name: "Fritas méd. c/ bacon (~400g)", price: 32.00, category: "lanche", subcategory: "porcao" },
  { id: "po6", name: "Fritas méd. c/ cheddar e bacon (~400g)", price: 35.00, category: "lanche", subcategory: "porcao" },
  { id: "po7", name: "Fritas grande (~550g)", price: 30.00, category: "lanche", subcategory: "porcao" },
  { id: "po8", name: "Fritas gde. c/ bacon (~550g)", price: 38.00, category: "lanche", subcategory: "porcao" },
  { id: "po9", name: "Fritas gde. c/ cheddar e bacon (~550g)", price: 45.00, category: "lanche", subcategory: "porcao" },
  { id: "po10", name: "Tilápia (~400g)", price: 60.00, category: "lanche", subcategory: "porcao" },
];

// Helper
export const formatPrice = (price: number) =>
  `R$${price.toFixed(2).replace(".", ",")}`;
