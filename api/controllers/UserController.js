module.exports = {
	index: (req, res) => {
		User.find({}).exec( (err, users) =>{
			if (err) {res.send(err)}
			if (users.length === 0){return res.status(200).json({message: 'There are no users'});}
			else {return res.json(users)};
		})
	},

	show: (req, res) => {
		let username = req.params.username;

		TwitterScrapperService.scrapUser(username).then( (value) => {
			if (value === "Wrong username") {
				res.status(404);
				res.json({message: 'The twitter username does not exist'});
				return;
			}
			let criteria = {username: username};

			User.findOne(criteria).then( (result) => {
	      if(result){
	        User.update(criteria, value, (err, user) => {
	  				if (err) { return res.serverError(err); }

	  				return res.json(user[0]);
	  			});
	      }else{
	        User.create(value, (err, user) => {
	  				if (err) { return res.serverError(err); }

	  				return res.json(user);
	  			});
	      }
	    });
		});
	}
};
