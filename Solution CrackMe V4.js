/*
https://crackmes.one/crackme/6152314933c5d458fcb36665
Author:Marquire
Language:C/C++
Upload:9:02 PM 09/27/2021
Platform:Windows
Difficulty:2.8
Quality:4.0
Arch:x86

Solve Time: 4hours
*/

var step = 0xFFFF;
var edx = 0;
var edi = 0;
var esi = 0;
var ecx = 0x0931F6CE;
var correctKey = ['0x1E','0x16' ,'0x0a','0x02','0x1e' ,'0x1a','0x0c' ,'0x06' ,'0x14' ,'0x05' ,'0x05'  ,'0x11' ,'0x7d','0x0']
function DecodeH(hex){//check if you got the correct array of hex ECX - EDI should be 0
    for(i = 0; i < 13+1; i++){
        esi = parseInt(hex[i])
        edi += edx * esi
        edx += step
    }
    console.log("CMP EDX: " + edx + " STEP: " + step * 13);
    console.log("CMP ECX: " + ecx + " EDI: " + edi);
    console.log(ecx - edi)
}
DecodeH(correctKey)
/*************************************************************************************************/
var encryptionKey = "NIHKJEDGFA@CB";
var correctKey = ['0x1E','0x16' ,'0x0a','0x02','0x1e' ,'0x1a','0x0c' ,'0x06' ,'0x14' ,'0x05' ,'0x05'  ,'0x11' ,'0x7d','0x0']
function bruteForce(correctKey){
    compareKey = []
    genKey = []
    var match = false;
    var dl = 0;
    for(i = 0; i < correctKey.length; i++){
        compareKey.push(parseInt(correctKey[i]))
    }
    
    for(i = 0; i < encryptionKey.length; i++){
        match = false;
        dl = encryptionKey[i].charCodeAt();
        while(!match){
            for(f = 0; f < 255; f++){
                if((dl ^ f) == compareKey[i]){
                    genKey.push(String.fromCharCode(f))
                    match = true;
                }
            }
        }
    }
    return genKey
}
console.log(bruteForce(correctKey))