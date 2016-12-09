
/*
 * record_type.js
 *
 * Created @author Antonio Carrasco Valero 201612090732
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


const C_Type            = "Record";
const C_ModuleName      = "record_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;



const MAXDATASTRINGLEN = 1024;
const MAXJSONSTRINGLEN = 2048;
const MAXJSONELEMENTSTRINGLEN = 1024;

const MAXLOGSTRINGLEN = 4096;

const LIMITLOGSTRINGLEN = true;




export default class Record {

    constructor( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {
        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;

        this._v_Timestamp  = null;
        this._v_Recorder   = null;
        this._v_RecordId   = null;
        this._v_Instance   = null;
        this._v_Step       = null;
        this._v_EventKind  = null;
        this._v_Data       = null;
        this._v_Reason     = null;
        this._v_Detail     = null;

        this._pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail);
    }




    _pInit_Record( theRecorder, theRecordId, theInstance, theStep, theEventKind, theData, theReason, theDetail) {

        this._v_Timestamp    = new Date();
        this._v_Recorder     = theRecorder;
        this._v_RecordId     = theRecordId;
        this._v_Instance     = theInstance;
        this._v_Step         = theStep;
        this._v_EventKind    = theEventKind;
        this._v_Data         = theData;
        this._v_Reason       = theReason;
        this._v_Detail       = theDetail;
    }








    fCopyWithoutException() {

        var aCopy = new Record(
            this._v_Recorder,
            this._v_RecordId,
            this._v_Instance,
            this._v_Step,
            this._v_EventKind,
            this._v_Data,
            this._v_Reason,
            this._v_Detail
        );

        aCopy._v_Timestamp = this._v_Timestamp;

        if( aCopy._v_Data) {
            if( aCopy._v_Data.name) {

                if(aCopy._v_Data.name == "Error") {
                    aCopy._v_Data = null;
                }

                if( aCopy._v_Data.name == "ForcedException") {
                    aCopy._v_Data = null;
                }
            }
        }

        if( aCopy._v_Reason) {
            if( aCopy._v_Reason.name) {

                if(aCopy._v_Reason.name == "Error") {
                    aCopy._v_Reason = null;
                }

                if( aCopy._v_Reason.name == "ForcedException") {
                    aCopy._v_Reason = null;
                }
            }
        }

        if( aCopy._v_Detail) {
            if( aCopy._v_Detail.name) {

                if(aCopy._v_Detail.name == "Error") {
                    aCopy._v_Detail = null;
                }

                if( aCopy._v_Detail.name == "ForcedException") {
                    aCopy._v_Detail = null;
                }
            }
        }

        return aCopy;
    }






    fFullTypeNameString() {

        var aFullTypeName = this._v_ModuleFullName + "." + this._v_Type;
        if( aFullTypeName){}/* CQT */

        return aFullTypeName;
    }






    fIdentifyingJSON() {

        return{
            "recref": this._v_RecordId
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

        aIdentifyingJSON[ "title"] = new Date( this._v_Timestamp).toISOString();

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










    toString() {
        return this.fLogString();
    }








    fLogString() {

        if( !LIMITLOGSTRINGLEN) {
            return this.fLogString_unlimited();
        }

        return this.fLogString_limited();
    }








    fLogString_unlimited() {

        var aLog = this.fAsLogObject();
        if( aLog == null) {
            return "";
        }

        var aLogString = "";
        try {
            aLogString = JSON.stringify( aLog);
        }
        catch( anException) {}

        return aLogString;
    }








    fLogString_limited() {

        var aLog = this.fAsLogObject_limited();
        if( aLog == null) {
            return "";
        }

        var aLogString = "";
        try {
            aLogString = JSON.stringify( aLog);
        }
        catch( anException) {}


        if( aLogString.length < MAXLOGSTRINGLEN) {

            return aLogString;
        }

        var aLogStringLimited = aLogString.slice( 0, MAXLOGSTRINGLEN);
        if( aLogStringLimited){}/* CQT */

        return aLogStringLimited;
    }








    fString_NeedsToBeLimited( theValue) {

        if( theValue == null) {
            return false;
        }

        if( typeof theValue == "number") {
            return false;
        }

        if( !( typeof theValue == "string")) {
            return false;
        }

        var aNeedsToBeLimited = theValue.length > MAXJSONELEMENTSTRINGLEN;
        if( aNeedsToBeLimited){}/* CQT */

        return aNeedsToBeLimited;
    }









    fString_limited( theValue) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( !( typeof theValue == "string")) {
            return null;
        }

        if( theValue.length < MAXJSONELEMENTSTRINGLEN) {

            return theValue;
        }

        var aStrLimited = theValue.slice( 0, MAXJSONELEMENTSTRINGLEN);
        if( aStrLimited){}/* CQT */

        return aStrLimited;
    }









    fJSONValue_orLimited( theValue) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( typeof theValue == "string") {
            return this.fString_limited( theValue);
        }

        if( ( theValue === this)) {
            return "this";
        }

        var aJSONstr = null;
        try {
            aJSONstr = JSON.stringify( theValue);
        }
        catch( anException) {}

        if( !( aJSONstr == null)) {
            if( this.fString_NeedsToBeLimited( aJSONstr)) {
                var aJSONstrLimited = this.fString_limited( aJSONstr);
                if( aJSONstrLimited){}/* CQT */

                return aJSONstrLimited;
            }

            return theValue;
        }


        var aStr = theValue.toString();
        if( aStr){}/* CQT */

        var aStrLimited = this.fString_limited( aStr);
        if( aStrLimited){}/* CQT */

        return aStrLimited;
    }









    fAsLogObject() {

        var aLog = {};
        var aHasLog = false;


        if( this._v_Timestamp) {
            aHasLog = true;
            aLog.time = new Date( this._v_Timestamp).toISOString();
        }

        if( this._v_RecordId) {
            aHasLog = true;
            aLog.rec = this._v_RecordId;
        }

        var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
        if( !( aEventKind == null)) {
            aHasLog = true;
            aLog.kind = aEventKind;
        }

        var aStep = this.fConvertValueToJSON( this._v_Step);
        if( !( aStep == null)) {
            aHasLog = true;
            aLog.step = aStep;
        }


        var aInstance = this.fConvertValueToJSON( this._v_Instance);
        if( !( aInstance == null)) {
            aHasLog = true;
            aLog.inst = aInstance;
        }


        var aData = this.fConvertValueToJSON( this._v_Data);
        if( !( aData == null)) {
            aHasLog = true;
            aLog.data = aData;
        }

        var aReason = this.fConvertReasonToJSON( this._v_Reason);
        if( !( aReason == null)) {
            aHasLog = true;
            aLog.reason = aReason;
        }

        var aDetail = this.fConvertValueToJSON( this._v_Detail);
        if( !( aDetail == null)) {
            aHasLog = true;
            aLog.detail = aDetail;
        }

        if( !aHasLog) {
            return null;
        }

        return aLog;
    }











    fAsLogObject_limited() {

        var aLog = {};
        var aHasLog = false;


        if( this._v_Timestamp) {
            aHasLog = true;
            aLog.time = new Date( this._v_Timestamp).toISOString();
        }

        if( this._v_RecordId) {
            aHasLog = true;
            aLog.rec = this._v_RecordId;
        }

        var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
        if( !( aEventKind == null)) {
            aHasLog = true;
            aLog.kind = aEventKind;
        }

        var aStep = this.fConvertValueToJSON_limited( this._v_Step);
        if( !( aStep == null)) {
            aHasLog = true;
            aLog.step = aStep;
        }


        var aInstance = this.fConvertValueToJSON_limited( this._v_Instance);
        if( !( aInstance == null)) {
            aHasLog = true;
            aLog.inst = aInstance;
        }


        var aData = this.fConvertValueToJSON_limited( this._v_Data);
        if( !( aData == null)) {
            aHasLog = true;
            aLog.data = aData;
        }

        var aReason = this.fConvertReasonToJSON_limited( this._v_Reason);
        if( !( aReason == null)) {
            aHasLog = true;
            aLog.reason = aReason;
        }

        var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
        if( !( aDetail == null)) {
            aHasLog = true;
            aLog.detail = aDetail;
        }

        if( !aHasLog) {
            return null;
        }

        return aLog;
    }










    fConvertReasonToJSON( theValue) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( typeof theValue == "string") {
            return theValue;
        }

        if( ( theValue === this)) {
            return "this";
        }

        if( theValue.fAsReasonChain) {
            return theValue.fAsReasonChain();
        }

        if( theValue.fAsLogObject) {
            return theValue.fAsLogObject();
        }

        if( theValue.fAsJSONable) {
            return theValue.fAsJSONable();
        }

        if( theValue.fIdentifyingWithTitleJSON) {
            return theValue.fIdentifyingWithTitleJSON();
        }

        if( theValue.fIdentifyingJSON) {
            return theValue.fIdentifyingJSON();
        }

        if( theValue.fIdentifyingString) {
            return theValue.fIdentifyingString();
        }

        if( theValue.fLogString) {
            return theValue.fLogString();
        }

        var aJSONable = this.fAsJSONable( theValue);
        if( !( aJSONable == null)) {
            return aJSONable;
        }

        var aStr = theValue.toString().substr( 0, MAXDATASTRINGLEN);
        if( aStr){}/* CQT */
        return aStr;
    }









    fConvertReasonToJSON_limited( theValue) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( typeof theValue == "string") {
            return theValue;
        }

        if( ( theValue === this)) {
            return "this";
        }

        if( theValue.fAsReasonChain_limited) {
            return theValue.fAsReasonChain_limited();
        }

        if( theValue.fAsLogObject_limited) {
            return theValue.fAsLogObject_limited();
        }

        if( theValue.fAsJSONable_limited) {
            return theValue.fAsJSONable_limited();
        }

        if( theValue.fIdentifyingWithTitleJSON) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
        }

        if( theValue.fIdentifyingJSON) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
        }

        if( theValue.fIdentifyingString) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingString());
        }

        if( theValue.fLogString_limited) {
            return theValue.fLogString_limited();
        }

        var aJSONable = this.fAsJSONable_limited( theValue);
        if( !( aJSONable == null)) {
            return aJSONable;
        }

        var aStr = theValue.toString();
        var aStr_limited = this.fString_limited( aStr);
        if( aStr_limited){}/* CQT */

        return aStr_limited;
    }









    fAsReasonChain( theAlready) {

        if( theAlready && ( theAlready.indexOf( this) >= 0)) {
            return null;
        }

        var anAlready = theAlready;
        if( !anAlready) {
            anAlready = [ ];
        }

        anAlready.push( this);


        var aLog = {};
        var aHasLog = false;


        if( this._v_Id) {
            aHasLog = true;
            aLog.tre = this._v_Id;
        }

        var aEventKind = this.fConvertValueToJSON( this._v_EventKind);
        if( !( aEventKind == null)) {
            aHasLog = true;
            aLog.kind = aEventKind;
        }

        if( this._v_Reason) {
            var aReason = null;
            if( this._v_Reason.fAsReasonChain) {
                aReason = this._v_Reason.fAsReasonChain( anAlready);
            }
            else {
                aReason = this.fConvertValueToJSON( this._v_Reason);
            }
            if( !( aReason == null)) {
                aHasLog = true;
                aLog.reason = aReason;
            }
        }


        var aDetail = this.fConvertValueToJSON( this._v_Detail);
        if( !( aDetail == null)) {
            aHasLog = true;
            aLog.detail = aDetail;
        }

        if( !aHasLog) {
            return null;
        }

        return aLog;
    }









    fAsReasonChain_limited( theAlready) {


        if( theAlready && ( theAlready.indexOf( this) >= 0)) {
            return null;
        }

        var anAlready = theAlready;
        if( !anAlready) {
            anAlready = [ ];
        }

        anAlready.push( this);


        var aLog = {};
        var aHasLog = false;


        if( this._v_Id) {
            aHasLog = true;
            aLog.tre = this._v_Id;
        }

        var aEventKind = this.fConvertValueToJSON_limited( this._v_EventKind);
        if( !( aEventKind == null)) {
            aHasLog = true;
            aLog.kind = aEventKind;
        }

        if( this._v_Reason) {
            var aReason = null;
            if( this._v_Reason.fAsReasonChain) {
                aReason = this.fConvertValueToJSON_limited( this._v_Reason.fAsReasonChain_limited( anAlready));
            }
            else {
                aReason = this.fConvertValueToJSON_limited( this._v_Reason);
            }
            if( !( aReason == null)) {
                aHasLog = true;
                aLog.reason = aReason;
            }
        }


        var aDetail = this.fConvertValueToJSON_limited( this._v_Detail);
        if( !( aDetail == null)) {
            aHasLog = true;
            aLog.detail = aDetail;
        }

        if( !aHasLog) {
            return null;
        }

        return aLog;
    }









    fConvertValueToJSON( theValue, theIncludeMembers) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( typeof theValue == "string") {
            return theValue;
        }

        if( ( theValue === this)) {
            return "this";
        }

        if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
            return theValue.fIdentifyingJSON();
        }

        if( theValue.fAsLogObject) {
            return theValue.fAsLogObject();
        }

        if( theValue.fAsJSONable) {
            return theValue.fAsJSONable();
        }

        if( theValue.fIdentifyingWithTitleJSON) {
            return theValue.fIdentifyingWithTitleJSON();
        }

        if( theValue.fIdentifyingJSON) {
            return theValue.fIdentifyingJSON();
        }

        if( theValue.fIdentifyingString) {
            return theValue.fIdentifyingString();
        }

        if( theValue.fLogString) {
            return theValue.fLogString();
        }

        var aJSONable = this.fAsJSONable( theValue);
        if( !( aJSONable == null)) {
            return aJSONable;
        }

        if( theIncludeMembers) {
            if( theValue.fToResultJSON) {
                return theValue.fToResultJSON();
            }

            try {
                var aJSONstr = JSON.stringify( theValue);
                if( aJSONstr){}/* CQT */
                return aJSONstr;
            }
            catch( anException) {}
        }

        var aStr = theValue.toString().substr( 0, MAXDATASTRINGLEN);
        if( aStr){}/* CQT */
        return aStr;
    }













    fConvertValueToJSON_limited( theValue) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( typeof theValue == "string") {
            return theValue;
        }

        if( ( theValue === this)) {
            return "this";
        }

        if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
        }

        if( theValue.fAsLogObject) {
            return this.fJSONValue_orLimited( theValue.fAsLogObject());
        }

        if( theValue.fAsJSONable_limited) {
            return theValue.fAsJSONable_limited();
        }

        if( theValue.fIdentifyingWithTitleJSON) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
        }

        if( theValue.fIdentifyingJSON) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
        }

        if( theValue.fIdentifyingString) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingString);
        }

        if( theValue.fLogString_limited) {
            return theValue.fLogString_limited();
        }

        var aJSONable = this.fAsJSONable_limited( theValue);
        if( !( aJSONable == null)) {
            return aJSONable;
        }

        var aStr = theValue.toString();
        if( aStr){}/* CQT */

        var aStrLimited = this.fString_limited( aStr);
        if( aStrLimited){}/* CQT */

        return aStrLimited;
    }











    fAsJSONable( theValue) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( typeof theValue == "string") {
            return theValue;
        }

        if( ( theValue === this)) {
            return "this";
        }

        if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
            return theValue.fIdentifyingJSON();
        }

        if( theValue.fAsLogObject) {
            return theValue.fAsLogObject();
        }

        if( theValue.fIdentifyingWithTitleJSON) {
            return theValue.fIdentifyingWithTitleJSON();
        }

        if( theValue.fIdentifyingJSON) {
            return theValue.fIdentifyingJSON();
        }

        if( theValue.fIdentifyingWithTitleString) {
            return theValue.fIdentifyingWithTitleString();
        }

        if( theValue.fIdentifyingString) {
            return theValue.fIdentifyingString();
        }

        if( theValue.fLogString) {
            return theValue.fLogString();
        }

        if( theValue.fToResultJSON) {
            return theValue.fToResultJSON();
        }

        var aJSONstr = null;
        try {
            aJSONstr = JSON.stringify( theValue);
        }
        catch( anException) {}

        if( !( aJSONstr == null)) {
            var aJSONstrlen = aJSONstr.length;
            if ( aJSONstrlen > MAXJSONSTRINGLEN) {
                return aJSONstr.substr( 0, MAXJSONSTRINGLEN);
            }
            return theValue;
        }

        var aStr = theValue.toString().substr( 0, MAXDATASTRINGLEN);
        if( aStr){}/* CQT */
        return aStr;
    }









    fAsJSONable_limited( theValue) {

        if( theValue == null) {
            return null;
        }

        if( typeof theValue == "number") {
            return theValue;
        }

        if( typeof theValue == "string") {
            return theValue;
        }

        if( ( theValue === this)) {
            return "this";
        }

        if( theValue._v_Type && ( theValue._v_Type == this._v_Type)) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
        }

        if( theValue.fAsLogObject_limited) {
            return theValue.fAsLogObject_limited();
        }

        if( theValue.fIdentifyingWithTitleJSON) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleJSON());
        }

        if( theValue.fIdentifyingJSON) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingJSON());
        }

        if( theValue.fIdentifyingWithTitleString) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingWithTitleString());
        }

        if( theValue.fIdentifyingString) {
            return this.fJSONValue_orLimited( theValue.fIdentifyingString());
        }

        if( theValue.fLogString_limited) {
            return theValue.fLogString_limited();
        }

        if( theValue.fAsLogObject) {
            return theValue.fAsLogObject();
        }

        if( theValue.fToResultJSON) {
            return this.fJSONValue_orLimited( theValue.fToResultJSON());
        }

        var aJSONorStr = this.fJSONValue_orLimited( theValue);
        if( aJSONorStr){}/* CQT */

        return aJSONorStr;
    }












    fRecordHasEvent_recursive( theExpectedEvent, theAlready) {

        if( !theExpectedEvent) {
            return false;
        }

        if( theAlready  && ( theAlready.indexOf( this) >= 0)) {
            return false;
        }

        if( this._v_EventKind && ( this._v_EventKind == theExpectedEvent)) {
            return true;
        }

        if( theAlready) {
            theAlready.push( this);
        }


        if( this._v_Reason) {
            if( this._v_Reason.fRecordHasEvent_recursive) {
                return this._v_Reason.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
            }

            if( this._v_Reason._v_Record) {
                return this._v_Reason._v_Record.fRecordHasEvent_recursive( theExpectedEvent, theAlready);
            }
        }

        return false;
    }




}

