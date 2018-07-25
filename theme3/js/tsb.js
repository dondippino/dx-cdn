//(function ($) {
//
//    $.fn.threestatebutton = function (params) {
//        return this.each(function () {
//            var casing = $(document.createElement("div"))
//                    .addClass("tsb-casing")
//                    .css("height", (params.stateHeight * params.statecount) + "em")
//                    .append($(document.createElement("span"))
//                            .addClass("tsb-ball")
//                            .css("top", (params.stateHeight * params.state) + "em")
//                            .attr("data-tbsstate", params.state));
//            var source = $(this);
//            source.append(casing);
//            for (var i = 0; i < params.statecount; i++) {
//                casing.append($(document.createElement("span"))
//                        .addClass("tsb-state")
//                        .attr("data-tbsstate", i)
//                        .css("top", (i * params.stateHeight) + "em"));
//            }
//
//            casing.children(".tsb-state").click(function () {
//                var newpos = $(this).css("top");
//                var state = $(this).attr("data-tbsstate");
//                var oldstate = $(this).siblings(".tsb-ball").attr("data-tbsstate");
//                if (state !== oldstate) {
//                    $(this).siblings(".tsb-ball").animate({top: newpos}, 200, function () {
//                        $(this).attr("data-tbsstate", state);
//                        params.stateChanged(state, source);
//                    });
//                }
//            });
//        });
//
//    };
//
//}(jQuery));

(function ($) {

    $.fn.threestatebutton = function (params) {
        return this.each(function () {
            var casing = $(document.createElement("div"))
                    .addClass("tsb-casing")
                    .css("width", (params.stateWidth * params.statecount) + "em")
                    .css("box-sizing", "content-box")
                    .append($(document.createElement("span"))
                            .addClass("tsb-ball")
                            .css("left", (params.stateWidth * params.state) + "em")
                            .attr("data-tbsstate", params.state));
            var source = $(this);
            source.append(casing);
            for (var i = 0; i < params.statecount; i++) {
                casing.append($(document.createElement("span"))
                        .addClass("tsb-state")
                        .attr("data-tbsstate", i)
                        .css("left", (i * params.stateWidth) + "em"));
            }

            casing.children(".tsb-state").click(function () {
                var newpos = $(this).css("left");
                var state = $(this).attr("data-tbsstate");
                var oldstate = $(this).siblings(".tsb-ball").attr("data-tbsstate");
                if (state !== oldstate) {
                    $(this).siblings(".tsb-ball").animate({left: newpos}, 200, function () {
                        $(this).attr("data-tbsstate", state);
                        params.stateChanged(state, source);
                    });
                }
            });
        });

    };

}(jQuery));