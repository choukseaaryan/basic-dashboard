const bcrypt = require("bcrypt");
const response = require("../helpers/response");
const handleException = require("../helpers/exception");
const adminModel = require("../models/admin");

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const adminData = await adminModel.findOne({ "email.id": email });

		if (!adminData) {
			const obj = {
				res,
				msg: "Email Not Found!",
			};

			return response.error(obj);
		}

		if (!bcrypt.compareSync(password, adminData?.email?.password)) {
			const obj = {
				res,
				msg: "Incorrect Password!",
			};

			return response.error(obj);
		}

		const obj = {
			res,
			msg: "Login Successful",
			data: adminData,
		};
		console.log(adminData)
		return response.success(obj);
	} catch (err) {
		handleException(res, err);
	}
};

const signup = async (req, res) => {
	try {
		const { name, email, password, phone, gender, source, city, state } =
			req.body;

		const adminData = await adminModel.findOne({ "email.id": email });

		if (adminData) {
			const obj = {
				res,
				msg: "Email Already Exists!",
			};

			return response.error(obj);
		}

		const passwordHash = bcrypt.hashSync(password, 10);

		await adminModel.create({
			name,
			email: {
				id: email,
				password: passwordHash,
			},
			phone,
			gender,
			source,
			city,
			state,
		});

		const obj = {
			res,
			msg: "Registration Successful!",
			data: adminData,
		};

		return response.success(obj);
	} catch (err) {
		handleException(res, err);
	}
};

module.exports = {
	login,
	signup,
};