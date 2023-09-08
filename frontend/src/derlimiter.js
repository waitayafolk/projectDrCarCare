export function derlimiter (num){
    if(num == null || num == undefined){
        return  (0).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }else{
        return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
}