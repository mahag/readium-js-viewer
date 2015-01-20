//  Copyright (c) 2014 Readium Foundation and/or its licensees. All rights reserved.
//  
//  Redistribution and use in source and binary forms, with or without modification, 
//  are permitted provided that the following conditions are met:
//  1. Redistributions of source code must retain the above copyright notice, this 
//  list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright notice, 
//  this list of conditions and the following disclaimer in the documentation and/or 
//  other materials provided with the distribution.
//  3. Neither the name of the organization nor the names of its contributors may be 
//  used to endorse or promote products derived from this software without specific 
//  prior written permission.

require.config({
    paths: {
        'versioning/Versioning' : 'versioning/PackagedVersioning',
        'viewer-version' : '../build/version.json'
    },
	config : {
    	'EpubReader' : {
            'useSimpleLoader' : false, // the cloud reader cannot pre-process HTML content documents and may need to load zipped EPUBs too (strictly-speaking, this config option is false by default, but we prefer to have it explicitly set here).
            'mathJaxUrl' : '/lib/mathjax/MathJax.js'
    	}
    }
});
