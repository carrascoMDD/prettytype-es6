
/*
* dumpingpolicy_type.js
*
* Created @author Antonio Carrasco Valero 201612091008
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



const C_Type            = "DumpingPolicy";
const C_ModuleName      = "rdumpingpolicy_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;



const MAYDUMPRECORDS = true;

const DUMPINGPOLICY_DEFAULTTITLE = "DumpingPolicyDefaultName";

const RECORDPOINTERNAME_LASTDUMPED = "RECORDPOINTERNAME_LASTDUMPED";






export default class DumpingPolicy {

    constructor( theTitle, theIdentifier, theRecorder) {
        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;

        this._v_Identifier       = null;

        this._v_Id               = null;
        this._v_Title            = null;

        this._v_Recorder         = null;

        this._v_MayDumpRecords   = null;

        this._pInit_DumpingPolicy( theTitle, theIdentifier, theRecorder);
    }






    _pInit_DumpingPolicy( theTitle, theIdentifier, theRecorder) {

        this._v_Prototype = aPrototype;
        this._v_Type      = this._v_Prototype._v_Type;
        this._v_Module    = aPrototype._v_Module;

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

        this._v_Recorder    = theRecorder;

        this._v_MayDumpRecords   = this.MAYDUMPRECORDS;

    }





    _fTitleDefault( ) {

        return DUMPINGPOLICY_DEFAULTTITLE;
    }




    fFullTypeNameString() {

        return this._v_ModuleFullName + "." + this._v_Type;
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
        if(theCommonObjects)/* CQT */
            if( !( theAlready == null)) {
                if( theAlready.fAlready( this)){
                    return this.fIdentifyingJSON();
                }
            }

        return this.fIdentifyingWithTitleJSON();
    }










    fConsoleService() {

        return theS_ConsoleSvce;
    }








    fRecorder() {

        return this._v_Recorder;
    }





    pSetRecorder( theRecorder) {

        this._v_Recorder = theRecorder;
    }









    pSetMayDumpRecords( theMayDumpRecords) {

        this._v_MayDumpRecords = theMayDumpRecords ? true : false;
    }




    fMayDumpRecords() {

        return this._v_MayDumpRecords;

    }







    fMustDumpRecord( theRecord) {

        if( !theRecord) {
            return false;
        }

        if( !this.fMayDumpRecords()) {
            return false;
        }

        /* Subtype responsibility */

        return true;

    }






    pDumpRecord( theRecord, theRecordedRecordPointer) {

        if( !theRecord) {
            return;
        }

        if( !this.fMustDumpRecord( theRecord)) {
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


        var aLogString = theRecord.fLogString();
        if( !aLogString) {
            return;
        }

        aConsoleService.log(  "," + aLogString);


        aRecorder.pSetRecordPointer( this.RECORDPOINTERNAME_LASTDUMPED, theRecordedRecordPointer);

    }








    pRelease() {

        this._v_Identifier       = null;

        this._v_Id               = null;
        this._v_Title            = null;

        this._v_Recorder         = null;

        this._v_MayDumpRecords   = null;

    }








}







