/*
 * jQuery Responsive Content Switcher; v0.1
 * http://www.ashleyhitchcock.co.uk
 * Copyright (c) 2013 Ashley Hitchcock; licensed: MIT License
 */
! function (win, doc, $, console, undefined) {
    "use strict";

    console || (console = {
        log: function () {}
    });

    var $win = $(win);

    $.fn.responsiveContentSwitcher = function (options) {

        // Default options.
        var settings = $.extend({
            secondaryObject: null,
            snapPoint: 480

        }, options);

        function changeOrder() {
            var winWidth = $win.width();

            if (winWidth < snapPoint) {
                primaryObject.insertAfter(secondaryObject);
            } else {
                secondaryObject.insertAfter(primaryObject);
            }

        }

        if (settings.secondaryObject) {

            var primaryObject = $(this),
                secondaryObject = $(settings.secondaryObject),
                snapPoint = settings.snapPoint;

            changeOrder();
            //Bind to resize
            $win.bind("resize", changeOrder);

        }

    };

}(window, document, window.jQuery, window.console);