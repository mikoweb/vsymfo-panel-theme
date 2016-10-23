require(['jquery', 'bootstrap-toggle', 'select2', 'theme/bootstrap-layout'],
function ($) {
    "use strict";
    $('input.input-toggle').bootstrapToggle();
    $('select.select2').select2();
});
