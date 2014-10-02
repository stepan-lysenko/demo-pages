function check_api() {
  function log(msg) {
    var logger = $("#log");
    var html = logger.html();
    html += msg + "<br/>";
    logger.html(html);
  }

  function playerMetaData (evt) {
    if (evt.type == "videostart") {
      log('Video Start EVENT fired');
    }
    else if (evt.type == "videometa") {
      log('Video Meta EVENT fired');
    }
    else if (evt.type == "videoend"){
      log('Video End EVENT fired');
    }
    else if (evt.type == "videotimeupdate"){
      log('Video Time Update EVENT fired');
    }
  }

  function onPlayerReady(player) {
    log("onPlayerReady");
    player.addEventListener(vidible.VIDEO_START, playerMetaData);
    player.addEventListener(vidible.VIDEO_END, playerMetaData);
    player.addEventListener(vidible.VIDEO_TIMEUPDATE, playerMetaData);
    player.addEventListener(vidible.VIDEO_META, playerMetaData);
  }

  function startCheck() {
    (function(div, cb){
      if (div.vdb_Player) {
        cb(div.vdb_Player);
      } else {
        var fn = arguments.callee;
        setTimeout(function(){ fn(div,cb); },0);
      }
    })(document.getElementById("vidible_player"), onPlayerReady);
  }

  log("Start Check");
  startCheck();
}
check_api();
