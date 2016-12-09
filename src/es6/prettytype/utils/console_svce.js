
/*
 * console_svce.js
 *
 * Created @author Antonio Carrasco Valero 201612090827
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



const C_Type            = "Console";
const C_ModuleName      = "console_svce";
const C_ModulePackages  = "utils";
const C_ModuleFullName  = C_ModulePackages + "/" + C_ModuleName;




const WRITETOCONSOLE          = true;
const COLLECTLOGS             = false;
const MAXCOLLECTEDLOGSLENGTH  = 16 * 1024 * 1024;





class Console {

    constructor() {
        this._v_WriteToConsole          = WRITETOCONSOLE;
        this._v_CollectedLogs           = [ ];
        this._v_CollectedLogsSize       = 0;
        this._v_MaxCollectedLogsLength  = MAXCOLLECTEDLOGSLENGTH;
    }



    pSetWriteToConsole( theWriteToConsole) {

        this._v_WriteToConsole = ( theWriteToConsole? true : false);

    }







    pSetCollectLogs( theCollectLogs) {

        if( theCollectLogs) {

            this._v_CollectLogs = true;

            if( !this._v_CollectedLogs) {
                this._v_CollectedLogs      = [ ];
                this._v_CollectedLogsSize  = 0;
            }
        }
        else {
            this._v_CollectLogs        = false;
            this._v_CollectedLogs      = [ ];
            this._v_CollectedLogsSize  = 0;
        }
    }





    pSetMaxCollectedLogsLength( theMaxCollectedLogsLength) {

        this._v_MaxCollectedLogsLength = theMaxCollectedLogsLength;

        this.pEnforceMaxCollectedLogsLength("");

    }








    fCollectedLogs() {

        return this._v_CollectedLogs;

    }






    fCollectedLogsCopy() {

        if( !this._v_CollectedLogs) {
            return null;
        }

        return this._v_CollectedLogs.slice();

    }







    log( theMessage) {

        if( this._v_CollectLogs) {

            if( !this._v_CollectedLogs) {
                this._v_CollectedLogs = [ ];
            }

            this._v_CollectedLogs.push( [ "log", theMessage]);

            this.pEnforceMaxCollectedLogsLength( theMessage);
        }


        if( this._v_WriteToConsole) {

            console.log( theMessage);
        }

    }







    error( theMessage) {

        if( this._v_CollectLogs) {

            if( !this._v_CollectedLogs) {
                this._v_CollectedLogs = [ ];
            }

            this._v_CollectedLogs.push( [ "error", theMessage]);

            this.pEnforceMaxCollectedLogsLength( theMessage);
        }


        if( this._v_WriteToConsole) {

            console.error( theMessage);
        }

    }








    info( theMessage) {

        if( this._v_CollectLogs) {

            if( !this._v_CollectedLogs) {
                this._v_CollectedLogs = [ ];
            }

            this._v_CollectedLogs.push( [ "info", theMessage]);

            this.pEnforceMaxCollectedLogsLength( theMessage);
        }

        if( this._v_WriteToConsole) {

            console.log( theMessage);
        }
    }






    clear() {

        this._v_CollectedLogs     = [ ];
        this._v_CollectedLogsSize = 0;

        if( this._v_WriteToConsole) {

            console.clear();
        }
    }








    pEnforceMaxCollectedLogsLength( theMessage) {

        if( !this._v_CollectLogs) {
            return;
        }

        var aMessageLen = ( ( typeof theMessage == "string") ? theMessage.length : 0);

        this._v_CollectedLogsSize += aMessageLen;

        if( this._v_MaxCollectedLogsLength <= 0) {
            return;
        }


        while( true) {

            if( this._v_CollectedLogsSize <= this._v_MaxCollectedLogsLength) {
                return;
            }

            if( this._v_CollectLogs.length <= 1) {
                return;
            }

            var aRemovedKindAndMessage = this._v_CollectedLogs.shift();

            var aRemovedMessage = aRemovedKindAndMessage[ 1];
            var aRemovedMessageLen = ( ( typeof aRemovedMessage == "string") ? aRemovedMessage.length : 0);

            this._v_CollectedLogsSize -= aRemovedMessageLen;
        }


    }


}


const Singleton_Console = new Console();


export default Singleton_Console;






