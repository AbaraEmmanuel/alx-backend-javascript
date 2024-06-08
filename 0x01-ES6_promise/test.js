const { uploadPhoto, createUser } = require('./utils');

test('uploadPhoto returns correct response', () => {
  const response = uploadPhoto();
  expect(response).toEqual({
    status: 200,
    body: 'photo-profile-1',
  });
});

test('createUser returns correct response', () => {
  const user = createUser();
  expect(user).toEqual({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
});
