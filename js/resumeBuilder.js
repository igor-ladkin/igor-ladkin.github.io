var bio = {
	firstName: 'Igor',
	lastName: 'Ladkin',
	role: 'Web Developer',
	contacts: {
		mobile: '8-911-557-5678',
		email: 'dgkplan@googlemail.com',
		skype: 'thrasherDGK',
		github: 'thrasherDGK',
		location: 'Arkhangelsk'
	},
	avatar: 'http://placehold.it/150x150',
	aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
	skills: ['Ruby on Rails', 'JavaScript', 'HTML and CSS', 'Board Riding'],

	display: function() {
		var formattedPhoto 		= HTMLheaderPhoto.replace('%data%', bio.avatar),
				formattedGreeting = HTMLheaderGreeting.replace('%data%', bio.firstName);

		$('#photo-header').append(formattedPhoto).append(formattedGreeting);
	}
};

bio.display();