
/*
 * recordingpolicy_keeprecent_type.js
 *
 * Created @author Antonio Carrasco Valero 201612091002
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




import RecordingPolicyKeepSome from "prettytype/identifying/recordingpolicy_keepsome_type.js" ;



const C_Type            = "RecordingPolicyKeepSome";
const C_ModuleName      = "recordingpolicy_keepsome_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;




export default class RecordingPolicyKeepRecent extends RecordingPolicyKeepSome {


    constructor( theTitle, theIdentifier, theRecorder) {

        super( theTitle, theIdentifier, theRecorder);

        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;


        this._v_MustKeepRecordsRecentMillis = null;

        this._pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder);
    }








    _pInit_RecordingPolicyKeepRecent( theTitle, theIdentifier, theRecorder) {

        this._v_MustKeepRecordsRecentMillis = this.MUSTKEEPRECORDSRECENTMILLIS;
    }







    _fTitleDefault( ) {

        return RECORDINGPOLICYKEEPRECENT_DEFAULTTITLE;
    }




    pSetMustKeepRecordsRecentMillis( theMustKeepRecordsRecentMillis) {

        this._v_MustKeepRecordsRecentMillis = theMustKeepRecordsRecentMillis;

    }





    fMustKeepRecordsRecentMillis() {

        return this._v_MustKeepRecordsRecentMillis;

    }








    pPruneRecords() {

        this._v_Prototype_RecordingPolicyKeepSome.pPruneRecords.apply( this);


        if( !this._v_Recorder) {
            return;
        }

        this._v_Recorder.pDiscardRecordsOlderThan( this.fMustKeepRecordsRecentMillis());

    }




}


