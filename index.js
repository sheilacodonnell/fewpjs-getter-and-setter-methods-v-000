class Circle {
  constructor(radius) {
    this.radius = radius
  }
  
  get diameter() {
    return this.radius * 2;
  }
}

  get circumference() {
    return Math.PI * circle.diameter;
  }
}