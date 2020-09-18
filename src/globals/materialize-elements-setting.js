import M from 'materialize-css';

export const setUpSelect = (register) => (item) => {
  M.FormSelect.init(item, {});
  register(item);
  return item;
};

export const setUpDatepicker = (register) => (config) =>  (item) => {
  M.Datepicker.init(item, {});
  register(item);
  return item;
};

export const setUpTimepicker = (register) => (config) => (item) =>  {
  M.Timepicker.init(item, {});
  register(item);
  return item;
};
