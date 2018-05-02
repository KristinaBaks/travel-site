import 'lazysizes';

// in webpack.config adjust the bundle
//in htm; srcset change to data-srcset and add class="lazyload"
//for css background img - in html add class lazyload to the responsable div and in css same div/class move the img to &.lazyloaded {}
//in html  class="lazyload" is added only to the img tag. source - only data-srcset

import 'picturefill';

//takes care of older browsers that don't support <picture> and <srcset>
//just import NOTHING else to do

import "../../temp/scripts/modernizr";