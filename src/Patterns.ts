const Common = {
  email: [
    '^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$',
  ],
};

const Brazil = {
  BankSlip: [
    '([0-9]{5}).([0-9]{5})\\s([0-9]{5}).([0-9]{6})\\s([0-9]{5}).([0-9]{6})\\s([0-9])\\s([0-9]{14})', // Bancário - Linha digitável
    '([0-9]{12})\\s([0-9]{12})\\s([0-9]{12})\\s([0-9]{12})', // Arrecadação - Código de barras
    '([0-9]{11})-([0-9])\\s([0-9]{11})-([0-9])\\s([0-9]{11})-([0-9])\\s([0-9]{11})-([0-9])', // Arrecadação - Linha digitável
  ],
};

export const Patterns = {
  Common,
  Brazil,
};