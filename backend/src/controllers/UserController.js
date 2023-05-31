import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from "../models/User.js";
import User from "../models/User.js";



export const register = async (req, res) => {
  
  try {
  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const doc = new UserModel({
    login: req.body.login,
    passwordHash: hash, 
  });
	
  const user = await doc.save();
  const { passwordHash, ...UserData } = user._doc;
  const token = jwt.sign({
    _id: user._id,
  },
   'secret123',
  {
    expiresIn: '30d',
  },

  );
	

  res.json({
    ...UserData,
    token,
  });



  } catch (err) {
		console.log(err)
    res.status(500).json({
      message: 'Не удалось зарегистрироваться',
    });

  }
}

export const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ login: req.body.login });
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }

    const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);

    if (!isValidPass) {
      return res.status(404).json({
        message: "Неверный логин или пароль",
      });
    }


    const { passwordHash, ...UserData } = user._doc;
    const token = jwt.sign({
      _id: user._id,
    },
     'secret123',
    {
      expiresIn: '30d',
    },
  
    );
  
    res.json({
      ...UserData,
      token,
    });

  } catch (err) {
    res.status(500).json({
      message: 'Не удалось зарегистрироваться',
    });
  }
}

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.UserId)
		
    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден'
      }) 
    }

    const { passwordHash, ...UserData } = user._doc;
    res.json(UserData)
  } catch (err) {
    res.status(404).json({
      message: 'Нет доступа'
    })
  }
}
