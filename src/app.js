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
