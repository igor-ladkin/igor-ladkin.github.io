var HTMLheaderPhoto 	 	 	 = "<div id='photo'><img src='%data%' alt='photo'></div>",
		HTMLheaderGreeting 	 	 = "<h1>Hello,<br>my name is %data% and this is my resume</h1>",
		HTMLaboutMe				 	 	 = "<p>%data%</p>",
		HTMLcontactItem	   	 	 = "<div class='contact-item'></div>",
		HTMLcontactIcon	   	 	 = "<div class='icon'><span class='fa fa-%data%'></span></div>",
		HTMLcontactTitle   	 	 = "<div class='title'>%data%</div>",
		HTMLcontactDescription = "<div class='description'>Lorem ipsum dolor.</div>",
		HTMLskillHeader				 = "<div class='skills'></div>",
		HTMLskillItem					 = "<div class='item-skills' data-percent='%value%' style='width: %style%px;'>%data%</div>",
		HTMLlanguageHeader		 = "<div id='language-skills'></div>",
		HTMLlanguageItem			 = "<div class='skill'>%data%</div>",
		HTMLlanguageRating		 = "<div class='icons pull-right'><div style='width: %rating%%; height: 14px;' class='icons-red'></div></div>",
		HTMLhobbyItem 				 = "<div class='hobby'>%data%</div>";

var HTMLeducationHeader  = "<ul id='education-list' class='clearfix'></ul>",
		HTMLeducationItem 	 = "<li><div class='year pull-left'>%date%</div><div class='description pull-right'><h3>%data%</h3>" +
                  				"<p>%description%</p></div></li>",
    HTMLeducationItemURL = "<a href='%url%'>%data%</a>";

var HTMLworkItem = "<div class='job clearfix'><div class='col-xs-3'><div class='where'>%employer%</div><div class='year'>%dates%</div></div>" +
              		 "<div class='col-xs-9'><div class='profession'>%profession%</div><div class='description'>%description%</div></div></div>";