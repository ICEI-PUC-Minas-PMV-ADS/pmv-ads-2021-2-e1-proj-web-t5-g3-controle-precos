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
        }
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
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
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].telefone = contato.telefone,
    db.data[index].cpf = contato.cpf,
    db.data[index].categoria = contato.categoria,
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