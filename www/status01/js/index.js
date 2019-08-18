var url = "https://api.minetools.eu/ping/mc.hypixel.net/25565";
$.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);
    
});