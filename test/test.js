var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app1');
var should = chai.should();
chai.use(chaiHttp);


describe('getting customers', function() {
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

describe('adding customers', function() {
it('should add a customer to customers on  POST Request', function(done) {
     chai.request(server)
     .post('/addcustomerinfo')
    .send({'Customer_name': 'Java', 'Age':18 , 'Gender':'male','Date_birth':'28/07/1996', 'Company_info':'berkadia','Adress_info':'kismathpur'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.have.property('Customer_name');
      res.body.should.have.property('Age');
      res.body.should.have.property('Gender');
      res.body.should.have.property('Date_birth');
      res.body.should.have.property('Company_info');
      res.body.should.have.property('Adress_info');
      done();
    });
});
});

describe('update customer', () => {
      it('it should UPDATE a customer with the  given id', (done) => {
        let customer = new Customer({Customer_name: 'Rajesh', Age:18 , Gender:'male',Date_birth:'28/07/1996', Company_info:'berkadia',Adress_info:'kismathpur'})
        customer.save((err, customer) => {
                chai.request(server)
                .put('/updatecustomerinfo' + customer.id)
                .send({Customer_name: 'Mahesh', Age:22 , Gender:'male',Date_birth:'28/07/1996', Company_info:'berkadia',Adress_info:'kismathpur'})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.book.should.have.property('Customer_name').eql('Mahesh');
                  done();
                });
          });
      });
  });


  describe('delete customer', () => {
      it('it should DELETE a customer with  given id', (done) => {
        let customer = new Customer({Customer_name: 'Rajesh', Age:18 , Gender:'male',Date_birth:'28/07/1996', Company_info:'berkadia',Adress_info:'kismathpur'})
        customer.save((err, customer) => {
                chai.request(server)
                .delete('/deletecustomerinfo' + customer.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('ok').eql(1);
                    res.body.should.have.property('n').eql(1);
                  done();
                });
          });
      });
  });

