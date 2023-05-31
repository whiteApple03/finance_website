import { body } from 'express-validator';

export const loginValidation = [
  body('login', 'Укажите логин').isString(), // Должен быть уникальным !!!!
  body('password', 'Пароль должен состоять минимум из 3-ех символов').isLength({ min: 3 }),
];

export const registerValidation = [
  body('login', 'Укажите логин').isString(), // Должен быть уникальным !!!!
  body('password', 'Пароль должен состоять минимум из 3-ех символов').isLength({ min: 3 }),
];
export const systemCreateValidation = [
 // body('sequenceNumber').isNumeric(),
  body('systemName', 'Укажите название системы').isString(),
  body('aim').isLength({min: 4}),
];