/*
 * @Author: zhaopeng
 * @Date:   2016-05-31 15:39:32
 * @Last Modified by:   zhaopeng
 * @Last Modified time: 2016-05-31 15:39:41
 */

'use strict';
// injection technique borrowed from http://stackoverflow.com/questions/840240/injecting-jquery-into-a-page-fails-when-using-google-ajax-libraries-api
window.onload = function() {
    var script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-2.1.4.min.js";
    script.onload = script.onreadystatechange = function() {
        $(document).ready(function() {
            $("#lst-ib").val("Hello, World!");
        });
    };
    document.body.appendChild(script);
};
