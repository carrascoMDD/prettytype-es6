/*
* dumpingpolicy_filterkinds_type.js.js
*
* Created @author Antonio Carrasco Valero 201612091015
*
*
***************************************************************************

Copyright 2014 2015 2016 Antonio Carrasco Valero
ECMAscript6/2015 for core modules including a base prototype and prototypes hierarchy, intended to be reused on the Browser as core for i.e. Angular Controllers and Services, as in the uiwire component. Licensed under EUPL  http://www.uiwire.org

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



import DumpingPolicy          from "prettytype/identifying/dumpingpolicy_type.js" ;
import ConsoleSvce            from "prettytype/utils/console_svce.js" ;



const C_Type            = "DumpingPolicyFilterKinds";
const C_ModuleName      = "dumpingpolicy_filterkinds_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;




const DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyFilterKindsDefaultName";


const LOGCHANGESTOEVENTKINDSNOTFORCONSOLE = true;



/*
const EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NONE";
const EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE";
const EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_RESTRICTIVE_NOPROMISE";
const EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";
*/
const EVENTSSETNOTFORCONSOLE = "EVENTKINDS_NOTFORCONSOLE_NOPROMISE";




if( EVENTSSETNOTFORCONSOLE) {

    if( typeof EVENTSSETNOTFORCONSOLE == "string") {
        var anEventsSetNotForConsole = theS_CommonEventKinds[ EVENTSSETNOTFORCONSOLE];
        if( anEventsSetNotForConsole) {
            EVENTKINDS_NOTFORCONSOLE = anEventsSetNotForConsole.slice();
        }
        else {
            EVENTKINDS_NOTFORCONSOLE = [];
        }
    }
    else {
        EVENTKINDS_NOTFORCONSOLE = EVENTSSETNOTFORCONSOLE;
    }
}
else {
    EVENTKINDS_NOTFORCONSOLE = theS_CommonEventKinds.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
}
if( !EVENTKINDS_NOTFORCONSOLE) {
    EVENTKINDS_NOTFORCONSOLE = theS_CommonEventKinds.EVENTKINDS_NOTFORCONSOLE_DEFAULT.slice();
}







export default class DumpingPolicyFilterKinds extends DumpingPolicy {


    constructor( theTitle, theIdentifier, theRecorder) {

        super( theTitle, theIdentifier, theRecorder);

        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;


        /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

        this._pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder);
    }










    _pInit_DumpingPolicyFilterKinds( theTitle, theIdentifier, theRecorder) {

    }




    _fTitleDefault( ) {

        return DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
    }














    fSetEventKindsNotForConsole_inPrototype( theEventKinds) {

        aPrototype._v_EventKindsNotForConsole = theEventKinds;

        if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
            console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
        }

        return aPrototype._v_EventKindsNotForConsole;
    }





    fFewerEventKindsNotForConsole_inPrototype( theEventKinds) {

        if( !theEventKinds) {
            return aPrototype._v_EventKindsNotForConsole;
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return aPrototype._v_EventKindsNotForConsole;
        }


        var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

        for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

            var anEventKind = theEventKinds[ anEventKindIdx];
            if( anEventKind) {

                var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                if( anEventKindIndex >= 0) {

                    someEventKinds.splice( anEventKindIndex, 1);
                    if( !someEventKinds.length) {
                        break;
                    }
                }
            }
        }


        aPrototype._v_EventKindsNotForConsole = someEventKinds;

        if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
            console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
        }

        return aPrototype._v_EventKindsNotForConsole;
    }






    fMoreEventKindsNotForConsole_inPrototype( theEventKinds) {

        if( !theEventKinds) {
            return aPrototype._v_EventKindsNotForConsole;
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return aPrototype._v_EventKindsNotForConsole;
        }


        var someEventKinds = aPrototype._v_EventKindsNotForConsole.slice();

        for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

            var anEventKind = theEventKinds[ anEventKindIdx];
            if( anEventKind) {

                var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                if( anEventKindIndex < 0) {

                    someEventKinds.push( anEventKind);
                }
            }
        }


        aPrototype._v_EventKindsNotForConsole = someEventKinds;

        if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
            console.log( "EventKindsNotForConsole_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsNotForConsole, null, 4));
        }

        return aPrototype._v_EventKindsNotForConsole;
    }


















    fSetEventKindsNotForConsole( theEventKinds) {

        this._v_EventKindsNotForConsole = theEventKinds;

        if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
            console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
        }

        return this._v_EventKindsNotForConsole;
    }








    fFewerEventKindsNotForConsole( theEventKinds) {

        if( !theEventKinds) {
            return this._v_EventKindsNotForConsole;
        }


        if( !this._v_EventKindsNotForConsole) {
            this._v_EventKindsNotForConsole = [ ];
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return this._v_EventKindsNotForConsole;
        }


        var someEventKinds = this._v_EventKindsNotForConsole.slice();

        for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

            var anEventKind = theEventKinds[ anEventKindIdx];
            if( anEventKind) {

                var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                if( anEventKindIndex >= 0) {

                    someEventKinds.splice( anEventKindIndex, 1);
                    if( !someEventKinds.length) {
                        break;
                    }
                }
            }
        }


        this._v_EventKindsNotForConsole = someEventKinds;

        if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
            console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
        }

        return this._v_EventKindsNotForConsole
    }








    fMoreEventKindsNotForConsole( theEventKinds) {

        if( !theEventKinds) {
            return this._v_EventKindsNotForConsole;
        }


        if( !this._v_EventKindsNotForConsole) {
            this._v_EventKindsNotForConsole = [ ];
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return this._v_EventKindsNotForConsole;
        }


        var someEventKinds = this._v_EventKindsNotForConsole.slice();

        for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

            var anEventKind = theEventKinds[ anEventKindIdx];
            if( anEventKind) {

                var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                if( anEventKindIndex < 0) {

                    someEventKinds.push( anEventKind);
                }
            }
        }


        this._v_EventKindsNotForConsole = someEventKinds;

        if( this.LOGCHANGESTOEVENTKINDSNOTFORCONSOLE) {
            console.log( "EventKindsNotForConsole=\n" + JSON.stringify( this._v_EventKindsNotForConsole, null, 4));
        }

        return this._v_EventKindsNotForConsole
    }


















    fMustDumpRecord( theRecord) {

        if( !theRecord) {
            return false;
        }

        if( !this.fMayDumpRecords()) {
            return false;
        }


        var anEventKind = theRecord._v_EventKind;
        if( !anEventKind) {
            return false;
        }

        var someEventKindsNotForConsole = this.fEventKindsNotForConsole();
        if( !someEventKindsNotForConsole) {
            return true;
        }

        if( someEventKindsNotForConsole.indexOf( anEventKind) < 0) {
            return true;
        }

        return false;

    }






    fEventKindsNotForConsole() {

        /* Slot property named _v_EventKindsNotForConsole only initialized in the prototype. May be overriden by individual instantes setting their own value */

        /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsNotForConsole */
        if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {

            if( !this._v_EventKindsNotForConsole) {
                return null;
            }

            return this._v_EventKindsNotForConsole;
        }



        if( !this._v_EventKindsNotForConsole) {
            return null;
        }

        return this._v_EventKindsNotForConsole;

    }




    pRelease() {

        this._v_Prototype_DumpingPolicy.pRelease.apply( this);

        if( this.hasOwnProperty( "_v_EventKindsNotForConsole")) {
            delete( this._v_EventKindsNotForConsole);
        }

    }


}






