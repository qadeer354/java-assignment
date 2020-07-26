function remove(v) {
    console.log(v);
    var td = v.parentNode; 
    var tr = td.parentNode; // the row to be removed
    var  p = tr.parentNode;
    p.removeChild(tr);
}