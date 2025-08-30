(function(){
  document.addEventListener("DOMContentLoaded", function(){
    const viewer = window.viewer;
    if(!viewer){ console.warn("Viewer non trovato"); return; }

    const sidebar = document.querySelector("#potree_sidebar_container");
    if(!sidebar){ console.warn("Sidebar non trovata"); return; }

    sidebar.addEventListener("click", function(ev){
      const el = ev.target.closest("a,button,li");
      if(!el) return;
      const txt = (el.innerText||"").trim().toLowerCase();

      if(txt.includes("distance") || txt.includes("distanza")){
        ev.preventDefault();
        viewer.measuringTool.startInsertion({name:"Distance",showDistances:true});
      }
      if(txt.includes("height") || txt.includes("altezza")){
        ev.preventDefault();
        viewer.measuringTool.startInsertion({name:"Height",showHeight:true});
      }
      if(txt.includes("area")){
        ev.preventDefault();
        viewer.measuringTool.startInsertion({name:"Area",closed:true});
      }
      if(txt.includes("angle") || txt.includes("angolo")){
        ev.preventDefault();
        viewer.measuringTool.startInsertion({name:"Angle",showAngles:true});
      }
      if(txt.includes("profile") || txt.includes("profilo")){
        ev.preventDefault();
        viewer.profileTool.startInsertion({width:2.0});
      }
      if(txt.includes("clear") || txt.includes("pulisci") || txt.includes("cancella")){
        ev.preventDefault();
        viewer.measuringTool.clear();
        viewer.profileTool.removeAll();
      }
    }, true);
  });
})();
