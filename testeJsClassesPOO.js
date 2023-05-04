
const Pessoa = function(nome){
    gNome = nome
    this.getNome= function(){
        return gNome
    }

}

class PessoaClasse{
    constructor(nome, sexo){
        this.nome=nome
        this.sexo=sexo
    }
    printName(){
        console.log(`Nome: ${this.nome}`)
    }

    printData(){
        console.log(`${this.nome} do sexo ${this.sexo}`)
    }

    
}

class Person{
    constructor(name){
        this._name=name
    }

    set name(string){
        this._name=this._captalize(string)
    }

    get name(){
        return this._name
    }

    say(){
        return `${this._name}, me chamo Niguem.`
    }

    _captalize(string){
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }


}

class Developer extends Person{
    constructor(name, codeLanguage){
        super(name)
        this._codeLanguage = codeLanguage
    }

    code(){
        return `${this._name} está codando em ${this._codeLanguage}`
    }
}

const HomemQueDeusGuarda = new PessoaClasse("Edson", "duvidoso")
HomemQueDeusGuarda.printName()
HomemQueDeusGuarda.printData()

const Cris = new Pessoa("Cristian")
console.log('Ultilizando Funcao:')
console.log(Cris.getNome())



console.log('Ultilizando Objeto:')
var person = new Person('Zé')

person.name='zeSeted'
console.log(person.say())
console.log(person._name)

let biel = new Developer('Gabriel', 'GetX')
console.log(biel.code())

let leo = new Developer('Leo', 'Flutter') 
console.log(leo.code())