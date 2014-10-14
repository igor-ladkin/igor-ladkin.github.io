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
	skills: [['Ruby on Rails', 0.8], ['JavaScript', 0.65], ['HTML and CSS', 0.55], ['Board Riding', 0.4]],
	languages: [['Russian', 100], ['English', 80]],
	hobbies :['Travelling', 'Crossfit', 'Surfing', 'Snowboarding'],

	display: function() {
		var formatAboutMe = function() {
			var aboutMeSection = $('#about'),
			formattedAboutMe 	 = HTMLaboutMe.replace('%data%', bio.aboutMe);

			aboutMeSection.append(formattedAboutMe);

			return [formattedAboutMe];
		}(),
		formatHeader = function() {
			var headerSection = $('#photo-header'),
			formattedPhoto    = HTMLheaderPhoto.replace('%data%', bio.avatar),
			formattedGreeting = HTMLheaderGreeting.replace('%data%', bio.firstName);

			headerSection.append(formattedPhoto).append(formattedGreeting);

			return [formattedPhoto, formattedGreeting];
		}(),
		formatContacts = function() {
			var contacts 					= bio.contacts,
			contactSection 				= $('#contacts'),
			formattedContactError = '<p>There are no avaliable contacts.</p>', 
			formattedContactIcon,
			formattedContactTitle,
			formattedContactDescription;

			if (Object.keys(contacts).length > 0) {
				for (var key in contacts) {
					contactSection.append(HTMLcontactItem);

					formattedContactIcon  			= HTMLcontactIcon.replace('%data%', key);
					formattedContactTitle 			= HTMLcontactTitle.replace('%data%', key.toUpperCase());
					formattedContactDescription = HTMLcontactDescription.replace('%data%', bio.contacts[key]);

					$('.contact-item:last').append(formattedContactIcon).append(formattedContactTitle).
																	append(formattedContactDescription);
				}

				return [formattedContactIcon, formattedContactTitle, formattedContactDescription];
			} else {
				contactSection.append(formattedContactError);

				return formattedContactError;
			}
		}(),
		formatSkills = function() {
			$('#skills').append(HTMLskillHeader);

			var skills 					= bio.skills,
			skillSection 				= $('.skills:last'),
			formattedSkillError = '<p>There are no interesting skills.</p>',
			formattedSkillItem;

			if (skills.length > 0) {
				for (var i in skills) {
					formattedSkillItem = HTMLskillItem.replace('%data%', skills[i][0]).replace('%value%', skills[i][1]).
																						 replace('%style%', (458 * skills[i][1]).toFixed(1));
					
					skillSection.append(formattedSkillItem);
				}

				return formattedSkillItem;
			} else {
				skillSection.append(formattedSkillError);

				return formattedSkillError;
			}
		}(),
		formatLanguages = function() {
			$('#languages').append(HTMLlanguageHeader);

			var languages 				 = bio.languages,
			languageSection 			 = $('#language-skills'),
			formattedLanguageError = '<p>There are no well known languages.</p>',
			formattedLanguageItem,
			formattedLanguageRating;

			if (languages.length > 0) {
				for (var i in languages) {
					formattedLanguageItem 	= HTMLlanguageItem.replace('%data%', languages[i][0]);
					formattedLanguageRating = HTMLlanguageRating.replace('%rating%', languages[i][1]);

					languageSection.append(formattedLanguageItem);
					$('.skill:last').append(formattedLanguageRating);
				}

				return [formattedLanguageItem, formattedLanguageRating];
			} else {
				languageSection.append(formattedLanguageError);

				return formattedLanguageError;
			}
		}(),
		formatHobbies = function() {
			var hobbies 				= bio.hobbies,
			hobbySection 			  = $('#hobbies'),
			formattedHobbyError = '<p>There are no hobbies at all.</p>',
			formattedHobbyItem;

			if (hobbies.length > 0) {
				for (var i in hobbies) {
					formattedHobbyItem = HTMLhobbyItem.replace('%data%', hobbies[i]);

					hobbySection.append(formattedHobbyItem);
				}
				return [formattedHobbyItem];
			} else {
				hobbySection.append(formattedHobbyError);

				return formattedHobbyError;
			}
		}();
	}
};

bio.display();