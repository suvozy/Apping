var load=new Array();

function getByID(name) {
  var elem,obj;

  if (document.getElementById) {
    obj=document.getElementById(name);
  } else if (document.all) {
    elem=document.all;
    if (elem[name]) {
      obj=elem[name];
    }
  }

  return obj;
}

function runLoad() {
  for (var i=0; i<load.length; i++) {
    eval(load[i]);
  }
}

window.onload=runLoad;
