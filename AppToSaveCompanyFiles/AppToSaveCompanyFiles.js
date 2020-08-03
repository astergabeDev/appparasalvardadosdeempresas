//Programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.

const empresas = [
    {
        nome: "empresa1",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Silva",
            numero: "261"
        }
    },
    {
        nome: "empresa2",
        cor: "Vermelho",
        foco: "Jogos",
        endereco: {
            rua: "Rua Joao mosmann",
            numero: "287",
            complemento: "apto 202"
        }
    },
    {
        nome: "empresa3",
        cor: "Verde",
        foco: "IA",
        endereco: {
            rua: "Rua Marechal Deodoro",
            numero: "182"
        }
    },
    
] 
//For exemple, to get the address of the first one
console.log(`A empresa ${empresas[0].nome} está localizada em ${empresas[0].endereco.rua}, ${empresas[0].endereco.numero}.`)