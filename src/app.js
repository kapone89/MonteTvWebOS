var lunaReq= webOS.service.request("luna://com.palm.systemservice",
 {
     method:"clock/getTime",
     parameters:{},
     onSuccess: function (args) {
 console.log("Epoch:", args.utc);
     },
     onFailure: function (args) {
     }
 });

 document.state = mobx.observable({
   imgUrl: "https://learn.getgrav.org/system/images/media/thumb-jpg.png",
   allImages: [
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/cdos.png",
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/cdos_2.png",
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/monte.png",
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/monte_dark.png",
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/monte_red.png",
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/monte_red_2.png",
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/wifi.png",
     "https://raw.githubusercontent.com/kapone89/MonteOfficeExpo/static/screen/wifi_dark.png",
   ],
   currentIndex: null,
 })

 document.addEventListener("keydown", function(event){
    console.log(event);
    switch(event.keyIdentifier) {
      case "Up":
          document.state.currentIndex -= 1;
          break;
      case "Down":
          document.state.currentIndex += 1;
          break;
      case "Enter":
          document.state.currentIndex = null;
          break;
      default:
          console.log(event);
    }
  });

 mobx.autorun(function() {
   if (document.state.currentIndex) {
     var element = document.getElementById("image");
     document.state.imgUrl = document.state.allImages[document.state.currentIndex];
     var url = document.state.imgUrl;
     element.setAttribute("style", "background-image: url(" + url + ")");
   } else {
     element.setAttribute("style", null);
   }
 })
