module.exports = function reverse (n) {
    if(n > 0){
        let result = '';
        n = n.toString();
        for(let i = n.length - 1; i >= 0; i--){
         result = result + n[i];
     }
        return result;
    }else{
        let result = '';
        n = (n * -1).toString();
        for(let i = n.length - 1; i >= 0; i--){
            result = result + n[i];
        }
        return result;
     }
}
