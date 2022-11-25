const Router = require('express')
const User = require('../models/User')
const router = new Router()
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({min:3, max: 12})
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Uncorrect request', errors})
      }

      const {email, password} = req.body

      const candidate = await User.findOne({email})

      if (candidate) {
        return res.status(400).json({message: `User with email ${email} already exist`})
      }

      const hashPass = await bcrypt.hash(password, 15)
      const user = new User({email, password: hashPass})
      await user.save()
      return res.json({message: 'User created successful'})

    } catch (e) {
      console.log(e)
      res.send({message: 'Server error'})
    }
})

router.post('/login',
  async (req, res) => {
    try {
      const {email, password} = req.body 
      const user = await User.findOne({email})
      if (!user) {
        return res.status(404).json({message: 'User not found'})
      }
      const isPassValid = bcrypt.compareSync(password, user.password)
      if (!isPassValid) {
        return res.status(400).json({message: 'Invalid password'})
      }
      const token = jwt.sign({id: user.id},)

    } catch (e) {
      console.log(e)
      res.send({message: 'Server error'})
    }
})

module.exports = router