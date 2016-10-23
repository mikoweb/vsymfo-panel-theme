require(['jquery', 'theme__row-url-view', 'bootstrap-toggle', 'select2', 'theme__bootstrap-layout'],
function ($, RowUrlView) {
    "use strict";
    var body = $('body');
    $('input.input-toggle').bootstrapToggle();
    $('select.select2').select2();
    new RowUrlView({el: body});
});
