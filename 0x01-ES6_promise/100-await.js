/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  return Promise.all([photo, user])
    .then((values) => ({
      photo,
      user,
    }))
    .catch((err) => ({
      photo: null,
      user: null,
    }));
}
