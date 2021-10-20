class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count)
        this.sale = Boolean(sale)
    }
    draw(out) {
        let start = document.querySelector(out);
        let a = document.createElement('div');
        a.innerHTML = `<img src=${this.image} alt=' '>
        <p>Наменование: ${this.name}</p>
        <p>Цена: ${this.amount}</p>
        <p>Распродажа: ${this.sale}</p>`;

        start.append(a);
    }
}
