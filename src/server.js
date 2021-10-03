const grpc = require("grpc");
const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('./notes.proto');
const notesProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const map = new Map();

server.addService(notesProto.KeyValue.service, {

    get: (call, callback) => {
		const key = call.request.key;
		console.log(`Chave requisitada pelo cliente: ${key}`);

		if (map.has(key)) callback(null, { value: map.get(key),});
        else callback({ code: grpc.status.NOT_FOUND, details: "O item buscado, não foi encontrado!", });
	},

    getAllKeys: (_, callback) => {
        const keys = [...map.keys()].map((string) => ({
			key: string,
		}));

		callback(null, {keys: keys});
	},
	
	
    put: (call, callback) => {
		const item = call.request;
		map.set(item.key, item.value);

		callback(null, {});
	},
});

server.bind("127.0.0.1:40073", grpc.ServerCredentials.createInsecure());

console.log("O servidor está sendo executado!");
server.start();