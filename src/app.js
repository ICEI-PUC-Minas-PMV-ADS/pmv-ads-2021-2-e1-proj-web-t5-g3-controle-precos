// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "João do Nacimento",
            "cpf": "000.000.000.01",
            "categoria": "Consumidor",
            "email": "joaotransportes@email.com",
            "telefone": "(11) 99123 7678",
            "senha": "abc123"
        },
        {
            "id": 2,
            "nome": "Camila Sperandio",
            "cpf": "000.000.000.02",
            "categoria": "Consumidor",
            "email": "sperandiocamila@email.com",
            "telefone": "(11) 99123 1234",
            "senha": "abc123d"
        },
        {
            "id": 3,
            "nome": "Gervasio Santos",
            "cpf": "000.000.000.03",
            "categoria": "Consumidor",
            "email": "gersasiosanto01@email.net",
            "telefone": "(11) 99765 1234 ",
            "senha": "abc123abd"
        },
        {
            "id": 4,
            "nome": "Posto 1 ",
            "cpf": "000.000.000.22",
            "categoria": "PostoCombustivel",
            "email": "posto1@email.net",
            "telefone": "(11) 99765 1234 ",
            "senha": "abc123abd"
        },
        {
            "id": 5,
            "nome": "Posto 2 ",
            "cpf": "000.000.000.33",
            "categoria": "PostoCombustivel",
            "email": "posto2@email.net",
            "telefone": "(11) 99765 1234 ",
            "senha": "abc123abd"
        },
        {
            "id": 6,
            "nome": "Posto 3 ",
            "cpf": "000.000.000.44",
            "categoria": "PostoCombustivel",
            "email": "posto3@email.net",
            "telefone": "(11) 99765 1234 ",
            "senha": "abc123abd"
        }

    ]
}
//Características de cada Posto
var db_detalhes_posto = {
    "data": [
        {
            "id": 1,
			"idPosto":4,
            "parametro": "Gasolina",
            "valor": "R$ 6,77",            
        },
        {
            "id": 2,
			"idPosto":4,
            "parametro": "Etanol",
            "valor": "R$ 5,24",            
        },
        {
            "id": 3,
			"idPosto":4,
            "parametro": "Diesel S10",
            "valor": "R$ 5,12",            
        },
        {
            "id": 4,
			"idPosto":4,
            "parametro": "Banheiro",
            "valor": "Sim",            
        },
        {
            "id": 5,
			"idPosto":4,
            "parametro": "Borracharia",
            "valor": "Sim",            
        },
        {
            "id": 6,
			"idPosto":4,
            "parametro": "Lava Rapido",
            "valor": "Não",            
        },
		{
            "id": 7,
			"idPosto":5,
            "parametro": "Gasolina",
            "valor": "R$ 6,34",            
        },
        {
            "id": 8,
			"idPosto":5,
            "parametro": "Etanol",
            "valor": "R$ 5,11",            
        },
        {
            "id": 9,
			"idPosto":5,
            "parametro": "Diesel S10",
            "valor": "R$ 5,00",            
        },
        {
            "id": 10,
			"idPosto":5,
            "parametro": "Banheiro",
            "valor": "Sim",            
        },
        {
            "id": 11,
			"idPosto":5,
            "parametro": "Borracharia",
            "valor": "Sim",            
        },
        {
            "id": 12,
			"idPosto":5,
            "parametro": "Lava Rapido",
            "valor": "Sim",            
        },		
		{
            "id": 13,
			"idPosto":6,
            "parametro": "Gasolina",
            "valor": "R$ 6,54",            
        },
        {
            "id": 14,
			"idPosto":6,
            "parametro": "Etanol",
            "valor": "R$ 5,31",            
        },
        {
            "id": 15,
			"idPosto":6,
            "parametro": "Diesel S10",
            "valor": "R$ 5,10",            
        },
        {
            "id": 16,
			"idPosto":6,
            "parametro": "Banheiro",
            "valor": "Sim",            
        },
        {
            "id": 17,
			"idPosto":6,
            "parametro": "Borracharia",
            "valor": "Não",            
        },
        {
            "id": 18,
			"idPosto":6,
            "parametro": "Lava Rapido",
            "valor": "Sim",            
        }

    ]
}

//Simula notas dadas para cada posto de gasolina
var db_posto_popularidade = {
    "data": [
        {
            "id": 1,
            "idPosto":4,
            "idUsuario":1,
            "nota": 4
            
        },
        {
            "id": 2,
            "idPosto":4,
            "idUsuario":2,
            "nota": 5
            
        },
        {
            "id": 2,
            "idPosto":5,
            "idUsuario":3,
            "nota": 2
            
        },
{
            "id": 4,
            "idPosto":6,
            "idUsuario":1,
            "nota": 3
            
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

//Busca valores referentes aos detalhes cadastrados para cada posto de gasolina
var db_table_GasStation_Detail = JSON.parse(localStorage.getItem('db_dados_postos'));
if(!db_table_GasStation_Detail){
    db_table_GasStation_Detail = db_detalhes_posto;
};  

//Busca notas dadas para cada posto de gasolina
var db_table_GasStationScore = JSON.parse(localStorage.getItem('db_posto_popularidade'));
if(!db_table_GasStationScore){
    db_table_GasStationScore = db_posto_popularidade;
}; 

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "telefone": contato.telefone,
        "cpf" : contato.cpf,
        "categoria": contato.categoria,
        "senha": contato.senha
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,function (element) { return element.id != id }
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cpf = contato.cpf,
    db.data[index].categoria = contato.categoria,ntPosto
    db.data[index].senha = contato.senha

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}
