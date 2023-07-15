function Pizza(toppings, size) {
    this.toppings = toppings;
    this.size = size;
}

Pizza.prototype.calculateCost = function() {
    var baseCost = 5; // Base cost of the pizza
  
    // Add cost based on the number of toppings
    var toppingCost = this.toppings.length * 1.5;
  
    // Add cost based on the size of the pizza
    var sizeCost;
    switch (this.size) {
      case "small":
        sizeCost = 0;
        break;
      case "medium":
        sizeCost = 2;
        break;
      case "large":
        sizeCost = 4;
        break;
      default:
        sizeCost = 0;
        break;
    }}