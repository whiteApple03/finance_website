import jwt from 'jsonwebtoken'

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
	console.log(req)
  if (token) {
    try {
      const decoded = jwt.verify(token, 'secret123')
      req.UserId = decoded._id
      next()
    } catch (err) {
			console.log(err)
      return res.status(404).json({
        message: 'Нет доступа',
      })


    }
  } else {
    return res.status(404).json({
			token: token,
      message: "Нет доступа",
    })
  }
}