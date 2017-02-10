module.exports = function(grunt) {

    grunt.initConfig({

        srcPath: "src",
        buildPath: "build",
        bowerCompPath: "src/lib/bower_components",

        svgicons2svgfont: {
            options: {
                fontName: "ppcg-font"
            },
            your_target: {
                src: 'fonts/ppcg-font/src/svg/*.svg',
                dest: 'fonts/ppcg-font/'
            }
        },


    });


    grunt.loadNpmTasks('grunt-svgicons2svgfont');


    grunt.registerTask('default', ['svgicons2svgfont'/*'htmlbuild', 'copy:main', 'copy:copyReplaceText', 'copy:copyReplaceText1', 'less'*//*, 'string-replace'*/]);

};