function n(e){return new Date(e).toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"})}function i(e){return e==null||e==null?0 .toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"):e.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}export{i as d,n as t};
