
import Alert from './Alert.js';

export default class AddReservation {
  constructor() {
    this.arrival_date = document.getElementById('arrival-date');
    this.departure_date = document.getElementById('departure-date');
    this.house = document.getElementById('house');
    this.btn = document.getElementById('book-date');

    this.alert = new Alert('alert');
  }
  
  onClick(callback) {
    this.btn.addEventListener('click', (event) => {
      event.preventDefault();
  
      if (this.arrival_date.value === '' || this.departure_date.value === '' || this.house.value === '') {
        this.alert.show('Please fill in all fields');
      } else {
        this.alert.hide();
        callback(this.arrival_date.value, this.departure_date.value, this.house.value);

      }
    });
  }
}

