
function loadzoomUX() {
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
}
function join_meeting(meeting_number, display_name, meeting_pwd, meeting_role,apikey, apisecret) {
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    document.getElementById("zmmtg-root").style.display = "block";
    console.log('Meeting number ' + meeting_number);
    console.log('Name ' + display_name);
    console.log('Pwd ' + meeting_pwd);
    console.log('Role ' + meeting_role);
    var API_KEY = apikey;// 'kXjyAKACRQSo9lgLRFiK2g';
    var API_SECRET = apisecret;// 'y9dqbOqjJndcr2dBqnze7QBKCht7i5ZU1zVg';
    //e.preventDefault();
    testTool = window.testTool;


    var meetConfig = {
        apiKey: API_KEY,
        apiSecret: API_SECRET,
        meetingNumber: parseInt(meeting_number),
        userName: display_name,
        passWord: meeting_pwd,
        leaveUrl: "https://ismartkid.azurewebsites.net/Lessons/" ,
        role: parseInt(meeting_role)
    };
    testTool.setCookie("meeting_number", meetConfig.meetingNumber);
    testTool.setCookie("meeting_pwd", meetConfig.passWord);


    var signature = ZoomMtg.generateSignature({
        meetingNumber: meetConfig.meetingNumber,
        apiKey: meetConfig.apiKey,
        apiSecret: meetConfig.apiSecret,
        role: meetConfig.role,
        success: function (res) {
            console.log(res.result);
        }
    });

    ZoomMtg.init({
        leaveUrl: 'https://ismartkid.azurewebsites.net/Lessons/',
        success: function () {
            ZoomMtg.join(
                {
                    meetingNumber: meetConfig.meetingNumber,
                    userName: meetConfig.userName,
                    signature: signature,
                    apiKey: meetConfig.apiKey,
                    passWord: meetConfig.passWord,
                    success: function (res) {
                        $('#nav-tool').hide();
                        console.log('join meeting success');
                    },
                    error: function (res) {
                        console.log(res);
                    }
                }
            );
        },
        error: function (res) {
            console.log(res);
        }
    });

}
(function () {

	console.log('checkSystemRequirements');
	console.log(JSON.stringify(ZoomMtg.checkSystemRequirements()));

    const zoomMeeting = document.getElementById("zmmtg-root");
    zoomMeeting.style.display = 'none'
    zoomMeeting.style.height = '0px'
    zoomMeeting.style.width = '0px'
    zoomMeeting.style.position = 'relative'
    zoomMeeting.style.backgroundColor = 'black'
    zoomMeeting.style.zIndex = '1'
    
    document.body.style.overflow = "scroll";
})();
