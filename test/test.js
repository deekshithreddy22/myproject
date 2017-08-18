var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app1');
var should = chai.should();
chai.use(chaiHttp);


describe('getting clients details', function() {
    it('should list  all clients on GET Request ',function(done) {
  chai.request(server)
    .get('/apis/customerinfo')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});

describe('adding clients', function() {
it('should add a client to clients list on  POST Request', function(done) {
            chai.request(server)
              .get('/apis/customerinfo')
              .end(function(err, res){
      chai.request(server)
      .post('/apis/addcustomerinfo')
      .send({'Customer_name': 'Java', 'Age':18 , 'Gender':'male','Date_birth':'28/07/1996', 'Company_info':'berkadia','Adress_info':'kismathpur'})
     .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      done();
    });
});
});

describe('update clients', () => {
      it('it should UPDATE a client with the  given id', (done) => {
              chai.request(server)
              .get('/apis/customerinfo')
              .end(function(err, res){
                 chai.request(server)
                .put('/apis/updatecustomerinfo/'+res.body[0]._id)
                .send({Customer_name: 'Mahesh', Age:22 , Gender:'male',Date_birth:'28/07/1996', Company_info:'berkadia',Adress_info:'kismathpur'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json
                    res.body.should.be.a('object');
                     done();
            
          });
      });
  });


  describe('delete clients', () => {
      it('it should DELETE the client with  given id', (done) => {
                chai.request(server)
                .get('/apis/customerinfo')
                .end((err, res) => {
                   chai.request(server)
                .delete('/apis/deletecustomerinfo'+res.body[0]._id)
                .end((err, res) => {
                  done();
                });
          });
      });

 // employee related test case      
  
describe('getting employee details', function() {
    it('should list  all employees on GET Request ',function(done) {
  chai.request(server)
    .get('/apis/employeeinfo')
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      done();
    });
});
});

describe('adding employees', function() {
it('should add a employee to employers list on  POST Request', function(done) {
            chai.request(server)
              .get('/apis/employeeinfo')
              .end(function(err, res){
      chai.request(server)
      .post('/apis/addemployeeinfo')
      .send({'Employee_name': 'Java', 'Age':18 , 'Gender':'male','Date_birth':'28/07/1996', 'Experience_info':'5','Adress_info':'kismathpur','Project_info':'movies project'})
     .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      done();
    });
});
});

describe('update employee', () => {
      it('it should UPDATE an employee with the  given id', (done) => {
              chai.request(server)
              .get('/apis/employeeinfo')
              .end(function(err, res){
                 chai.request(server)
                .put('/apis/updateemployeeinfo/'+res.body[0]._id)
                .send({'Employee_name': 'Java', 'Age':18 , 'Gender':'male','Date_birth':'28/07/1996', 'Experience_info':'5','Adress_info':'kismathpur','Project_info':'movies project'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json
                    res.body.should.be.a('object');
                     done();
            
          });
      });
  });


  describe('delete employee', () => {
      it('it should DELETE an employee with  given id', (done) => {
                chai.request(server)
                .get('/apis/employeeinfo')
                .end((err, res) => {
                   chai.request(server)
                .delete('/apis/deleteemployeeinfo'+res.body[0]._id)
                .end((err, res) => {
                  done();
                });
          });
      });
  
