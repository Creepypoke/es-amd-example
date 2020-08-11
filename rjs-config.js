/**
 * Requirejs config
 *
 * @module rjs-config
 * @returns {object}
 */
module.exports = {
    baseUrl: '',
    paths: {
        "common"                      : "common",
        "img"                         : "img",
        "es6"                         : "node_modules/requirejs-babel/es6",
        "babel"                       : "node_modules/requirejs-babel/babel-5.8.34.min",
        "diacritic"                   : "node_modules/diacritic/diacritics",
        "backbone"                    : "node_modules/backbone/backbone",
        "underscore"                  : "node_modules/underscore/underscore",
        "lodash"                      : "node_modules/lodash/lodash",
        "jquery"                      : "bower_components/jquery/dist/jquery",
        "jquery-ps"                   : "bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery",
        "text"                        : "bower_components/text/text",
        "json"                        : "grunt/plugins/requirejs-json",
        "handlebars"                  : "bower_components/handlebars/handlebars",
        "spinner"                     : "bower_components/spin-js/spin",
        "spin"                        : "bower_components/spin-js/spin",
        "moment"                      : "bower_components/moment/moment",
        "select2"                     : "common/libs/select2/select2",
        "highcharts-core"             : "bower_components/highcharts/highcharts",
        "sha1"                        : "node_modules/js-sha1/build/sha1.min",
        "striffer"                    : "node_modules/striffer/dist/striffer.min",
        "amplitude-client"            : "node_modules/amplitude-client/dist/amplitude",
        "siteaudit-wizard"            : "siteaudit-wizard",
        "siteaudit-widgets"           : "sa_widgets/_components/projectsWidgets",
        "siteaudit/i18n"              : "i18n",
        "siteaudit/config"            : "empty:",
        "siteaudit/dispatcher"        : "sa_widgets/common/dispatcher/instance",
        "jsConfig"                    : "sa_widgets/common/configs/jsConfig",
        "amplitude"                   : "sa_widgets/common/amplitude/amplitude",
        "dispatcher"                  : "empty:",
        "navigation"                  : "empty:",
        "sa_i18n"                     : "empty:",
        "react"                       : "empty:",
        "react-dom"                   : "empty:",
        "create-project-container"    : "empty:"
    },
    shim: {
        "lodash": {
            "exports": "_"
        },
        "siteaudit-wizard/js/wizard": [
            "siteaudit-wizard/js/common/i18n"
        ],
        "highcharts-core": {
            "deps": ["jquery"],
            "exports": "Highcharts"
        }
    },
    optimize: 'none',

    sourceMap: false,
    generateSourceMaps: false,
    preserveLicenseComments: false,
    useStrict: true
};