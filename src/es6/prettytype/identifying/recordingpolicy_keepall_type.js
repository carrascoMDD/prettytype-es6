
/*
 * recordingpolicy_keepall_type.js.js
 *
 * Created @author Antonio Carrasco Valero 201610051442
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





/* BeWare: With this policy, all records shall be kept in memory in the _v_Records slot property of the recorder instance.
 and shall prevent reclamation of their memory by the garbage collector
 Note that common_type has a configurable variation constant theToInit.KEEPOWNRECORDS = false;
 which when true shall keep references to record instances and shall also prevent reclamation of their memory by the garbage collector.
 */


import RecordingPolicy          from "prettytype/identifying/recordingpolicy_type.js" ;



const C_Type            = "RecordingPolicyKeepAll";
const C_ModuleName      = "recordingpolicy_keepall_type";
const C_ModulePackages  = "identifying";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;



const MUSTKEEPRECORDS = true;
const RECORDINGPOLICYKEEPALL_DEFAULTTITLE = "RecordingPolicyKeepAllDefaultName";





export default class RecordingPolicyKeepAll extends RecordingPolicy {


    constructor( theTitle, theIdentifier, theRecorder) {

        super( theTitle, theIdentifier, theRecorder);

        this._v_Type            = C_Type;
        this._v_ModuleName      = C_ModuleName;
        this._v_ModuleFullName  = C_ModuleFullName;

        this._v_MustKeepRecords = null;

        this._pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder);
    }





    _pInit_RecordingPolicyKeepAll( theTitle, theIdentifier, theRecorder) {

        this._v_MustKeepRecords = MUSTKEEPRECORDS;

    }





    _fTitleDefault( ) {

        return RECORDINGPOLICYKEEPALL_DEFAULTTITLE;
    }





    pSetMustKeepRecords( theMustKeepRecords) {

        this._v_MustKeepRecords = theMustKeepRecords ? true : false;

    }







    fMustKeepRecords() {

        return this._v_MustKeepRecords;

    }






    fRecordRecord( theRecord) {

        if( !theRecord) {
            return null;
        }

        if( !this.fMustKeepRecords()) {
            return null;
        }


        if( this._v_Recorder) {
            this._v_Recorder.pKeepRecord( theRecord);
        }

        this.pPruneRecords();

        var aRecordedRecordPointer = this._v_Recorder.fLastKeptRecordPointer();

        return aRecordedRecordPointer;

    }







    /* Subtype responsibility */
    pPruneRecords() {

    }




}




