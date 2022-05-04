A. ES6 Import Export:  import/export prin mentionarea cuvintelor import/export 
vs
B. CommonJS Import Export
  

fis f1                                            fis f2
 EXPORT                                          IMPORT
A. 1 export default function fc1() {}           | import fc1 from "./'f1.js";        
                                                | 
A.2 export function fc2() {}                    | import { fc2, fc3} from "./f1.js";
    export function fc3() {}                    | 
                                                |
                                                |
A.3 function fc4() {}                           |
    function fc5() {}                           |
                                                |
    export { fc4, fc5 }                         | import { fc4, fc5} from "./f1.js";
    
    
    
    
 Note: -  doar un singur item(fc, clasa, var) se poate exporta/file
       -  la import x,  dc x a fost exportat cu default 



B.1  function fc6()                               | const fc6 = require("./f1.js")
     exports.fc6 = fc6;                           | 
                                                  |   
B.2 function fc7()                                | const fc7 = require("./f2.js")           
    module.exports = fc6                          | 

         
         
  Nota: exports e doar o referinta ls module.exports   





