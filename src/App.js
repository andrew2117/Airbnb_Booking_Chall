import Model from './js/Model.js';
import View from './js/View.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking');
  form.reset();
  const model = new Model();
  const view = new View();
  model.setView(view);
  view.setModel(model);

  model.loadDefaultData();

  view.render();
});