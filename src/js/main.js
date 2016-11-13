require(['jquery', 'theme__row-url-view', 'vsymfo/elements/date-picker', 'vsymfo/elements/datetime-picker',
    'bootstrap-toggle', 'select2', 'theme__bootstrap-layout'],
function ($, RowUrlView, DatePicker, DateTimePicker) {
    "use strict";
    var body = $('body');

    $('input.input-toggle').bootstrapToggle();
    $('select.select2').select2({
        width: '100%',
        allowClear: true
    });

    new RowUrlView({el: body});
    new DatePicker.default({
        el: $('input.input-datepicker')
    });
    new DateTimePicker.default({
        el: $('input.input-datetimepicker')
    });
});
