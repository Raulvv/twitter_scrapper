module.exports = {
	index: (req, res) => {
		User.find({}).exec( (err, users) =>{
			return res.send('Hello World');
		})
	},

	show: (req, res) => {
		TwitterScrapperService.scrapUser(req.params.username).then( (value) => {
			User.create(value).exec( (err, user) => {
				if (err) { return res.serverError(err); }

				return res.json(user);
			});
		});
	}
};
