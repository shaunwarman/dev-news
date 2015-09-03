'use strict';


module.exports = function babel(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-babel');

    // Options
    return {
        options: {
            sourceMap: true,
            nonStandard: true
        },
        dist: {
            files: {
                "dist/app.js": "public/js/app.js"
            }
        }
    };
};
