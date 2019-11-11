//var projeto = require('../app/models/projeto');

//Aqui estamos declarando as dependências necessárias para realizar os nossos testes!
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);


/*
 * Teste da rota: /GET
 */

describe('/GET protocolo', function() {
    it('Deve retornar todos os protocolos', function(done) {
        chai.request(server)
        .get('/protocolo')
        .end(function(error, res) {
            console.log(res.body)

            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os projetos cadastrados na base de dados:
            res.body.should.be.a('array');
            //res.body.length.should.be.eql(0);
        done();
        });
    });
});


/*
 * Teste da rota: /POST
 */

describe('/POST protocolo', function() {
    it('Deve Criar um protocolo', function(done) {
        var projeto = {
            nome_aluno: "derson",
            ra: "002400",
            tipo_doc:"doc aleatorio",
            data_sol: "01/10/2018",
        } 
        chai.request(server)
        .post('/protocolo')
        .send(projeto)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(protocolo);
        done();
        }); 
    });
});


/** 
 * Teste da rota: /GET/:id
 */

describe('/GET/:id protocolo', function() {
    it('Deve retornar um protocolo dado o id', function(done) {
        chai.request(server)
        .get('/protocolo/' + 5)
        .end(function(error, res) {
            console.log(res.body)

            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os projetos cadastrados na base de dados:
            res.should.be.a('object');
            //res.body.length.should.be.eql(0);
        done();
        });
    });
});


/** 
 * Teste da rota: /PUT/:id
 */

describe('/PUT/:id protocolo', function () {
    it('Deve atualizar um protocolo dado o id', function (done) {
        var projeto = {
            nome: "Teste Atualizacao"
        }
        chai.request(server)
            .put('/protocolo/' + 14)
            .send(projeto)
            .end(function (error, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                console.log(projeto);
                done();
            });
    });
});


/** 
 * Teste da rota: /DELETE/:id
 */
describe('/DELETE/:id protocolo', function () {
    it('Deve excluir um protocolo dado o id', function (done) {
            chai.request(server)
                .delete('/protocolo/' + 13)
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
    });
});