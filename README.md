# jsreport
[![NPM Version](http://img.shields.io/npm/v/jsreport.svg?style=flat-square)](https://npmjs.com/package/jsreport)
[![NPM Downloads](https://img.shields.io/npm/dm/jsreport.svg?style=flat-square)](https://npmjs.com/package/jsreport)
[![Build Status](https://travis-ci.org/jsreport/jsreport.png?branch=master)](https://travis-ci.org/jsreport/jsreport)

**piprog's fork - goals**

To support multiple named sheets and proper number formatting with the pre-defined XLSX numFmtIds (instead of treating numbers as string).

The pre-defined numFmtIds are (see https://social.msdn.microsoft.com/Forums/office/en-US/e27aaf16-b900-4654-8210-83c5774a179c/xlsx-numfmtid-predefined-id-14-doesnt-match):

```
1 0
2 0.00
3 #,##0
4 #,##0.00
5 $#,##0_);($#,##0)
6 $#,##0_);[Red]($#,##0)
7 $#,##0.00_);($#,##0.00)
8 $#,##0.00_);[Red]($#,##0.00)
9 0%
10 0.00%
11 0.00E+00
12 # ?/?
13 # ??/??
14 m/d/yyyy
15 d-mmm-yy
16 d-mmm
17 mmm-yy
18 h:mm AM/PM
19 h:mm:ss AM/PM
20 h:mm
21 h:mm:ss
22 m/d/yyyy h:mm
37 #,##0_);(#,##0)
38 #,##0_);[Red](#,##0)
39 #,##0.00_);(#,##0.00)
40 #,##0.00_);[Red](#,##0.00)
45 mm:ss
46 [h]:mm:ss
47 mm:ss.0
48 ##0.0E+0
49 @
```

Method of specifying numFmtId (and potentially other features later): each cell (td) may have a .jsr-xlsx = {numFmtId: 3} property that will be used to set the format.

**Open source platform for designing and rendering various reports.**

jsreport is a reporting server which lets developers define reports using  javascript templating engines (like jsrender or handlebars). It supports various report output formats like html, pdf, excel and others.  It also includes advanced reporting features like user management, REST API, scheduling, designer or sending emails.

For more informations about the platform please visit http://jsreport.net

## Production installation
see [http://jsreport.net/downloads](http://jsreport.net/downloads)

## Development
To be able to install and start jsreport on your development machine you need to do following.

1. install nodejs
2. clone this repository
3. npm install
4. npm start

You may find installation troubleshooting guide specific for your platform [here](https://github.com/jsreport/docs/tree/master/installation).

See [Gruntfile.js](https://github.com/jsreport/jsreport/blob/master/Gruntfile.js) for build automation options.

###Environemnts
jsreport adapts to `production` and `development` nodejs environments. Difference is that in `production` environment you get javascript files combined and minified for fast web application startup opposite to `development` environment where you get all js files individually what makes debugging easier. Second difference is that in `production` environment jsreport use `prod.config.json` as configuration file opposite to `dev.config.json` in `development.

To change environment use cmd `set NODE_ENV=development` or use options your IDE provides. If you don't specify node environment jsreport assumes production as default.

###Configurations
jsreport loads `dev.config.json` or `prod.config.json` configuration file on start up based on nodejs environment. If configuration file is not found, jsreport creates default configuration file from `example.config.json`.

See [config](https://github.com/jsreport/jsreport/blob/master/config.md) documentation for details.

###Tests

 **grunt test** - start tests with file system based db (neDb), no mongo needed

 **grunt test-mongo** - start tests with mongo db, mongodb must be running on localhost

 **grunt test-all** - start tests with nedb and then once again with mongo (used with travis CI)

 **grunt test-integration** - start all tests with nedb including integration tests,  needs java, fop and phantomjs running

## Contributions
The easiest way how to contribute to jsreport open source community is to implement jsreport extension. Pull requests to this core repository are also welcome.

**Check the tutorial for [writing custom extensions](http://jsreport.net/learn/custom-extension)**

##Roadmap

1. Improving jsreport codebase - extract whole rendering process into a separate lightweight package that could be easier used in node.js applications
2. Improving stability and documentation to reach release 1.0
3. Thinking about end user drag and drop designer.. 

**Missing a feature? Submit a feature request.**

## License 

Copyright (c) 2014 Jan Blaha &lt;jan.blaha at hotmail.com&gt;


This library is free software; you can redistribute it and/or
modify it under the terms of the GNU Lesser General Public
License as published by the Free Software Foundation; either
version 3.0 of the License, or (at your option) any later version.
This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the [GNU
Lesser General Public License](http://www.gnu.org/licenses/lgpl.html) for more details.
You should have received a copy of the GNU Lesser General Public
License along with this library.



