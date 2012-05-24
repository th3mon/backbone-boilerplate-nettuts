Backbone Boilerplate
====================

This code was originally taken from tbranyen's 
[backbone-boilerplate](https://github.com/tbranyen/backbone-boilerplate).
It has been modified to help get a Nettuts+ tutorial off the ground.

## Changes from original backbone-boilerplate ##

* (-) Removed app/modules/example.js
* (-) Removed app/templates.example.html
* (-) Removed assets/img/backbone.png
* (-) Removed assets/js/libs/almond.js
* (-) Removed grunt.js
* (-) Removed test/

* Modified app/main.js (Removed references to example module, removed pushstate)
* Modified index.html (Removed root reference to resources [allows you to run code without a server])
* Modified namespace.js (Removed root reference in ajax requests [allows you to run code without a server])
* Modified readme.md