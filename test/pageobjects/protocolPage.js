import { $ } from '@wdio/globals'

class ProtocolPage {
 
    get protocolTitle () {
        return $('//h1');
    }

   
}

export default new ProtocolPage();
