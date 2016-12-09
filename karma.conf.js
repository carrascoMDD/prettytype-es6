module.exports = function(config){
    config.set({

        basePath : './',


        files: [

            'bower_components/babel-polyfill/browser-polyfill.js',

            'build/js/samplees6classes/samplees6class01.js',


            'test/samplees6classes-test/samplees6class01-test.js'

        ],

        autoWatch : false,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        port:  9877,
        colors:  true ,

        logLevel: config.LOG_INFO,

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]

    });
};
