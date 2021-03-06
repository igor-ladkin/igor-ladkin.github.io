var bio = {
  firstName: "Igor",
  lastName: "Ladkin",
  role: "Web Developer",
  birthDate: "Nov 24, 1988",
  contacts: {
    mobile: "+49 1512 0538338",
    email: '<a href="mailto:ladkin.is@gmail.com">ladkin.is@gmail.com</a>',
    skype: "thrasherDGK",
    github: "thrasherDGK",
    location: "Hamburg, Germany"
  },
  avatar: "images/avatar.png",
  aboutMe:
    "<p>Web development. Huh, it’s been more than 5 years since I decided to dive deep into this rabbit hole and fully commit myself trying " +
    "to understand how to build useful and convenient web applications. My way to web development was not straightforward. " +
    "As a student majoring in applied mathematics, I’ve tried a lot different programming languages but during those days desire to solve " +
    "actual problems exceeded needs of learning new exciting technologies. That’s how I stuck with C++ and desktop for a long time.</p>" +
    "<p>At that time I knew that web servers exist (I was using them all the time, duh…) but I had no clue why and how they work, " +
    "so I’ve got interested. I knew some basics of HTML, CSS and a little bit of PHP. I’ve tried Perl, C#. None of these felt right. " +
    "Then I found Ruby. After that, every Rubyist knows that there is no way back.</p>" +
    "<p>Right now my fields of interest are tightly coupled with functional programming and data science. Even though Rails still plays " +
    "a huge role in my everyday work, I always take a look at something new. Elixir, React, Elm, Rx, GraphQL and much more. " +
    "So if you are interested in any technology related to web/mobile development, we have a topic to discuss.</p>" +
    "<p>Besides programming, I have more than ordinary hobbies. Like all of us I enjoy watching a good movie, but lately, prefer a good book. " +
    "The sport was in my life since the early ages, and some exercises are good for your health so when I can I train. Another my interest " +
    "is traveling. I take pleasure in visiting new places and meeting interesting people. During my first trip to Bali, " +
    "I found something special. This thing excites me so much that it’s hard to describe. The name of this thing is surfing, " +
    "but that’s an entirely different story.</p>",

  skills: [
    ["Ruby and Rails", 0.85],
    ["JavaScript", 0.75],
    ["React and Redux", 0.69],
    ["Elixir and Phoenix", 0.65],
    ["Elm", 0.5],
    ["Python", 0.35]
  ],
  languages: [["Russian", 100], ["English", 94]],
  hobbies: ["Travelling", "Gym", "Surfing", "Netflix", "Hiking"],

  display: function() {
    var age = (function() {
        var birthDate = new Date(bio.birthDate),
          currentDate = new Date();

        var getMonthDate = function(dateObject) {
          return parseInt(
            [dateObject.getMonth(), dateObject.getDate()].join("")
          );
        };

        var age,
          birthMonthDay = getMonthDate(birthDate),
          birthYear = birthDate.getYear(),
          currentMonthDay = getMonthDate(currentDate),
          currentYear = currentDate.getYear();

        age =
          currentMonthDay >= birthMonthDay
            ? currentYear - birthYear
            : currentYear - birthYear - 1;

        return age;
      })(),
      formatAboutMe = (function() {
        var aboutMeSection = $("#about"),
          formattedAboutMe = HTMLaboutMe.replace("%data%", bio.aboutMe);

        aboutMeSection.append(formattedAboutMe);

        return [formattedAboutMe];
      })(),
      formatHeader = (function() {
        var headerSection = $("#photo-header"),
          formattedPhoto = HTMLheaderPhoto.replace("%data%", bio.avatar),
          formattedGreeting = HTMLheaderGreeting.replace(
            "%data%",
            bio.firstName
          )
            .replace("%age%", age + "YO")
            .replace("%role%", bio.role);

        headerSection.append(formattedPhoto).append(formattedGreeting);

        return [formattedPhoto, formattedGreeting];
      })(),
      formatContacts = (function() {
        var contacts = bio.contacts,
          contactSection = $("#contacts"),
          formattedContactError = "<p>There are no avaliable contacts.</p>",
          formattedContactIcon,
          formattedContactTitle,
          formattedContactDescription;

        if (contacts && Object.keys(contacts).length > 0) {
          for (var key in contacts) {
            contactSection.append(HTMLcontactItem);

            formattedContactIcon = HTMLcontactIcon.replace("%data%", key);
            formattedContactTitle = HTMLcontactTitle.replace(
              "%data%",
              key.toUpperCase()
            );
            formattedContactDescription = HTMLcontactDescription.replace(
              "%data%",
              bio.contacts[key]
            );

            $(".contact-item:last")
              .append(formattedContactIcon)
              .append(formattedContactTitle)
              .append(formattedContactDescription);
          }

          return [
            formattedContactIcon,
            formattedContactTitle,
            formattedContactDescription
          ];
        } else {
          contactSection.append(formattedContactError);
          contactSection.hide();

          return formattedContactError;
        }
      })(),
      formatSkills = (function() {
        $("#skills").append(HTMLskillHeader);

        var skills = bio.skills,
          skillSection = $(".skills:last"),
          formattedSkillError = "<p>There are no interesting skills.</p>",
          formattedSkillItem;

        if (skills && skills.length > 0) {
          for (var i in skills) {
            formattedSkillItem = HTMLskillItem.replace("%data%", skills[i][0])
              .replace("%value%", skills[i][1])
              .replace("%style%", (100 * skills[i][1]).toFixed(1));

            skillSection.append(formattedSkillItem);
          }
          skillSection.append(HTMLskillFooter);

          return formattedSkillItem;
        } else {
          skillSection.append(formattedSkillError);
          $("#skills").hide();

          return formattedSkillError;
        }
      })(),
      formatLanguages = (function() {
        $("#languages").append(HTMLlanguageHeader);

        var languages = bio.languages,
          languageSection = $("#language-skills"),
          formattedLanguageError = "<p>There are no well known languages.</p>",
          formattedLanguageItem,
          formattedLanguageRating;

        if (languages && languages.length > 0) {
          for (var i in languages) {
            formattedLanguageItem = HTMLlanguageItem.replace(
              "%data%",
              languages[i][0]
            );
            formattedLanguageRating = HTMLlanguageRating.replace(
              "%value%",
              languages[i][1]
            ).replace("%rating%", languages[i][1]);

            languageSection.append(formattedLanguageItem);
            $(".skill:last").append(formattedLanguageRating);
          }

          return [formattedLanguageItem, formattedLanguageRating];
        } else {
          languageSection.append(formattedLanguageError);
          $("#languages").hide();

          return formattedLanguageError;
        }
      })(),
      formatHobbies = (function() {
        var hobbies = bio.hobbies,
          hobbySection = $("#hobbies"),
          formattedHobbyError = "<p>There are no hobbies at all.</p>",
          formattedHobbyItem;

        if (hobbies && hobbies.length > 0) {
          for (var i in hobbies) {
            formattedHobbyItem = HTMLhobbyItem.replace("%data%", hobbies[i]);

            hobbySection.append(formattedHobbyItem);
          }
          return [formattedHobbyItem];
        } else {
          hobbySection.append(formattedHobbyError);
          hobbySection.hide();

          return formattedHobbyError;
        }
      })();
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
      description:
        'Graduate paper: "Discrete images determination on the basis of Algebraic Information Theory".'
    },
    {
      school: "Centre for Development of Advanced Computing",
      date: "2014",
      location: "Delhi, India",
      majors: ["Web Development with .NET"],
      degree: "Certificate",
      description:
        "Training program for civil servants in association with the government of India."
    }
  ],
  onlineCourses: [
    {
      title: "CS169.1x, CS169.2x Engineering Software as a Service",
      school: "BerkeleyX",
      date: "2014",
      location: "Berkeley, CA, USA",
      url:
        "https://s3.amazonaws.com/verify.edx.org/downloads/3fcdb6b46fb84ab69c5b8d74a057e72f/Certificate.pdf",
      description:
        "Online course from BerkeleyX teaches software engineering using Agile " +
        "techniques to build Software as a Service using Ruby on Rails."
    },
    {
      title: "Front-End Web Developer Nanodegree",
      school: "Udacity",
      date: "2014",
      location: "Mountain View, CA, USA",
      url: "#",
      description:
        "Long term training program from Udacity platform oriented on frontend part of modern " +
        "web development."
    },
    {
      title: "Professional Wed Development with Ruby on Rails",
      school: "Thinknetica",
      date: "2015",
      location: "Moscow, Russia",
      url: "#",
      description:
        "Training program from online school Thinknetica covers wide range of topics starting from authentication, file upload and " +
        "goes through background jobs, full-text search, zero-downtime deploy and high load."
    },
    {
      title: "Advanced Development of Rich SPA with React.js",
      school: "Thinknetica",
      date: "2017",
      location: "Moscow, Russia",
      url: "#",
      description:
        "Online bootcamp practicing building single page applications using React.js and Redux. " +
        "Program includes topics related to production optimization, testing, server-side rendering, middlewares and many more."
    },
    {
      title: "Brainwashing Ruby on Rails",
      school: "Evil Martians",
      date: "2017",
      location: "Moscow, Russia",
      url: "#",
      description:
        "Amazing 4 days workshop for actual advanced topics for Ruby on Rails developers. " +
        "Internals of rack and web servers, design patterns that actually work, PostgresQL under the hood, testing and profiling, and many more. " +
        "All those topics were explained in such ease and quality. 100% would recommend."
    },
    {
      title: "Machine Learning and Data Science Specialization",
      school: "Moscow Institute of Physics and Technology",
      date: "2018",
      location: "Moscow, Russia",
      url:
        "https://www.coursera.org/specializations/machine-learning-data-analysis",
      description:
        "Coursera specialization for data scientist from MIPT. Still in progress."
    },
    {
      title: "DevOps tools and practices",
      school: "Express 42",
      date: "2018",
      location: "Moscow, Russia",
      url: "https://otus.ru/lessons/devops-praktiki-i-instrumenty/",
      description:
        "5 months intensive course about modern tools and practices for platform infrastructure and achitecture. Still in progress."
    }
  ],

  display: function() {
    var formatEducation = (function() {
      var schools = education.schools,
        courses = education.onlineCourses,
        educationSection = $("#education"),
        formattedEducationError =
          "<p>There are no spectific information about education.</p>",
        formattedEducationItem,
        educationItemUrl;

      if ((schools && schools.length > 0) || (courses && courses.length > 0)) {
        educationSection.append(HTMLeducationHeader);
        educationSection = $("#education-list");

        if (schools && schools.length > 0) {
          for (var i in schools) {
            formattedEducationItem = HTMLeducationItem.replace(
              "%date%",
              schools[i].date
            )
              .replace(
                "%data%",
                schools[i].school + ". " + schools[i].majors[0]
              )
              .replace("%description%", schools[i].description);
            educationSection.append(formattedEducationItem);
          }
        }
        if (courses && courses.length > 0) {
          for (var i in courses) {
            if (courses[i].url != "#") {
              educationItemUrl = HTMLeducationItemURL.replace(
                "%url%",
                courses[i].url
              ).replace("%data%", courses[i].school + ". " + courses[i].title);
              formattedEducationItem = HTMLeducationItem.replace(
                "%data%",
                educationItemUrl
              );
            } else {
              formattedEducationItem = HTMLeducationItem.replace(
                "%data%",
                courses[i].school + ". " + courses[i].title
              );
            }
            formattedEducationItem = formattedEducationItem
              .replace("%date%", courses[i].date)
              .replace("%description%", courses[i].description);
            educationSection.append(formattedEducationItem);
          }
        }

        return [formattedEducationItem];
      } else {
        educationSection.append(formattedEducationError);
        educationSection.hide();

        return formattedEducationError;
      }
    })();
  }
};

var work = {
  jobs: [
    {
      employer: "Xing",
      url: "https://www.xing.com/",
      profession: "Web Developer",
      location: "Hamburg, Germany",
      dates: "October, 2017 - Present Time",
      description:
        "Being a member of tech core team, I got involved in multiple important applications. " +
        "Aggregating huge amount of data and providing it to the unified marketing tool, " +
        "migrating existing REST API to connect to graphQL proxy, introducing authenticated file " +
        "downloading server and taking care of a big part of GRPD project. " +
        "Meanwhile coordinating work and consult regarding technical solutions between product teams, UI/UX, " +
        "and legal departments to make the platform better."
    },
    {
      employer: "Voyagin",
      url: "https://www.govoyagin.com/",
      profession: "Web Developer",
      location: "Tokyo, Japan",
      dates: "November, 2015 - July, 2017",
      description:
        "Major focus is improving functionality of the main company product. Among multiple tasks some of the " +
        "most important were introducing tiered pricing scheme, new scheduling system, role based access control, " +
        "purchase automation for partnership vendors, rebuilding frontend using React. " +
        "Of course those were not the only tasks, as always a lot of attention was paid to refactoring and managing performace."
    },
    {
      employer: "City Hall",
      url: "#",
      profession: "System Administrator / Web Developer",
      location: "Arkhangelsk, Russia",
      dates: "August, 2013 - November, 2015",
      description:
        "Main field of focus is internal application of document workflow. Implementation of new " +
        "functionality, testing usability and integration with other services. Minor tasks are creating " +
        "application for realtime status check of all active network devices, server maintenance."
    },
    {
      employer: "City Hall",
      url: "#",
      profession: "System Administrator",
      location: "Arkhangelsk, Russia",
      dates: "November, 2012 - August, 2013",
      description:
        "User and recourse management via Microsoft administrative tools for local network. Routing " +
        "organization between separate VLANs. Testing local services and fixing bugs."
    },
    {
      employer: "Casting Agency",
      url: "#",
      profession: "Crowd Scenes Actor",
      location: "Los-Angeles, CA",
      dates: "June, 2010 - August, 2010",
      description:
        "Crowd scenes actor in different tv shows. " +
        "I mentioned this my first paid job as a reminder of good old days."
    }
  ],

  display: function() {
    var formatWork = (function() {
      var jobs = work.jobs,
        workSection = $("#work"),
        formattedWorkError = "<p>No previous experience.</p>",
        formattedWorkItem;

      if (jobs && jobs.length > 0) {
        for (var i in jobs) {
          var employer,
            job = jobs[i];

          if (job.url != "#") {
            employer = HTMLworkEmployerURL.replace("%url%", job.url).replace(
              "%employer%",
              job.employer
            );
          } else {
            employer = job.employer;
          }

          formattedWorkItem = HTMLworkItem.replace("%employer%", employer)
            .replace("%dates%", job.dates)
            .replace("%profession%", job.profession)
            .replace("%description%", job.description);

          workSection.append(formattedWorkItem);
        }

        return [formattedWorkItem];
      } else {
        workSection.append(formattedWorkError);
        workSection.hide();

        return formattedWorkError;
      }
    })();
  }
};

var portfolio = {
  projects: [
    {
      name: "Voyagin",
      date: "November, 2015 - July, 2017",
      url: "https://www.govoyagin.com/",
      title: "Marketplace for Travelling Activities",
      description:
        "Main company product. Allows travellers to experience unique activities in many contries all over the world.",
      screenshots: [
        {
          source: "images/Voyagin-1.png",
          alter: "screenshot"
        },
        {
          source: "images/Voyagin-2.png",
          alter: "screenshot"
        },
        {
          source: "images/Voyagin-3.png",
          alter: "screenshot"
        }
      ]
    },
    {
      name: "YABP",
      date: "December, 2016 - May 2017",
      url: "https://github.com/thrasherDGK/YABP",
      title: "Yet Another Blogging Platfrom",
      description:
        "Simpe interface for blog platform application with some nice features. " +
        "While working on this pet project I tried to focus on topics outside of my comfort zone. " +
        "Server-side rendering, custom Redux middlewares to handle async API requests, " +
        "routing with preliminary data preparation to avoid unnecessary server access (plus nobody likes spinners), " +
        "creating React component using external libraries which don't have React ports, and many more.",
      screenshots: [
        {
          source: "images/YABP-1.png",
          alter: "screenshot"
        },
        {
          source: "images/YABP-2.png",
          alter: "screenshot"
        },
        {
          source: "images/YABP-3.png",
          alter: "screenshot"
        }
      ]
    },
    {
      name: "nControl",
      date: "August, 2013 - November, 2015",
      url: "#",
      title: "CRM application",
      description:
        "Internal application for organization document workflow and network recourses management.",
      screenshots: [
        {
          source: "images/ncontrol-1.png",
          alter: "screenshot"
        },
        {
          source: "images/ncontrol-2.png",
          alter: "screenshot"
        },
        {
          source: "images/ncontrol-3.png",
          alter: "screenshot"
        }
      ]
    },
    {
      name: "Solve Simple",
      date: "December, 2014 - March, 2015",
      url: "#",
      title: "Ask community for help",
      description:
        "QnA application built from scratch during training course from online school Thinknetica. " +
        "In this project I've used a bunch of technologies like Faye, Sphinx and Sidekiq for the first time." +
        "This project helped me a lot in undestanding Rails better in such aspects as zero-downtime deployment, " +
        "organization of pub/sub service, REST api, remote deploy and monitoring.",
      screenshots: [
        {
          source: "images/SolveSimple-1.png",
          alter: "screenshot"
        },
        {
          source: "images/SolveSimple-2.png",
          alter: "screenshot"
        },
        {
          source: "images/SolveSimple-3.png",
          alter: "screenshot"
        }
      ]
    }
  ],

  display: function() {
    var formatPortfolio = (function() {
      var projects = portfolio.projects,
        portfolioSection = $("#portfolio"),
        modalSection = $("body"),
        formattedProjectError = "<p>There are no finished projects yet.</p>",
        formattedProjectItem,
        formattedProjectImage,
        formattedModalHeader,
        formattedModalItem;

      var imgIndex = 0;

      if (projects && projects.length > 0) {
        for (var i in projects) {
          portfolioSection.append(HTMLprojectHeader);

          var image,
            project = projects[i],
            formattedProjectItem = HTMLprojectItem.replace(
              "%date%",
              project.date
            )
              .replace("%title%", project.title)
              .replace("%description%", project.description),
            formattedModalHeader = HTMLmodalHeader.replace("%index%", i)
              .replace("%project%", project.name)
              .replace("%carousel%", i)
              .replace("%left%", i)
              .replace("%right%", i);

          if (project.url != "#") {
            var formattedProjectURL = HTMLprojectURL.replace(
              "%url%",
              project.url
            ).replace("%name%", project.name);
            formattedProjectItem = formattedProjectItem.replace(
              "%data%",
              formattedProjectURL
            );
          } else {
            formattedProjectItem = formattedProjectItem.replace(
              "%data%",
              project.name
            );
          }

          $(".project:last").append(formattedProjectItem);
          modalSection.append(formattedModalHeader);

          if (project.screenshots.length > 0) {
            for (var j in project.screenshots) {
              image = project.screenshots[j];

              formattedProjectImage = HTMLprojectImage.replace(
                "%index%",
                imgIndex
              )
                .replace("%number%", i)
                .replace("%source%", image.source)
                .replace("%alter%", image.alter);
              $(".screenshots:last").append(formattedProjectImage);

              imgIndex += 1;

              formattedModalItem = HTMLmodalItem.replace(
                "%source%",
                image.source
              ).replace("%alter%", image.alter);
              $(".carousel-inner:last").append(formattedModalItem);
            }
          }
        }

        return [formattedProjectItem];
      } else {
        portfolioSection.append(formattedProjectError);
        portfolioSection.hide();

        return formattedProjectError;
      }
    })();
  }
};

var map = {
  initialize: function() {
    var map,
      locations,
      mapOptions = {
        zoomControl: true,
        disableDefaultUI: true
      };

    map = new google.maps.Map(document.querySelector("#map"), mapOptions);

    locationFinder = function() {
      var locations = [];
      locations.push(bio.contacts.location);

      for (var i in education.schools) {
        locations.push(education.schools[i].location);
      }

      for (var i in work.jobs) {
        locations.push(work.jobs[i].location);
      }

      return locations;
    };

    createMapMarker = function(placeData) {
      // The next lines save location data from the search result object to local variables
      var lat = placeData.geometry.location.lat(), // latitude from the place service
        lon = placeData.geometry.location.lng(), // longitude from the place service
        name = placeData.formatted_address, // name of the place from the place service
        bounds = window.mapBounds; // current boundaries of the map window

      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: map,
        position: placeData.geometry.location,
        title: name
      });

      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });

      google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map, marker);
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      map.fitBounds(bounds);
      // center the map
      map.setCenter(bounds.getCenter());
    };

    callback = function(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMapMarker(results[0]);
      }
    };

    pinPoster = function(locations) {
      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(map);

      // Iterates through the array of locations, creates a search object for each location
      for (place in locations) {
        // the search request object
        var request = {
          query: locations[place]
        };

        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, callback);
      }
    };

    window.mapBounds = new google.maps.LatLngBounds();
    locations = locationFinder();
    pinPoster(locations);
    window.addEventListener("resize", function(e) {
      // Make sure the map bounds get updated on page resize
      map.fitBounds(mapBounds);
    });

    var minZoomLevel = 1,
      maxZoomLevel = 6,
      minLatValue = 49.5,
      currentLatValue;

    var allowedBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-49.5, -180),
      new google.maps.LatLng(49.5, 180)
    );

    // Change map bound depending on zoom level
    var changeBounds = function(zoomValue) {
      var calculateLat = function(zoomLevel) {
        currentLatValue = minLatValue;

        for (var i = 0; i < zoomLevel; i++) {
          currentLatValue +=
            (20 * (zoomLevel - 1)) / Math.pow(2, zoomLevel - 1);
        }

        return currentLatValue;
      };

      return new google.maps.LatLngBounds(
        new google.maps.LatLng(-calculateLat(zoomValue - 1), -180),
        new google.maps.LatLng(calculateLat(zoomValue - 1), 180)
      );
    };

    // Check if map center belongs to defined bounds
    var checkCenter = function() {
      if (allowedBounds.contains(map.getCenter())) {
        return;
      }
      var mapCenter = map.getCenter();
      var X = mapCenter.lng(),
        Y = mapCenter.lat();

      var AmaxX = allowedBounds.getNorthEast().lng(),
        AmaxY = allowedBounds.getNorthEast().lat(),
        AminX = allowedBounds.getSouthWest().lng(),
        AminY = allowedBounds.getSouthWest().lat();

      if (Y < AminY) {
        Y = AminY;
      }
      if (Y > AmaxY) {
        Y = AmaxY;
      }

      map.setCenter(new google.maps.LatLng(Y, X));
    };

    // Limit zoom level
    google.maps.event.addListener(map, "zoom_changed", function() {
      if (map.getZoom() < minZoomLevel) {
        map.setZoom(minZoomLevel);
      } else if (map.getZoom() > maxZoomLevel) {
        map.setZoom(maxZoomLevel);
      }

      allowedBounds = changeBounds(map.getZoom());
      checkCenter();
    });

    google.maps.event.addListener(map, "center_changed", function() {
      checkCenter();
    });
  },

  display: function() {
    window.addEventListener("load", map.initialize);

    $("#mapDiv").append(HTMLgoogleMap);
  }
};

bio.display();
education.display();
work.display();
portfolio.display();
map.display();
