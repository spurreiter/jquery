define( [
	"./core",
	"./selector",
	"./traversing",
	"./callbacks",
	"./deferred",
	"./core/ready",
	"./data",
	"./queue",
	"./queue/delay",
	"./attributes",
	"./event",
	"./event/alias",
	"./event/focusin",
	"./manipulation",
	"./manipulation/_evalUrl",
	"./wrap",
	"./css",
	"./css/hiddenVisibleSelectors",
	"./serialize",
	"./ajax",
	"./ajax/xhr",
	"./ajax/script",
	"./ajax/jsonp",
	"./ajax/load",
	"./event/ajax",
	"./effects",
	"./effects/animatedSelector",
	"./purify",
	"./offset",
	"./dimensions",
	"./deprecated",
	"./exports/amd"
], function( jQuery ) {

// mitigate CVE-2020-11022
// see https://github.com/jquery/jquery/security/advisories/GHSA-gxr4-xjj5-5px2
jQuery.htmlPrefilter = function( html ) {
	return html;
};

return ( window.jQuery = window.$ = jQuery );

} );
