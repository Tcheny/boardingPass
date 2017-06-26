var Ticket = function() {

 this.passenger = function(name, lastname, seat, pricing) {
    this.name = name;
    this.lastname = lastname;
    this.seat = seat;
    this.pricing = pricing;
  };

 this.flight = function(company, number, date) {
    this.company = company;
    this.number = number;
    this.date = date;
    this.departure = function(hour, id, city) {
      this.hour = hour;
      this.id = id;
      this.city = city;
    };
    this.arrival = function(hour, id, city) {
      this.hour = hour;
      this.id = id;
      this.city = city;
    };
  };

 this.place = function(country, name) {
    this.country = country;
    this.name = name;
  };
};
module.exports = Ticket;
