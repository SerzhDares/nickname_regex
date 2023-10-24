import Validator from '../app';

test('Проверка корректности введенного никнейма', () => {
  const nickname = 'serzh57rus';
  const validator = new Validator();
  const result = 'ok';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если в никнейме присутствует недопустимый символ', () => {
  const nickname = 'serzh@57rus';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если никнейм начинается с цифры', () => {
  const nickname = '1serzh57rus';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если никнейм начинается с "-"', () => {
  const nickname = '-serzh57rus';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если никнейм начинается с "_"', () => {
  const nickname = '_serzh57rus';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если никнейм заканчивается на цифру', () => {
  const nickname = 'serzh57';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если никнейм заканчивается на "-"', () => {
  const nickname = 'serzh57rus-';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если никнейм заканчивается на "_"', () => {
  const nickname = 'serzh57rus_';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

test('Проверка вывода ошибки, если в никнейме присутствует более 3 цифр подряд', () => {
  const nickname = 'serzh57571rus';
  const validator = new Validator();
  const result = 'error';
  expect(result).toBe(validator.validateUserName(nickname));
});

