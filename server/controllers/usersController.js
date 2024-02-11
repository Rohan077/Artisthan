const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Users = require('../models/Users');

exports.getOneUser = async (req, res) => {
    try {
            const user = await Users.findOne({'artistname':req.params.name})
            // console.log(req.params.name)
    // ManOfMusic@gmail.com Anjali00789@gmail.com Valeri@gmail.com
    res.status(201).send(user)
    } catch (error) {
                res.status(404).json({ message: error.message });

    }
}


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email })

        const passwordMatch = await bcrypt.compare(req.body.password, user.password);


        if (!user || !passwordMatch) {
            return res.status(401).json({ message: 'Invalid Credentials!' });
        }

        const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' })
        res.status(200).json({ 'token': token, 'user': user })

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


exports.addUsers = async (req, res) => {
    try {
          const data = req.body
    const { artistname, email, password } = data;

    const existingUser = await Users.findOne({
        $or: [{ artistname: artistname },
        { email: email }]
    })
    if (existingUser) {
        return res.status(500).send({ message: "User already exist" })
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = new Users({ artistname, email, password: hashPassword });
    const result = await user.save();
    res.status(201).send({ message: "New user saved successfully" })
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
  
}

exports.deleteUser = async (req, res) => {
    const user = await Users.deleteOne({ '_id': req.params.id })
    res.status(201).json({ message: "user deleted!" })
}

exports.updateUser = async (req, res) => {
    try {
        const user = await Users.findById(req.params.id)
        if (!user) {
            return res.status(400).json({ message: 'Cannot find the user' })
        }
    
        if (req.body != null) {
            user.artistname = req.body.artistname
            user.firstname = req.body.firstname
            user.lastname = req.body.lastname
            user.email = req.body.email
            user.phone = req.body.phone
            user.location = req.body.location
            user.category = req.body.category
            user.work = req.body.work
            user.image = req.body.image
            user.darkMode = req.body.darkMode
        }
    
        const updatedUser = await user.save();
        res.status(201).json({ message: "user updated!" })
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
   
}