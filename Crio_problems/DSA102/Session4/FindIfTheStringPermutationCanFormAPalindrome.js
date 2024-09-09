/**
 * @param {string} s
 * @return {boolean}
 */

function isPermutationPalidrome(s){
    //implement this function
}

function main() {
    let t = parseInt(readLine())
    while(t--){
        const s = readLine()
        const answer = isPermutationPalidrome(s)
        if(answer)
            console.log('True')
        else
            console.log('False')
    }
}