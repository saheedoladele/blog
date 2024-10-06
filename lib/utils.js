import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const FormFieldType = {
  INPUT: 'input',
  PASSWORD: 'password',
  EMAIL: 'email',
  PHONE_INPUT:'phoneInput',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  DATE_PICKER: 'datepicker',
  SELECT: 'select',
  SKELETON: 'skeleton',
  TEXTAREA: 'textarea'
}


export const  getFirstLetters = (inputString) => {
  // Split the input string into an array of words using space as the delimiter
  const words = inputString.split(' ');

  // Map through each word and get the first letter
  const firstLetters = words.map(word => word.charAt(0).toUpperCase());

  // Join the first letters back into a single string
  return firstLetters.join('');
}