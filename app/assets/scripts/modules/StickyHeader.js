import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement  = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.headerLinks = $(".primary-nav a"); // selecting all links
        this.createPageSectionWaypoints();
        this.addSmoothScroll();
        this.refreshWaypoints();
    }

    // refreshes the waypoints on load,necessary because lazysizes lazyload distorts the waypoint on load
    refreshWaypoints() {
        this.lazyImages.load(function() {
            Waypoint.refreshAll(); // no need to add this to other waypoints in other js files - this applies to all possible waypoints (package property)
        });
    }

    // on nav li a click scrolls smoothly to the section instead of jumping to it through "this.headerLinks = $(".primary-nav a");"
    addSmoothScroll() {
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    // change nav li a color on scroll when the section of the page corresponds (through html data binding "data-matching-link")
    // down 18%, up 40% - creates an illusion that the color remains only when the section occupies a larger part of the page
    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
            var currentPageSection = this;
            // for scroll down
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) { 
                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link"); //simply selecting an attribute within ".page-section" div
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "18%"
            });
       
            // for scroll up 
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link"); //simply selecting an attribute within ".page-section" div
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });
        });
    }
}

export default StickyHeader;