const Ticket = require('./voyage.js');
describe('Ticket', function() {
  var reservation;
  beforeEach(function() {
    reservation = new Ticket();
    reservation.flight('Jet Airways', 'A8768', '27/06/2017');

  });
  it("check passenger's name", function() {
    reservation.passenger('Georges', 'Dupont', 'B32', 'ECO');
    expect(reservation.name).toEqual('Georges');
    expect(reservation.lastname).toEqual('Dupont');
    expect(reservation.seat).toEqual('B32');
    expect(reservation.pricing).toEqual('ECO');
  });
  it("check flight", function(){
    expect(reservation.company).toEqual('Jet Airways');
    expect(reservation.number).toEqual('A8768');
    expect(reservation.date).toEqual('27/06/2017');
  });
  it("check flight departure", function(){
    reservation.departure('10:35 pm', 'PAR', 'PARIS');
    expect(reservation.hour).toEqual('10:35 pm');
    expect(reservation.id).toEqual('PAR');
    expect(reservation.city).toEqual('PARIS');
  });
  it("check flight arrival", function(){
    reservation.arrival('06:11 am', 'ESP', 'ESPAGNE');
    expect(reservation.hour).toEqual('06:11 am');
    expect(reservation.id).toEqual('ESP');
    expect(reservation.city).toEqual('ESPAGNE');
  });
  it("check airport", function(){
    reservation.place('France', 'Aéroport Orly');
    expect(reservation.country).toEqual('France');
    expect(reservation.name).toEqual('Aéroport Orly');
  });
});
