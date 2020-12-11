import User from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Everton';

  expect(user.name).toEqual('Everton');
});
