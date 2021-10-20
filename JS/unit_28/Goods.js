class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;

    }
    showConsole() {
        console.log(this)
    }
    draw(out) {
        let start = document.querySelector(out);

        let a = document.createElement('div');
        a.innerHTML = `<img src=${this.image} alt=' '>
        <p>Наменование: ${this.name}</p>
        <p>Цена: ${this.amount}</p>`;
        start.append(a);
    }
}