class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = Number(age);
        this.type = type;
    }

    attack() {
        let ataque = "";

        if (this.type === "mago") {
            ataque = "magia";
        } else if (this.type === "guerreiro") {
            ataque = "espada";
        } else if (this.type === "monge") {
            ataque = "artes marciais";
        } else if (this.type === "ninja") {
            ataque = "shuriken";
        } else {
            console.log("Esse tipo de herói não é válido");
            return;
        }

        console.log(`O ${this.type} atacou usando ${ataque}`);
    }
}

const heromago = new Hero("Luiz", 22, "mago");
console.log(heromago);
const heroguerreiro = new Hero("Guilherme", 30, "guerreiro");
console.log(heroguerreiro);
const heromonge = new Hero("Jader", 36, "monge");
console.log(heromonge);
const heroninja = new Hero("Felipe", 28, "ninja");
console.log(heroninja);

heromago.attack();
heroguerreiro.attack();
heromonge.attack();
heroninja.attack();
