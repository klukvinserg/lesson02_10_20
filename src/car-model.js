export default class Car {
    constructor(name) {
        this.name = name;
        this.date = new Date();
    }

    toString() {
        return `
          car: ${this.name}
          date: ${this.date.toLocaleString()}
        `
    }
}