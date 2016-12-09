
/*
 * recorder_type.js
 *
 * Created @author Antonio Carrasco Valero 2014612090743
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


import Identifier          from "prettytype/identifying/identifier_type.js" ;
import Record              from "prettytype/identifying/record_type.js" ;
import RecordingPolicyType from "prettytype/identifying/recordingpolicy_type.js" ;
import DumpingPolicyType   from "prettytype/identifying/dumpingpolicy_type.js" ;



const C_Type            = "Recorder";
const C_ModuleName      = "recorder_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;


const RECORDER_DEFAULTTITLE = "RecorderDefaultName";





export default class Recorder {



    constructor( theTitle, theIdentifier) {
        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;

        this._v_Identifier = null;

        this._v_Id         = null;
        this._v_Title      = null;

        this._v_Records    = null;
        this._v_RecordPointersByName = null;

        this._v_RecordsIdentifier = null;

        this._v_RecordingPolicy = null;
        this._v_DumpingPolicy   = null;

        this._pInit_Recorder( theTitle, theIdentifier);
    }




    _pInit_Recorder( theTitle, theIdentifier) {

        this._v_Identifier = theIdentifier;

        this._v_Id    = null;

        this._v_Title = theTitle;
        if( !this._v_Title) {
            this._v_Title = this._fTitleDefault();
        }

        if( !this._v_Identifier) {
            this._v_Identifier = theS_IdentifierSvce;
        }

        this._v_Id = this._v_Identifier.fReserveId();

        this._v_RecordsIdentifier = new Identifier( "(For-" + this._v_Title + ")");



        this._v_Records    = [ ];
        this._v_RecordPointersByName = { };

        this.pClearKeptRecords();

        /* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
         and shall prevent reclamation of their memory by the garbage collector
         Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
         which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
         */
        this._v_RecordingPolicy = new RecordingPolicyType(     "(For-" + this._v_Title + ")", this._v_Identifier, this);


        this._v_DumpingPolicy   = new DumpingPolicyType( "(For-" + this._v_Title + ")", this._v_Identifier, this);

    }







    fFullTypeNameString() {

        return this._v_Module.ModuleFullName + "." + this._v_Type;

    }





    fIdentifyingJSON() {

        return {
            "type": this._v_Type,
            "id": this._v_Id
        };
    }






    fIdentifyingString() {

        var aIdentifyingJSON = this.fIdentifyingJSON();

        var aIdentifyingString = "?";
        try {
            aIdentifyingString = JSON.stringify( aIdentifyingJSON);
        }
        catch( anException){
            aIdentifyingString = "Error_while_fIdentifyingString_JSON_stringify"
        }
        if( aIdentifyingString){}/* CQT */

        return aIdentifyingString;
    }







    fIdentifyingWithTitleJSON() {

        var aIdentifyingJSON = this.fIdentifyingJSON();

        aIdentifyingJSON[ "title"] = this._v_Title;

        return aIdentifyingJSON;
    }






    fIdentifyingWithTitleString() {

        var aIdentifyingJSON = this.fIdentifyingWithTitleJSON();

        var aIdentifyingString = "?";
        try {
            aIdentifyingString = JSON.stringify( aIdentifyingJSON);
        }
        catch( anException){
            aIdentifyingString = "Error_while_fIdentifyingWithTitleString_JSON_stringify"
        }
        if( aIdentifyingString){}/* CQT */

        return aIdentifyingString;
    }










    fToResultJSON( theCommonObjects, theAlready) {
        if( !( theAlready == null)) {
            if( theAlready.fAlready( this)){
                return this.fIdentifyingJSON();
            }
        }

        var aResultJSON = this.fIdentifyingWithTitleJSON();
        if( aResultJSON){}/* CQT */

        return aResultJSON;
    }







    fEventsToResultJSON( ) {

        var someCommonObjects = null;
        var aJSON = this.fToResultJSON( someCommonObjects);

        var someRecordLogObjects = [];
        aJSON.records = someRecordLogObjects;

        if( this._v_Records) {
            var aNumRecords = this._v_Records.length;
            for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {
                var aRecord = this._v_Records[ aRecordIdx];
                var aRecordLogObject = aRecord.fAsLogObject();
                if( aRecordLogObject) {
                    someRecordLogObjects.push( aRecordLogObject);
                }
            }
        }

        return aJSON;
    }













    fRecordingPolicy() {

        return this._v_RecordingPolicy;

    }







    pSetRecordingPolicy( theRecordingPolicy) {

        if( this._v_RecordingPolicy) {
            if( this._v_RecordingPolicy.pRelease && ( typeof this._v_RecordingPolicy.pRelease == "function")) {
                this._v_RecordingPolicy.pRelease();
            }
        }

        this._v_RecordingPolicy = theRecordingPolicy;

        var aRecordingPolicy_recorder = null;
        if( theRecordingPolicy.fRecorder && ( typeof theRecordingPolicy.fRecorder == "function")) {
            aRecordingPolicy_recorder = theRecordingPolicy.fRecorder();
        }

        if( !aRecordingPolicy_recorder) {
            return;
        }

        if( !( aRecordingPolicy_recorder === this)) {
            theRecordingPolicy.pSetRecorder( this);
        }

    }









    fDumpingPolicy() {

        return this._v_DumpingPolicy;

    }







    pSetDumpingPolicy( theDumpingPolicy) {

        if( this._v_DumpingPolicy) {
            if( this._v_DumpingPolicy.pRelease && ( typeof this._v_DumpingPolicy.pRelease == "function")) {
                this._v_DumpingPolicy.pRelease();
            }
        }

        this._v_DumpingPolicy = theDumpingPolicy;

        var aDumpingPolicy_recorder = null;
        if( theDumpingPolicy.fRecorder && ( typeof theDumpingPolicy.fRecorder == "function")) {
            aDumpingPolicy_recorder = theDumpingPolicy.fRecorder();
        }

        if( !aDumpingPolicy_recorder) {
            return;
        }

        if( !( aDumpingPolicy_recorder === this)) {
            theDumpingPolicy.pSetRecorder( this);
        }

    }










    fCreateAndRegisterRecord( theInstance, theStep, theEventKind, theData, theReason, theDetails) {

        var aRecordId = this._v_RecordsIdentifier.fReserveId();

        var aRecord = new Record( this, aRecordId,  theInstance, theStep, theEventKind, theData, theReason, theDetails);

        try {
            if( aRecord) {

                var aRecordedRecordPointer = null;

                if( this._v_RecordingPolicy) {
                    aRecordedRecordPointer = this._v_RecordingPolicy.fRecordRecord( aRecord);
                }

                if( this._v_DumpingPolicy) {
                    this._v_DumpingPolicy.pDumpRecord( aRecord, aRecordedRecordPointer);
                }
            }
        }
        catch( anException) {

        }

        return aRecord;
    }














    /* Invoked from RecordingPolicy fRecordRecord() */
    pKeepRecord( theRecord) {

        if( !theRecord) {
            return;
        }

        if( !this._v_Records) {
            this._v_Records = [ ];
        }

        this._v_Records.push( theRecord);

    }








    fKeptRecords() {

        if( !this._v_Records) {
            return null;
        }

        if( !( typeof this._v_Records.slice == "function")) {
            return null;
        }

        return this._v_Records.slice();

    }







    fKeptRecordsSlice( theFirstIndex) {

        if( theFirstIndex < 0) {
            return this._v_Records.slice();
        }


        if( !this._v_Records) {
            return [];
        }

        if( !( typeof this._v_Records.slice == "function")) {
            return [];
        }

        return this._v_Records.slice( theFirstIndex);

    }






    pClearKeptRecords() {

        if( !this._v_Records) {
            return;
        }

        this._v_Records = [ ];
        this._v_RecordPointersByName = { };

    }







    fLastKeptRecordPointerfunction() {

        if( !this._v_Records) {
            return null;
        }

        return this._v_Records.length;

    }









    pSetRecordPointer( theRecordPointerName, theRecordPointer /* If not a record pointer in range by array index then point to last record */ ) {

        if( !theRecordPointerName) {
            return;
        }

        if( !this._v_RecordPointersByName) {
            this._v_RecordPointersByName = { };
        }


        var aRecordPointer = -1;

        if( typeof theRecordPointer == "number") {

            if( !isNaN( theRecordPointer)) {

                if( theRecordPointer >= 0) {

                    if( this._v_Records) {

                        var aNumRecords = this._v_Records.length;
                        if( aNumRecords) {

                            if( theRecordPointer < aNumRecords) {

                                aRecordPointer = theRecordPointer;
                            }
                        }
                    }
                }
            }
        }


        if( aRecordPointer < 0) {
            if( this._v_Records) {

                var aNumRecords = this._v_Records.length;
                if( aNumRecords) {

                    aRecordPointer = aNumRecords - 1;
                }
            }
        }

        this._v_RecordPointersByName[ theRecordPointerName] = aRecordPointer;

    }






    pClearRecordPointer( theRecordPointerName) {

        if( !theRecordPointerName) {
            return;
        }

        if( !this._v_RecordPointersByName) {
            return;
        }

        if( !this._v_RecordPointersByName.hasOwnProperty( theRecordPointerName)) {
            return;
        }

        delete this._v_RecordPointersByName[ theRecordPointerName];
    }





    fGetRecordPointerNamed( theRecordPointerName) {

        if( !theRecordPointerName) {
            return null;
        }

        return this._v_RecordPointersByName[ theRecordPointerName];

    }







    pSubstractFromAllRecordPointers( theAmountToSubstract) {

        if( !theAmountToSubstract || ( theAmountToSubstract < 0)) {
            return;
        }

        if( !this._v_RecordPointersByName) {
            return;
        }

        var someRecordPointersByNameKeys = Object.keys( this._v_RecordPointersByName);
        if( !someRecordPointersByNameKeys) {
            return;
        }

        var aNumRecordPointersByNameKeysLen = someRecordPointersByNameKeys.length;
        if( !aNumRecordPointersByNameKeysLen) {
            return;
        }

        for( var aRecordPointerByNameKeyIdx=0; aRecordPointerByNameKeyIdx < aNumRecordPointersByNameKeysLen; aRecordPointerByNameKeyIdx++) {
            var aRecordPointerByNameKey = someRecordPointersByNameKeys[ aRecordPointerByNameKeyIdx];
            if( aRecordPointerByNameKey) {
                if( this._v_RecordPointersByName.hasOwnProperty( aRecordPointerByNameKey)) {

                    var aRecordPointerValue = this._v_RecordPointersByName[ aRecordPointerByNameKey];
                    if( typeof aRecordPointerValue == "number") {
                        if( !isNaN( aRecordPointerValue)) {

                            var anUpdatedRecordPointerValue = aRecordPointerValue - theAmountToSubstract;
                            this._v_RecordPointersByName[ aRecordPointerByNameKey] = anUpdatedRecordPointerValue;
                        }
                    }
                }
            }
        }

    }








    pDiscardRecordsToMaxNumber( theMaxNumberOfRecords) {

        if( !theMaxNumberOfRecords || ( theMaxNumberOfRecords < 0)) {
            return;
        }


        if( !this._v_Records) {
            return;
        }

        var aNumRecords = this._v_Records.length;
        if( !aNumRecords) {
            return;
        }

        if( aNumRecords <= theMaxNumberOfRecords) {
            return;
        }

        var aFirstRecordIndexToKeep = aNumRecords - theMaxNumberOfRecords;
        if( aFirstRecordIndexToKeep <= 0) {
            return;
        }

        this._v_Records.splice( 0, aFirstRecordIndexToKeep);

        this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);

    }










    pDiscardRecordsOlderThan( theOlderThanMillis) {

        if( !theOlderThanMillis || ( theOlderThanMillis < 0)) {
            return;
        }


        if( !this._v_Records) {
            return;
        }

        var aNumRecords = this._v_Records.length;
        if( !aNumRecords) {
            return;
        }


        var aNowMillis = new Date().getTime();
        var anEarlierMillis = aNowMillis - theOlderThanMillis;
        if( anEarlierMillis <= 0) {
            return;
        }


        var aFirstRecordIndexToKeep = 0;

        for( var aRecordIdx=0; aRecordIdx < aNumRecords; aRecordIdx++) {

            aFirstRecordIndexToKeep = aRecordIdx;

            var aRecord = this._v_Records[ aRecordIdx];
            if( aRecord) {

                var aRecord_timestamp_millis = aRecord._v_Timestamp;
                if( aRecord_timestamp_millis) {

                    if( aRecord_timestamp_millis >= anEarlierMillis) {
                        break;
                    }
                }
            }
        }


        if( !aFirstRecordIndexToKeep) {
            return;
        }

        this._v_Records.splice( 0, aFirstRecordIndexToKeep);

        this.pSubstractFromAllRecordPointers( aFirstRecordIndexToKeep);

    }





}






