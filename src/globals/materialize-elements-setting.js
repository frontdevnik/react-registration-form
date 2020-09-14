import M from 'materialize-css';

export const setUpSelect = (elems) => {
  M.FormSelect.init(elems, {});
};

export const setUpDatepicker = (item) => {
  M.Datepicker.init(item, {});
};


export const setUpTimepicker = (item) => {
  M.Timepicker.init(item, {});
};
