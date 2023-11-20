import AddReservation from './AddReservation.js';
import CheckReservation from './CheckReservation.js';

export default class View {
  constructor() {
    this.model = null;
    this.table = document.getElementById('table');
    this.addReservation = new AddReservation();
    this.checkReservation = new CheckReservation();
    
    this.checkReservation.onClick((arrival_date, departure_date, house) => this.checkRsrvtn(arrival_date, departure_date, house));
    this.addReservation.onClick((arrival_date, departure_date, house) => this.addReservations(arrival_date, departure_date, house));
  }

  setModel(model) {
    this.model = model;
  }

  render() {
    const reservations = this.model.getReservation();
    reservations.forEach((reservtn) => this.createRow(reservtn));
  }

  addReservations(arrival_date, departure_date, house) {
    const reservtn = this.model.addReservation(arrival_date, departure_date, house);
    this.createRow(reservtn);

    setTimeout(() => {
        this.table.scrollIntoView({ behavior: 'smooth' });
      }, 0);
  }

  checkRsrvtn(arrival_date, departure_date, house) {
    this.model.checkReservation(arrival_date, departure_date);
  }


  createRow(rsvtn) {
    const row = table.insertRow();
    row.setAttribute('id', rsvtn.id);
    row.innerHTML = `
      <td>${rsvtn.arrival_date}</td>
      <td>${rsvtn.departure_date}</td>
      <td>${rsvtn.house}</td>
    `;
  }
}
