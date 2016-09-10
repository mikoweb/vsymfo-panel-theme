require(['jquery', 'webui-cssloader', 'select2', 'lib/bootstrap-layout/bootstrap-layout'],
function ($, loader) {
    "use strict";
    loader.inject('@select2', function () {
        $('select.select2').select2();
    });
});
