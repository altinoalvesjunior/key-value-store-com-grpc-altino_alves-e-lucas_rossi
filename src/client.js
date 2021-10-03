const grpc = require("grpc");
//const path = require("path");

const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('./notes.proto');
const KeyValue = grpc.loadPackageDefinition(packageDefinition).KeyValue;

//const KeyValue = grpc.load(path.resolve(__dirname, "./notes.proto")).KeyValue;
const client = new KeyValue("localhost:40073", grpc.credentials.createInsecure());

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

menu();


rl.question("> ", (string) => {
    const line = string.split(" ")[0];

    const remaining = string.split(" ");
    remaining.shift();

    const remainingString = remaining.join("");
   
    switch (line) {
        case "get":
            get(remainingString);
            break;

        case "getAllKeys":
            getAllKeys();
            break;

        case "put":
            put(remainingString);
            break;

        case "help":
            menu();
            break;

        case "exit":
            console.log("Finalizando o programa!");
            break;

        default:
            console.log("O comando digitado não existe.");
    }

    rl.close();
});


function get(string) {
    client.get({ key: string }, (error, res) => error ? console.log(error) : console.log(`Key: ${string} | Value: ${res.value}`));
}

function getAllKeys() {
    client.getAllKeys({}, (error, res) => {

        if (!(error)) {
            const keyss = res.keys?.map(
                (item) => item.key)?.join(" | ");

            console.log(`Todas as chaves: ${keyss}`);
        } else {
            console.log(error);
        }
    });
}

function put(string) {
    const key = string.split(":")[0];
    const value = string.split(":")[1];

    client.put({ key, value }, (error, _) => error ? console.log(error) : console.log("Cadastro realizado com sucesso!"));
}

function menu() {
    console.log("-------------- MENU --------------");
    console.log(" 1 - Para inserir nova chave e valor, digite 'put chave:valor' \n 2 - Para listar alguma chave existente em específico, digite 'get nomeChave' \n 3 - Para listar todas as chaves existente, digite 'getAllKeys'")
    console.log("----------------------------------");
}