import $ from 'jquery';
import waypoints from '../../node_modules/waypoints/lib/noframework.waypoints';

//console.log("Testing Waypoints.js is ON!");


class linkGallery{

constructor () {
				this.linkek = $(".link1");
				this.triggerek = $(".norm3");
				this.events();
				}

events(){
console.log("New waypoints definition ON! Bay!");
var konstr = this;
new Waypoint({
			element: konstr.triggerek[0],
			handler: function () {
				konstr.linkek.each(function(){
					var jelen = this;
					$(jelen).addClass("link2");
					console.log("Styling done on \n");
				})
					 

					 },
			offset: 10
			})		

} //End of Events function

} //end of LG

var LG = new linkGallery();