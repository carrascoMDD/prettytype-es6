/*
 * samplees6class01-test.js
 *
 * Created @author Antonio Carrasco Valero 201612080909
 *
 *
 ***************************************************************************

 Copyright 2016 Antonio Carrasco Valero
 Jasmine tests in Javascript for ECMAscript6/2015 core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

 Licensed under the EUPL, Version 1.1 only (the "Licence");
 You may not use this work except in compliance with the
 Licence.
 You may obtain a copy of the Licence at:
 https://joinup.ec.europa.eu/software/page/eupl/licence-eupl
 Unless required by applicable law or agreed to in
 writing, software distributed under the Licence is
 distributed on an "AS IS" basis,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 express or implied.
 See the Licence for the specific language governing
 permissions and limitations under the Licence.
 {{License2}}

 {{Licensed1}}
 {{Licensed2}}

 ***************************************************************************
 *
 */


/// <reference path="src/common/typesregistry.js"/>
"use strict";




describe("prettytype-es6  samplees6class01 tests", function () {


    var aSquare = new Polygon(10, 10);

    console.log( "aSquare.area=" + aSquare.area);


    it("Has area == 100", function () {
        expect( aSquare.area).toBe( 100);
    });

});


