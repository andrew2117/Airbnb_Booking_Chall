import Alert from './Alert.js';

export default class Model {
    constructor() {
      this.view = null;
      this.alert = new Alert('alert');
      this.form = document.getElementById('booking');
      this.reservations = JSON.parse(localStorage.getItem("reservations")) || [];
      if (!this.reservations || this.reservations.length < 1) {
        this.reservation = [
          {
            id: 0,
            arrival_date: '-',
            departure_date: '-',
            house: '-',
          }
        ]
        this.currentId = 1;
      } else {
        this.currentId = this.reservations[this.reservations.length - 1].id + 1;
      }
    }

    setView(view) {
      this.view = view;
    }
  
    save() {
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    }
  
    getReservation() {
      return this.reservations.map((reservation) => ({...reservation}));
    }

    isValidDate(arrival_date, departure_date) {
      return !this.reservations.some(reservation => {
        if (arrival_date >= reservation.arrival_date && arrival_date <= reservation.departure_date || arrival_date >= departure_date) {
          return true;
        }
        if (departure_date >= reservation.arrival_date && departure_date <= reservation.departure_date) {
          return true;
        }
        return false;
      });
    }

    loadDefaultData() {
      localStorage.clear();
      const preSetData1 = {id: this.currentId++, arrival_date: '2023-11-01', departure_date: '2023-11-02', house: 'Suporior House'};
      const preSetData2 = {id: this.currentId++, arrival_date: '2023-11-06', departure_date: '2023-11-08', house: 'Suporior House'};
      const preSetData3 = {id: this.currentId++, arrival_date: '2023-11-09', departure_date: '2023-11-10', house: 'Suporior House'};
      this.reservations[0] = preSetData1;
      this.reservations[1] = preSetData2;
      this.reservations[2] = preSetData3;

      this.save();
    }
  
    addReservation(arrival_date, departure_date, house) {

      if (!this.isValidDate(arrival_date, departure_date)) {
        this.alert.show('Date is not available or is unvalid');
      }
      else{

        const reservation = {
          id: this.currentId++,
          arrival_date,
          departure_date,
          house,
        }
        this.reservations.push(reservation);
        console.log(this.reservations);
        this.save();
        alert("Reservation added!");
        this.form.reset();
        return {...reservation};
      }
    }

    checkReservation(arrival_date, departure_date) {
      if (!this.isValidDate(arrival_date, departure_date)) {
        this.alert.show('Date is not available or is unvalid');
      }
      else{
        this.alert.show('Date is available!');
      }
    } 
  }