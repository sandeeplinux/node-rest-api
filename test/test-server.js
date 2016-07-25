var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);

describe('Torrents', function() {
  it('should list ALL torrents on /torrents GET');
  it('should list a SINGLE torrent on /torrents/<id> GET');
  it('should add a SINGLE torrent on /torrents POST');
  it('should update a SINGLE torrent on /torrents/<id> PUT');
  it('should delete a SINGLE torrent on /torrents/<id> DELETE');
});

it('should list ALL torrents on /torrents GET', function(done) {
  chai.request(server)
    .get('/torrents')
    .end(function(err, res){
      res.should.have.status(200);
	  console.log("Hi" + res.body);
	  //res.body = JSON.parse(res.body);
	  //res.should.be.json;
	  done();
    });
});

it('should list a SINGLE torrent on /torrents/<id>', function(done) {
  chai.request(server)
    .get('/torrents/576fcd7bbe47ece8332dbe45')
    .end(function(err, res){
      res.should.have.status(200);
	  done();
    });
});

it('should add a SINGLE torrent on /torrents POST', function(done) {
  chai.request(server)
    .post('/torrents')
    .send({'name': 'Shiv', 'torrent_link': 'www.inverosoft.com'})
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});

it('should update a SINGLE torrent on /torrents/<id>/edit POST', function(done) {
  chai.request(server)
    .post('/torrents/578df60d0179c8220c010081/edit')
    .send({'name': 'Shiv', 'torrent_link': 'www.inverosoft.com'})
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});

it('should delete a SINGLE torrent on /torrents/<id>/delete POST', function(done) {
  chai.request(server)
    .get('/torrents/578df60d0179c8220c010081/delete')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
});
