function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;

}


const pessoa1 = {
    nome: "Gilberto",
    idade: 80,
};

const pessoa2 = {
    nome: "Perivaldo",
    idade: 30,
};

console.log(calculaIdade.call(pessoa1, 50));