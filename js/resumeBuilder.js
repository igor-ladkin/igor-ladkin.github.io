var bio = {
	firstName: 'Igor',
	lastName: 'Ladkin',
	role: 'Web Developer',
	birthDate: 'Nov 24, 1988',
	contacts: {
		mobile: '8-911-557-5678',
		email: 'dgkplan@googlemail.com',
		skype: 'thrasherDGK',
		github: 'thrasherDGK',
		location: 'Arkhangelsk'
	},
	avatar: 'http://placehold.it/150x150',
	aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur fuga ut voluptates inventore similique veniam, iste sint! ' +
					 'Aspernatur harum possimus dolore deleniti fuga fugit amet quidem dolores eum quos libero consequatur quaerat, eaque nesciunt ' +
					 'exercitationem eveniet, velit ea doloribus autem ipsum nisi delectus explicabo quas! Reiciendis itaque suscipit, ea reprehenderit.' +
					 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus amet doloremque ex voluptates ut laudantium esse, nam ipsa. ' +
					 'Dolor magnam quam voluptate, minima maxime. Blanditiis sint magni, praesentium, facere iste totam maiores natus, adipisci, nobis ' +
					 'culpa temporibus alias voluptatum repellendus voluptas! Quibusdam veniam, consequuntur reiciendis nihil quo iusto ipsum inventore.',
	skills: [['Ruby on Rails', 0.8], ['JavaScript', 0.65], ['HTML and CSS', 0.55], ['Board Riding', 0.4]],
	languages: [['Russian', 100], ['English', 80]],
	hobbies :['Travelling', 'Crossfit', 'Surfing', 'Snowboarding'],

	display: function() {
		var age = function() {
			var birthDate = new Date(bio.birthDate), 
			currentDate 	= new Date();

			var getMonthDate = function(dateObject) {
				return parseInt([dateObject.getMonth(), dateObject.getDate()].join(''));
			};
			
			var age,
			birthMonthDay 	= getMonthDate(birthDate),
			birthYear		  	= birthDate.getYear(),
			currentMonthDay	= getMonthDate(currentDate),
			currentYear	 		= currentDate.getYear();

			age = currentMonthDay >= birthMonthDay ? currentYear - birthYear : currentYear - birthYear - 1; 

			return age;
		}(), 
		formatAboutMe = function() {
			var aboutMeSection = $('#about'),
			formattedAboutMe 	 = HTMLaboutMe.replace('%data%', bio.aboutMe);

			aboutMeSection.append(formattedAboutMe);

			return [formattedAboutMe];
		}(),
		formatHeader = function() {
			var headerSection = $('#photo-header'),
			formattedPhoto    = HTMLheaderPhoto.replace('%data%', bio.avatar),
			formattedGreeting = HTMLheaderGreeting.replace('%data%', bio.firstName).replace('%age%', age + 'YO').replace('%role%', bio.role);

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
				skillSection.append(HTMLskillFooter);

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

var education = {
	schools: [
		{
			school: "Northern Arctic Federal University",
			date: "2011",
			location: "Arkhangelsk, Russia",
			majors: ["Applied Mathematics"],
			degree: "Specialist",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore."
		},
		{
			school: "Centre for Development of Advanced Computing",
			date: "2014",
			location: "Delhi, India",
			majors: ["Web Development with .NET"],
			degree: "Certificate",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore."
		}
	],
	onlineCourses: [
		{
			title: "CS169.1x Engineering Software as a Service",
			school: "BerkeleyX",
			date: "2014",
			url: "https://s3.amazonaws.com/verify.edx.org/downloads/6ed98ac9c1ac40d3be71aed4dafda704/Certificate.pdf",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore."
		},
		{
			title: "CS169.2x Engineering Software as a Service, Part 2",
			school: "BerkeleyX",
			date: "2014",
			url: "https://s3.amazonaws.com/verify.edx.org/downloads/3fcdb6b46fb84ab69c5b8d74a057e72f/Certificate.pdf",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, labore."
		}
	],

	display: function() {
		var formatEducation = function() {
			var schools 						= education.schools,
			courses 								= education.onlineCourses,
			educationSection				= $('#education'),
			formattedEducationError = '<p>There are no spectific information about education.</p>',
			formattedEducationItem,
			educationItemUrl;

			if (schools.length > 0 || courses.length > 0) {
				 educationSection.append(HTMLeducationHeader);
				 educationSection = $('#education-list');

				if (schools.length > 0) {
					for (var i in schools) {
						formattedEducationItem = HTMLeducationItem.replace('%date%', schools[i].date).replace('%data%', schools[i].school + 
																		 '. ' + schools[i].majors[0]).replace('%description%', schools[i].description);
						educationSection.append(formattedEducationItem);
					}
				}
				if (courses.length > 0) {
					for (var i in courses) {
						educationItemUrl 			 = HTMLeducationItemURL.replace('%url%', courses[i].url).replace('%data%', courses[i].school + '. ' + courses[i].title);
						formattedEducationItem = HTMLeducationItem.replace('%date%', courses[i].date).replace('%data%', educationItemUrl).replace('%description%', courses[i].description);
						educationSection.append(formattedEducationItem);
					}
				}

				return [formattedEducationItem];
			} else {
				educationSection.append(formattedEducationError);

				return formattedEducationError;
			} 
		}();
	}
};

var work = {
	jobs: [
		{
			employer: "City Hall",
			profession: "System Administrator",
			location: "Arkhangelsk",
			dates: "November, 2012 - August, 2013",
			description: "Administration of local domain network, maintaining local web services and servers. " + 
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita ad voluptate suscipit nostrum? " +
			"Eum recusandae praesentium, beatae accusamus repudiandae corporis qui autem adipisci nobis. " +
			"Accusamus quo error repudiandae blanditiis ducimus inventore a, " +
			"fugit cupiditate doloribus odio similique sequi deserunt, magnam explicabo quam illo quidem est? " +
			"Nemo delectus aliquid assumenda."
		},
		{
			employer: "City Hall",
			profession: "System Administrator / Web Developer",
			location: "Arkhangelsk",
			dates: "August, 2013 - Present Time",
			description: "Administration of local domain network, maintaining local web services and servers. " + 
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias expedita ad voluptate suscipit nostrum? " +
			"Eum recusandae praesentium, beatae accusamus repudiandae corporis qui autem adipisci nobis. " +
			"Accusamus quo error repudiandae blanditiis ducimus inventore a, " +
			"fugit cupiditate doloribus odio similique sequi deserunt, magnam explicabo quam illo quidem est? " +
			"Nemo delectus aliquid assumenda."
		}
	],

	display: function() {
		var formatWork = function() {
			var jobs 		= work.jobs,
			workSection = $('#work'),
			formattedWorkError = '<p>No previous experience.</p>',
			formattedWorkItem;

			if (jobs.length > 0) {
				for (var i in jobs) {
					formattedWorkItem = HTMLworkItem.replace('%employer%', jobs[i].employer).replace('%dates%', jobs[i].dates).
																					 replace('%profession%', jobs[i].profession).replace('%description%', jobs[i].description);

					workSection.append(formattedWorkItem);
				}

				return [formattedWorkItem];
			} else {
				workSection.append(formattedWorkError);

				return formattedWorkError;
			}
		}();
	}	
};

var portfolio = {
	projects: [
		{
			name: 'Ruby Warrior',
			date: 'October, 2014',
			url: '#',
			title: 'Personal Portfolio',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, officiis ea. Velit officia nobis aliquam asperiores, ' +
									 'voluptatem facilis molestiae ea possimus provident voluptatibus deserunt consequatur iure, nostrum alias, minima, sed!',
			screenshots: [
				{
					source: 'http://placehold.it/320x180',
					alter: 'screenshot'
				},
				{
					source: 'http://placehold.it/320x180',
					alter: 'screenshot'
				},
				{
					source: 'http://placehold.it/320x180',
					alter: 'screenshot'
				}
			]
		}
	],

	display: function() {
		var formatPortfolio = function() {
			var projects 					= portfolio.projects,
			porfolioSection 			= $('#portfolio'),
			formattedProjectError = '<p>There are no finished projects yet.</p>',
			formattedProjectItem,
			formattedProjectImage;

			if (projects.length > 0) {
				for (var i in projects) {
					porfolioSection.append(HTMLprojectHeader);

					var image, project 	 = projects[i],
					formattedProjectItem = HTMLprojectItem.replace('%url%', project.url).replace('%name%', project.name).replace('%date%', project.date).
																 replace('%title%', project.title).replace('%description%', project.description);

					$('.project:last').append(formattedProjectItem);

					if (project.screenshots.length > 0) {
						for (var j in project.screenshots) {
							image = project.screenshots[j];

							formattedProjectImage = HTMLprojectImage.replace('%source%', image.source).replace('%alter%', image.alter);
							$('.screenshots:last').append(formattedProjectImage);
						}
					}
				}

				return [formattedProjectItem];
			} else {
				porfolioSection.append(formattedWorkError);

				return formattedWorkError;
			}
		}();
	}
};

bio.display();
education.display();
work.display();
portfolio.display();