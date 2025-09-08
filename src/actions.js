'use server';
import { cookies } from 'next/headers';
import { wait } from './utils/helpers';
import { redirect } from 'next/navigation';
import { validatePhoneNumber } from './utils/validation';

export async function login(prevState, formData) {
  try {
    const { phone } = Object.fromEntries(formData.entries());
    const validationResult = validatePhoneNumber(phone);

    if (validationResult.error) {
      throw new Error(validationResult.error);
    }

    const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
    if (!response.ok) {
      throw new Error(response.json().error || 'Failed to fetch login.');
    }

    await wait();
    const data = await response.json();
    const [userData] = data.results;

    // create a data transter object
    const userDto = {
      fullname: userData.name.first + ' ' + userData.name.last,
      email: userData.email,
      picture: userData.picture.medium,
    };
    const cookieStore = await cookies();
    cookieStore.set('isLoggedIn', true);
    return { data: userDto, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
}

export async function logout() {
  await wait();
  const cookieStore = await cookies();
  cookieStore.delete('isLoggedIn');
  redirect('/auth');
}
