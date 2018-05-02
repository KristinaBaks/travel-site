import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els; // previously: = $(".feature-item, .testimonials");
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints(); // to make sure it works as soon as the page loads
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints() {
        var that = this; // can't target 'this' (eg  this.offsetPercentage) down at the offset, so create a variable here!)
        this.itemsToReveal.each(function() { // itemsToReveal contains 4 feature-items, so with 'each' we target each one individually
           var currentItem = this; // 'this' points to 'this.itemsToReveal.each' bcs it's not accessable from within waypoint f-ion, bcs in there 'this' stands for waypoint
            new Waypoint({ // accessable bcs of the package
                element: currentItem, // DOM elm the reaching of which will trigger the effect
                handler: function() { // what we want to happen when we scroll to the elm
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                offset: that.offsetPercentage // previously: "85%";  0 is the very top of the page (default), 100% - bottom
            });
        })
    }
}

export default RevealOnScroll;