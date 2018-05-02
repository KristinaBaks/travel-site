
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%"); // jquerry selector we want to target, waypoints argument we want to pass
new RevealOnScroll($(".testimonial"), "60%"); // so here by creatin a new obj we can create a reveal on scroll effect anywhere, "0" is the default
var stickyHeader = new StickyHeader();