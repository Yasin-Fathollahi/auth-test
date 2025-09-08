export function validatePhoneNumber(phoneNum) {
  if (
    typeof +phoneNum === 'number' &&
    ((phoneNum.startsWith('09') && phoneNum.length === 11) ||
      (phoneNum.startsWith('+989') && phoneNum.length === 13) ||
      (phoneNum.startsWith('00989') && phoneNum.length === 14))
  ) {
    return { error: null };
  }
  return { error: 'Please enter a phone number in correct Iranian format.' };
}
