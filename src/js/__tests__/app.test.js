import ErrorRepository from '../app';

test('getting information', () => {
  const input = new ErrorRepository();
  const expected = 'Ошибка';
  const received = input.translate('000');
  expect(received).toEqual(expected);
});

test('getting information', () => {
  const input = new ErrorRepository();
  const expected = 'Unknown error';
  const received = input.translate('123');
  expect(received).toEqual(expected);
});
