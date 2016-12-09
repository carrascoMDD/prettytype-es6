
/*
* common_type.js
*
* Created @author Antonio Carrasco Valero 201612090313
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


const C_Type            = "Common";
const C_ModuleName      = "common_type";
const C_ModulePackages  = "common";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;



const KEEPOWNRECORDS = false


const COMMON_DEFAULTTITLE = "CommonDefaultName";

const UNKNOWNID = "?i?";

const VALUEDIFFATTOP = "/";
const DONOTCOMPAREVALUESYMBOL = "@DONOTCOMPARE699@";



const FIELDNAMEDOT = ".";

const URLPATHSEPARATOR   = "/";
const HTTPQUERYCHAR      = "?";
const HTTPPARMASSIGN     = "=";
const HTTPEXTRAPARMCHAR  = "&";


const DATATYPE_FILE = "File";




export default class Common {


    constructor( theTitle, theIdentifier, theRecorder) {
        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;

        this._v_Title      = null;
        this._v_OwnRecords = null;

        this._pInit_Common( theTitle, theIdentifier, theRecorder);
    }



    _pInit_Common( theTitle, theIdentifier, theRecorder) {

        this._v_Identifier = theIdentifier;
        if( !this._v_Identifier) {
            this._v_Identifier = theS_IdentifierSvce;
        }

        this._v_Recorder   = theRecorder;
        if( !this._v_Recorder) {
            this._v_Recorder = theS_RecorderSvce;
        }

        if( this._v_Identifier) {
            this._v_Id = this._v_Identifier.fReserveId();
        }

        if( !this._v_Id) {
            this._v_Id = UNKNOWNID;
        }

        this._v_Title = theTitle;
        if( !this._v_Title) {
            this._v_Title = this._fTitleDefault();
        }

        this._v_OwnRecords = [ ];
    }




    _fTitleDefault() {

        return COMMON_DEFAULTTITLE;
    }



    fFullTypeNameString() {

        var aFullTypeName = this._v_Module.ModuleFullName + "." + this._v_Type;
        if( aFullTypeName){}/* CQT */

        return aFullTypeName;
    }







    fIdentifyingJSON() {

        var aIdentifiyingJSON = {
            "module": this._v_Module.ModuleFullName,
            "type": this._v_Type,
            "id":   this._v_Id
        };
        if( aIdentifiyingJSON){}/* CQT */
        return aIdentifiyingJSON;
    }






    fIdentifyingString() {

        var aIdentifyingJSON = this.fIdentifyingJSON();

        var aIdentifyingString = "?";
        try {
            aIdentifyingString = JSON.stringify( aIdentifyingJSON);
        }
        catch( anException){
            aIdentifyingString = "Error_whileJSON_stringify"
        }

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
            aIdentifyingString = "Error_whileJSON_stringify"
        }
        if( aIdentifyingString){}/* CQT */

        return aIdentifyingString;
    }





    fToResultJSON( theCommonObjects, theAlready) {
        if( theCommonObjects){}/* CQT */
        if( !( theAlready == null)) {
            if( theAlready.fAlready( this)){
                return this.fIdentifyingJSON();
            }
        }

        var aResultJSON = this.fIdentifyingWithTitleJSON();
        if( aResultJSON){}/* CQT */

        return aResultJSON;
    }










    fAsLogObject() {

        var aLog = this.fIdentifyingWithTitleJSON();
        if( aLog){}/* CQT */

        return aLog;
    }





    fLogString() {

        var aLog = this.fAsLogObject();
        if( aLog == null) {
            return "";
        }

        var aLogString = "";
        try {
            aLogString = JSON.stringify( aLog);
        }
        catch( anException) {
            aLogString = "Error_while_fLogString_JSON_stringify"
        }

        return aLogString;
    }











    fRecord( theMethodName, theEventKind, theData, theReason, theDetail) {

        if( this._v_Recorder == null) {
            return null;
        }

        var aRecord = this._v_Recorder.fCreateAndRegisterRecord( this, theMethodName, theEventKind, theData, theReason, theDetail);

        if( KEEPOWNRECORDS) {
            this._v_OwnRecords.push( aRecord);
        }

        return aRecord;
    }


}



