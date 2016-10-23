define('theme__row-url-view', ['jquery', 'marionette', 'underscore'], function ($, Mn, _) {
    "use strict";

    return Mn.View.extend({
        template: false,
        ui: {
            row: 'tr[data-row-url], .row-url[data-row-url]',
            clickable: 'tr[data-row-url] a, .row-url[data-row-url] a'
        },
        events: {
            'click @ui.row': '_onRowClick',
            'click @ui.clickable': '_onSubItemClick'
        },
        /**
         * @param {Event} e
         * @private
         */
        _onRowClick: function (e) {
            var el = $(e.target),
                attr = 'data-row-url',
                url = el.is('[' + attr + ']') ? el.attr(attr) : el.closest('[' + attr + ']').attr(attr);

            if (!_.isUndefined(url)) {
                window.location = url;
            }
        },
        /**
         * @param {Event} e
         * @private
         */
        _onSubItemClick: function (e) {
            e.stopPropagation();
        }
    });
});
