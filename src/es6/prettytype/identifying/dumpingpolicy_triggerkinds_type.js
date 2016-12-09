/*
* dumpingpolicy_triggerkinds_type.js
*
* Created @author Antonio Carrasco Valero 201612091023
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



import DumpingPolicyFilterKinds          from "prettytype/identifying/dumpingpolicy_filterkinds_type.js" ;



const C_Type            = "DumpingPolicyTriggerKinds";
const C_ModuleName      = "dumpingpolicy_triggerkinds_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;



const DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE = "DumpingPolicyTriggerKindsDefaultName";


const LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP = true;



/*
 const EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ALL";
*/
const EVENTSSETTRIGGERINGDUMP = "EVENTKINDS_TRIGGERINGDUMP_ERRORS";






if( EVENTSSETTRIGGERINGDUMP) {

    if( typeof EVENTSSETTRIGGERINGDUMP == "string") {
        var anEventsSetTriggeringDump = theS_CommonEventKinds[ EVENTSSETTRIGGERINGDUMP];
        if( anEventsSetTriggeringDump) {
            EVENTKINDS_TRIGGERINGDUMP = anEventsSetTriggeringDump.slice();
        }
        else {
            EVENTKINDS_TRIGGERINGDUMP = [];
        }
    }
    else {
        EVENTKINDS_TRIGGERINGDUMP = EVENTSSETTRIGGERINGDUMP;
    }
}
else {
    EVENTKINDS_TRIGGERINGDUMP = theS_CommonEventKinds.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
}
if( !EVENTKINDS_TRIGGERINGDUMP) {
    EVENTKINDS_TRIGGERINGDUMP = theS_CommonEventKinds.EVENTKINDS_TRIGGERINGDUMP_DEFAULT.slice();
}






export default class DumpingPolicyTriggerKinds extends DumpingPolicyFilterKinds {


    constructor( theTitle, theIdentifier, theRecorder) {

        super( theTitle, theIdentifier, theRecorder)

        this._pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder);
    }








    _pInit_DumpingPolicyTriggerKinds( theTitle, theIdentifier, theRecorder) {

        /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */
        if( EVENTKINDS_TRIGGERINGDUMP) {
            this._v_EventKindsTriggeringDump = EVENTKINDS_TRIGGERINGDUMP.slice();
        }
    }




    _fTitleDefault( ) {

        return DUMPINGPOLICYFILTERKINDS_DEFAULTTITLE;
    }











    fSetEventKindsTriggeringDump_inPrototype( theEventKinds) {

        aPrototype._v_EventKindsTriggeringDump = theEventKinds;

        if( LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
            console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
        }

        return aPrototype._v_EventKindsTriggeringDump;
    }




    fFewerEventKindsTriggeringDump_inPrototype( theEventKinds) {

        if( !theEventKinds) {
            return aPrototype._v_EventKindsTriggeringDump;
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return aPrototype._v_EventKindsTriggeringDump;
        }


        var someEventKinds = aPrototype._v_EventKindsTriggeringDump.slice();

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


        aPrototype._v_EventKindsTriggeringDump = someEventKinds;

        if( LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
            console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
        }

        return aPrototype._v_EventKindsTriggeringDump;
    }





    fMoreEventKindsTriggeringDump_inPrototype( theEventKinds) {

        if( !theEventKinds) {
            return aPrototype._v_EventKindsTriggeringDump;
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return aPrototype._v_EventKindsTriggeringDump;
        }


        var someEventKinds = aPrototype._v_EventKindsTriggeringDump.slice();

        for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

            var anEventKind = theEventKinds[ anEventKindIdx];
            if( anEventKind) {

                var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                if( anEventKindIndex < 0) {

                    someEventKinds.push( anEventKind);
                }
            }
        }


        aPrototype._v_EventKindsTriggeringDump = someEventKinds;

        if( LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
            console.log( "EventKindsTriggeringDump_inPrototype=\n" + JSON.stringify( aPrototype._v_EventKindsTriggeringDump, null, 4));
        }

        return aPrototype._v_EventKindsTriggeringDump;
    }












    fSetEventKindsTriggeringDump( theEventKinds) {

        this._v_EventKindsTriggeringDump = theEventKinds;

        if( LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
            console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
        }

        return this._v_EventKindsTriggeringDump;
    }









    fFewerEventKindsTriggeringDump( theEventKinds) {

        if( !theEventKinds) {
            return this._v_EventKindsTriggeringDump;
        }


        if( !this._v_EventKindsTriggeringDump) {
            this._v_EventKindsTriggeringDump = [ ];
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return this._v_EventKindsTriggeringDump;
        }


        var someEventKinds = this._v_EventKindsTriggeringDump.slice();

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


        this._v_EventKindsTriggeringDump = someEventKinds;

        if( LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
            console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
        }

        return this._v_EventKindsTriggeringDump
    }








    fMoreEventKindsTriggeringDump( theEventKinds) {

        if( !theEventKinds) {
            return this._v_EventKindsTriggeringDump;
        }


        if( !this._v_EventKindsTriggeringDump) {
            this._v_EventKindsTriggeringDump = [ ];
        }

        var aNumEventKinds = theEventKinds.length;
        if( !aNumEventKinds) {
            return this._v_EventKindsTriggeringDump;
        }


        var someEventKinds = this._v_EventKindsTriggeringDump.slice();

        for( var anEventKindIdx=0; anEventKindIdx < aNumEventKinds; anEventKindIdx++) {

            var anEventKind = theEventKinds[ anEventKindIdx];
            if( anEventKind) {

                var anEventKindIndex = someEventKinds.indexOf( anEventKind);
                if( anEventKindIndex < 0) {

                    someEventKinds.push( anEventKind);
                }
            }
        }


        this._v_EventKindsTriggeringDump = someEventKinds;

        if( LOGCHANGESTOEVENTKINDSTRIGGERINGDUMP) {
            console.log( "EventKindsTriggeringDump=\n" + JSON.stringify( this._v_EventKindsTriggeringDump, null, 4));
        }

        return this._v_EventKindsTriggeringDump
    }











    pDumpRecord( theRecord, theRecordedRecordPointer) {

        if( !theRecord) {
            return;
        }

        var aConsoleService = this.fConsoleService();
        if( !aConsoleService) {
            return;
        }

        var aRecorder = this.fRecorder();
        if( !aRecorder) {
            return;
        }


        if( !this.fRecordTriggersDump( theRecord)) {
            return;
        }




        var aRecordPointerLastDumped = -1;

        var aRecordPointerLastDumpedValue = aRecorder.fGetRecordPointerNamed( this.RECORDPOINTERNAME_LASTDUMPED);

        if( typeof aRecordPointerLastDumpedValue == "number") {

            if( !isNaN( aRecordPointerLastDumpedValue)) {

                if( aRecordPointerLastDumpedValue >= 0) {

                    aRecordPointerLastDumped = aRecordPointerLastDumpedValue;
                }
            }
        }




        var aFirstRecordIndexToDump = 0;
        if( aRecordPointerLastDumped >= 0) {
            aFirstRecordIndexToDump = aRecordPointerLastDumped + 1;
        }

        var someRecordsToDump = aRecorder.fKeptRecordsSlice( aFirstRecordIndexToDump);
        if( !someRecordsToDump) {
            return;
        }


        var aNumRecordsToDump = someRecordsToDump.length;
        if( !aNumRecordsToDump) {
            return;
        }

        for( var aRecordToDumpIdx=0; aRecordToDumpIdx < aNumRecordsToDump; aRecordToDumpIdx++) {
            var aRecordToDump = someRecordsToDump[ aRecordToDumpIdx];
            if( aRecordToDump) {

                if( !this.fMustDumpRecord( aRecordToDump)) {
                    continue;
                }

                var aLogString = aRecordToDump.fLogString();
                if( !aLogString) {
                    return;
                }

                aConsoleService.log(  "," + aLogString);
            }
        }


        aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, null /* /* If not a record pointer in range by array index then point to last record */);

    }










    fRecordTriggersDump( theRecord) {

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

        var someEventKindsTriggeringDump = this.fEventKindsTriggeringDump();
        if( !someEventKindsTriggeringDump) {
            return false;
        }

        if( someEventKindsTriggeringDump.indexOf( anEventKind) < 0) {
            return false;
        }

        return true;

    }







    fEventKindsTriggeringDump() {

        /* Slot property named _v_EventKindsTriggeringDump only initialized in the prototype. May be overriden by individual instantes setting their own value */

        /* Code below is redundant, just a point for debugging in the case of instances overiding the value of slot property named _v_EventKindsTriggeringDump */
        if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {

            if( !this._v_EventKindsTriggeringDump) {
                return null;
            }

            return this._v_EventKindsTriggeringDump;
        }



        if( !this._v_EventKindsTriggeringDump) {
            return null;
        }

        return this._v_EventKindsTriggeringDump;

    }





    pRelease() {

        this._v_Prototype_DumpingPolicyFilterKinds.pRelease.apply( this);

        if( this.hasOwnProperty( "_v_EventKindsTriggeringDump")) {
            delete( this._v_EventKindsTriggeringDump);
        }

    }




}






