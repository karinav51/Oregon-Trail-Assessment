class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    this.food += 2;
  }
  eat() {
    if (this.food <= 1) {
      this.isHealthy = false;
    } else {
      this.food -= 1;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
    if (this.capacity > this.passengers.length) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i = i + 1) {
      if (this.passengers[i].isHealthy === false) {
        return true;
      }
    }
    return false;
  }
  totalFood() {
    let totalAmount = 0;
    for (let j = 0; j < this.passengers.length; j += 1) {
      totalAmount += this.passengers[j].food;
    }
    return totalAmount;
  }
}
