/*
 * recordingpolicy_type.js
 *
 * Created @author Antonio Carrasco Valero 201612090904
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




const C_Type            = "RecordingPolicy";
const C_ModuleName      = "recordingpolicy_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;


const RECORDINGPOLICY_DEFAULTTITLE = "RecordingPolicyDefaultName";




export default class RecordingPolicy {


    constructor( theTitle, theIdentifier, theRecorder) {
        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;

        this._v_Identifier = null;

        this._v_Id         = null;
        this._v_Title      = null;

        this._v_Recorder    = null;

        this._pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder);
    }








    _pInit_RecordingPolicy( theTitle, theIdentifier, theRecorder) {
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
    }





    _fTitleDefault( ) {

        return RECORDINGPOLICY_DEFAULTTITLE;
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











    fRecorder() {

        return this._v_Recorder;
    }





    pSetRecorder( theRecorder) {

        this._v_Recorder = theRecorder;
    }








    fRecordRecord( theRecord) {

        if( !theRecord) {
            return null;
        }

        /* Subtype responsibility */
        return null;

    }















    pRelease() {

        this._v_Identifier       = null;

        this._v_Id               = null;
        this._v_Title            = null;

        this._v_Recorder         = null;

    }



}





