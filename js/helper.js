var HTMLheaderPhoto 	 	 	 = "<div id='photo'><img src='%data%' alt='photo'></div>",
		HTMLheaderGreeting 	 	 = "<div id='text-header'><h1>Hello,<br>my name is <span>%data%</span><sup>%age%</sup> and I am a %role%</h1></div>",
		HTMLaboutMe				 	 	 = "<p>%data%</p>",
		HTMLcontactItem	   	 	 = "<div class='contact-item'></div>",
		HTMLcontactIcon	   	 	 = "<div class='icon pull-left text-center'><span class='fa fa-%data% fa-fw'></span></div>",
		HTMLcontactTitle   	 	 = "<div class='title pull-right'>%data%</div>",
		HTMLcontactDescription = "<div class='description pull-right'>%data%</div>",
		HTMLskillHeader				 = "<div class='skills'></div>",
		HTMLskillItem					 = "<div class='item-skills' data-percent='%value%' style='width: %style%px;'>%data%</div>",
		HTMLskillFooter				 = "<div class='skills-legend clearfix'><div class='legend-left legend'>Beginner</div><div class='legend-left legend'>" +
														 "<span>Proficient</span></div><div class='legend-right legend'><span>Expert</span></div><div class='legend-right legend'>Master</div></div>",
		HTMLlanguageHeader		 = "<div id='language-skills'></div>",
		HTMLlanguageItem			 = "<div class='skill'>%data%</div>",
		HTMLlanguageRating		 = "<div class='icons pull-right'><div class='icons-red' data-percent='%value%' style='width: %rating%%; height: 14px;'></div></div>",
		HTMLhobbyItem 				 = "<div class='hobby'>%data%</div>";

var HTMLeducationHeader  = "<ul id='education-list' class='clearfix'></ul>",
		HTMLeducationItem 	 = "<li><div class='year pull-left'>%date%</div><div class='description pull-right'><h3>%data%</h3>" +
                  				"<p>%description%</p></div></li>",
    HTMLeducationItemURL = "<a href='%url%'>%data%</a>";

var HTMLworkItem = "<div class='job clearfix'><div class='col-xs-3'><div class='where'>%employer%</div><div class='year'>%dates%</div></div>" +
              		 "<div class='col-xs-9'><div class='profession'>%profession%</div><div class='description'>%description%</div></div></div>";

var HTMLprojectHeader = "<div class='project clearfix'></div>",
		HTMLprojectItem		= "<div class='col-xs-3'><div class='name'><a href='%url%'>%name%</a></div><div class='year'>%date%</div></div><div class='col-xs-9'>" +
												"<div class='title'>%title%</div><div class='description'>%description%</div><div class='screenshots'></div></div></div>",
		HTMLprojectImage	= "<div class='col-xs-4 screenshot'><img class='img-responsive' src='%source%' alt='%alter%'></div>";

var HTMLgoogleMap = "<div id='map' class='box'></div>";