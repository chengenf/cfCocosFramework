var ly;
(function (ly) {
    function switchOnAd() {
    }
    ly.switchOnAd = switchOnAd;
    function switchOffAd() {
    }
    ly.switchOffAd = switchOffAd;
    function getAdPositionParam(adPositionName) {
        return null;
    }
    ly.getAdPositionParam = getAdPositionParam;
    function preloadAd(adPositionName) {
        ly.ads.AdManager.getInstance().preloadAd(adPositionName);
    }
    ly.preloadAd = preloadAd;
    function isAdReady(adPositionName) {
        return ly.ads.AdManager.getInstance().isAdReady(adPositionName);
    }
    ly.isAdReady = isAdReady;
    function openAd(adPositionName, openAdResultCallback, onAdCloseCallback) {
        ly.ads.AdManager.getInstance().openAd(adPositionName, openAdResultCallback, onAdCloseCallback);
    }
    ly.openAd = openAd;
    function closeAd(adPositionName) {
        ly.ads.AdManager.getInstance().closeAd(adPositionName);
    }
    ly.closeAd = closeAd;
    function closeAllBannerAd() {
        ly.ads.AdManager.getInstance().closeAllBanner();
    }
    ly.closeAllBannerAd = closeAllBannerAd;
    function loadExpressAd(adPositionName, percentWidth, percentHeight) {
        ly.ads.AdManager.getInstance().loadExpressAd(adPositionName, percentWidth, percentHeight);
    }
    ly.loadExpressAd = loadExpressAd;
    function openExpressAd(adPositionName, percentWidth, percentHeight, percentLeft, percentTop, openAdResultCallback, onAdCloseCallback) {
        ly.ads.AdManager.getInstance().openExpressAd(adPositionName, percentWidth, percentHeight, percentLeft, percentTop, openAdResultCallback, onAdCloseCallback);
    }
    ly.openExpressAd = openExpressAd;
})(ly || (ly = {}));
var ly;
(function (ly) {
    var analytics;
    (function (analytics) {
        function profileSignIn(...args) {
            if (args.length == 1) {
                analytics.AnalyticsManager.getInstance().profileSignIn(args[0]);
            }
            else if (args.length == 2) {
                analytics.AnalyticsManager.getInstance().profileSignIn2(args[0], args[1]);
            }
        }
        analytics.profileSignIn = profileSignIn;
        function profileSignOff() {
            analytics.AnalyticsManager.getInstance().profileSignOff();
        }
        analytics.profileSignOff = profileSignOff;
        function setPlayerLevel(level) {
            analytics.AnalyticsManager.getInstance().setPlayerLevel(level);
        }
        analytics.setPlayerLevel = setPlayerLevel;
        function pay(...args) {
            if (args.length == 3) {
                analytics.AnalyticsManager.getInstance().pay(args[0], args[1], args[2]);
            }
            else if (args.length == 5) {
                analytics.AnalyticsManager.getInstance().pay2(args[0], args[1], args[2], args[3], args[4]);
            }
        }
        analytics.pay = pay;
        function buy(item, number, price) {
            analytics.AnalyticsManager.getInstance().buy(item, number, price);
        }
        analytics.buy = buy;
        function use(item, number, price) {
            analytics.AnalyticsManager.getInstance().use(item, number, price);
        }
        analytics.use = use;
        function bonus(...args) {
            if (args.length == 2) {
                analytics.AnalyticsManager.getInstance().bonus(args[0], args[1]);
            }
            else if (args.length == 4) {
                analytics.AnalyticsManager.getInstance().bonus2(args[0], args[1], args[2], args[3]);
            }
        }
        analytics.bonus = bonus;
        function startLevel(level) {
            analytics.AnalyticsManager.getInstance().startLevel(level);
        }
        analytics.startLevel = startLevel;
        function finishLevel(level, score) {
            analytics.AnalyticsManager.getInstance().finishLevel(level, score);
        }
        analytics.finishLevel = finishLevel;
        function failLevel(level, score) {
            analytics.AnalyticsManager.getInstance().failLevel(level, score);
        }
        analytics.failLevel = failLevel;
        function event(...args) {
            if (args.length == 1) {
                analytics.AnalyticsManager.getInstance().event(args[0]);
            }
            else if (args.length == 2) {
                if (typeof args[1] == "string") {
                    analytics.AnalyticsManager.getInstance().event2(args[0], args[1]);
                }
                else {
                    analytics.AnalyticsManager.getInstance().event3(args[0], args[1]);
                }
            }
            else if (args.length == 3) {
                analytics.AnalyticsManager.getInstance().event4(args[0], args[1], args[2]);
            }
        }
        analytics.event = event;
    })(analytics = ly.analytics || (ly.analytics = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    class Constants {
    }
    Constants.RankMode_week = "week";
    Constants.RankMode_all = "all";
    Constants.RankMode_friendWeek = "friendWeek";
    Constants.RankMode_friendAll = "friendAll";
    Constants.RankMode_groupWeek = "groupWeek";
    Constants.RankMode_groupAll = "groupAll";
    Constants.User_Info_Name = "user_name";
    Constants.User_Info_Phone = "user_phone";
    Constants.User_Info_Image = "user_image";
    Constants.User_Info_Sex = "user_sex";
    ly.Constants = Constants;
})(ly || (ly = {}));
var ly;
(function (ly) {
    function init(appConfigJson) {
        ly.AppConfigManager.getInstance().setAppConfig(appConfigJson);
        ly.core.PlatformManager.getInstance();
        ly.core.promote && ly.core.promote.PromoteManager.getInstance();
        ly.ads && ly.ads.AdManager.getInstance();
    }
    ly.init = init;
    function getPlatformType() {
        return ly.core.PlatformManager.getInstance().getPlatformType();
    }
    ly.getPlatformType = getPlatformType;
    function getAppConfig() {
        return ly.AppConfigManager.getInstance().getAppConfig();
    }
    ly.getAppConfig = getAppConfig;
    function showToast(text) {
        return ly.core.PlatformManager.getInstance().showToast(text);
    }
    ly.showToast = showToast;
    function isExitGame() {
        return false;
    }
    ly.isExitGame = isExitGame;
    function openExitGame(callback) {
        callback && callback(false);
    }
    ly.openExitGame = openExitGame;
    function isBadWord(text) {
        return false;
    }
    ly.isBadWord = isBadWord;
    function isComment() {
        return false;
    }
    ly.isComment = isComment;
    function openComment(callback) {
    }
    ly.openComment = openComment;
    function onPauseMusic(func) {
        ly.core.PlatformManager.getInstance().onPauseMusic(func);
    }
    ly.onPauseMusic = onPauseMusic;
    function onResumeMusic(func) {
        ly.core.PlatformManager.getInstance().onResumeMusic(func);
    }
    ly.onResumeMusic = onResumeMusic;
    function login(callback) {
        ly.core.PlatformManager.getInstance().login(callback);
    }
    ly.login = login;
    function loginGuest(callback) {
        ly.core.PlatformManager.getInstance().loginGuest(callback);
    }
    ly.loginGuest = loginGuest;
    function logout() {
        ly.core.PlatformManager.getInstance().logout();
    }
    ly.logout = logout;
    function getLoginType() {
        return ly.core.PlatformManager.getInstance().getLoginType();
    }
    ly.getLoginType = getLoginType;
    function checkThirdAuthUserInfo(callback) {
        ly.core.PlatformManager.getInstance().checkThirdAuthUserInfo(callback, true);
    }
    ly.checkThirdAuthUserInfo = checkThirdAuthUserInfo;
    function getSelfUser() {
        return ly.core.PlatformManager.getInstance().getUser();
    }
    ly.getSelfUser = getSelfUser;
    function getThirdUserInfo(callback) {
        ly.core.PlatformManager.getInstance().getThirdUserInfo(callback);
    }
    ly.getThirdUserInfo = getThirdUserInfo;
    function getThirdUserInfoOriginal(callback) {
        ly.core.PlatformManager.getInstance().getThirdUserInfoOriginal(callback);
    }
    ly.getThirdUserInfoOriginal = getThirdUserInfoOriginal;
    function parseThirdUserInfoOriginal(originalThirdUserInfo) {
        return ly.core.PlatformManager.getInstance().parseThirdUserInfoOriginal(originalThirdUserInfo);
    }
    ly.parseThirdUserInfoOriginal = parseThirdUserInfoOriginal;
    function getRank(rankMode, callback) {
        ly.RankManager.getInstance().getRank(rankMode, callback);
    }
    ly.getRank = getRank;
    function updateRank(rankMode, callback, rankType = 0) {
        ly.RankManager.getInstance().updateRank(rankMode, callback, rankType);
    }
    ly.updateRank = updateRank;
    function isPromote() {
        return ly.core.promote.PromoteManager.getInstance().isPromote();
    }
    ly.isPromote = isPromote;
    function getPromoteItem(promotePosition, callback) {
        return ly.core.promote.PromoteManager.getInstance().getPromoteItem(promotePosition, callback);
    }
    ly.getPromoteItem = getPromoteItem;
    function doGetAntiAddictionInfo(callback) {
        return ly.core.PlatformManager.getInstance().doGetAntiAddictionInfo(callback);
    }
    ly.doGetAntiAddictionInfo = doGetAntiAddictionInfo;
    function hasVibrate() {
        return ly.core.PlatformManager.getInstance().hasVibrate();
    }
    ly.hasVibrate = hasVibrate;
    function vibrate(milliseconds, amplitude) {
        return ly.core.PlatformManager.getInstance().vibrate(milliseconds, amplitude);
    }
    ly.vibrate = vibrate;
    function cancelVibrate() {
        return ly.core.PlatformManager.getInstance().cancelVibrate();
    }
    ly.cancelVibrate = cancelVibrate;
    class LoginInfo {
    }
    function isSupportLogin(loginType) {
        return false;
    }
    ly.isSupportLogin = isSupportLogin;
    function loginTP(loginType, onLoginSuccessListener, onLoginFailListener) {
        return;
    }
    ly.loginTP = loginTP;
    function isEnableShare() {
        return false;
    }
    ly.isEnableShare = isEnableShare;
    function isSupportShare(sharePlatform) {
        return false;
    }
    ly.isSupportShare = isSupportShare;
    function shareText(sharePlatform, text, shareResponseCallback) {
        return;
    }
    ly.shareText = shareText;
    function sharePicture(sharePlatform, image, shareResponseCallback) {
        return;
    }
    ly.sharePicture = sharePicture;
    function shareWebpage(sharePlatform, shareWebpageMedia, shareResponseCallback) {
        return;
    }
    ly.shareWebpage = shareWebpage;
    function shareMiniApp(sharePlatform, shareMiniAppMedia, shareResponseCallback) {
        return;
    }
    ly.shareMiniApp = shareMiniApp;
})(ly || (ly = {}));
var ly;
(function (ly) {
    function isPay() {
        return ly.payApi.PayManager.getInstance().isPay();
    }
    ly.isPay = isPay;
    function pay(payRequestParam, onPayFinishCallback) {
        ly.payApi.PayManager.getInstance().pay(payRequestParam, onPayFinishCallback);
    }
    ly.pay = pay;
    function payOrderNum(orderNum, onPayFinishCallback) {
        ly.payApi.PayManager.getInstance().payOrderNum(orderNum, onPayFinishCallback);
    }
    ly.payOrderNum = payOrderNum;
    function checkWaitHandleOrder(onCheckFinishListener) {
        ly.payApi.PayManager.getInstance().checkWaitHandleOrder(onCheckFinishListener);
    }
    ly.checkWaitHandleOrder = checkWaitHandleOrder;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class PlatformDefine {
    }
    PlatformDefine.UnKnown = 0;
    PlatformDefine.Web = 1;
    PlatformDefine.H5 = 2;
    PlatformDefine.Native_Android = 3;
    PlatformDefine.Native_IOS = 4;
    PlatformDefine.GoogleInstantApp = 10;
    PlatformDefine.Facebook = 11;
    PlatformDefine.WeChatGame = 12;
    PlatformDefine.QQPlay = 13;
    PlatformDefine.BaiduGame = 14;
    PlatformDefine.TouTiaoGame = 15;
    PlatformDefine.LyH5Game = 99;
    PlatformDefine.OppoQuickGame = 100;
    PlatformDefine.VivoQuickGame = 101;
    PlatformDefine.HuaweiQuickGame = 102;
    PlatformDefine.MiQuickGame = 103;
    PlatformDefine.QQminiGame = 104;
    PlatformDefine.QTTGame = 105;
    PlatformDefine.FtnnMiniGame = 106;
    PlatformDefine.UCGame = 107;
    PlatformDefine.LianShangMiniGame = 108;
    ly.PlatformDefine = PlatformDefine;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class ShareParam {
    }
    ly.ShareParam = ShareParam;
    function isShare() {
        return ly.core.PlatformManager.getInstance().isShare();
    }
    ly.isShare = isShare;
    function share(shareParam, callback, query) {
        ly.core.PlatformManager.getInstance().share(shareParam.title, shareParam.imageUrl, callback, query);
    }
    ly.share = share;
    function shareGroupRank(shareParam, callback, query) {
        ly.core.PlatformManager.getInstance().shareGroupRank(shareParam.title, shareParam.imageUrl, callback, query);
    }
    ly.shareGroupRank = shareGroupRank;
    function onRequestShareParam(callback) {
        ly.core.PlatformManager.getInstance().setOnRequestShareParam(callback);
    }
    ly.onRequestShareParam = onRequestShareParam;
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        let AdStatus;
        (function (AdStatus) {
            AdStatus[AdStatus["Inited"] = 0] = "Inited";
            AdStatus[AdStatus["Loading"] = 1] = "Loading";
            AdStatus[AdStatus["LoadSuccess"] = 2] = "LoadSuccess";
            AdStatus[AdStatus["LoadFail"] = 3] = "LoadFail";
            AdStatus[AdStatus["Showing"] = 4] = "Showing";
            AdStatus[AdStatus["ShowSuccess"] = 5] = "ShowSuccess";
            AdStatus[AdStatus["ShowFail"] = 6] = "ShowFail";
            AdStatus[AdStatus["Closing"] = 7] = "Closing";
            AdStatus[AdStatus["Closed"] = 8] = "Closed";
        })(AdStatus = ads.AdStatus || (ads.AdStatus = {}));
        let AdType;
        (function (AdType) {
            AdType["any"] = "any";
            AdType["splash"] = "splash";
            AdType["banner"] = "banner";
            AdType["interstitial"] = "interstitial";
            AdType["video"] = "video";
            AdType["interaction"] = "interaction";
            AdType["interstitialVideo"] = "interstitialVideo";
        })(AdType = ads.AdType || (ads.AdType = {}));
        function convertAdType(adTypeString) {
            switch (adTypeString) {
                case "any":
                    return AdType.any;
                case "splash":
                    return AdType.splash;
                case "banner":
                    return AdType.banner;
                case "interstitial":
                    return AdType.interstitial;
                case "video":
                    return AdType.video;
                case "interaction":
                    return AdType.interaction;
                case "interstitialVideo":
                    return AdType.interstitialVideo;
            }
            return null;
        }
        class AdSourcePlacement {
            constructor() {
                this.refreshInterval = 30;
                this.loadFailCount = 0;
                this.loadFailLastTime = 0;
            }
        }
        ads.AdSourcePlacement = AdSourcePlacement;
        class AdSource {
            constructor() {
                this.adSourcePlacementList = new Array();
            }
        }
        ads.AdSource = AdSource;
        class AdPosition {
            constructor() {
                this.type = AdType.any;
                this.refreshInterval = 30;
                this.closeReopenInterval = 30;
                this.adSourcePlacementList = new Map();
            }
        }
        ads.AdPosition = AdPosition;
        class AdConfig {
            constructor() {
                this.adSourceList = new Array();
                this.adSourcePlacementList = new Map();
                this.adPositionList = new Array();
            }
            static fromJson(adConfigJson) {
                if (adConfigJson && adConfigJson.adSources && adConfigJson.adPositions) {
                    try {
                        let adConfig = new AdConfig();
                        adConfig.parseAdConfig(adConfigJson);
                        return adConfig;
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
                return null;
            }
            parseAdConfig(adConfigJson) {
                for (let adSourceJson of adConfigJson.adSources) {
                    let adSource = new AdSource();
                    adSource.name = adSourceJson.name;
                    adSource.appId = adSourceJson.appId;
                    adSource.appKey = adSourceJson.appKey;
                    if (adSourceJson.placements) {
                        for (let adSourcePlacementJson of adSourceJson.placements) {
                            let adSourcePlacement = new AdSourcePlacement();
                            adSourcePlacement.adSource = adSource;
                            adSourcePlacement.identifier = adSourcePlacementJson.identifier;
                            adSourcePlacement.type = convertAdType(adSourcePlacementJson.type);
                            adSourcePlacement.placementId = adSourcePlacementJson.placementId;
                            adSource.adSourcePlacementList.push(adSourcePlacement);
                            this.adSourcePlacementList.set(adSource.name + "." + adSourcePlacement.identifier, adSourcePlacement);
                        }
                    }
                    this.adSourceList.push(adSource);
                }
                for (let adPositionJson of adConfigJson.adPositions) {
                    let adPosition = new AdPosition();
                    adPosition.name = adPositionJson.name;
                    let adType = convertAdType(adPositionJson.type);
                    if (adType)
                        adPosition.type = adType;
                    adPosition.percent = adPositionJson.percent;
                    if (adPositionJson.refreshInterval)
                        adPosition.refreshInterval = adPositionJson.refreshInterval;
                    if (adPositionJson.closeReopenInterval)
                        adPosition.refreshInterval = adPositionJson.closeReopenInterval;
                    for (let adSourcePlacementsJson of adPositionJson.adSourcePlacements) {
                        let identifier = adSourcePlacementsJson.identifier;
                        let adSourcePlacement = this.adSourcePlacementList.get(identifier);
                        adPosition.adSourcePlacementList.set(adSourcePlacement, adSourcePlacementsJson.percent);
                    }
                    this.adPositionList.push(adPosition);
                }
            }
            getAdPosition(adPositionName) {
                for (let adPosition of this.adPositionList) {
                    if (adPosition.name == adPositionName) {
                        return adPosition;
                    }
                }
                return null;
            }
        }
        ads.AdConfig = AdConfig;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        let AdErrorCode;
        (function (AdErrorCode) {
            AdErrorCode[AdErrorCode["CODE_UNKNOWN"] = 100] = "CODE_UNKNOWN";
            AdErrorCode[AdErrorCode["CODE_INIT_ERROR"] = 1001] = "CODE_INIT_ERROR";
            AdErrorCode[AdErrorCode["CODE_INTERNAL_ERROR"] = 1002] = "CODE_INTERNAL_ERROR";
            AdErrorCode[AdErrorCode["CODE_AD_PARAM_ERROR"] = 1003] = "CODE_AD_PARAM_ERROR";
            AdErrorCode[AdErrorCode["CODE_NO_NETWORK_CONNECT"] = 2000] = "CODE_NO_NETWORK_CONNECT";
            AdErrorCode[AdErrorCode["CODE_NETWORK_ERROR"] = 2001] = "CODE_NETWORK_ERROR";
            AdErrorCode[AdErrorCode["CODE_NO_AD"] = 3000] = "CODE_NO_AD";
            AdErrorCode[AdErrorCode["CODE_AD_LOAD_FAIL"] = 3001] = "CODE_AD_LOAD_FAIL";
            AdErrorCode[AdErrorCode["CODE_AD_NOT_READY"] = 3002] = "CODE_AD_NOT_READY";
            AdErrorCode[AdErrorCode["CODE_AD_SHOW_FAIL"] = 3003] = "CODE_AD_SHOW_FAIL";
            AdErrorCode[AdErrorCode["CODE_AD_CLOSED"] = 3004] = "CODE_AD_CLOSED";
        })(AdErrorCode = ads.AdErrorCode || (ads.AdErrorCode = {}));
        class AdError {
            constructor(code) {
                this.code = code;
                switch (code) {
                    case AdErrorCode.CODE_UNKNOWN:
                        this.msg = "未知错误";
                        break;
                    case AdErrorCode.CODE_INIT_ERROR:
                        this.msg = "初始化错误";
                        break;
                    case AdErrorCode.CODE_INTERNAL_ERROR:
                        this.msg = "内部错误";
                        break;
                    case AdErrorCode.CODE_AD_PARAM_ERROR:
                        this.msg = "广告参数错误";
                        break;
                    case AdErrorCode.CODE_NO_NETWORK_CONNECT:
                        this.msg = "无网络连接";
                        break;
                    case AdErrorCode.CODE_NETWORK_ERROR:
                        this.msg = "网络错误";
                        break;
                    case AdErrorCode.CODE_NO_AD:
                        this.msg = "无广告填充";
                        break;
                    case AdErrorCode.CODE_AD_LOAD_FAIL:
                        this.msg = "加载广告失败";
                        break;
                    case AdErrorCode.CODE_AD_NOT_READY:
                        this.msg = "没有加载成功的广告";
                        break;
                    case AdErrorCode.CODE_AD_SHOW_FAIL:
                        this.msg = "广告展示失败";
                        break;
                    case AdErrorCode.CODE_AD_CLOSED:
                        this.msg = "广告已关闭";
                        break;
                }
            }
            getCode() {
                return this.code;
            }
            setCode(code) {
                this.code = code;
            }
            getMsg() {
                return this.msg;
            }
            setMsg(msg) {
                this.msg = msg;
            }
            getSdkCode() {
                return this.sdkCode;
            }
            setSdkCode(sdkCode) {
                this.sdkCode = sdkCode;
            }
            getSdkMsg() {
                return this.sdkMsg;
            }
            setSdkMsg(sdkMsg) {
                this.sdkMsg = sdkMsg;
            }
            toString() {
                let ret = "code: " + this.code + ", msg: " + this.msg;
                if (this.sdkCode && this.sdkCode.length > 0) {
                    ret += ", sdkCode: " + this.sdkCode;
                }
                if (this.sdkMsg && this.sdkMsg.length > 0) {
                    ret += ", sdkMsg: " + this.sdkMsg;
                }
                return ret;
            }
        }
        ads.AdError = AdError;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class AdItem {
            constructor(adItemParam) {
                this.status = ads.AdStatus.Inited;
                this.loadingTime = 0;
                this.loadFinishTime = 0;
                this.isReward = false;
                this.openAdResultCallback = null;
                this.onAdCloseCallback = null;
                this.adItemParam = adItemParam;
            }
            loadAd() {
                console.log("ad loadAd: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type);
                this.onLoading();
            }
            showAd() {
                console.log("ad showAd: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type);
                this.onShowing();
            }
            closeAd() {
                console.log("ad closeAd: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type);
                if (this.isShowSuccess()) {
                    this.onClosing();
                }
                else {
                    this.destroyAd();
                }
            }
            destroyAd() {
                if (this.status != ads.AdStatus.Closing) {
                    setTimeout(() => {
                        this.onClosed();
                    }, 3000);
                }
                if (this.status != ads.AdStatus.Closed) {
                    this.status = ads.AdStatus.Closing;
                    this.close();
                    setTimeout(() => {
                        this.onClosed();
                    }, 3000);
                }
            }
            getAdItemParam() {
                return this.adItemParam;
            }
            getAppId() {
                return this.adItemParam.getAppId();
            }
            getAppKey() {
                return this.adItemParam.getAppKey();
            }
            getAdPlacementId() {
                return this.adItemParam.getAdPlacementId();
            }
            onLoading() {
                if (this.status == ads.AdStatus.Inited || this.status == ads.AdStatus.LoadFail || this.status == ads.AdStatus.ShowFail || this.status == ads.AdStatus.Closed) {
                    this.status = ads.AdStatus.Loading;
                    this.loadingTime = new Date().getTime();
                    ads.AdManager.getInstance().onLoading(this);
                    this.load();
                }
            }
            onLoadSuccess() {
                if (this.status == ads.AdStatus.Loading || this.status == ads.AdStatus.LoadFail) {
                    console.log("ad onLoadSuccess: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type);
                    this.status = ads.AdStatus.LoadSuccess;
                    this.loadFinishTime = new Date().getTime();
                    ads.AdManager.getInstance().onLoadSuccess(this);
                }
            }
            onLoadFail(adError) {
                if (this.status == ads.AdStatus.Loading || this.status == ads.AdStatus.LoadSuccess) {
                    console.log("ad onLoadFail: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type + "; " + adError.toString());
                    this.status = ads.AdStatus.LoadFail;
                    this.loadFinishTime = new Date().getTime();
                    ads.AdManager.getInstance().onLoadFail(this, adError);
                }
                else if (this.status == ads.AdStatus.Showing) {
                    this.onShowFailed(adError);
                }
            }
            onShowing() {
                if (this.status == ads.AdStatus.LoadSuccess) {
                    this.status = ads.AdStatus.Showing;
                    ads.AdManager.getInstance().onShowing(this);
                    this.open();
                }
            }
            onShowSuccess() {
                if (this.status == ads.AdStatus.Showing) {
                    console.log("ad onShowSuccess: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type);
                    this.status = ads.AdStatus.ShowSuccess;
                    ads.AdManager.getInstance().onShowSuccess(this);
                    if (this.adItemParam.getAdType() == ads.AdType.video) {
                        ly.core.PlatformManager.getInstance().pauseMusic();
                    }
                    if (this.openAdResultCallback) {
                        this.openAdResultCallback(true);
                        this.openAdResultCallback = null;
                    }
                }
            }
            onShowFailed(adError) {
                if (this.status == ads.AdStatus.Showing) {
                    console.log("ad onShowFailed: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type + "; " + adError.toString());
                    this.status = ads.AdStatus.ShowFail;
                    ads.AdManager.getInstance().onShowFailed(this, adError);
                    if (this.openAdResultCallback) {
                        this.openAdResultCallback(false);
                        this.openAdResultCallback = null;
                    }
                }
            }
            onReward() {
                if (this.isReward)
                    return;
                console.log("ad onReward: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type);
                this.isReward = true;
                ads.AdManager.getInstance().onReward(this);
            }
            onClosing() {
                if (this.status != ads.AdStatus.Closing && this.status != ads.AdStatus.Closed) {
                    this.status = ads.AdStatus.Closing;
                    ads.AdManager.getInstance().onClosing(this);
                    this.close();
                }
            }
            onClosed() {
                if (this.status != ads.AdStatus.Closed) {
                    console.log("ad onClosed: " + this.adItemParam.adSource.name + " " + this.adItemParam.adSourcePlacement.type);
                    this.status = ads.AdStatus.Closed;
                    ads.AdManager.getInstance().onClosed(this);
                    if (this.adItemParam.getAdType() == ads.AdType.video) {
                        ly.core.PlatformManager.getInstance().resumeMusic();
                    }
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(this.isReward);
                        this.onAdCloseCallback = null;
                    }
                }
            }
            onClicked() {
                ads.AdManager.getInstance().onClicked(this);
            }
            isLoading() {
                return this.status == ads.AdStatus.Loading;
            }
            isLoadSuccess() {
                return this.status == ads.AdStatus.LoadSuccess;
            }
            isLoadFail() {
                return this.status == ads.AdStatus.LoadFail;
            }
            isShow() {
                return this.status == ads.AdStatus.Showing || this.status == ads.AdStatus.ShowFail || this.status == ads.AdStatus.ShowSuccess;
            }
            isShowSuccess() {
                return this.status == ads.AdStatus.ShowSuccess;
            }
            isShowFail() {
                return this.status == ads.AdStatus.ShowFail;
            }
            isClosed() {
                return this.status == ads.AdStatus.Closing || this.status == ads.AdStatus.Closed;
            }
        }
        ads.AdItem = AdItem;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class AdSourceParam {
            constructor(adSource) {
                this.adSource = adSource;
            }
            getAppId() {
                return this.adSource.appId;
            }
            getAppKey() {
                return this.adSource.appKey;
            }
        }
        ads.AdSourceParam = AdSourceParam;
        class AdItemParam {
            constructor(adSource, adSourcePlacement) {
                this.adSource = adSource;
                this.adSourcePlacement = adSourcePlacement;
            }
            getAdType() {
                return this.adSourcePlacement.type;
            }
            getAppId() {
                return this.adSource.appId;
            }
            getAppKey() {
                return this.adSource.appKey;
            }
            getAdPlacementId() {
                return this.adSourcePlacement.placementId;
            }
        }
        ads.AdItemParam = AdItemParam;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class AdLoader {
            constructor(adConfig) {
                this.adSourceList = new Array();
                this.adPositionList = new Array();
                this.m_loadAdItems = new Map();
                this.m_usingAdItems = new Array();
                this.m_allAdPositionLoaders = new Array();
                this.adSourceList = adConfig.adSourceList;
                this.adPositionList = adConfig.adPositionList;
            }
            static create(adConfig) {
                let adLoader = new AdLoader(adConfig);
                return adLoader;
            }
            onUpdate() {
                let timeoutAdPositionLoaders = new Array();
                for (let adPositionLoader of this.m_allAdPositionLoaders) {
                    let adItem = adPositionLoader.adItem;
                    if (!adPositionLoader.checkTimeout && adItem && this.checkAdItemLoadTimeout(adItem)) {
                        timeoutAdPositionLoaders.push(adPositionLoader);
                    }
                }
                for (let adPositionLoader of timeoutAdPositionLoaders) {
                    if (!adPositionLoader.checkTimeout) {
                        adPositionLoader.checkTimeout = true;
                        this.preloadAdPosition2(adPositionLoader.adPosition);
                    }
                }
            }
            initTask() {
                let sumNum = this.adSourceList.length;
                let num = 0;
                for (let adSource of this.adSourceList) {
                    let adSourceParam = new ads.AdSourceParam(adSource);
                    let adAgent = ads.AdManager.getInstance().getAdAgent(adSource.name);
                    if (adAgent) {
                        adAgent.loadAdSource(adSourceParam, (success) => {
                            num++;
                            if (num >= sumNum) {
                                this.preloadAllAdPosition();
                            }
                        });
                    }
                }
            }
            hasAdPosition(adPosition) {
                let index = this.adPositionList.findIndex((value, index, arr) => {
                    return value == adPosition;
                });
                if (index >= 0) {
                    return true;
                }
                return false;
            }
            getAdPosition(adPositionName) {
                return this.adPositionList.find((value, index, arr) => {
                    return value.name == adPositionName;
                });
            }
            preloadAllAdPosition() {
                for (let adPosition of this.adPositionList) {
                    this.preloadAdPosition2(adPosition);
                }
            }
            preloadAdPosition(adPositionName) {
                let adPosition = this.getAdPosition(adPositionName);
                if (adPosition) {
                    return this.preloadAdPosition2(adPosition);
                }
            }
            preloadAdPosition2(adPosition) {
                if (!this.hasAdPosition(adPosition)) {
                    return;
                }
                for (let adPositionLoader of this.m_allAdPositionLoaders) {
                    if (adPositionLoader.adPosition == adPosition) {
                        if (adPositionLoader.adItem) {
                            if (adPositionLoader.adItem.isLoadSuccess() || (adPositionLoader.adItem.isLoading() && !this.checkAdItemLoadTimeout(adPositionLoader.adItem))) {
                                return;
                            }
                        }
                    }
                }
                let adPositionLoader = new ads.AdPositionLoader(adPosition);
                this.m_allAdPositionLoaders.push(adPositionLoader);
                this.loadAdPositionLoader(adPositionLoader);
            }
            getAdItems(adSourcePlacement) {
                let adItems = this.m_loadAdItems.get(adSourcePlacement);
                if (!adItems) {
                    adItems = new Array();
                    this.m_loadAdItems.set(adSourcePlacement, adItems);
                }
                return adItems;
            }
            checkAdItemLoadTimeout(adItem) {
                if (adItem.isLoading()) {
                    let currentTime = new Date().getTime();
                    if (currentTime - adItem.loadingTime > 10 * 1000) {
                        return true;
                    }
                }
                return false;
            }
            checkAdItemRefAndLoad(adItem) {
                if (!adItem.adPosition)
                    return;
                let refCount = 0;
                for (let adPositionLoader of this.m_allAdPositionLoaders) {
                    if (adPositionLoader.adItem && adPositionLoader.adItem == adItem && adPositionLoader.adPosition != adItem.adPosition) {
                        refCount++;
                    }
                }
                if (refCount > 0) {
                    let adItemNew;
                    {
                        let adItems = this.getAdItems(adItem.adItemParam.adSourcePlacement);
                        if (adItems.length > 0) {
                            for (let adItem of adItems) {
                                if (!this.checkAdItemLoadTimeout(adItem) || adItem.isLoadSuccess()) {
                                    adItemNew = adItem;
                                }
                            }
                        }
                        if (!adItemNew) {
                            adItemNew = this.createAdItem(adItem.adItemParam.adSourcePlacement);
                            if (adItemNew) {
                                adItems.push(adItemNew);
                                adItemNew.loadAd();
                            }
                        }
                    }
                    if (adItemNew) {
                        for (let adPositionLoader of this.m_allAdPositionLoaders) {
                            if (adPositionLoader.adItem && adPositionLoader.adItem == adItem && adPositionLoader.adPosition != adItem.adPosition) {
                                adPositionLoader.adItem = adItemNew;
                            }
                        }
                    }
                }
            }
            createAdItem(adSourcePlacement) {
                let adItemParam = new ads.AdItemParam(adSourcePlacement.adSource, adSourcePlacement);
                let adAgent = ads.AdManager.getInstance().getAdAgent(adSourcePlacement.adSource.name);
                if (adAgent) {
                    switch (adSourcePlacement.type) {
                        case ads.AdType.banner:
                            return adAgent.createBannerAd(adItemParam);
                        case ads.AdType.interstitial:
                            return adAgent.createInterstitialAd(adItemParam);
                        case ads.AdType.video:
                            return adAgent.createVideoAd(adItemParam);
                        case ads.AdType.interaction:
                            return adAgent.createInteractionAd(adItemParam);
                        case ads.AdType.interstitialVideo:
                            return adAgent.createInterstitialVideoAd(adItemParam);
                    }
                }
                return null;
            }
            loadAdPositionLoader(adPositionLoader) {
                if (adPositionLoader.allLoadFail)
                    return;
                let adPosition = adPositionLoader.adPosition;
                let loadAdSourcePlacements = new Map();
                for (let [adSourcePlacement, percent] of adPosition.adSourcePlacementList) {
                    {
                        let failIndex = adPositionLoader.failAdSourcePlacements.findIndex((value, index, arr) => {
                            return value == adSourcePlacement;
                        });
                        if (failIndex >= 0)
                            continue;
                    }
                    {
                        if (adSourcePlacement.loadFailCount > 0) {
                            let time_now = new Date().getTime();
                            let interval = time_now - adSourcePlacement.loadFailLastTime;
                            if (adSourcePlacement.loadFailCount <= 1) {
                                if (interval < 10 * 1000) {
                                    continue;
                                }
                            }
                            else if (adSourcePlacement.loadFailCount <= 3) {
                                if (interval < 30 * 1000) {
                                    continue;
                                }
                            }
                            else if (adSourcePlacement.loadFailCount <= 5) {
                                if (interval < 120 * 1000) {
                                    continue;
                                }
                            }
                            else if (adSourcePlacement.loadFailCount <= 10) {
                                if (interval < 600 * 1000) {
                                    continue;
                                }
                            }
                            else {
                                continue;
                            }
                        }
                    }
                    {
                        let index = this.m_allAdPositionLoaders.findIndex((value, index, arr) => {
                            let adItem = value.adItem;
                            if (adItem && adItem.adItemParam.adSourcePlacement == adSourcePlacement && this.checkAdItemLoadTimeout(adItem)) {
                                return true;
                            }
                            return false;
                        });
                        if (index >= 0)
                            break;
                    }
                    loadAdSourcePlacements.set(adSourcePlacement, percent);
                }
                if (loadAdSourcePlacements.size > 0) {
                    let percentSum = 0;
                    for (let [adSourcePlacement, percent] of loadAdSourcePlacements) {
                        percentSum += percent;
                    }
                    if (percentSum > 0) {
                        let percent = Math.random() * percentSum;
                        let checkpercent = 0;
                        for (let [adSourcePlacement, percent2] of loadAdSourcePlacements) {
                            checkpercent += percent2;
                            if (percent < checkpercent) {
                                let adItems = this.getAdItems(adSourcePlacement);
                                let adItemNew;
                                if (adItems.length > 0) {
                                    for (let adItem of adItems) {
                                        if (adItem.isLoading() && !this.checkAdItemLoadTimeout(adItem)) {
                                            adItemNew = adItem;
                                            break;
                                        }
                                        else if (adItem.isLoadSuccess()) {
                                            adItemNew = adItem;
                                            break;
                                        }
                                    }
                                }
                                if (adItemNew) {
                                    adPositionLoader.adItem = adItemNew;
                                }
                                else {
                                    adItemNew = this.createAdItem(adSourcePlacement);
                                    adPositionLoader.adItem = adItemNew;
                                    if (adItemNew) {
                                        adItems.push(adItemNew);
                                        adItemNew.loadAd();
                                    }
                                }
                                break;
                            }
                        }
                    }
                }
                else {
                    adPositionLoader.allLoadFail = true;
                    adPositionLoader.failAdSourcePlacements.length = 0;
                    adPositionLoader.adItem = null;
                    setTimeout(() => {
                        adPositionLoader.allLoadFail = false;
                        this.loadAdPositionLoader(adPositionLoader);
                    }, 10 * 1000);
                }
            }
            isAdReady(adPositionName) {
                let adPosition = this.getAdPosition(adPositionName);
                if (adPosition) {
                    return this.isAdReady2(adPosition);
                }
                return false;
            }
            isAdReady2(adPosition, timeoutIsReady) {
                for (let adPositionLoader of this.m_allAdPositionLoaders) {
                    if (adPositionLoader.adPosition == adPosition) {
                        let adItem = adPositionLoader.adItem;
                        if (adItem && adItem.isLoadSuccess()) {
                            return true;
                        }
                        if (timeoutIsReady && adPositionLoader.checkTimeout) {
                            return true;
                        }
                    }
                }
                return false;
            }
            useAd(adPositionName) {
                let adPosition = this.getAdPosition(adPositionName);
                if (adPosition) {
                    return this.useAd2(adPosition);
                }
                return null;
            }
            useAd2(adPosition) {
                for (let adPositionLoader of this.m_allAdPositionLoaders) {
                    if (adPositionLoader.adPosition == adPosition) {
                        let adItem = adPositionLoader.adItem;
                        if (adItem && adItem.isLoadSuccess()) {
                            adItem.adPosition = adPosition;
                            let adItems = this.getAdItems(adItem.adItemParam.adSourcePlacement);
                            for (let i = 0; i < adItems.length; i++) {
                                if (adItems[i] == adItem) {
                                    adItems.splice(i, 1);
                                }
                            }
                            this.m_usingAdItems.push(adItem);
                            return adItem;
                        }
                    }
                }
                return null;
            }
            onLoading(adItem) {
            }
            onLoadSuccess(adItem) {
            }
            onLoadFail(adItem, adError) {
                {
                    adItem.adItemParam.adSourcePlacement.loadFailCount++;
                    adItem.adItemParam.adSourcePlacement.loadFailLastTime = new Date().getTime();
                    let adItems = this.getAdItems(adItem.adItemParam.adSourcePlacement);
                    for (let i = 0; i < adItems.length; i++) {
                        if (adItems[i] == adItem) {
                            adItems.splice(i, 1);
                            i--;
                            break;
                        }
                    }
                }
                {
                    for (let adPositionLoader of this.m_allAdPositionLoaders) {
                        if (adPositionLoader.adItem != adItem)
                            continue;
                        let index = adPositionLoader.failAdSourcePlacements.findIndex((value, index, arr) => {
                            if (value == adItem.adItemParam.adSourcePlacement) {
                                return true;
                            }
                            return false;
                        });
                        if (index == -1) {
                            adPositionLoader.failAdSourcePlacements.push(adItem.adItemParam.adSourcePlacement);
                        }
                        this.loadAdPositionLoader(adPositionLoader);
                    }
                    adItem.destroyAd();
                }
            }
            onShowing(adItem) {
            }
            onShowSuccess(adItem) {
            }
            onShowFailed(adItem, adError) {
                {
                    adItem.adItemParam.adSourcePlacement.loadFailCount++;
                    adItem.adItemParam.adSourcePlacement.loadFailLastTime = new Date().getTime();
                    for (let i = 0; i < this.m_usingAdItems.length; i++) {
                        if (this.m_usingAdItems[i] == adItem) {
                            this.m_usingAdItems.splice(i, 1);
                            i--;
                            break;
                        }
                    }
                }
                {
                    for (let adPositionLoader of this.m_allAdPositionLoaders) {
                        if (adPositionLoader.adItem != adItem)
                            continue;
                        let index = adPositionLoader.failAdSourcePlacements.findIndex((value, index, arr) => {
                            if (value == adItem.adItemParam.adSourcePlacement) {
                                return true;
                            }
                            return false;
                        });
                        if (index == -1) {
                            adPositionLoader.failAdSourcePlacements.push(adItem.adItemParam.adSourcePlacement);
                        }
                        this.loadAdPositionLoader(adPositionLoader);
                    }
                    adItem.destroyAd();
                }
            }
            onReward(adItem) {
            }
            onClosing(adItem) {
            }
            onClosed(adItem) {
                {
                    for (let i = 0; i < this.m_usingAdItems.length; i++) {
                        if (this.m_usingAdItems[i] == adItem) {
                            this.m_usingAdItems.splice(i, 1);
                            i--;
                            break;
                        }
                    }
                }
                {
                    for (let i = 0; i < this.m_allAdPositionLoaders.length; i++) {
                        let adPositionLoader = this.m_allAdPositionLoaders[i];
                        if (adPositionLoader.adItem == adItem && adPositionLoader.adPosition == adItem.adPosition) {
                            this.m_allAdPositionLoaders.splice(i, 1);
                            i--;
                        }
                    }
                }
                this.preloadAdPosition2(adItem.adPosition);
                this.checkAdItemRefAndLoad(adItem);
            }
            onClicked(adItem) {
            }
        }
        ads.AdLoader = AdLoader;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class OpenRecord {
            constructor() {
                this.lastTime = new Date().getTime();
                this.status = 0;
            }
        }
        class AdManager {
            constructor() {
                this.adConfig = null;
                this.adLoader = null;
                this.openedBannerRecord = new Map();
                this.updateTimerId = null;
                this.adAgents = new Map();
            }
            static getInstance() {
                if (!this._instance) {
                    AdManager._instance = new AdManager();
                    AdManager._instance.init();
                }
                return this._instance;
            }
            init() {
                let platformAdAgent = ly.core.PlatformManager.getInstance().getPlatformAdAgent();
                if (platformAdAgent) {
                    platformAdAgent.init((success) => {
                        if (success) {
                            this.adAgents.set(platformAdAgent.name, platformAdAgent);
                        }
                        this.loadAdConfig();
                    });
                }
            }
            loadAdConfig() {
                let adConfigJson = ly.AppConfigManager.getInstance().getAppConfig().getProperty("adConfig");
                this.adConfig = ads.AdConfig.fromJson(adConfigJson);
                if (this.adConfig) {
                    this.adLoader = ads.AdLoader.create(this.adConfig);
                    this.adLoader.initTask();
                    clearInterval(this.updateTimerId);
                    this.updateTimerId = setInterval(this.onUpdate.bind(this), 1000);
                }
            }
            onUpdate() {
                this.adLoader.onUpdate();
                let time_now = new Date().getTime();
                for (let [adPositionName, openRecord] of this.openedBannerRecord) {
                    if (openRecord.openedAdItem) {
                        if (openRecord.openedAdItem.isShow()) {
                            openRecord.status = 1;
                            if (openRecord.refreshInterval > 0 && (time_now - openRecord.lastTime) > openRecord.refreshInterval * 1000) {
                                openRecord.lastTime = time_now;
                                let adPosition = this.adLoader.getAdPosition(adPositionName);
                                if (adPosition) {
                                    let adItem = this.handleOpenAd2(adPosition, null, null);
                                    if (!adItem) {
                                        openRecord.status = 0;
                                        openRecord.openedAdItem = null;
                                    }
                                }
                            }
                        }
                        else if (openRecord.openedAdItem.isClosed()) {
                            openRecord.status = 2;
                            openRecord.lastTime = time_now;
                            openRecord.openedAdItem = null;
                        }
                    }
                    else {
                        if (openRecord.status == 0) {
                            if ((time_now - openRecord.lastTime) >= 3000) {
                                openRecord.lastTime = time_now;
                                let adPosition = this.adLoader.getAdPosition(adPositionName);
                                if (adPosition && this.adLoader.isAdReady2(adPosition)) {
                                    this.handleOpenAd2(adPosition, null, null);
                                }
                                continue;
                            }
                        }
                        else if (openRecord.status == 2) {
                            if (openRecord.closeReopenInterval > 0 && (time_now - openRecord.lastTime) > openRecord.closeReopenInterval * 1000) {
                                openRecord.status = 0;
                                openRecord.lastTime = time_now;
                                let adPosition = this.adLoader.getAdPosition(adPositionName);
                                if (adPosition && this.adLoader.isAdReady2(adPosition, true)) {
                                    this.handleOpenAd2(adPosition, null, null);
                                }
                            }
                        }
                    }
                }
            }
            getAdAgent(adSourceName) {
                return this.adAgents.get(adSourceName);
            }
            isAdReady(adPositionName) {
                if (!this.adLoader) {
                    return false;
                }
                return this.adLoader.isAdReady(adPositionName);
            }
            preloadAd(adPositionName) {
                this.adLoader.preloadAdPosition(adPositionName);
            }
            openAd(adPositionName, openAdResultCallback, onAdCloseCallback) {
                if (this.adLoader) {
                    let adPosition = this.adLoader.getAdPosition(adPositionName);
                    if (adPosition) {
                        let isPercent = true;
                        if (adPosition.percent && adPosition.percent < 100) {
                            let percent = Math.random() * 100;
                            if (percent < adPosition.percent) {
                                isPercent = true;
                            }
                            else {
                                isPercent = false;
                            }
                        }
                        if (isPercent) {
                            if (adPosition.type == ads.AdType.banner) {
                                let openRecord = this.openedBannerRecord.get(adPosition.name);
                                if (!openRecord) {
                                    openRecord = new OpenRecord();
                                    this.openedBannerRecord.set(adPosition.name, openRecord);
                                }
                                openRecord.status = 0;
                                openRecord.refreshInterval = adPosition.refreshInterval;
                                openRecord.closeReopenInterval = adPosition.closeReopenInterval;
                            }
                        }
                        this.handleOpenAd2(adPosition, openAdResultCallback, onAdCloseCallback);
                        return;
                    }
                }
                openAdResultCallback && openAdResultCallback(false);
            }
            handleOpenAd(adPositionName, openAdResultCallback, onAdClosedCallback) {
                if (this.adLoader) {
                    let adPosition = this.adLoader.getAdPosition(adPositionName);
                    if (adPosition) {
                        return this.handleOpenAd2(adPosition, openAdResultCallback, onAdClosedCallback);
                    }
                }
                return null;
            }
            handleOpenAd2(adPosition, openAdResultCallback, onAdClosedCallback) {
                if (adPosition.type == ads.AdType.banner) {
                    this.handleCloseAd(adPosition.name);
                }
                let openingAdItem = this.adLoader.useAd2(adPosition);
                if (openingAdItem) {
                    if (adPosition.type == ads.AdType.banner) {
                        let openRecord = this.openedBannerRecord.get(adPosition.name);
                        if (openRecord) {
                            openRecord.refreshInterval = adPosition.refreshInterval;
                            openRecord.closeReopenInterval = adPosition.closeReopenInterval;
                            openRecord.status = 1;
                            openRecord.lastTime = new Date().getTime();
                            openRecord.openedAdItem = openingAdItem;
                        }
                    }
                    openingAdItem.adPosition = adPosition;
                    openingAdItem.openAdResultCallback = openAdResultCallback;
                    openingAdItem.onAdCloseCallback = onAdClosedCallback;
                    openingAdItem.showAd();
                }
                else {
                    openAdResultCallback && openAdResultCallback(false);
                }
                return openingAdItem;
            }
            closeAd(adPositionName) {
                let openRecord = this.openedBannerRecord.get(adPositionName);
                if (openRecord) {
                    this.openedBannerRecord.delete(adPositionName);
                    if (openRecord.openedAdItem) {
                        openRecord.openedAdItem.closeAd();
                    }
                }
                this.handleCloseAd(adPositionName);
            }
            handleCloseAd(adPositionName) {
                let openRecord = this.openedBannerRecord.get(adPositionName);
                if (openRecord) {
                    if (openRecord.status == 1 && openRecord.openedAdItem && openRecord.openedAdItem.isShow()) {
                        openRecord.openedAdItem.closeAd();
                    }
                }
                if (this.adLoader) {
                    for (let adItem of this.adLoader.m_usingAdItems) {
                        if (adItem && adItem.adPosition.name == adPositionName) {
                            if (adItem.isShow()) {
                                adItem.closeAd();
                            }
                        }
                    }
                }
            }
            closeAllBanner() {
                if (this.openedBannerRecord.size > 0) {
                    for (let [adPositionName, openRecord] of this.openedBannerRecord) {
                        if (openRecord.openedAdItem) {
                            openRecord.openedAdItem.closeAd();
                        }
                    }
                    this.openedBannerRecord.clear();
                }
                for (let adPosition of this.adLoader.adPositionList) {
                    if (adPosition && adPosition.type == ads.AdType.banner) {
                        this.closeAd(adPosition.name);
                    }
                }
            }
            loadExpressAd(adPositionName, percentWidth, percentHeight) {
            }
            openExpressAd(adPositionName, percentWidth, percentHeight, percentLeft, percentTop, openAdResultCallback, onAdCloseCallback) {
            }
            onLoading(adItem) {
                this.adLoader.onLoading(adItem);
            }
            onLoadSuccess(adItem) {
                this.adLoader.onLoadSuccess(adItem);
                if (adItem.adItemParam.adSourcePlacement.type == ads.AdType.banner) {
                    for (let [adPositionName, openRecord] of this.openedBannerRecord) {
                        if (openRecord.status == 0 && !openRecord.openedAdItem) {
                            if (this.isAdReady(adPositionName)) {
                                this.handleOpenAd(adPositionName, null, null);
                            }
                        }
                    }
                }
            }
            onLoadFail(adItem, adError) {
                this.adLoader.onLoadFail(adItem, adError);
            }
            onShowing(adItem) {
                this.adLoader.onShowing(adItem);
            }
            onShowSuccess(adItem) {
                this.adLoader.onShowSuccess(adItem);
            }
            onShowFailed(adItem, adError) {
                if (adItem.adItemParam.adSourcePlacement.type == ads.AdType.banner) {
                    for (let [adPositionName, openRecord] of this.openedBannerRecord) {
                        if (openRecord.status == 1 && adItem == openRecord.openedAdItem) {
                            openRecord.status = 0;
                            openRecord.openedAdItem = null;
                            openRecord.lastTime = new Date().getTime() - 2000;
                        }
                    }
                }
                this.adLoader.onShowFailed(adItem, adError);
            }
            onReward(adItem) {
                this.adLoader.onReward(adItem);
            }
            onClosing(adItem) {
                this.adLoader.onClosing(adItem);
            }
            onClosed(adItem) {
                this.adLoader.onClosed(adItem);
            }
            onClicked(adItem) {
                this.adLoader.onReward(adItem);
            }
        }
        ads.AdManager = AdManager;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class AdPositionLoader {
            constructor(adPosition) {
                this.failAdSourcePlacements = new Array();
                this.allLoadFail = false;
                this.checkTimeout = false;
                this.adPosition = adPosition;
            }
        }
        ads.AdPositionLoader = AdPositionLoader;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class BaseBannerAdItem extends ads.AdItem {
        }
        ads.BaseBannerAdItem = BaseBannerAdItem;
        class BaseInterstitialAdItem extends ads.AdItem {
            close() {
            }
        }
        ads.BaseInterstitialAdItem = BaseInterstitialAdItem;
        class BaseVideoAdItem extends ads.AdItem {
            close() {
            }
        }
        ads.BaseVideoAdItem = BaseVideoAdItem;
        class BaseInteractionAdItem extends ads.AdItem {
            close() {
            }
        }
        ads.BaseInteractionAdItem = BaseInteractionAdItem;
        class BaseInterstitialVideoAdItem extends ads.AdItem {
            close() {
            }
        }
        ads.BaseInterstitialVideoAdItem = BaseInterstitialVideoAdItem;
        class BaseAdAgent {
            init(callback) {
                callback(true);
            }
            loadAdSource(adSourceParam, callback) {
                callback(true);
            }
            createBannerAd(adItemParam) {
                return null;
            }
            createInterstitialAd(adItemParam) {
                return null;
            }
            createVideoAd(adItemParam) {
                return null;
            }
            createInteractionAd(adItemParam) {
                return null;
            }
            createInterstitialVideoAd(adItemParam) {
                return null;
            }
        }
        ads.BaseAdAgent = BaseAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var analytics;
    (function (analytics) {
        class AnalyticsManager {
            constructor() {
                this.analytics = null;
            }
            static getInstance() {
                if (!this.instance) {
                    this.instance = new AnalyticsManager();
                    this.instance.init();
                }
                return this.instance;
            }
            init() {
                this.analytics = ly.core.PlatformManager.getInstance().getPlatformAnalytics();
            }
            profileSignIn(uid) {
                this.analytics && this.analytics.profileSignIn(uid);
            }
            profileSignIn2(provider, uid) {
                this.analytics && this.analytics.profileSignIn2(provider, uid);
            }
            profileSignOff() {
                this.analytics && this.analytics.profileSignOff();
            }
            setPlayerLevel(level) {
                this.analytics && this.analytics.setPlayerLevel(level);
            }
            pay(money, coin, payType) {
                this.analytics && this.analytics.pay(money, coin, payType);
            }
            pay2(money, item, number, price, payType) {
                this.analytics && this.analytics.pay2(money, item, number, price, payType);
            }
            buy(item, number, price) {
                this.analytics && this.analytics.buy(item, number, price);
            }
            use(item, number, price) {
                this.analytics && this.analytics.use(item, number, price);
            }
            bonus(coin, trigger) {
                this.analytics && this.analytics.bonus(coin, trigger);
            }
            bonus2(item, number, price, trigger) {
                this.analytics && this.analytics.bonus2(item, number, price, trigger);
            }
            startLevel(level) {
                this.analytics && this.analytics.startLevel(level);
            }
            finishLevel(level, score) {
                this.analytics && this.analytics.finishLevel(level, score);
            }
            failLevel(level, score) {
                this.analytics && this.analytics.failLevel(level, score);
            }
            event(eventId) {
                this.analytics && this.analytics.event(eventId);
            }
            event2(eventId, label) {
                this.analytics && this.analytics.event2(eventId, label);
            }
            event3(eventId, attributes) {
                this.analytics && this.analytics.event3(eventId, attributes);
            }
            event4(eventId, attributes, duration) {
                this.analytics && this.analytics.event4(eventId, attributes, duration);
            }
        }
        AnalyticsManager.instance = null;
        analytics.AnalyticsManager = AnalyticsManager;
    })(analytics = ly.analytics || (ly.analytics = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var analytics;
    (function (analytics) {
        class BaseAnalytics {
            profileSignIn(uid) {
            }
            profileSignIn2(provider, uid) {
            }
            profileSignOff() {
            }
            setPlayerLevel(level) {
            }
            pay(money, coin, payType) {
            }
            pay2(money, item, number, price, payType) {
            }
            buy(item, number, price) {
            }
            use(item, number, price) {
            }
            bonus(coin, trigger) {
            }
            bonus2(item, number, price, trigger) {
            }
            startLevel(level) {
            }
            finishLevel(level, score) {
            }
            failLevel(level, score) {
            }
            event(eventId) {
            }
            event2(eventId, label) {
            }
            event3(eventId, attributes) {
            }
            event4(eventId, attributes, duration) {
            }
        }
        analytics.BaseAnalytics = BaseAnalytics;
        class NodeAnalytics extends BaseAnalytics {
        }
        analytics.NodeAnalytics = NodeAnalytics;
    })(analytics = ly.analytics || (ly.analytics = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var analytics;
    (function (analytics) {
        class Ald extends analytics.BaseAnalytics {
            summitChapterEndedData(level, name, isPass) {
                if (wx.aldStage) {
                    wx.aldStage.onEnd({
                        stageId: level,
                        stageName: name,
                        userId: ly.getSelfUser().getUserInfo().userId,
                        event: isPass ? "complete" : 'fail',
                    });
                }
            }
            use(item, number, price) {
                try {
                    let obj = JSON.parse(item);
                    let level = obj.level;
                    let name = obj.name;
                    let propName = obj.propName;
                    let propId = obj.propId;
                    if (wx.aldStage) {
                        wx.aldStage.onRunning({
                            stageId: level,
                            stageName: name,
                            userId: ly.getSelfUser().getUserInfo().userId,
                            event: "tools",
                            params: {
                                itemName: propName,
                                itemIdL: propId,
                                itemCount: number,
                            }
                        });
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
            startLevel(level) {
                try {
                    let pat = /\d+\.?\d*$/g;
                    let obj = level.match(pat)[0];
                    let stageId = obj;
                    let name = obj;
                    if (wx.aldStage) {
                        wx.aldStage.onStart({
                            stageId: stageId,
                            stageName: name,
                            userId: ly.getSelfUser().getUserInfo().userId
                        });
                    }
                }
                catch (error) {
                    console.log(error);
                }
            }
            finishLevel(level, score) {
                try {
                    let pat = /\d+\.?\d*$/g;
                    let obj = level.match(pat)[0];
                    let stageId = obj;
                    let name = obj;
                    this.summitChapterEndedData(stageId, name, true);
                }
                catch (error) {
                    console.log(error);
                }
            }
            failLevel(level, score) {
                try {
                    let pat = /\d+\.?\d*$/g;
                    let obj = level.match(pat)[0];
                    let stageId = obj;
                    let name = obj;
                    this.summitChapterEndedData(stageId, name, false);
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        analytics.Ald = Ald;
    })(analytics = ly.analytics || (ly.analytics = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    class AppConfigImpl {
        constructor() {
            this.properties = new Map();
        }
        getProperty(key, defaultValue) {
            let value = this.properties.get(key);
            if (!value) {
                value = defaultValue ? defaultValue : null;
            }
            return value;
        }
        getPropertyString(key) {
            try {
                let value = this.getProperty(key).toString();
                return value ? value : "";
            }
            catch (error) {
                console.log(error);
            }
            return "";
        }
        setProperty(key, value) {
            this.properties.set(key, value);
        }
        get appId() {
            return this.getPropertyString("appId");
        }
        get projectId() {
            return this.getPropertyString("projectId");
        }
        get channelId() {
            return this.getPropertyString("channelId");
        }
        get packageName() {
            return this.getPropertyString("packageName");
        }
        get appName() {
            return this.getPropertyString("appName");
        }
        get versionName() {
            return this.getPropertyString("versionName");
        }
        get versionCode() {
            return this.getPropertyString("versionCode");
        }
    }
    ly.AppConfigImpl = AppConfigImpl;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class AppConfigManager {
        constructor() {
            this.appConfig = new ly.AppConfigImpl();
        }
        static getInstance() {
            if (!this._instance) {
                AppConfigManager._instance = new AppConfigManager();
            }
            return this._instance;
        }
        getAppConfig() {
            return this.appConfig;
        }
        setAppConfig(configJson) {
            for (let i in configJson) {
                this.appConfig.setProperty(i, configJson[i]);
            }
        }
    }
    ly.AppConfigManager = AppConfigManager;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class ConstInner {
    }
    ConstInner.URL_DOMAIN = "https://xyx.lfungame.com/";
    ConstInner.URL_DOMAIN_LOGIN = ConstInner.URL_DOMAIN;
    ConstInner.URL_DOMAIN_LOGIN_INTERFACE = "users/login_by_source_id_0";
    ConstInner.URL_DOMAIN_SUBMITUSERInfo_INTERFACE = "users/improve_user_baseI_info_0";
    ly.ConstInner = ConstInner;
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class BasePlatform {
            getPlatformAdAgent() {
                return null;
            }
            getPlatformAnalytics() {
                return null;
            }
            getPlatformPay() {
                return null;
            }
            getPlatformPromoteAgent() {
                return null;
            }
            doGetAntiAddictionInfo(callback) {
                callback(0, "", -1);
                return;
            }
            isShare() {
                return false;
            }
            share(title, imageUrl, callback, query) {
                return false;
            }
            shareGroupRank(title, imageUrl, callback, query) {
                return false;
            }
            showToast(text) {
                return false;
            }
            isSupportLogin(platform) {
                return false;
            }
            sdkLogin(platform, callback) {
                return;
            }
            hasVibrate() {
                return false;
            }
            vibrate(milliseconds, amplitude) {
                return;
            }
            cancelVibrate() { }
        }
        core.BasePlatform = BasePlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class PlatformManager {
            constructor() {
                this.platform = null;
                this.loginType = 0;
                this.guestUser = null;
            }
            static getInstance() {
                if (!this._instance) {
                    this._instance = new PlatformManager();
                    this._instance.init();
                }
                return this._instance;
            }
            init() {
                try {
                    if (typeof lyh5env == "object") {
                        this.platform = new core.LyH5EnvPlatform();
                    }
                    else if (typeof tt === "object") {
                        this.platform = new core.TtPlatform();
                    }
                    else if (typeof qq === "object") {
                        this.platform = new core.QQPlatform();
                    }
                    else if (typeof wx === "object") {
                        this.platform = new core.WxPlatform();
                    }
                    else if (typeof qg === "object") {
                        var provider = qg.getProvider();
                        if (provider === "OPPO") {
                            this.platform = new core.OppoPlatform();
                        }
                        else if (provider === "vivo") {
                            this.platform = new core.VivoPlatform();
                        }
                    }
                    else if (typeof swan === "object") {
                        this.platform = new core.BaiduPlatform();
                    }
                    else if (typeof uc === "object") {
                        this.platform = new core.UCPlatform();
                    }
                    else if (typeof lynative === "object") {
                        this.platform = new core.NativePlatform();
                    }
                    else if (typeof qttGame === "object") {
                        this.platform = new core.QttPlatform();
                    }
                    else if (typeof wuji === "object") {
                        this.platform = new core.LianShangPlatform();
                    }
                    else if (typeof window.h5api === "object") {
                        window.ftnn = window.h5api;
                        this.platform = new FtnnPlatform();
                    }
                    else if (cc.sys.platform == 100 || cc.sys.platform == 101) {
                        this.platform = new core.HtmlPlatfrom();
                    }
                }
                catch (error) {
                    console.log(error);
                }
                if (this.platform) {
                    this.platform.init();
                }
            }
            getPlatformType() {
                if (this.platform) {
                    return this.platform.getPlatformType();
                }
                return 0;
            }
            getPlatformAdAgent() {
                if (this.platform) {
                    return this.platform.getPlatformAdAgent();
                }
                return null;
            }
            getPlatformAnalytics() {
                if (this.platform) {
                    return this.platform.getPlatformAnalytics();
                }
                return null;
            }
            getPlatformPay() {
                if (this.platform) {
                    return this.platform.getPlatformPay();
                }
                return null;
            }
            getPlatformPromoteAgent() {
                if (this.platform) {
                    return this.platform.getPlatformPromoteAgent();
                }
                return null;
            }
            onPauseMusic(func) {
                this.pauseMusicFunc = func;
            }
            pauseMusic() {
                if (this.pauseMusicFunc) {
                    this.pauseMusicFunc();
                }
            }
            onResumeMusic(func) {
                this.resumeMusicFunc = func;
            }
            resumeMusic() {
                if (this.resumeMusicFunc) {
                    this.resumeMusicFunc();
                }
            }
            isShare() {
                if (this.platform) {
                    return this.platform.isShare();
                }
                return false;
            }
            share(title, imageUrl, callback, query) {
                if (this.platform) {
                    this.platform.share(title, imageUrl, callback, query);
                }
                else {
                    callback && callback(false);
                }
            }
            shareGroupRank(title, imageUrl, callback, query) {
                if (this.platform) {
                    this.platform.shareGroupRank(title, imageUrl, callback, query);
                }
                else {
                    callback && callback(false);
                }
            }
            getShareParam() {
                if (this.onRequestShareParam) {
                    return this.onRequestShareParam();
                }
                return null;
            }
            setOnRequestShareParam(callback) {
                this.onRequestShareParam = callback;
            }
            showToast(text) {
                if (this.platform) {
                    return this.platform.showToast(text);
                }
                return false;
            }
            login(callback) {
                if (this.loginType == 1) {
                    callback(true);
                    return;
                }
                if (this.platform) {
                    this.platform.login((success2) => {
                        if (success2) {
                            this.loginType = 1;
                        }
                        callback(success2);
                    });
                }
                else {
                    callback(false);
                }
            }
            loginGuest(callback) {
                this.guestUser = new core.LocalUser();
                this.guestUser.syncThirdUserInfo();
                this.loginType = 2;
                callback(true);
            }
            logout() {
                if (this.platform) {
                    this.platform.logout();
                }
                ly.LyHttp1.cookie = null;
                this.loginType = 0;
            }
            getLoginType() {
                return this.loginType;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                if (this.platform) {
                    this.platform.checkThirdAuthUserInfo(callback, autoSync);
                }
                else {
                    callback && callback(true);
                }
            }
            getUser() {
                if (this.loginType == 2) {
                    return this.guestUser;
                }
                else {
                    return this.platform.getUser();
                }
            }
            getThirdUserInfo(callback) {
                this.getThirdUserInfoOriginal((originalThirdUserInfo) => {
                    let userInfo = this.parseThirdUserInfoOriginal(originalThirdUserInfo);
                    callback && callback(userInfo);
                });
            }
            getThirdUserInfoOriginal(callback) {
                if (this.platform) {
                    return this.platform.getThirdUserInfoOriginal(callback);
                }
                return null;
            }
            parseThirdUserInfoOriginal(originalThirdUserInfo) {
                if (this.platform) {
                    return this.platform.parseThirdUserInfoOriginal(originalThirdUserInfo);
                }
                return null;
            }
            doGetAntiAddictionInfo(callback) {
                if (this.platform) {
                    this.platform.doGetAntiAddictionInfo(callback);
                }
            }
            isSupportLogin(platform) {
                if (this.platform) {
                    this.platform.isSupportLogin(platform);
                }
            }
            sdkLogin(platform, callback) {
                if (this.platform) {
                    this.platform.sdkLogin(platform, callback);
                }
            }
            hasVibrate() {
                if (this.platform) {
                    this.platform.hasVibrate();
                }
            }
            vibrate(milliseconds, amplitude) {
                if (this.platform) {
                    this.platform.vibrate(milliseconds, amplitude);
                }
            }
            cancelVibrate() {
                if (this.platform) {
                    this.platform.cancelVibrate();
                }
            }
        }
        core.PlatformManager = PlatformManager;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        var promote;
        (function (promote) {
            class PromoteItemParam {
            }
            class PromoteItemImpl {
                constructor() {
                    this.promoteItemParam = new PromoteItemParam();
                }
                get position() {
                    return this.promoteItemParam.position;
                }
                set position(position) {
                    this.promoteItemParam.position = position;
                }
                get title() {
                    return this.promoteItemParam.title;
                }
                set title(title) {
                    this.promoteItemParam.title = title;
                }
                get iconUrl() {
                    return this.promoteItemParam.iconUrl;
                }
                set iconUrl(iconUrl) {
                    this.promoteItemParam.iconUrl = iconUrl;
                }
                get packageName() {
                    return this.promoteItemParam.packageName;
                }
                set packageName(packageName) {
                    this.promoteItemParam.packageName = packageName;
                }
                get path() {
                    return this.promoteItemParam.path;
                }
                set path(path) {
                    this.promoteItemParam.path = path;
                }
                get extra() {
                    return this.promoteItemParam.extra;
                }
                set extra(extra) {
                    this.promoteItemParam.extra = extra;
                }
                open() {
                    promote.PromoteManager.getInstance().openPromoteItem(this);
                }
            }
            promote.PromoteItemImpl = PromoteItemImpl;
        })(promote = core.promote || (core.promote = {}));
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        var promote;
        (function (promote) {
            class BasePromoteAgent {
                constructor() {
                    this.updateStatus = 0;
                    this.updateFinishTasks = new Array();
                }
                init() {
                    this.updatePromoteItem();
                }
                onUpdatePromoteItemFinish() {
                    this.updateStatus = 2;
                    this.updateFinishTasks.forEach((task, index, array) => {
                        task();
                        this.updateFinishTasks.splice(index);
                    });
                }
                getPromoteItem(promotePosition, callback) {
                    if (this.updateStatus == 2) {
                        for (let promoteItem of this.promoteItemList) {
                            if (promoteItem.position == promotePosition) {
                                callback(promoteItem);
                                return;
                            }
                        }
                        callback(null);
                    }
                    else {
                        this.updateFinishTasks.push(() => {
                            this.getPromoteItem(promotePosition, callback);
                        });
                    }
                }
            }
            promote.BasePromoteAgent = BasePromoteAgent;
            class PromoteManager {
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PromoteManager();
                        this._instance.init();
                    }
                    return this._instance;
                }
                init() {
                    this.promoteAgent = core.PlatformManager.getInstance().getPlatformPromoteAgent();
                    if (this.promoteAgent) {
                        this.promoteAgent.init();
                    }
                }
                isPromote() {
                    return this.promoteAgent ? true : false;
                }
                getPromoteItem(promotePosition, callback) {
                    if (this.promoteAgent) {
                        this.promoteAgent.getPromoteItem(promotePosition, callback);
                    }
                    else {
                        callback && callback(null);
                    }
                }
                updatePromoteItem(callback) {
                    if (this.promoteAgent) {
                        this.promoteAgent.updatePromoteItem(callback);
                    }
                    else {
                        callback && callback(1);
                    }
                }
                openPromoteItem(promoteItem) {
                    if (this.promoteAgent) {
                        this.promoteAgent.openPromoteItem(promoteItem);
                    }
                }
            }
            promote.PromoteManager = PromoteManager;
        })(promote = core.promote || (core.promote = {}));
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    class NetRankItem {
        constructor() {
            this.rank = -1;
            this.user_id = -1;
            this.user_name = "";
            this.user_sex = 0;
            this.user_image = "";
            this.max_score = 0;
            this.user_gate_all = 0;
            this.day_max_score = 0;
            this.user_gold = 0;
        }
        static toRankItem(netRankItem) {
            let rankItem = new ly.RankItemImpl();
            rankItem.userName = netRankItem.user_name;
            rankItem.sex = netRankItem.user_sex;
            rankItem.score = netRankItem.max_score;
            rankItem.headImgUrl = netRankItem.user_image;
            rankItem.stage = netRankItem.user_gate_all;
            rankItem.challengeMinDuration = netRankItem.day_max_score;
            rankItem.gold = netRankItem.user_gold;
            return rankItem;
        }
    }
    class NetRankData {
        constructor() {
            this.all_rank = null;
            this.my_rank = null;
        }
        static toRank(netRankData, rankMode) {
            let rank = new ly.RankImpl(rankMode);
            for (let netRankItem of netRankData.all_rank) {
                let rankItem = NetRankItem.toRankItem(netRankItem);
                rank.addRankItem(rankItem);
            }
            rank.selfRankItem = NetRankItem.toRankItem(netRankData.my_rank);
            rank.selfRankId = netRankData.my_rank.rank;
            return rank;
        }
    }
    ly.NetRankData = NetRankData;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class RankData {
        constructor() {
            this.selfRankItem = new ly.RankItemImpl();
            this.selfRankId = -1;
            this.rankItems = new Array();
        }
        static fromJsonString(jsonStr) {
            try {
                let obj = JSON.parse(jsonStr, (key, value) => {
                    if (key == "selfRankItem") {
                        let selfRankItem = new ly.RankItemImpl();
                        if (value && value.rankItemData) {
                            selfRankItem.rankItemData = value.rankItemData;
                        }
                        return selfRankItem;
                    }
                    else if (key == "rankItems") {
                        let rankItems = new Array();
                        for (let rankItemObj of value) {
                            let rankItem = new ly.RankItemImpl();
                            rankItem.rankItemData = rankItemObj.rankItemData;
                            rankItems.push(rankItem);
                        }
                        return rankItems;
                    }
                    return value;
                });
                let rankData = new RankData();
                Object.assign(rankData, obj);
                return rankData;
            }
            catch (error) {
                console.log(error);
            }
            return null;
        }
        toJsonString() {
            return JSON.stringify(this);
        }
    }
    class RankImpl {
        constructor(rankMode) {
            this.rankData = new RankData();
            this.rankMode = rankMode;
        }
        static fromJsonString(jsonStr) {
            let rankData = RankData.fromJsonString(jsonStr);
            if (rankData) {
                let rank = new RankImpl(rankData.rankMode);
                rank.rankData = rankData;
                return rank;
            }
            return null;
        }
        toJsonString() {
            return this.rankData.toJsonString();
        }
        get rankMode() {
            return this.rankData.rankMode;
        }
        set rankMode(rankMode) {
            this.rankData.rankMode = rankMode;
        }
        get selfRankItem() {
            return this.rankData.selfRankItem;
        }
        set selfRankItem(selfRankItem) {
            this.rankData.selfRankItem = selfRankItem;
        }
        get selfRankId() {
            return this.rankData.selfRankId;
        }
        set selfRankId(rankId) {
            this.rankData.selfRankId = rankId;
        }
        get rankItems() {
            return this.rankData.rankItems;
        }
        addRankItem(rankItem) {
            this.rankData.rankItems.push(rankItem);
        }
        sort() {
            this.rankData.rankItems.sort((a, b) => {
                return b.score - a.score;
            });
            for (let i = 0; i < this.rankData.rankItems.length; i++) {
                let rankItem = this.rankData.rankItems[i];
                if (this.selfRankItem.headImgUrl == rankItem.headImgUrl) {
                    this.rankData.selfRankId = i + 1;
                    this.rankData.selfRankItem.score = rankItem.score;
                    return;
                }
            }
            this.rankData.selfRankId = -1;
        }
        getRankItem(rankId) {
            return this.rankItems[rankId - 1];
        }
    }
    ly.RankImpl = RankImpl;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class RankItemData {
        constructor() {
            this.userName = "";
            this.sex = 0;
            this.score = 0;
            this.headImgUrl = "";
            this.stage = 0;
            this.challengeMinDuration = 0;
            this.gold = 0;
        }
    }
    ly.RankItemData = RankItemData;
    class RankItemImpl {
        constructor() {
            this.rankItemData = new RankItemData();
        }
        get userName() {
            return this.rankItemData.userName;
        }
        set userName(userName) {
            this.rankItemData.userName = userName;
        }
        get sex() {
            return this.rankItemData.sex;
        }
        set sex(sex) {
            this.rankItemData.sex = sex;
        }
        get score() {
            return this.rankItemData.score;
        }
        set score(score) {
            this.rankItemData.score = score;
        }
        get gold() {
            return this.rankItemData.gold;
        }
        set gold(gold) {
            this.rankItemData.gold = gold;
        }
        get headImgUrl() {
            return this.rankItemData.headImgUrl;
        }
        set headImgUrl(headImgUrl) {
            this.rankItemData.headImgUrl = headImgUrl;
        }
        get stage() {
            return this.rankItemData.stage;
        }
        set stage(stage) {
            this.rankItemData.stage = stage;
        }
        get challengeMinDuration() {
            return this.rankItemData.challengeMinDuration;
        }
        set challengeMinDuration(minDuration) {
            this.rankItemData.challengeMinDuration = minDuration;
        }
    }
    ly.RankItemImpl = RankItemImpl;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class RankManager {
        constructor() {
            this.onRankChangeListeners = new Array();
            this.weekRank = new ly.RankImpl(ly.Constants.RankMode_week);
            this.allRank = new ly.RankImpl(ly.Constants.RankMode_all);
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new RankManager();
                this._instance.init();
            }
            return this._instance;
        }
        init() {
        }
        getRank(rankMode, callback) {
            if (rankMode == ly.Constants.RankMode_week) {
                if (this.weekRank) {
                    callback && callback(this.weekRank);
                }
                else {
                    this.updateRank(rankMode, callback);
                }
            }
            else if (rankMode == ly.Constants.RankMode_friendWeek) {
                this.getFriendWeekRank(callback);
            }
            else if (rankMode == ly.Constants.RankMode_friendAll) {
                this.getFriendAllRank(callback);
            }
            else if (rankMode == ly.Constants.RankMode_groupWeek) {
                this.getGroupWeekRank(callback);
            }
            else if (rankMode == ly.Constants.RankMode_groupAll) {
                this.getGroupAllRank(callback);
            }
            else {
                callback && callback(null);
            }
        }
        updateRank(rankMode, callback, rankType = 0) {
            if (rankMode == ly.Constants.RankMode_week) {
                let loginType = ly.core.PlatformManager.getInstance().getLoginType();
                if (loginType != 1) {
                    callback && callback(null);
                    return;
                }
                let userId = ly.getSelfUser().getUserId();
                if (!userId) {
                    callback && callback(null);
                    return;
                }
                let url = ly.ConstInner.URL_DOMAIN + "rank/get_all_user_rank_0";
                let data = JSON.stringify({ "user_id": Number.parseInt(userId), "start_num": 0, "end_num": 99, "game": ly.getAppConfig().appId, "rank_type": rankType });
                ly.LyHttp1.post(url, data, (lyHttpResponse) => {
                    let rank = new ly.RankImpl(rankMode);
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netRankData = new ly.NetRankData();
                            Object.assign(netRankData, lyHttpResponse.data);
                            rank = ly.NetRankData.toRank(netRankData, rankMode);
                            if (rank) {
                                this.weekRank = rank;
                                callback && callback(rank);
                                this.rankChanged(rankMode, rank);
                            }
                            return;
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                    callback && callback(null);
                });
            }
            else if (rankMode == ly.Constants.RankMode_all) {
                callback && callback(this.allRank);
            }
            else if (rankMode == ly.Constants.RankMode_friendWeek) {
                this.getFriendWeekRank(callback);
            }
            else if (rankMode == ly.Constants.RankMode_friendAll) {
                this.getFriendAllRank(callback);
            }
            else {
                callback && callback(null);
            }
        }
        onRankChange(listener) {
            this.onRankChangeListeners.push(listener);
        }
        rankChanged(rankMode, rank) {
            for (let listener of this.onRankChangeListeners) {
                listener(rankMode, rank);
            }
        }
        getFriendWeekRank(callback) {
            callback && callback(null);
        }
        getFriendAllRank(callback) {
            callback && callback(null);
        }
        getGroupWeekRank(callback) {
            callback && callback(null);
        }
        getGroupAllRank(callback) {
            callback && callback(null);
        }
    }
    ly.RankManager = RankManager;
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class UserImpl {
            constructor() {
                this.userInfo = null;
                this.userGoods = null;
                this.userSign = new core.UserSignImpl(this);
            }
            setUserInfo(userInfo) {
                this.userInfo = userInfo;
                this.userGoods = new core.UserGoodsImpl(this);
            }
            syncThirdUserInfo(callback) {
                core.PlatformManager.getInstance().getThirdUserInfo((thirdUserInfo) => {
                    if (thirdUserInfo) {
                        if (thirdUserInfo.userName) {
                            this.userInfo.userName = thirdUserInfo.userName;
                        }
                        if (thirdUserInfo.sex) {
                            this.userInfo.sex = thirdUserInfo.sex;
                        }
                        if (thirdUserInfo.headImgUrl) {
                            this.userInfo.headImgUrl = thirdUserInfo.headImgUrl;
                        }
                        this.submitAllUserInfo();
                        this.submitUserGoods();
                        callback && callback(0);
                    }
                    else {
                        callback && callback(1);
                    }
                });
            }
            getUserInfo() {
                return this.userInfo;
            }
            getUserInfoJsonStr() {
                return this.userInfo.toJsonString();
            }
            getUserId() {
                return this.userInfo.userId;
            }
            getCookie() {
                return ly.LyHttp1.cookie;
            }
            applyUserParams(userParams) {
                if (userParams.has(ly.Constants.User_Info_Name)) {
                    this.userInfo.userName = userParams.get(ly.Constants.User_Info_Name);
                }
                if (userParams.has(ly.Constants.User_Info_Image)) {
                    this.userInfo.headImgUrl = userParams.get(ly.Constants.User_Info_Image);
                }
                if (userParams.has(ly.Constants.User_Info_Sex)) {
                    this.userInfo.sex = userParams.get(ly.Constants.User_Info_Sex);
                }
            }
            submitAllUserInfo(callback) {
                let userParams = new Map();
                userParams.set(ly.Constants.User_Info_Name, this.userInfo.userName);
                userParams.set(ly.Constants.User_Info_Sex, this.userInfo.sex);
                userParams.set(ly.Constants.User_Info_Image, this.userInfo.headImgUrl);
                this.submitUserInfo(userParams, callback);
            }
            getUserGoods() {
                return this.userGoods;
            }
            getUserSign() {
                return this.userSign;
            }
            submitGold(gold, callback) {
            }
        }
        core.UserImpl = UserImpl;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class LocalUser extends core.UserImpl {
            genUID() {
                let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
                let uid = "TMP";
                uid += new Date().getTime();
                let len = chars.length;
                for (let i = 0; i < 60; i++) {
                    uid += chars[Math.round(Math.random() * len)];
                }
                uid.substr(0, 64);
                return uid;
            }
            constructor() {
                super();
                let str = this.decryptStr(localStorage.getItem("ly_userInfo") || '');
                let userInfo = ly.UserInfoImpl.fromJsonString(str);
                if (!userInfo) {
                    userInfo = new ly.UserInfoImpl();
                }
                if (!userInfo.userId) {
                    userInfo.userId = this.genUID();
                }
                this.setUserInfo(userInfo);
            }
            submitUserInfo(userParams, callback) {
                this.applyUserParams(userParams);
                localStorage.setItem("ly_userInfo", this.encryptStr(this.getUserInfoJsonStr()) || '');
                callback && callback(0);
            }
            submitChallengeDuration(minDuration, callback) {
                if (minDuration <= 0) {
                    callback && callback(1);
                }
                if (minDuration >= this.userInfo.score_everyday) {
                    callback && callback(1);
                }
                this.userInfo.score_everyday = minDuration;
                let save = true;
                if (save) {
                    localStorage.setItem("ly_userInfo", this.getUserInfoJsonStr());
                }
                callback && callback(0);
            }
            submitStage(changeStage, callback) {
                if (!(changeStage > 0)) {
                    callback && callback(1);
                }
                this.userInfo.stage += changeStage;
                let save = true;
                if (save) {
                    localStorage.setItem("ly_userInfo", this.getUserInfoJsonStr());
                }
                callback && callback(0);
            }
            submitGold(gold, callback) {
                if (!this.userInfo.userId) {
                    callback && callback(1);
                    return;
                }
                this.userInfo.gold += gold;
                localStorage.setItem("ly_userInfo", this.encryptStr(this.getUserInfoJsonStr()) || '');
                callback && callback(0);
            }
            submitScore(score, callback) {
                if (!(score >= 0)) {
                    callback && callback(1);
                }
                let save = false;
                if (score != this.userInfo.score_all) {
                    this.userInfo.score_all = score;
                    save = true;
                }
                let now = new Date();
                if (!ly.TimeUtil.isSameWeek(now, new Date(this.userInfo.score_week_times))) {
                    this.userInfo.score_week = score;
                    this.userInfo.score_week_times = now.getTime();
                    save = true;
                }
                else {
                    if (score > this.userInfo.score_week) {
                        this.userInfo.score_week = score;
                        this.userInfo.score_week_times = now.getTime();
                        save = true;
                    }
                }
                if (save) {
                    localStorage.setItem("ly_userInfo", this.encryptStr(this.getUserInfoJsonStr()) || '');
                }
                callback && callback(0);
            }
            submitUserGoods(callback) {
                localStorage.setItem("ly_userInfo", this.encryptStr(this.getUserInfoJsonStr()) || '');
                callback && callback(0);
            }
            encryptStr(code) {
                let c = String.fromCharCode(code.charCodeAt(0) + code.length);
                for (let i = 1; i < code.length; i++) {
                    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
                }
                return escape(c);
            }
            decryptStr(code) {
                code = unescape(code);
                let c = String.fromCharCode(code.charCodeAt(0) - code.length);
                for (let i = 1; i < code.length; i++) {
                    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
                }
                return c;
            }
        }
        core.LocalUser = LocalUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class NetUserInfo {
            constructor() {
                this.user_name = "";
                this.user_sex = 0;
                this.user_level = 0;
                this.user_upgrade_exp = 0;
                this.user_now_exp = 0;
                this.user_gold = 0;
                this.user_diamonds = 0;
                this.max_score = 0;
                this.week_max_score = 0;
                this.daily_share_time = 0;
                this.user_gate_all = 0;
                this.day_max_score = 0;
            }
            toUserInfo() {
                let userInfo = new ly.UserInfoImpl();
                userInfo.userId = this.user_id;
                userInfo.userName = this.user_name;
                userInfo.sex = this.user_sex;
                userInfo.headImgUrl = this.user_image;
                userInfo.stage = this.user_gate_all;
                let goodses = ly.Convert.stringToMap_number(this.user_props);
                userInfo.goodses = goodses ? goodses : new Map();
                userInfo.score_all = this.max_score;
                userInfo.score_week = this.week_max_score;
                userInfo.score_everyday = this.day_max_score;
                userInfo.gold = this.user_gold;
                return userInfo;
            }
        }
        core.NetUserInfo = NetUserInfo;
        class update_user_info {
            constructor() {
                this.user_level = 0;
                this.user_upgrade_exp = 0;
                this.user_now_exp = 0;
                this.user_gold = 0;
                this.user_diamonds = 0;
                this.user_gate_all = 0;
                this.max_score = 0;
                this.week_max_score = 0;
                this.day_max_score = 0;
            }
        }
        class NetUser extends core.UserImpl {
            constructor() {
                super();
                this.tempUserInfo = null;
                this.tempUserInfo = new ly.UserInfoImpl();
                super.setUserInfo(this.tempUserInfo);
            }
            setUserInfo(userInfo) {
                super.setUserInfo(userInfo);
                if (this.tempUserInfo) {
                    for (let [goodsId, goodsNum] of this.tempUserInfo.goodses) {
                        let goodsNum2 = userInfo.goodses.get(goodsId);
                        if (isNaN(goodsNum2))
                            goodsNum2 = 0;
                        goodsNum2 += goodsNum;
                        userInfo.goodses.set(goodsId, goodsNum2);
                    }
                    this.tempUserInfo = null;
                    this.submitUserGoods();
                }
            }
            login(callback, ...platformargs) {
                callback(1);
            }
            submitUserInfo(userParams, callback) {
                if (!this.userInfo.userId) {
                    callback && callback(1);
                    return;
                }
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_SUBMITUSERInfo_INTERFACE;
                userParams.set("user_id", Number.parseInt(this.userInfo.userId));
                userParams.set("user_game", ly.getAppConfig().appId);
                let data = ly.Convert.MapToString(userParams);
                ly.LyHttp1.post(url, data, (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                        this.applyUserParams(userParams);
                        callback && callback(0);
                    }
                    else if (lyHttpResponse.http_status != 200) {
                        callback && callback(-1);
                    }
                    else {
                        callback && callback(1);
                    }
                });
            }
            submitChallengeDuration(minDuration, callback) {
                if (!this.userInfo.userId) {
                    callback && callback(1);
                    return;
                }
                if (minDuration <= 0) {
                    callback && callback(1);
                }
                if (minDuration >= this.userInfo.score_everyday) {
                    callback && callback(1);
                }
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + "users/update_user_info_0";
                let data = JSON.stringify({ "user_id": Number.parseInt(this.getUserId()), "day_max_score": minDuration });
                ly.LyHttp1.post(url, data, (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                        try {
                            let ret_update_user_info = new update_user_info();
                            Object.assign(ret_update_user_info, lyHttpResponse.data);
                            this.userInfo.score_everyday = ret_update_user_info.day_max_score;
                        }
                        catch (error) {
                            console.log(error);
                        }
                        callback && callback(0);
                    }
                    else if (lyHttpResponse.http_status != 200) {
                        callback && callback(-1);
                    }
                    else {
                        callback && callback(1);
                    }
                });
            }
            submitStage(changeStage, callback) {
                if (!this.userInfo.userId) {
                    callback && callback(1);
                    return;
                }
                if (!(changeStage > 0)) {
                    callback && callback(1);
                }
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + "users/update_user_info_0";
                let data = JSON.stringify({ "user_id": Number.parseInt(this.getUserId()), "user_gate_count": changeStage });
                ly.LyHttp1.post(url, data, (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                        try {
                            let ret_update_user_info = new update_user_info();
                            Object.assign(ret_update_user_info, lyHttpResponse.data);
                            this.userInfo.stage = ret_update_user_info.user_gate_all;
                        }
                        catch (error) {
                            console.log(error);
                        }
                        callback && callback(0);
                    }
                    else if (lyHttpResponse.http_status != 200) {
                        callback && callback(-1);
                    }
                    else {
                        callback && callback(1);
                    }
                });
            }
            submitGold(gold, callback) {
                if (!this.userInfo.userId) {
                    callback && callback(1);
                    return;
                }
                if (gold == this.userInfo.gold) {
                    callback && callback(1);
                    return;
                }
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + "users/update_user_info_0";
                let data = JSON.stringify({ "user_id": Number.parseInt(this.getUserId()), "user_gold": gold });
                ly.LyHttp1.post(url, data, (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                        try {
                            let ret_update_user_info = new update_user_info();
                            Object.assign(ret_update_user_info, lyHttpResponse.data);
                            this.userInfo.gold = ret_update_user_info.user_gold;
                        }
                        catch (error) {
                            console.log(error);
                        }
                        callback && callback(0);
                    }
                    else if (lyHttpResponse.http_status != 200) {
                        callback && callback(-1);
                    }
                    else {
                        callback && callback(1);
                    }
                });
            }
            submitScore(score, callback) {
                if (!this.userInfo.userId) {
                    callback && callback(1);
                    return;
                }
                if (!(score >= 0)) {
                    callback && callback(1);
                    return;
                }
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + "users/update_user_info_0";
                let data = JSON.stringify({ "user_id": Number.parseInt(this.getUserId()), "max_score": score });
                ly.LyHttp1.post(url, data, (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                        try {
                            let ret_update_user_info = new update_user_info();
                            Object.assign(ret_update_user_info, lyHttpResponse.data);
                            this.userInfo.score_all = ret_update_user_info.max_score;
                            this.userInfo.score_week = ret_update_user_info.week_max_score;
                        }
                        catch (error) {
                            console.log(error);
                        }
                        callback && callback(0);
                    }
                    else if (lyHttpResponse.http_status != 200) {
                        callback && callback(-1);
                    }
                    else {
                        callback && callback(1);
                    }
                });
            }
            submitUserGoods(callback) {
                if (!this.userInfo.userId) {
                    callback && callback(1);
                    return;
                }
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + "users/update_user_props_info_0";
                let data = JSON.stringify({ "user_id": Number.parseInt(this.getUserId()), "user_props": this.userGoods.toJsonString() });
                ly.LyHttp1.post(url, data, (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                        callback && callback(0);
                    }
                    else if (lyHttpResponse.http_status != 200) {
                        callback && callback(-1);
                    }
                    else {
                        callback && callback(1);
                    }
                });
            }
        }
        core.NetUser = NetUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class UserGoodsImpl {
            constructor(user) {
                this.user = user;
            }
            toJsonString() {
                return ly.Convert.MapToString(this.goodses);
            }
            get goodses() {
                return this.user.getUserInfo().goodses;
            }
            hasGoods(goodsId) {
                return this.goodses.has(goodsId);
            }
            removeGoods(goodsId) {
                this.goodses.delete(goodsId);
            }
            getGoodsNum(goodsId, defGoodsNum) {
                let num = this.goodses.get(goodsId);
                if (isNaN(num))
                    num = defGoodsNum;
                if (isNaN(num))
                    num = 0;
                return num;
            }
            addGoodsNum(goodsId, goodsNum, defGoodsNum, isSubmit) {
                let num = this.getGoodsNum(goodsId, defGoodsNum);
                this.setGoodsNum(goodsId, num + goodsNum, isSubmit);
            }
            useGoodsNum(goodsId, goodsNum, defGoodsNum, isSubmit) {
                let num = this.getGoodsNum(goodsId, defGoodsNum);
                if (num >= goodsNum) {
                    this.setGoodsNum(goodsId, num - goodsNum, isSubmit);
                    return true;
                }
                return false;
            }
            setGoodsNum(goodsId, goodsNum, isSubmit) {
                if (isNaN(goodsNum)) {
                    return;
                }
                this.goodses.set(goodsId, goodsNum);
                if (isSubmit || isSubmit == undefined || isSubmit == null) {
                    this.submit();
                }
            }
            submit(callback) {
                this.user.submitUserGoods(callback);
            }
        }
        core.UserGoodsImpl = UserGoodsImpl;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    class UserInfoData {
        constructor() {
            this.userId = "";
            this.userName = "";
            this.sex = 0;
            this.headImgUrl = "";
            this.stage = 0;
            this.gold = 0;
            this.score_all = 0;
            this.score_week = 0;
            this.score_week_times = 0;
            this.score_everyday = 0;
            this.goodses = new Map();
        }
        static fromJsonString(jsonStr) {
            try {
                let obj = JSON.parse(jsonStr, (key, value) => {
                    if (key == "goodses") {
                        let goodses = ly.Convert.stringToMap_number(value);
                        return goodses ? goodses : new Map();
                    }
                    return value;
                });
                let userInfoData = new UserInfoData();
                Object.assign(userInfoData, obj);
                return userInfoData;
            }
            catch (error) {
                console.log(error);
            }
            return null;
        }
        toJsonString() {
            return JSON.stringify(this, (key, value) => {
                if (key == "goodses") {
                    return ly.Convert.MapToString(this.goodses);
                }
                return value;
            });
        }
    }
    ly.UserInfoData = UserInfoData;
    class UserInfoImpl {
        constructor() {
            this.userInfoData = new UserInfoData();
        }
        static fromJsonString(jsonStr) {
            let userInfoData = UserInfoData.fromJsonString(jsonStr);
            if (userInfoData) {
                let userInfo = new UserInfoImpl();
                userInfo.userInfoData = userInfoData;
                return userInfo;
            }
            return null;
        }
        toJsonString() {
            return this.userInfoData.toJsonString();
        }
        get userId() {
            return this.userInfoData.userId;
        }
        set userId(userId) {
            this.userInfoData.userId = userId;
        }
        get userName() {
            return this.userInfoData.userName;
        }
        set userName(userName) {
            this.userInfoData.userName = userName;
        }
        get sex() {
            return this.userInfoData.sex;
        }
        set sex(sex) {
            this.userInfoData.sex = sex;
        }
        get headImgUrl() {
            return this.userInfoData.headImgUrl;
        }
        set headImgUrl(headImgUrl) {
            this.userInfoData.headImgUrl = headImgUrl;
        }
        get stage() {
            return this.userInfoData.stage;
        }
        set stage(stage) {
            this.userInfoData.stage = stage;
        }
        get gold() {
            return this.userInfoData.gold;
        }
        set gold(gold) {
            this.userInfoData.gold = gold;
        }
        get goodses() {
            return this.userInfoData.goodses;
        }
        set goodses(goodses) {
            this.userInfoData.goodses = goodses;
        }
        get score_all() {
            return this.userInfoData.score_all;
        }
        set score_all(score) {
            this.userInfoData.score_all = score;
        }
        get score_week() {
            return this.userInfoData.score_week;
        }
        set score_week(score) {
            this.userInfoData.score_week = score;
        }
        get score_everyday() {
            return this.userInfoData.score_everyday;
        }
        set score_everyday(score) {
            this.userInfoData.score_everyday = score;
        }
        get score_week_times() {
            return this.userInfoData.score_week_times;
        }
        set score_week_times(score_times) {
            this.userInfoData.score_week_times = score_times;
        }
    }
    ly.UserInfoImpl = UserInfoImpl;
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class UserSignImpl {
            constructor(user) {
                this.user = null;
                this.user = user;
            }
            getLastSignDate() {
                return this.user.getUserGoods().getGoodsNum(UserSignImpl.UserSignKey_LastSignDate);
            }
            getSignNum() {
                return this.user.getUserGoods().getGoodsNum(UserSignImpl.UserSignKey_SignNum);
            }
            resetSignNum() {
                this.user.getUserGoods().setGoodsNum(UserSignImpl.UserSignKey_SignNum, 0);
            }
            getCurrentDate() {
                return ly.TimeUtil.getDate();
            }
            isNeedSign() {
                let currentDate = this.getCurrentDate();
                let lastSignDate = this.getLastSignDate();
                if (currentDate >= 0 && lastSignDate >= 0 && currentDate > lastSignDate) {
                    return true;
                }
                return false;
            }
            sign(callback) {
                if (!this.isNeedSign()) {
                    callback && callback(1);
                }
                let lastSignDate = this.getLastSignDate();
                let signNum = this.getSignNum();
                this.user.getUserGoods().setGoodsNum(UserSignImpl.UserSignKey_LastSignDate, this.getCurrentDate(), false);
                this.user.getUserGoods().setGoodsNum(UserSignImpl.UserSignKey_SignNum, signNum + 1, false);
                this.user.submitUserGoods((retcode) => {
                    if (retcode == 0) {
                        callback && callback(0);
                    }
                    else {
                        this.user.getUserGoods().setGoodsNum(UserSignImpl.UserSignKey_LastSignDate, lastSignDate, false);
                        this.user.getUserGoods().setGoodsNum(UserSignImpl.UserSignKey_SignNum, signNum, false);
                        callback && callback(retcode);
                    }
                });
            }
            getLastAndCurrentIntervalSignDay() {
                let date1 = this.getLastSignDate();
                let date2 = this.getCurrentDate();
                if (date1 <= 0 || date2 <= 0) {
                    return 0;
                }
                return this.getIntervalDay(date1, date2);
            }
            getIntervalDay(date1, date2) {
                var startTime = new Date(this.convertDate(date1)).getTime();
                var endTime = new Date(this.convertDate(date2)).getTime();
                var dates = (endTime - startTime) / (1000 * 60 * 60 * 24);
                return dates;
            }
            convertDate(dateYYYYMMDD) {
                let year = dateYYYYMMDD / 10000;
                let monthday = dateYYYYMMDD % 10000;
                let month = monthday / 100;
                let day = monthday % 100;
                let hour = 0;
                let min = 0;
                let sec = 0;
                return new Date(year, month - 1, day, hour, min, sec);
            }
        }
        UserSignImpl.UserSignKey_LastSignDate = -1;
        UserSignImpl.UserSignKey_SignNum = -2;
        core.UserSignImpl = UserSignImpl;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var payApi;
    (function (payApi) {
        class BasePay {
            isPay() {
                return false;
            }
            pay(payRequestParam, onPayFinishCallback) {
            }
            payOrderNum(orderNum, onPayFinishCallback) {
            }
            checkWaitHandleOrder(onCheckFinishListener) {
                onCheckFinishListener([]);
            }
        }
        payApi.BasePay = BasePay;
    })(payApi = ly.payApi || (ly.payApi = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var payApi;
    (function (payApi) {
        class PayManager {
            constructor() {
                this.pays = null;
            }
            static getInstance() {
                if (!this.instance) {
                    this.instance = new PayManager();
                    this.instance.init();
                }
                return this.instance;
            }
            init() {
                this.pays = ly.core.PlatformManager.getInstance().getPlatformPay();
            }
            isPay() {
                let flag = false;
                this.pays && (flag = this.pays.isPay());
                return flag;
            }
            pay(payRequestParam, onPayFinishCallback) {
                this.pays && this.pays.pay(payRequestParam, onPayFinishCallback);
            }
            payOrderNum(orderNum, onPayFinishCallback) {
                this.pays && this.pays.payOrderNum(orderNum, onPayFinishCallback);
            }
            checkWaitHandleOrder(onCheckFinishListener) {
                this.pays && this.pays.checkWaitHandleOrder(onCheckFinishListener);
            }
        }
        PayManager.instance = null;
        payApi.PayManager = PayManager;
    })(payApi = ly.payApi || (ly.payApi = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    class Convert {
        static MapToObj(map) {
            let obj = Object.create(null);
            map.forEach((v, k) => {
                obj[k] = v;
            });
            return obj;
        }
        static MapToString(map) {
            let obj = this.MapToObj(map);
            try {
                return JSON.stringify(obj);
            }
            catch (error) {
                console.log(error);
            }
            return undefined;
        }
        static objToMap(obj) {
            let map = new Map();
            for (let k of Object.keys(obj)) {
                map.set(k, obj[k]);
            }
            return map;
        }
        static stringToMap(str) {
            try {
                let json = JSON.parse(str);
                return this.objToMap(json);
            }
            catch (error) {
                console.log(error);
            }
            return null;
        }
        static objToMap_number(obj) {
            let map = new Map();
            for (let k of Object.keys(obj)) {
                try {
                    let kNum = Number.parseInt(k);
                    if (kNum && !isNaN(kNum)) {
                        map.set(kNum, obj[k]);
                    }
                }
                catch (error) {
                }
            }
            return map;
        }
        static stringToMap_number(str) {
            try {
                let json = JSON.parse(str);
                return this.objToMap_number(json);
            }
            catch (error) {
                console.log(error);
            }
            return undefined;
        }
    }
    ly.Convert = Convert;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class HttpOptions {
        constructor() {
            this.timeout = 10000;
            this.async = true;
        }
    }
    class HttpResponse {
    }
    ly.HttpResponse = HttpResponse;
    class HttpUtil {
        static quest(options, callback) {
            let url = options.url;
            let method = options.method;
            let data = options.data;
            let timeout = options.timeout || 0;
            let xhr = new XMLHttpRequest();
            let response = new HttpResponse();
            response.xhr = xhr;
            if (timeout > 0)
                xhr.timeout = timeout;
            let time_begin = new Date().getTime();
            xhr.withCredentials = true;
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    response.status = xhr.status;
                    response.status_message = xhr.statusText;
                    if (xhr.status >= 200 && xhr.status < 400) {
                        response.body = xhr.responseText;
                    }
                    if (callback) {
                        let time_end = new Date().getTime();
                        response.duration = time_end - time_begin;
                        callback(response);
                        callback = null;
                    }
                }
            };
            xhr.open(method, url, options.async);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            if (options.cookie && options.cookie.length > 0) {
                xhr.setRequestHeader('cookie', options.cookie);
            }
            if (typeof data === 'object') {
                try {
                    data = JSON.stringify(data);
                }
                catch (e) { }
            }
            xhr.send(data);
            xhr.ontimeout = () => {
                response.status = xhr.status;
                response.status_message = xhr.statusText;
                if (callback) {
                    let time_end = new Date().getTime();
                    response.duration = time_end - time_begin;
                    callback(response);
                    callback = null;
                }
                console.log('%c连%c接%c超%c时', 'color:red', 'color:orange', 'color:purple', 'color:green');
            };
        }
        ;
        static get(url, cookie, callback) {
            let options = new HttpOptions();
            if (typeof url === 'object') {
                Object.assign(options, url);
            }
            else if (typeof url === 'string') {
                options.url = url;
            }
            options.method = 'get';
            options.cookie = cookie;
            this.quest(options, callback);
        }
        static post(url, data, cookie, callback) {
            let options = new HttpOptions();
            if (typeof url === 'object') {
                Object.assign(options, url);
            }
            else if (typeof url === 'string') {
                options.url = url;
            }
            options.method = 'post';
            options.data = data;
            options.cookie = cookie;
            this.quest(options, callback);
        }
        static getQueryString(urlParams, name) {
            try {
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                let r = urlParams.substr(1).match(reg);
                if (r)
                    return unescape(r[2]);
            }
            catch (error) { }
            return null;
        }
        static getQueryInt(urlParams, name) {
            try {
                let value = Number.parseInt(this.getQueryString(urlParams, name));
                if (isNaN(value))
                    return null;
            }
            catch (error) { }
            return null;
        }
    }
    ly.HttpUtil = HttpUtil;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class LyHttpResponse {
        constructor() {
            this.code = -1;
        }
        static parse(httpResponse) {
            let lyHttpResponse = new LyHttpResponse();
            lyHttpResponse.http_status = httpResponse.status;
            lyHttpResponse.http_status_message = httpResponse.status_message;
            lyHttpResponse.duration = httpResponse.duration;
            try {
                let bodyObj = JSON.parse(httpResponse.body);
                lyHttpResponse.code = bodyObj.code;
                lyHttpResponse.data = bodyObj.data;
            }
            catch (error) {
                console.log(error);
            }
            return lyHttpResponse;
        }
    }
    ly.LyHttpResponse = LyHttpResponse;
    class LyHttp1 {
        static get(url, callback) {
            ly.HttpUtil.get(url, this.cookie, (httpResponse) => {
                if (callback) {
                    this.cookie = httpResponse.xhr.getResponseHeader('Set-Cookie');
                    callback(LyHttpResponse.parse(httpResponse));
                }
            });
        }
        static post(url, data, callback) {
            ly.HttpUtil.post(url, data, this.cookie, (httpResponse) => {
                if (callback) {
                    this.cookie = httpResponse.xhr.getResponseHeader('Set-Cookie');
                    callback(LyHttpResponse.parse(httpResponse));
                }
            });
        }
    }
    ly.LyHttp1 = LyHttp1;
})(ly || (ly = {}));
var ly;
(function (ly) {
    class TimeUtil {
        static getDate() {
            let date = new Date();
            let year = 0;
            let month = 0;
            let day = 0;
            let currentDate = "";
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            currentDate += year;
            if (month >= 10) {
                currentDate += month;
            }
            else {
                currentDate += "0" + month;
            }
            if (day >= 10) {
                currentDate += day;
            }
            else {
                currentDate += "0" + day;
            }
            return Number.parseInt(currentDate);
        }
        static isThisWeek(date) {
            return this.isSameWeek(date, new Date());
        }
        static isSameWeek(date1, date2) {
            try {
                var oneDayTime = 1000 * 60 * 60 * 24;
                var date1_count = Math.trunc(date1.getTime() / oneDayTime);
                var date2_count = Math.trunc(date2.getTime() / oneDayTime);
                return Math.trunc((date1_count + 3) / 7) == Math.trunc((date2_count + 3) / 7);
            }
            catch (error) {
                console.log(error);
            }
            return false;
        }
    }
    ly.TimeUtil = TimeUtil;
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class LyH5EnvPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.LyH5Game;
            }
            init() {
                lyh5env.init();
                ly.isAdReady = lyh5env.isAdReady;
                ly.openAd = lyh5env.openAd;
                ly.closeAd = lyh5env.closeAd;
                ly.closeAllBannerAd = lyh5env.closeAllBannerAd;
                ly.ads = null;
                return true;
            }
            showToast(text) {
                return lyh5env.showToast(text);
            }
            login(callback) {
                console.log("lyh5env login");
                this.user = new core.LyH5EnvUser();
                this.user.login((retcode) => {
                    if (retcode == 0) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
            }
            parseThirdUserInfoOriginal(webUserInfo) {
                return null;
            }
        }
        core.LyH5EnvPlatform = LyH5EnvPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        var promote;
        (function (promote) {
            class LyH5EnvPromoteData {
            }
            class LyH5EnvPromoteAgent extends promote.BasePromoteAgent {
                parsePromoteList(promoteDataList) {
                    if (promoteDataList) {
                        for (let promoteData of promoteDataList) {
                            let promoteItem = new promote.PromoteItemImpl();
                            promoteItem.position = promoteData.position;
                            promoteItem.title = promoteData.title;
                            promoteItem.iconUrl = promoteData.iconUrl;
                            promoteItem.packageName = promoteData.appId;
                            this.promoteItemList.push(promoteItem);
                        }
                    }
                }
                updatePromoteItem(callback) {
                    this.updateStatus = 1;
                    let req_url = "https://xyx.lfungame.com/api/h5/gameList";
                    let req_data = {
                        "device_id": lyh5env.getDeviceId(),
                        "appId": lyh5env.getAppid(),
                        "appName": lyh5env.getAppName(),
                        "version": Number(lyh5env.getVersion())
                    };
                    let req_dataStr = JSON.stringify(req_data);
                    ly.HttpUtil.post(req_url, req_dataStr, null, (httpResponse) => {
                        let lyHttpResponse = ly.LyHttpResponse.parse(httpResponse);
                        if (lyHttpResponse.code == 0 && lyHttpResponse.data) {
                            let resp_data = JSON.parse(lyHttpResponse.data);
                            if (resp_data) {
                                this.parsePromoteList(resp_data);
                                this.onUpdatePromoteItemFinish();
                                callback && callback(0);
                            }
                            else {
                                callback && callback(1);
                            }
                        }
                        else {
                            callback && callback(-1);
                        }
                    });
                }
                openPromoteItem(promoteItem) {
                    try {
                        if (lyh5env.navigateToMiniProgram) {
                            lyh5env.navigateToMiniProgram({
                                appId: promoteItem.packageName
                            });
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            }
            promote.LyH5EnvPromoteAgent = LyH5EnvPromoteAgent;
        })(promote = core.promote || (core.promote = {}));
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class LyH5EnvUser extends core.NetUser {
            login(callback) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "lyh5env", source_id: lyh5env.getDeviceId(), game: ly.getAppConfig().appId };
                console.log("lyh5env login data: " + JSON.stringify(data));
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    console.log("lyh5env login code: " + lyHttpResponse.code);
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.LyH5EnvUser = LyH5EnvUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class WxBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                try {
                    let screenWidth = wx.getSystemInfoSync().screenWidth;
                    let screenHeight = wx.getSystemInfoSync().screenHeight;
                    let bannerAd = wx.createBannerAd({
                        adUnitId: this.getAdPlacementId(),
                        style: {
                            left: 0,
                            top: screenHeight,
                            width: screenWidth * 0.8
                        }
                    });
                    bannerAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    bannerAd.onError((err) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode(err.errCode);
                        adError.setSdkMsg(err.errMsg);
                        this.onLoadFail(adError);
                    });
                    bannerAd.onResize(res => {
                        let realWidth = bannerAd.style.realWidth;
                        let realHeight = bannerAd.style.realHeight;
                        let left = (screenWidth - realWidth) / 2;
                        let top = screenHeight - realHeight - 7;
                        bannerAd.style.left = left;
                        bannerAd.style.top = top;
                    });
                    this.bannerAd = bannerAd;
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.bannerAd) {
                    this.onShowSuccess();
                    this.bannerAd.show();
                }
            }
            close() {
                if (this.bannerAd) {
                    this.onClosed();
                    this.bannerAd.destroy();
                    this.bannerAd = null;
                }
            }
        }
        ads.WxBannerAdItem = WxBannerAdItem;
        class WxVideoAd {
            constructor(adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.rewardedVideoAd = wx.createRewardedVideoAd({
                    adUnitId: adUnitId
                });
                this.rewardedVideoAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onError((err) => {
                    this.status = 2;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                    if (res && res.isEnded || res === undefined) {
                        if (this.onAdCloseCallback) {
                            this.onAdCloseCallback(true);
                            return;
                        }
                    }
                    else {
                    }
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(false);
                    }
                });
            }
            static getVideoAd(adUnitId) {
                let rewardedVideoAd = this.videoAdList.get(adUnitId);
                if (!rewardedVideoAd) {
                    rewardedVideoAd = new WxVideoAd(adUnitId);
                    this.videoAdList.set(adUnitId, rewardedVideoAd);
                }
                return rewardedVideoAd;
            }
            isReady() {
                return this.status == 1;
            }
            onStatusChange() {
                let isReady = this.isReady();
                for (let adItem of this.onLoadListenerList) {
                    if (isReady) {
                        adItem.onLoadSuccess();
                    }
                    else {
                        adItem.onLoading();
                    }
                }
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.status = 3;
                    openAdResultCallback(true);
                    this.onAdCloseCallback = onAdCloseCallback;
                    this.rewardedVideoAd.show()
                        .catch(err => {
                        openAdResultCallback(false);
                        this.rewardedVideoAd.load();
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        WxVideoAd.videoAdList = new Map();
        class WxVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    let videoAd = WxVideoAd.getVideoAd(this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = WxVideoAd.getVideoAd(this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                }, (isReward) => {
                    if (isReward) {
                        this.onReward();
                    }
                    this.onClosed();
                });
            }
        }
        ads.WxVideoAdItem = WxVideoAdItem;
        class WxInterstitialAdItem extends ads.BaseInterstitialAdItem {
            load() {
                try {
                    this.interstitialAd = wx.createInterstitialAd({
                        adUnitId: this.getAdPlacementId()
                    });
                    this.interstitialAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    this.interstitialAd.onError((res) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode(res.errCode);
                        adError.setSdkMsg(res.errMsg);
                        this.onLoadFail(adError);
                    });
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.interstitialAd) {
                    this.onShowSuccess();
                    this.interstitialAd.show();
                }
            }
            close() {
                if (this.interstitialAd) {
                    this.onClosed();
                    this.interstitialAd.offError();
                    this.interstitialAd.offLoad();
                    this.interstitialAd = null;
                }
            }
        }
        ads.WxInterstitialAdItem = WxInterstitialAdItem;
        class WxAdAgent extends ads.BaseAdAgent {
            get name() {
                return "wx";
            }
            isSupported() {
                if (wx.getSystemInfoSync().version >= "2.0.4") {
                    return true;
                }
                return false;
            }
            isDev() {
                if (wx.getSystemInfoSync().platform == "devtools") {
                    return true;
                }
                return false;
            }
            createBannerAd(adItemParam) {
                if (!this.isSupported() || this.isDev()) {
                    return null;
                }
                return new WxBannerAdItem(adItemParam);
            }
            createVideoAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new WxVideoAdItem(adItemParam);
            }
            createInterstitialAd(adItemParam) {
                if (wx.getSystemInfoSync().version >= "2.6.0") {
                    return new WxInterstitialAdItem(adItemParam);
                }
                return null;
            }
        }
        ads.WxAdAgent = WxAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class WxPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.shareTicket = null;
                this.adAgent = null;
                this.analytics = null;
                this.promoteAgent = null;
                this.shareTime = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.WeChatGame;
            }
            init() {
                if (wx.getLaunchOptionsSync) {
                    let launchOption = wx.getLaunchOptionsSync();
                    if (launchOption) {
                        this.setShareTicket(launchOption.shareTicket);
                    }
                }
                wx.showShareMenu({});
                wx.onShareAppMessage(() => {
                    let shareParam = core.PlatformManager.getInstance().getShareParam();
                    if (shareParam) {
                        this.shareId = new Date().getTime();
                        this.shareCallback = null;
                        let queryStr = "ly_share_id=&" + this.shareId;
                        return {
                            title: shareParam.title,
                            imageUrl: shareParam.imageUrl,
                            query: queryStr
                        };
                    }
                });
                wx.onShow((res) => {
                    setTimeout(() => {
                        if (this.shareCallback != null) {
                            let endTime = new Date().getTime();
                            let flag = false;
                            if (endTime - this.shareTime > 4000) {
                                flag = true;
                            }
                            else {
                                flag = false;
                            }
                            this.setShareTicket(res.shareTicket);
                            this.shareAnalytics();
                            this.shareCallback && this.shareCallback(flag);
                            this.shareCallback = null;
                        }
                    }, 1000);
                });
                if (wx.getUpdateManager) {
                    let updateManager = wx.getUpdateManager();
                    updateManager.onCheckForUpdate(function (res) {
                        if (res.hasUpdate) {
                            console.log("用户新版本更新了...");
                        }
                    });
                    updateManager.onUpdateReady(function () {
                        wx.showModal({
                            title: '更新提示',
                            content: '新版本已经准备好，是否重启应用？',
                            success: function (res) {
                                if (res.confirm) {
                                    updateManager.applyUpdate();
                                }
                            }
                        });
                    });
                    updateManager.onUpdateFailed(function () {
                        wx.showModal({
                            title: '更新提示',
                            content: '新版本下载失败',
                            showCancel: false
                        });
                    });
                }
                if (ly.RankManager) {
                    ly.RankManager.getInstance().getFriendWeekRank = this.getFriendWeek.bind(this);
                    ly.RankManager.getInstance().getFriendAllRank = this.getFriendAllRank.bind(this);
                    ly.RankManager.getInstance().getGroupWeekRank = this.getGroupWeekRank.bind(this);
                    ly.RankManager.getInstance().getGroupAllRank = this.getGroupAllRank.bind(this);
                    ly.RankManager.getInstance().onRankChange((rankMode, rank) => {
                        if (rankMode == ly.Constants.RankMode_week) {
                            let msg = {};
                            msg.ly = { action: "setRank_week", data: rank.toJsonString() };
                            let openDataContext = wx.getOpenDataContext();
                            openDataContext.postMessage(msg);
                        }
                        else if (rankMode == ly.Constants.RankMode_all) {
                            let msg = {};
                            msg.ly = { action: "setRank_all", data: rank.toJsonString() };
                            let openDataContext = wx.getOpenDataContext();
                            openDataContext.postMessage(msg);
                        }
                    });
                }
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.WxAdAgent();
                }
                return this.adAgent;
            }
            getPlatformAnalytics() {
                if (!this.analytics) {
                    this.analytics = new ly.analytics.Ald();
                }
                return this.analytics;
            }
            getPlatformPromoteAgent() {
                if (!this.promoteAgent) {
                    this.promoteAgent = new core.promote.WXPromoteAgent();
                }
                return this.promoteAgent;
            }
            setShareTicket(shareTicket) {
                console.log("this shareTicket = " + this.shareTicket + ", new shareTicket = " + shareTicket);
                if (shareTicket && typeof shareTicket == "string" && shareTicket.length > 0) {
                    this.shareTicket = shareTicket;
                    let msg = {};
                    msg.ly = { action: "setShareTicket", data: shareTicket };
                    let openDataContext = wx.getOpenDataContext();
                    openDataContext.postMessage(msg);
                }
            }
            shareAnalytics() {
                let userId = null;
                try {
                    userId = ly.getSelfUser().getUserId();
                    userId = Number.parseInt(userId);
                }
                catch (error) {
                    console.log(error);
                }
                let data = { "user_id": userId };
                ly.LyHttp1.post(ly.ConstInner.URL_DOMAIN + "users/upload_share_time_0", JSON.stringify(data), (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                    }
                });
            }
            isShare() {
                return true;
            }
            share(title, imageUrl, callback, query) {
                this.shareId = new Date().getTime();
                this.shareTime = this.shareId;
                this.shareCallback = callback;
                let queryStr = "ly_share_id=" + this.shareId;
                if (query) {
                    query.forEach((value, key) => {
                        queryStr += "&" + key + "=" + value;
                    });
                }
                wx.shareAppMessage({
                    title: title,
                    imageUrl: imageUrl,
                    query: queryStr
                });
                return true;
            }
            shareGroupRank(title, imageUrl, callback, query) {
                wx.updateShareMenu({
                    withShareTicket: true,
                    complete: (res) => {
                        this.share(title, imageUrl, (success) => {
                            wx.updateShareMenu({
                                withShareTicket: false
                            });
                            callback && callback(success);
                        }, query);
                    }
                });
                return true;
            }
            showToast(text) {
                wx.showToast({
                    title: text,
                    icon: "none"
                });
                return true;
            }
            login(callback) {
                wx.login({
                    success: (res) => {
                        this.user = new core.WxUser();
                        this.user.login((retcode) => {
                            if (retcode == 0) {
                                callback(true);
                            }
                            else {
                                callback(false);
                            }
                        }, res);
                    },
                    fail: (res) => {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                try {
                    wx.getSetting({
                        success: (res) => {
                            let authSetting = res.authSetting;
                            if (authSetting && res.authSetting["scope.userInfo"]) {
                                if (this.user && autoSync) {
                                    this.user.syncThirdUserInfo();
                                }
                                callback(true);
                            }
                            else {
                                callback(false);
                            }
                        },
                        fail: (res) => {
                            callback(false);
                        }
                    });
                }
                catch (error) {
                    console.log(error);
                    callback(false);
                }
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
                this.checkThirdAuthUserInfo((isAuthed) => {
                    if (isAuthed) {
                        wx.getUserInfo({
                            success: (res) => {
                                let wxUserInfo = res.userInfo;
                                callback && callback(wxUserInfo);
                            },
                            fail: (res) => {
                                callback && callback(null);
                            }
                        });
                    }
                    else {
                        callback && callback(null);
                    }
                }, false);
            }
            parseThirdUserInfoOriginal(wxUserInfo) {
                if (wxUserInfo) {
                    let userInfo = new ly.UserInfoImpl();
                    userInfo.userName = wxUserInfo.nickName;
                    userInfo.sex = wxUserInfo.gender;
                    userInfo.headImgUrl = wxUserInfo.avatarUrl;
                    userInfo.score_all = 0;
                    userInfo.score_week = 0;
                    return userInfo;
                }
                return null;
            }
            getWxRank(key, callback) {
                let rank = null;
                let openContext = wx.getOpenDataContext();
                if (openContext["canvas"]) {
                    rank = ly.RankImpl.fromJsonString(openContext["canvas"][key]);
                }
                callback && callback(rank);
            }
            getFriendWeek(callback) {
                this.getWxRank("ly_friendWeekRank", (rank) => {
                    if (!rank) {
                        rank = new ly.RankImpl(ly.Constants.RankMode_friendWeek);
                    }
                    callback && callback(rank);
                });
            }
            getFriendAllRank(callback) {
                this.getWxRank("ly_friendAllRank", (rank) => {
                    if (!rank) {
                        rank = new ly.RankImpl(ly.Constants.RankMode_friendAll);
                    }
                    callback && callback(rank);
                });
            }
            getGroupWeekRank(callback) {
                this.getWxRank("ly_groupWeekRank", (rank) => {
                    if (!rank) {
                        if (this.shareTicket && typeof this.shareTicket == "string" && this.shareTicket.length > 0) {
                            rank = new ly.RankImpl(ly.Constants.RankMode_groupWeek);
                        }
                    }
                    callback && callback(rank);
                });
            }
            getGroupAllRank(callback) {
                this.getWxRank("ly_groupAllRank", (rank) => {
                    if (!rank) {
                        if (this.shareTicket && typeof this.shareTicket == "string" && this.shareTicket.length > 0) {
                            rank = new ly.RankImpl(ly.Constants.RankMode_groupAll);
                        }
                    }
                    callback && callback(rank);
                });
            }
        }
        core.WxPlatform = WxPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        var promote;
        (function (promote) {
            class WxPromoteData {
            }
            class WXPromoteAgent extends promote.BasePromoteAgent {
                parsePromoteList(promoteList) {
                    this.promoteItemList = new Array();
                    if (promoteList) {
                        let WxPromoteDataList = new Array();
                        Object.assign(WxPromoteDataList, promoteList);
                        for (let WxPromoteData of WxPromoteDataList) {
                            let promoteItem = new promote.PromoteItemImpl();
                            promoteItem.position = WxPromoteData.promotePosition;
                            promoteItem.title = WxPromoteData.name;
                            promoteItem.iconUrl = WxPromoteData.img;
                            promoteItem.packageName = WxPromoteData.appID;
                            promoteItem.path = WxPromoteData.path;
                            promoteItem.extra = WxPromoteData.extra_data;
                            this.promoteItemList.push(promoteItem);
                        }
                    }
                }
                updatePromoteItem(callback) {
                    this.updateStatus = 1;
                    ly.LyHttp1.get(ly.ConstInner.URL_DOMAIN + "lwgame/get_recommend_game?game=" + ly.getAppConfig().appId, (lyHttpResponse) => {
                        if (lyHttpResponse.code == 0 && lyHttpResponse.data) {
                            let dataJson = JSON.parse(lyHttpResponse.data);
                            if (dataJson) {
                                this.parsePromoteList(dataJson.list);
                                this.onUpdatePromoteItemFinish();
                            }
                            else {
                                callback && callback(1);
                            }
                        }
                        else {
                            callback && callback(-1);
                        }
                    });
                }
                openPromoteItem(promoteItem) {
                    try {
                        if (wx.navigateToMiniProgram) {
                            wx.navigateToMiniProgram({
                                appId: promoteItem.packageName,
                                path: promoteItem.path,
                                extraData: promoteItem.extra
                            });
                        }
                    }
                    catch (error) {
                        console.log(error);
                    }
                }
            }
            promote.WXPromoteAgent = WXPromoteAgent;
        })(promote = core.promote || (core.promote = {}));
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class WxUser extends core.NetUser {
            login(callback, res) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "wx", source_id: res.code, game: ly.getAppConfig().appId };
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            this.setWxSubUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
            setWxSubUserInfo() {
                let userInfo = this.getUserInfo();
                if (userInfo) {
                    let msg = {};
                    msg.ly = { action: "setUserInfo", data: userInfo.toJsonString() };
                    let openDataContext = wx.getOpenDataContext();
                    openDataContext.postMessage(msg);
                }
            }
            submitScore(score, callback) {
                super.submitScore(score, (retcode) => {
                    if (retcode == 0) {
                        this.setWxSubUserInfo();
                    }
                    callback && callback(retcode);
                });
            }
        }
        core.WxUser = WxUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class OppoBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                try {
                    this.bannerAd = qg.createBannerAd({
                        posId: this.getAdPlacementId()
                    });
                    this.bannerAd.onError((err) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode("" + err.code);
                        adError.setSdkMsg("" + err.msg);
                        this.onLoadFail(adError);
                    });
                    this.onLoadSuccess();
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.bannerAd) {
                    this.bannerAd.onShow(() => {
                        this.onShowSuccess();
                    });
                    this.bannerAd.onHide(() => {
                        if (this.bannerAd) {
                            this.bannerAd.offShow();
                            this.bannerAd.offHide();
                            this.bannerAd = null;
                        }
                        this.onClosed();
                    });
                    this.bannerAd.show();
                }
            }
            close() {
                if (this.bannerAd) {
                    this.bannerAd.offShow();
                    this.bannerAd.offHide();
                    this.bannerAd.hide();
                    this.bannerAd = null;
                    this.onClosed();
                }
            }
        }
        ads.OppoBannerAdItem = OppoBannerAdItem;
        class OppoInterstitialAdItem extends ads.BaseInterstitialAdItem {
            load() {
                try {
                    this.interstitialAd = qg.createInsertAd({
                        posId: this.getAdPlacementId()
                    });
                    console.log(this.interstitialAd);
                    this.interstitialAd.onError((err) => {
                        if (this.isLoadSuccess()) {
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                            adError.setSdkCode("" + err.code);
                            adError.setSdkMsg("" + err.msg);
                            this.onShowFailed(adError);
                        }
                        else {
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                            adError.setSdkCode("" + err.code);
                            adError.setSdkMsg("" + err.msg);
                            this.onLoadFail(adError);
                        }
                    });
                    this.interstitialAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    this.interstitialAd.load();
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.interstitialAd) {
                    this.interstitialAd.onClose(() => {
                        this.interstitialAd.destroy();
                        this.onClosed();
                    });
                    this.interstitialAd.onShow(() => {
                        this.onShowSuccess();
                    });
                    this.interstitialAd.show();
                }
            }
        }
        ads.OppoInterstitialAdItem = OppoInterstitialAdItem;
        class OppoVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    if (!this.videoAd) {
                        this.videoAd = qg.createRewardedVideoAd({
                            posId: this.getAdPlacementId()
                        });
                        this.videoAd.onError((err) => {
                            if (this.isLoadSuccess()) {
                                let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                                adError.setSdkCode("" + err.code);
                                adError.setSdkMsg("" + err.msg);
                                this.onShowFailed(adError);
                            }
                            else {
                                let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                                adError.setSdkCode("" + err.code);
                                adError.setSdkMsg("" + err.msg);
                                this.onLoadFail(adError);
                            }
                        });
                        this.videoAd.onLoad(() => {
                            this.onLoadSuccess();
                        });
                    }
                    this.videoAd.load();
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.videoAd) {
                    this.videoAd.onVideoStart(() => {
                        this.onShowSuccess();
                    });
                    this.videoAd.onClose(res => {
                        if (res.isEnded) {
                            this.onReward();
                            console.log('激励视频广告完成，发放奖励');
                        }
                        else {
                            console.log('激励视频广告取消关闭，不发放奖励');
                        }
                        this.videoAd = null;
                        this.onClosed();
                    });
                    this.videoAd.show();
                }
            }
            close() {
            }
        }
        ads.OppoVideoAdItem = OppoVideoAdItem;
        class OppoInterstitialVideoAdItem extends ads.BaseInterstitialVideoAdItem {
            load() {
                try {
                    this.interstitialVideoAd = qg.createInterstitialVideoAd({
                        adUnitId: this.getAdPlacementId()
                    });
                    this.interstitialVideoAd.onError((err) => {
                        if (this.isLoadSuccess()) {
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                            adError.setSdkCode("" + err.code);
                            adError.setSdkMsg("" + err.msg);
                            this.onShowFailed(adError);
                        }
                        else {
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                            adError.setSdkCode("" + err.code);
                            adError.setSdkMsg("" + err.msg);
                            this.onLoadFail(adError);
                        }
                    });
                    this.interstitialVideoAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    this.interstitialVideoAd.load();
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.interstitialVideoAd) {
                    this.interstitialVideoAd.onClose(() => {
                        this.interstitialVideoAd.destroy();
                        this.onClosed();
                    });
                    this.interstitialVideoAd.onShow(() => {
                        this.onShowSuccess();
                    });
                    this.interstitialVideoAd.show();
                }
            }
        }
        ads.OppoInterstitialVideoAdItem = OppoInterstitialVideoAdItem;
        class OppoAdAgent extends ads.BaseAdAgent {
            get name() {
                return "oppo_quickgame";
            }
            loadAdSource(adSourceParam, callback) {
                try {
                    let appId = adSourceParam.getAppId();
                    qg.initAdService({
                        appId: appId,
                        isDebug: false,
                        success: (res) => {
                            callback(true);
                        },
                        fail: (res) => {
                            console.log("oppo ad init fail:" + res.code + res.msg);
                            callback(false);
                        }
                    });
                }
                catch (error) {
                    console.log(error);
                    callback(false);
                }
            }
            createBannerAd(adItemParam) {
                if (qg.createBannerAd) {
                    return new OppoBannerAdItem(adItemParam);
                }
                return null;
            }
            createInterstitialAd(adItemParam) {
                if (qg.createInsertAd) {
                    return new OppoInterstitialAdItem(adItemParam);
                }
            }
            createVideoAd(adItemParam) {
                if (qg.createRewardedVideoAd) {
                    return new OppoVideoAdItem(adItemParam);
                }
                return null;
            }
            createInterstitialVideoAd(adItemParam) {
                if (qg.createInterstitialVideoAd) {
                    return new OppoInterstitialVideoAdItem(adItemParam);
                }
            }
        }
        ads.OppoAdAgent = OppoAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class OppoPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.adAgent = null;
                this.thirdUserInfoOriginal = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.OppoQuickGame;
            }
            init() {
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.OppoAdAgent();
                }
                return this.adAgent;
            }
            login(callback) {
                console.log("oppo third login");
                qg.login({
                    pkgName: ly.getAppConfig().packageName,
                    success: (res) => {
                        console.log("oppo third login success: " + JSON.stringify(res));
                        this.thirdUserInfoOriginal = res;
                        this.user = new core.OppoUser();
                        this.user.login((retcode) => {
                            if (retcode == 0) {
                                callback(true);
                            }
                            else {
                                callback(false);
                            }
                        }, res);
                    },
                    fail: (res) => {
                        console.log("oppo third login fail: " + JSON.stringify(res));
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                if (this.user && autoSync) {
                    this.user.syncThirdUserInfo();
                }
                callback(true);
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
                callback && callback(this.thirdUserInfoOriginal);
            }
            parseThirdUserInfoOriginal(qgUserInfo) {
                if (qgUserInfo) {
                    let userInfo = new ly.UserInfoImpl();
                    userInfo.userName = qgUserInfo.nickName;
                    userInfo.sex = qgUserInfo.sex == "M" ? 1 : 2;
                    userInfo.headImgUrl = qgUserInfo.avatar;
                    userInfo.score_all = 0;
                    userInfo.score_week = 0;
                    return userInfo;
                }
                return null;
            }
        }
        core.OppoPlatform = OppoPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class OppoUser extends core.NetUser {
            login(callback, res) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "oppo", source_id: res.uid, game: ly.getAppConfig().appId };
                console.log("oppo login data: " + JSON.stringify(data));
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    console.log("oppo login code: " + lyHttpResponse.code);
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.OppoUser = OppoUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class TtBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                try {
                    const { screenWidth, screenHeight } = tt.getSystemInfoSync();
                    var targetBannerAdWidth = 200;
                    let bannerAd = tt.createBannerAd({
                        adUnitId: this.getAdPlacementId(),
                        style: {
                            left: 0,
                            width: targetBannerAdWidth,
                            top: screenWidth - (targetBannerAdWidth / 16) * 9
                        }
                    });
                    bannerAd.style.left = (screenWidth - targetBannerAdWidth) / 4 - 8;
                    bannerAd.onResize(size => {
                        bannerAd.style.top = screenHeight - size.height;
                        bannerAd.style.left = (screenWidth - size.width) / 2;
                    });
                    bannerAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    bannerAd.onError((err) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode(err.errCode);
                        adError.setSdkMsg(err.errMsg);
                        this.onLoadFail(adError);
                    });
                    this.bannerAd = bannerAd;
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.bannerAd) {
                    this.bannerAd.show()
                        .then(() => {
                        this.onShowSuccess();
                    })
                        .catch(err => {
                        console.log('广告组件出现问题', err);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                        adError.setSdkCode(err.errCode);
                        adError.setSdkMsg(err.errMsg);
                        this.onShowFailed(adError);
                    });
                }
                else {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                    adError.setMsg("无实例化广告");
                    this.onShowFailed(adError);
                }
            }
            close() {
                if (this.bannerAd) {
                    this.bannerAd.hide();
                    this.bannerAd.destroy();
                }
                this.onClosed();
            }
            destroy() {
                if (this.bannerAd) {
                    this.bannerAd.destroy();
                }
            }
        }
        ads.TtBannerAdItem = TtBannerAdItem;
        class TtVideoAd {
            constructor(adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.rewardedVideoAd = tt.createRewardedVideoAd({
                    adUnitId: adUnitId
                });
                this.rewardedVideoAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onError((err) => {
                    this.status = 2;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                    if (res && res.isEnded || res === undefined) {
                        if (this.onAdCloseCallback) {
                            this.onAdCloseCallback(true);
                            return;
                        }
                    }
                    else {
                    }
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(false);
                    }
                });
            }
            static getVideoAd(adUnitId) {
                let rewardedVideoAd = this.videoAdList.get(adUnitId);
                if (!rewardedVideoAd) {
                    rewardedVideoAd = new TtVideoAd(adUnitId);
                    this.videoAdList.set(adUnitId, rewardedVideoAd);
                }
                else {
                    rewardedVideoAd.load();
                }
                return rewardedVideoAd;
            }
            load() {
                this.rewardedVideoAd.load();
            }
            isReady() {
                return this.status == 1;
            }
            onStatusChange() {
                let isReady = this.isReady();
                for (let adItem of this.onLoadListenerList) {
                    if (isReady) {
                        adItem.onLoadSuccess();
                    }
                    else {
                        adItem.onLoading();
                    }
                }
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.status = 3;
                    openAdResultCallback(true);
                    this.onAdCloseCallback = onAdCloseCallback;
                    this.rewardedVideoAd.show()
                        .catch(err => {
                        openAdResultCallback(false);
                        this.rewardedVideoAd.load();
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        TtVideoAd.videoAdList = new Map();
        class TtVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    let videoAd = TtVideoAd.getVideoAd(this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = TtVideoAd.getVideoAd(this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                }, (isReward) => {
                    if (isReward) {
                        this.onReward();
                    }
                    this.onClosed();
                });
            }
        }
        ads.TtVideoAdItem = TtVideoAdItem;
        class TtInterstitialAd {
            constructor(adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.adUnitId = adUnitId;
                this.intertitialAd = tt.createInterstitialAd({
                    adUnitId: adUnitId
                });
                this.intertitialAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                });
                this.intertitialAd.onError((err) => {
                    this.onStatusChange();
                });
                this.intertitialAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                });
                this.load();
            }
            static getVideoAd(adUnitId) {
                let intertitialAd = this.intertitialAdList.get(adUnitId);
                if (intertitialAd) {
                    if (intertitialAd.status == 2 || intertitialAd.status == 4) {
                        intertitialAd.destroy();
                        intertitialAd = null;
                    }
                }
                if (!intertitialAd) {
                    intertitialAd = new TtInterstitialAd(adUnitId);
                    this.intertitialAdList.set(adUnitId, intertitialAd);
                }
                else {
                    intertitialAd.load();
                }
                return intertitialAd;
            }
            load() {
                this.intertitialAd.load();
            }
            destroy() {
                this.intertitialAd.destroy();
            }
            onStatusChange() {
                if (this.status == 1) {
                    for (let adItem of this.onLoadListenerList) {
                        adItem.onLoadSuccess();
                    }
                }
                if (this.status == 2) {
                    this.intertitialAd.destroy();
                    let intertitialAd = new TtInterstitialAd(this.adUnitId);
                    TtInterstitialAd.intertitialAdList.set(this.adUnitId, intertitialAd);
                    for (let adItem of this.onLoadListenerList) {
                        adItem.onLoadFail(new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL));
                    }
                }
                if (this.status == 4) {
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(false);
                    }
                }
            }
            isReady() {
                return this.status == 1;
            }
            isClose() {
                return this.status == 4;
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.intertitialAd.show()
                        .then(() => {
                        this.status = 3;
                        this.onAdCloseCallback = onAdCloseCallback;
                        openAdResultCallback(true);
                    })
                        .catch(err => {
                        openAdResultCallback(false);
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        TtInterstitialAd.intertitialAdList = new Map();
        class TtInterstitialItem extends ads.BaseInterstitialAdItem {
            load() {
                try {
                    let videoAd = TtInterstitialAd.getVideoAd(this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = TtInterstitialAd.getVideoAd(this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                        this.onShowFailed(adError);
                    }
                }, () => {
                    this.onClosed();
                });
            }
        }
        ads.TtInterstitialItem = TtInterstitialItem;
        class TtAdAgent extends ads.BaseAdAgent {
            get name() {
                return "tt";
            }
            isSupported() {
                return true;
            }
            isDev() {
                if (tt.getSystemInfoSync().platform == "devtools") {
                    return true;
                }
                return false;
            }
            createBannerAd(adItemParam) {
                if (!this.isSupported() || this.isDev()) {
                    return null;
                }
                if (this.ttbannerAdItem) {
                    return this.ttbannerAdItem;
                }
                else {
                    this.ttbannerAdItem = new TtBannerAdItem(adItemParam);
                    return this.ttbannerAdItem;
                }
            }
            createVideoAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new TtVideoAdItem(adItemParam);
            }
            createInterstitialAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new TtInterstitialItem(adItemParam);
            }
        }
        ads.TtAdAgent = TtAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class TtBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                try {
                    const { screenWidth, screenHeight } = tt.getSystemInfoSync();
                    var targetBannerAdWidth = 200;
                    let bannerAd = tt.createBannerAd({
                        adUnitId: this.getAdPlacementId(),
                        style: {
                            left: 0,
                            width: targetBannerAdWidth,
                            top: screenWidth - (targetBannerAdWidth / 16) * 9
                        }
                    });
                    bannerAd.style.left = (screenWidth - targetBannerAdWidth) / 4 - 8;
                    bannerAd.onResize(size => {
                        bannerAd.style.top = screenHeight - size.height;
                        bannerAd.style.left = (screenWidth - size.width) / 2;
                    });
                    bannerAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    bannerAd.onError((err) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode(err.errCode);
                        adError.setSdkMsg(err.errMsg);
                        this.onLoadFail(adError);
                    });
                    this.bannerAd = bannerAd;
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.bannerAd) {
                    this.bannerAd.show()
                        .then(() => {
                        this.onShowSuccess();
                    })
                        .catch(err => {
                        console.log('广告组件出现问题', err);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                        adError.setSdkCode(err.errCode);
                        adError.setSdkMsg(err.errMsg);
                        this.onShowFailed(adError);
                    });
                }
                else {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                    adError.setMsg("无实例化广告");
                    this.onShowFailed(adError);
                }
            }
            close() {
                if (this.bannerAd) {
                    this.bannerAd.hide();
                    this.bannerAd.destroy();
                }
                this.onClosed();
            }
            destroy() {
                if (this.bannerAd) {
                    this.bannerAd.destroy();
                }
            }
        }
        ads.TtBannerAdItem = TtBannerAdItem;
        class TtVideoAd {
            constructor(adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.rewardedVideoAd = tt.createRewardedVideoAd({
                    adUnitId: adUnitId
                });
                this.rewardedVideoAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onError((err) => {
                    this.status = 2;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                    if (res && res.isEnded || res === undefined) {
                        if (this.onAdCloseCallback) {
                            this.onAdCloseCallback(true);
                            return;
                        }
                    }
                    else {
                    }
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(false);
                    }
                });
            }
            static getVideoAd(adUnitId) {
                let rewardedVideoAd = this.videoAdList.get(adUnitId);
                if (!rewardedVideoAd) {
                    rewardedVideoAd = new TtVideoAd(adUnitId);
                    this.videoAdList.set(adUnitId, rewardedVideoAd);
                }
                return rewardedVideoAd;
            }
            isReady() {
                return this.status == 1;
            }
            onStatusChange() {
                let isReady = this.isReady();
                for (let adItem of this.onLoadListenerList) {
                    if (isReady) {
                        adItem.onLoadSuccess();
                    }
                    else {
                        adItem.onLoading();
                    }
                }
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.status = 3;
                    openAdResultCallback(true);
                    this.onAdCloseCallback = onAdCloseCallback;
                    this.rewardedVideoAd.show()
                        .catch(err => {
                        openAdResultCallback(false);
                        this.rewardedVideoAd.load();
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        TtVideoAd.videoAdList = new Map();
        class TtVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    let videoAd = TtVideoAd.getVideoAd(this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = TtVideoAd.getVideoAd(this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                }, (isReward) => {
                    if (isReward) {
                        this.onReward();
                    }
                    this.onClosed();
                });
            }
        }
        ads.TtVideoAdItem = TtVideoAdItem;
        class TtInterstitialAd {
            constructor(adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.adUnitId = adUnitId;
                this.intertitialAd = tt.createInterstitialAd({
                    adUnitId: adUnitId
                });
                this.intertitialAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                });
                this.intertitialAd.onError((err) => {
                    this.onStatusChange();
                });
                this.intertitialAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                });
                this.load();
            }
            static getVideoAd(adUnitId) {
                let intertitialAd = this.intertitialAdList.get(adUnitId);
                if (intertitialAd) {
                    if (intertitialAd.status == 2 || intertitialAd.status == 4) {
                        intertitialAd.destroy();
                        intertitialAd = null;
                    }
                }
                if (!intertitialAd) {
                    intertitialAd = new TtInterstitialAd(adUnitId);
                    this.intertitialAdList.set(adUnitId, intertitialAd);
                }
                return intertitialAd;
            }
            load() {
                this.intertitialAd.load();
            }
            destroy() {
                this.intertitialAd.destroy();
            }
            onStatusChange() {
                if (this.status == 1) {
                    for (let adItem of this.onLoadListenerList) {
                        adItem.onLoadSuccess();
                    }
                }
                if (this.status == 2) {
                    this.intertitialAd.destroy();
                    let intertitialAd = new TtInterstitialAd(this.adUnitId);
                    TtInterstitialAd.intertitialAdList.set(this.adUnitId, intertitialAd);
                    for (let adItem of this.onLoadListenerList) {
                        adItem.onLoadFail(new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL));
                    }
                }
                if (this.status == 4) {
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(false);
                    }
                }
            }
            isReady() {
                return this.status == 1;
            }
            isClose() {
                return this.status == 4;
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.intertitialAd.show()
                        .then(() => {
                        this.status = 3;
                        this.onAdCloseCallback = onAdCloseCallback;
                        openAdResultCallback(true);
                    })
                        .catch(err => {
                        openAdResultCallback(false);
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        TtInterstitialAd.intertitialAdList = new Map();
        class TtInterstitialItem extends ads.BaseInterstitialAdItem {
            load() {
                try {
                    let videoAd = TtInterstitialAd.getVideoAd(this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = TtInterstitialAd.getVideoAd(this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                        this.onShowFailed(adError);
                    }
                }, () => {
                    this.onClosed();
                });
            }
        }
        ads.TtInterstitialItem = TtInterstitialItem;
        class TtAdAgent extends ads.BaseAdAgent {
            get name() {
                return "tt";
            }
            isSupported() {
                return true;
            }
            isDev() {
                if (tt.getSystemInfoSync().platform == "devtools") {
                    return true;
                }
                return false;
            }
            createBannerAd(adItemParam) {
                if (!this.isSupported() || this.isDev()) {
                    return null;
                }
                if (this.ttbannerAdItem) {
                    return this.ttbannerAdItem;
                }
                else {
                    this.ttbannerAdItem = new TtBannerAdItem(adItemParam);
                    return this.ttbannerAdItem;
                }
            }
            createVideoAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new TtVideoAdItem(adItemParam);
            }
            createInterstitialAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new TtInterstitialItem(adItemParam);
            }
        }
        ads.TtAdAgent = TtAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class TtPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.shareTicket = null;
                this.adAgent = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.TouTiaoGame;
            }
            init() {
                if (tt.getLaunchOptionsSync) {
                    let launchOption = tt.getLaunchOptionsSync();
                    if (launchOption) {
                        this.setShareTicket(launchOption.shareTicket);
                    }
                }
                tt.showShareMenu({});
                tt.onShareAppMessage(() => {
                    let shareParam = core.PlatformManager.getInstance().getShareParam();
                    if (shareParam) {
                        this.shareId = new Date().getTime();
                        let queryStr = "ly_share_id=&" + this.shareId;
                        return {
                            title: shareParam.title,
                            imageUrl: shareParam.imageUrl,
                            query: queryStr
                        };
                    }
                });
                tt.onShow((res) => {
                });
                if (tt.getUpdateManager) {
                    let updateManager = tt.getUpdateManager();
                    updateManager.onCheckForUpdate(function (res) {
                        if (res.hasUpdate) {
                            console.log("用户新版本更新了...");
                        }
                    });
                    updateManager.onUpdateReady(function () {
                        tt.showModal({
                            title: '更新提示',
                            content: '新版本已经准备好，是否重启应用？',
                            success: function (res) {
                                if (res.confirm) {
                                    updateManager.applyUpdate();
                                }
                            }
                        });
                    });
                    updateManager.onUpdateFailed(function () {
                        tt.showModal({
                            title: '更新提示',
                            content: '新版本下载失败',
                            showCancel: false
                        });
                    });
                }
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.TtAdAgent();
                }
                return this.adAgent;
            }
            setShareTicket(shareTicket) {
                console.log("this shareTicket = " + this.shareTicket + ", new shareTicket = " + shareTicket);
                if (shareTicket && typeof shareTicket == "string" && shareTicket.length > 0) {
                    this.shareTicket = shareTicket;
                }
            }
            shareAnalytics() {
                let userId = null;
                try {
                    userId = ly.getSelfUser().getUserId();
                    userId = Number.parseInt(userId);
                }
                catch (error) {
                    console.log(error);
                }
                let data = { "user_id": userId };
                ly.LyHttp1.post(ly.ConstInner.URL_DOMAIN + "users/upload_share_time_0", JSON.stringify(data), (lyHttpResponse) => {
                    if (lyHttpResponse.code == 0) {
                    }
                });
            }
            isShare() {
                return true;
            }
            share(title, imageUrl, callback, query) {
                this.shareId = new Date().getTime();
                let queryStr = "ly_share_id=" + this.shareId;
                if (query) {
                    query.forEach((value, key) => {
                        queryStr += "&" + key + "=" + value;
                    });
                }
                tt.shareAppMessage({
                    title: title,
                    imageUrl: imageUrl,
                    query: queryStr,
                    success() {
                        callback(true);
                    },
                    fail(e) {
                        callback(false);
                    }
                });
                return true;
            }
            showToast(text) {
                tt.showToast({
                    title: text,
                    icon: "none"
                });
                return true;
            }
            login(callback) {
                tt.login({
                    force: false,
                    success: (res) => {
                        this.user = new core.TtUser();
                        this.user.login((retcode) => {
                            if (retcode == 0) {
                                callback(true);
                            }
                            else {
                                callback(false);
                            }
                        }, res);
                    },
                    fail: (res) => {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                try {
                    tt.getSetting({
                        success: (res) => {
                            let authSetting = res.authSetting;
                            if (authSetting && res.authSetting["scope.userInfo"]) {
                                if (this.user && autoSync) {
                                    this.user.syncThirdUserInfo();
                                }
                                callback(true);
                            }
                            else {
                                callback(false);
                            }
                        },
                        fail: (res) => {
                            callback(false);
                        }
                    });
                }
                catch (error) {
                    console.log(error);
                    callback(false);
                }
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
                this.checkThirdAuthUserInfo((isAuthed) => {
                    if (isAuthed) {
                        tt.getUserInfo({
                            success: (res) => {
                                let ttUserInfo = res.userInfo;
                                callback && callback(ttUserInfo);
                            },
                            fail: (res) => {
                                callback && callback(null);
                            }
                        });
                    }
                    else {
                        callback && callback(null);
                    }
                }, false);
            }
            parseThirdUserInfoOriginal(ttUserInfo) {
                if (ttUserInfo) {
                    let userInfo = new ly.UserInfoImpl();
                    if (ttUserInfo.nickName.length > 0) {
                        userInfo.userName = ttUserInfo.nickName;
                    }
                    userInfo.sex = ttUserInfo.gender;
                    userInfo.headImgUrl = ttUserInfo.avatarUrl;
                    userInfo.score_all = 0;
                    userInfo.score_week = 0;
                    return userInfo;
                }
                return null;
            }
        }
        core.TtPlatform = TtPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class TtUser extends core.NetUser {
            constructor() {
                super(...arguments);
                this.userSourceId = "";
            }
            login(callback, res) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let sourceId = null;
                let data = null;
                if (res.code == null) {
                    sourceId = localStorage.getItem("userSourceId");
                    if (sourceId) {
                        data = { source: "web", source_id: sourceId, game: ly.getAppConfig().appId };
                    }
                    else {
                        let time = new Date().getTime();
                        let newsourceId = '' + this.randomString(8) + time;
                        data = { source: "web", source_id: newsourceId, game: ly.getAppConfig().appId };
                        localStorage.setItem("userSourceId", newsourceId);
                    }
                }
                else {
                    sourceId = res.code;
                    data = { source: "tt", source_id: res.code, game: ly.getAppConfig().appId };
                }
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            if (!sourceId && lyHttpResponse.data.sourceId) {
                                this.userSourceId = lyHttpResponse.data.sourceId;
                                localStorage.setItem("userSourceId", this.userSourceId);
                            }
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
            randomString(len) {
                len = len || 6;
                var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
                var maxPos = $chars.length;
                var pwd = '';
                for (var i = 0; i < len; i++) {
                    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            }
        }
        core.TtUser = TtUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class NativePlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.nativeAnalyticsEvent = null;
            }
            getPlatformType() {
                if (lynative.nativePlatformType == 1) {
                    return ly.PlatformDefine.Native_Android;
                }
                else if (lynative.nativePlatformType == 2) {
                    return ly.PlatformDefine.Native_IOS;
                }
                return ly.PlatformDefine.Native_Android;
            }
            init() {
                lynative.init();
                ly.isExitGame = lynative.isExitGame;
                ly.openExitGame = lynative.openExitGame;
                ly.isBadWord = lynative.isBadWord;
                ly.isComment = lynative.isComment;
                ly.openComment = lynative.openComment;
                ly.doGetAntiAddictionInfo = lynative.doGetAntiAddictionInfo;
                ly.isPromote = () => {
                    return true;
                };
                ly.getPromoteItem = lynative.getPromoteItem;
                ly.core.promote = null;
                ly.switchOnAd = lynative.switchOnAd;
                ly.switchOffAd = lynative.switchOffAd;
                ly.getAdPositionParam = lynative.getAdPositionParam;
                ly.isAdReady = lynative.isAdReady;
                ly.openAd = lynative.openAd;
                ly.closeAd = lynative.closeAd;
                ly.closeAllBannerAd = lynative.closeAllBannerAd;
                ly.loadExpressAd = lynative.loadExpressAd;
                ly.openExpressAd = lynative.openExpressAd;
                ly.ads = null;
                this.nativeAnalyticsEvent = lynative.analytics.event;
                let analytics = lynative.analytics;
                ly.analytics = analytics;
                ly.analytics.event = this.analyticsEvent.bind(this);
                ly.isPay = lynative.payApi.isPay;
                ly.pay = this.payApiPay.bind(this);
                ly.payOrderNum = lynative.payApi.payOrderNum;
                ly.checkWaitHandleOrder = lynative.payApi.checkWaitHandleOrder;
                ly.hasVibrate = lynative.hasVibrate;
                ly.vibrate = lynative.vibrate;
                ly.cancelVibrate = lynative.cancelVibrate;
                ly.isSupportLogin = lynative.isSupportLogin;
                ly.loginTP = lynative.login;
                ly.isEnableShare = lynative.isEnableShare;
                ly.isSupportShare = lynative.isSupportShare;
                ly.shareText = lynative.shareText;
                ly.sharePicture = lynative.sharePicture;
                ly.shareWebpage = lynative.shareWebpage;
                ly.shareMiniApp = lynative.shareMiniApp;
                return true;
            }
            analyticsEvent(...args) {
                if (args.length == 1) {
                    this.nativeAnalyticsEvent(args[0]);
                }
                else if (args.length == 2) {
                    if (typeof args[1] == "string") {
                        this.nativeAnalyticsEvent(args[0], args[1]);
                    }
                    else {
                        args[1] = ly.Convert.MapToObj(args[1]);
                        this.nativeAnalyticsEvent(args[0], args[1]);
                    }
                }
                else if (args.length == 3) {
                    args[1] = ly.Convert.MapToObj(args[1]);
                    this.nativeAnalyticsEvent(args[0], args[1], args[2]);
                }
            }
            payApiPay(payRequestParam, onPayFinishCallback) {
                let tempRequestParam = ly.Convert.MapToObj(payRequestParam);
                lynative.payApi.pay(tempRequestParam, onPayFinishCallback);
            }
            showToast(text) {
                return lynative.showToast(text);
            }
            login(callback) {
                console.log("native login");
                this.user = new core.NativeUser();
                this.user.login((retcode) => {
                    if (retcode == 0) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                if (this.user && autoSync) {
                    this.user.syncThirdUserInfo();
                }
                callback(true);
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
                callback && callback(null);
            }
            parseThirdUserInfoOriginal(originalThirdUserInfo) {
                return null;
            }
        }
        core.NativePlatform = NativePlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class NativeUser extends core.NetUser {
            login(callback) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let source;
                if (lynative.nativePlatformType == 1) {
                    source = "android";
                }
                else if (lynative.nativePlatformType == 2) {
                    source = "ios";
                }
                else {
                    source = "native";
                }
                if (lynative.getChannelId() && lynative.getChannelId().length > 0) {
                    source += "_" + lynative.getChannelId();
                }
                let data = { source: source, source_id: lynative.getDeviceId(), game: ly.getAppConfig().appId };
                console.log("native login data: " + JSON.stringify(data));
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    console.log("native login code: " + lyHttpResponse.code);
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.NativeUser = NativeUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class VivoBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                var systemInfo = qg.getSystemInfoSync();
                if (systemInfo.platformVersionCode >= 1031) {
                    try {
                        this.bannerAd = qg.createBannerAd({
                            posId: this.getAdPlacementId(),
                            style: {}
                        });
                        this.bannerAd.onError((err) => {
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                            adError.setSdkCode("" + err.errCode);
                            adError.setSdkMsg("" + err.errMsg);
                            this.onLoadFail(adError);
                        });
                        this.bannerAd.onLoad(() => {
                            this.onLoadSuccess();
                        });
                    }
                    catch (error) {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setMsg(error.toString());
                        this.onLoadFail(adError);
                    }
                }
                else {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg("当前引擎版本不支持广告");
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.bannerAd) {
                    var adshow = this.bannerAd.show();
                    adshow && adshow.then(() => {
                        console.log("banner广告展示成功");
                        this.onShowSuccess();
                        this.bannerAd.onClose(() => {
                            this.close();
                        });
                    }).catch(err => {
                        console.log("banner广告展示失败", err);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode("" + err.errCode);
                        adError.setSdkMsg("" + err.errMsg);
                        this.onShowFailed(adError);
                    });
                }
            }
            close() {
                if (this.bannerAd) {
                    this.bannerAd.hide();
                    this.bannerAd.destroy();
                    this.bannerAd.offClose();
                    this.bannerAd = null;
                    this.onClosed();
                }
            }
        }
        ads.VivoBannerAdItem = VivoBannerAdItem;
        class VivoInterstitialAdItem extends ads.BaseInterstitialAdItem {
            load2() {
                var systemInfo = qg.getSystemInfoSync();
                if (systemInfo.platformVersionCode >= 1031) {
                    try {
                        this.interstitialAd = qg.createInterstitialAd({
                            posId: this.getAdPlacementId()
                        });
                        this.interstitialAd.onError((err) => {
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                            adError.setSdkCode("" + err.errCode);
                            adError.setSdkMsg("" + err.errMsg);
                            this.onLoadFail(adError);
                        });
                        this.interstitialAd.onLoad(() => {
                            this.onLoadSuccess();
                        });
                    }
                    catch (error) {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setMsg(error.toString());
                        this.onLoadFail(adError);
                    }
                }
                else {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg("当前引擎版本不支持广告");
                    this.onLoadFail(adError);
                }
            }
            load() {
                this.onLoadSuccess();
            }
            open() {
                this.interstitialAd = qg.createInterstitialAd({
                    posId: this.getAdPlacementId()
                });
                this.interstitialAd.onError((err) => {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setSdkCode("" + err.errCode);
                    adError.setSdkMsg("" + err.errMsg);
                    this.onLoadFail(adError);
                });
                this.interstitialAd.onLoad(() => {
                    this.onLoadSuccess();
                    this.open2();
                });
            }
            open2() {
                let adshow = this.interstitialAd.show();
                adshow && adshow.then(() => {
                    this.onShowSuccess();
                    this.interstitialAd.onClose(() => {
                        this.onClosed();
                    });
                }).catch(err => {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setSdkCode("" + err.errCode);
                    adError.setSdkMsg("" + err.errMsg);
                    console.log("插屏广告展示失败", err);
                    this.onShowFailed(adError);
                });
            }
        }
        VivoInterstitialAdItem.interstitialAdMap = new Map();
        VivoInterstitialAdItem.allInterstitialAdItems = new Map();
        ads.VivoInterstitialAdItem = VivoInterstitialAdItem;
        class VivoVideoAd {
            constructor(adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.rewardedVideoAd = qg.createRewardedVideoAd({
                    adUnitId: adUnitId
                });
                this.rewardedVideoAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onError((err) => {
                    this.status = 2;
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg("激励视频广告加载失败");
                    this.onStatusChange(adError);
                });
                this.rewardedVideoAd.onClose(res => {
                    this.status = 4;
                    this.onStatusChange();
                    if (res && res.isEnded || res === undefined) {
                        if (this.onAdCloseCallback) {
                            this.onAdCloseCallback(true);
                            return;
                        }
                    }
                    else {
                    }
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(false);
                    }
                });
            }
            static getVideoAd(adUnitId) {
                let rewardedVideoAd = this.videoAdList.get(adUnitId);
                if (!rewardedVideoAd) {
                    rewardedVideoAd = new VivoVideoAd(adUnitId);
                    this.videoAdList.set(adUnitId, rewardedVideoAd);
                }
                return rewardedVideoAd;
            }
            loadAd() {
                console.log("激励视频广告加载 - loadAd");
                if (this.rewardedVideoAd) {
                    this.rewardedVideoAd.load().then(() => {
                        this.status = 1;
                        this.onStatusChange();
                        console.log("激励视频广告加载成功 - loadAd");
                    }).catch(err => {
                        this.status = 2;
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setMsg("激励视频广告加载失败");
                        this.onStatusChange(adError);
                    });
                }
                else {
                    console.log("激励视频广告加载 - not find this.rewardedVideoAd");
                }
            }
            isReady() {
                return this.status == 1;
            }
            isLoadFail() {
                return this.status == 2;
            }
            isShowSuccess() {
                return this.status == 3;
            }
            isClose() {
                return this.status == 4;
            }
            isShowFail() {
                return this.status == 5;
            }
            onStatusChange(err) {
                let isReady = this.isReady();
                for (let adItem of this.onLoadListenerList) {
                    if (isReady) {
                        adItem.onLoadSuccess();
                    }
                    else if (this.isLoadFail()) {
                        err && adItem.onLoadFail(err);
                        adItem.onLoading();
                    }
                    else if (this.isShowSuccess()) {
                        adItem.onShowSuccess();
                    }
                }
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.status = 3;
                    this.onAdCloseCallback = onAdCloseCallback;
                    this.rewardedVideoAd.show().then(() => {
                        openAdResultCallback(true);
                        console.log("激励视频广告显示成功");
                    }).catch(err => {
                        console.log("激励视频广告显示失败", err);
                        openAdResultCallback(false);
                        this.rewardedVideoAd.load();
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        VivoVideoAd.videoAdList = new Map();
        class VivoVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                console.log('激励视频广告load');
                var systemInfo = qg.getSystemInfoSync();
                if (systemInfo.platformVersionCode >= 1041) {
                    try {
                        let videoAd = VivoVideoAd.getVideoAd(this.getAdPlacementId());
                        videoAd.onLoadListener(this);
                        videoAd.loadAd();
                    }
                    catch (error) {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setMsg(error.toString());
                        this.onLoadFail(adError);
                    }
                }
                else {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg("当前引擎版本不支持原生广告");
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = VivoVideoAd.getVideoAd(this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                }, (isReward) => {
                    if (isReward) {
                        this.onReward();
                    }
                    this.onClosed();
                });
            }
        }
        ads.VivoVideoAdItem = VivoVideoAdItem;
        class VivoAdAgent extends ads.BaseAdAgent {
            get name() {
                return "vivo_quickgame";
            }
            loadAdSource(adSourceParam, callback) {
                try {
                    var systemInfo = qg.getSystemInfoSync();
                    if (systemInfo.platformVersionCode >= 1031) {
                        callback(true);
                    }
                }
                catch (error) {
                    console.log(error);
                    callback(false);
                }
            }
            createBannerAd(adItemParam) {
                if (qg.createBannerAd) {
                    return new VivoBannerAdItem(adItemParam);
                }
                return null;
            }
            createInterstitialAd(adItemParam) {
                if (qg.createInterstitialAd) {
                    return new VivoInterstitialAdItem(adItemParam);
                }
                return null;
            }
            createVideoAd(adItemParam) {
                if (qg.createRewardedVideoAd) {
                    return new VivoVideoAdItem(adItemParam);
                }
                return null;
            }
        }
        ads.VivoAdAgent = VivoAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class VivoPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.adAgent = null;
                this.userInfo = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.VivoQuickGame;
            }
            init() {
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.VivoAdAgent();
                }
                return this.adAgent;
            }
            login(callback) {
                let token = localStorage.getItem('vivoToken');
                if (!token || !this.checkTokenAlive()) {
                    qg.authorize({
                        type: 'token',
                        success: (res) => {
                            localStorage.setItem('vivoToken', res.accessToken);
                            localStorage.setItem('tokenAliveTime', (res.expiresIn * 1000 + new Date().getTime()) + '');
                            qg.getProfile({
                                token: res.accessToken,
                                success: (data) => {
                                    this.userInfo = data;
                                    this.user = new core.VivoUser();
                                    this.user.login((retcode) => {
                                        if (retcode == 0) {
                                            callback(true);
                                        }
                                        else {
                                            callback(false);
                                        }
                                    }, data);
                                },
                                fail: (res) => {
                                    callback(false);
                                }
                            });
                        },
                        fail: (res) => {
                            callback(false);
                        }
                    });
                }
                else {
                    qg.getProfile({
                        token: token,
                        success: (data) => {
                            this.userInfo = data;
                            this.user = new core.VivoUser();
                            this.user.login((retcode) => {
                                if (retcode == 0) {
                                    callback(true);
                                }
                                else {
                                    callback(false);
                                }
                            }, data);
                        },
                        fail: (res) => {
                            callback(false);
                        }
                    });
                }
            }
            checkTokenAlive() {
                let flag = false;
                let timeString = localStorage.getItem('tokenAliveTime');
                if (timeString) {
                    try {
                        let time = parseInt(timeString);
                        let now = new Date().getTime();
                        if (time > now + 1000) {
                            flag = true;
                        }
                    }
                    catch (error) {
                        return false;
                    }
                }
                return flag;
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
                let vivoUserInfo = this.userInfo;
                callback && callback(vivoUserInfo);
            }
            parseThirdUserInfoOriginal(qgUserInfo) {
                if (qgUserInfo) {
                    let userInfo = new ly.UserInfoImpl();
                    userInfo.userName = qgUserInfo.nickname;
                    userInfo.headImgUrl = qgUserInfo.avatar;
                    return userInfo;
                }
                return null;
            }
            showToast(text) {
                qg.showToast({
                    message: text
                });
                return true;
            }
            hasVibrate() {
                return true;
            }
            vibrate(milliseconds, amplitude) {
                qg.vibrateShort();
            }
        }
        core.VivoPlatform = VivoPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class VivoUser extends core.NetUser {
            login(callback, retData) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "vivo", source_id: retData.openid, game: ly.getAppConfig().appId };
                console.log("vivo login data: " + JSON.stringify(data));
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    console.log("vivo login code: " + lyHttpResponse.code);
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.VivoUser = VivoUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class QQBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                try {
                    let screenWidth = qq.getSystemInfoSync().screenWidth;
                    let screenHeight = qq.getSystemInfoSync().screenHeight;
                    let bannerAd = qq.createBannerAd({
                        adUnitId: this.getAdPlacementId(),
                        style: {
                            left: 0,
                            top: screenHeight - 100,
                            width: screenWidth
                        }
                    });
                    bannerAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    bannerAd.onError((err) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode(err.errCode);
                        adError.setSdkMsg(err.errMsg);
                        this.onLoadFail(adError);
                    });
                    bannerAd.onResize(res => {
                        let realWidth = bannerAd.style.realWidth;
                        let realHeight = bannerAd.style.realHeight;
                        let left = (screenWidth - realWidth) / 2;
                        let top = screenHeight - realHeight;
                        bannerAd.style.left = left;
                        bannerAd.style.top = top;
                    });
                    this.bannerAd = bannerAd;
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.bannerAd) {
                    this.onShowSuccess();
                    this.bannerAd.show();
                }
                else {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                    adError.setMsg("无实例化广告");
                    this.onShowFailed(adError);
                }
            }
            close() {
                if (this.bannerAd) {
                    this.bannerAd.destroy();
                    this.bannerAd = null;
                }
                this.onClosed();
            }
            destroy() {
                if (this.bannerAd) {
                    this.bannerAd.destroy();
                }
            }
        }
        ads.QQBannerAdItem = QQBannerAdItem;
        class QQVideoAd {
            constructor(adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.rewardedVideoAd = qq.createRewardedVideoAd({
                    adUnitId: adUnitId
                });
                this.rewardedVideoAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onError((err) => {
                    this.status = 2;
                    this.onStatusChange();
                });
                this.rewardedVideoAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                    if (res && res.isEnded || res === undefined) {
                        if (this.onAdCloseCallback) {
                            this.onAdCloseCallback(true);
                            return;
                        }
                    }
                    else {
                    }
                    if (this.onAdCloseCallback) {
                        this.onAdCloseCallback(false);
                    }
                });
            }
            static getVideoAd(adUnitId) {
                let rewardedVideoAd = this.videoAdList.get(adUnitId);
                if (!rewardedVideoAd) {
                    rewardedVideoAd = new QQVideoAd(adUnitId);
                    this.videoAdList.set(adUnitId, rewardedVideoAd);
                }
                return rewardedVideoAd;
            }
            isReady() {
                return this.status == 1;
            }
            onStatusChange() {
                let isReady = this.isReady();
                for (let adItem of this.onLoadListenerList) {
                    if (isReady) {
                        adItem.onLoadSuccess();
                    }
                    else {
                        adItem.onLoading();
                    }
                }
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.status = 3;
                    openAdResultCallback(true);
                    this.onAdCloseCallback = onAdCloseCallback;
                    this.rewardedVideoAd.show()
                        .catch(err => {
                        openAdResultCallback(false);
                        this.rewardedVideoAd.load();
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        QQVideoAd.videoAdList = new Map();
        class QQVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    let videoAd = QQVideoAd.getVideoAd(this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = QQVideoAd.getVideoAd(this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                }, (isReward) => {
                    if (isReward) {
                        this.onReward();
                    }
                    this.onClosed();
                });
            }
        }
        ads.QQVideoAdItem = QQVideoAdItem;
        class QQInterstitialAdItem extends ads.BaseInterstitialAdItem {
            load() {
                try {
                    this.interstitialAd = qq.createInterstitialAd({
                        adUnitId: this.getAdPlacementId()
                    });
                    this.interstitialAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                    this.interstitialAd.onError((res) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode(res.errCode);
                        adError.setSdkMsg(res.errMsg);
                        this.onLoadFail(adError);
                    });
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.interstitialAd) {
                    let adshow = this.interstitialAd.show();
                    adshow && adshow.then(() => {
                        console.log("interstitial广告展示成功");
                        this.onShowSuccess();
                        this.interstitialAd.onClose(() => {
                            this.close();
                        });
                    }).catch(err => {
                        console.log("interstitial广告展示失败", err);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode("" + err.errCode);
                        adError.setSdkMsg("" + err.errMsg);
                        this.onShowFailed(adError);
                    });
                }
            }
            close() {
                if (this.interstitialAd) {
                    this.interstitialAd.destroy();
                    this.interstitialAd = null;
                    this.onClosed();
                }
            }
        }
        ads.QQInterstitialAdItem = QQInterstitialAdItem;
        class QQAdAgent extends ads.BaseAdAgent {
            get name() {
                return "qq";
            }
            isSupported() {
                return true;
            }
            isDev() {
                if (qq.getSystemInfoSync().platform == "devtools") {
                    return true;
                }
                return false;
            }
            createBannerAd(adItemParam) {
                if (!this.isSupported() || this.isDev()) {
                    return null;
                }
                if (this.qqbannerAdItem && this.qqbannerAdItem.isShow()) {
                    return this.qqbannerAdItem;
                }
                else {
                    this.qqbannerAdItem = new QQBannerAdItem(adItemParam);
                    return this.qqbannerAdItem;
                }
            }
            createVideoAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new QQVideoAdItem(adItemParam);
            }
            createInterstitialAd(adItemParam) {
                if (!this.isSupported() || !qq.createInterstitialAd) {
                    return null;
                }
                return new QQInterstitialAdItem(adItemParam);
            }
        }
        ads.QQAdAgent = QQAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class QQPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.shareTicket = null;
                this.adAgent = null;
                this.analytics = null;
                this.promoteAgent = null;
                this.shareTime = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.QQminiGame;
            }
            init() {
                if (qq.getLaunchOptionsSync) {
                    let launchOption = qq.getLaunchOptionsSync();
                    if (launchOption) {
                        this.setShareTicket(launchOption.shareTicket);
                    }
                }
                qq.showShareMenu({
                    showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
                });
                qq.onShareAppMessage(() => {
                    let shareParam = core.PlatformManager.getInstance().getShareParam();
                    if (shareParam) {
                        this.shareId = new Date().getTime();
                        this.shareCallback = null;
                        let queryStr = "ly_share_id=&" + this.shareId;
                        return {
                            title: shareParam.title,
                            imageUrl: shareParam.imageUrl,
                            query: queryStr
                        };
                    }
                });
                qq.onShow((res) => {
                    setTimeout(() => {
                        if (this.shareCallback != null) {
                            let endTime = new Date().getTime();
                            let flag = false;
                            if (endTime - this.shareTime > 4000) {
                                flag = true;
                            }
                            else {
                                flag = false;
                            }
                            this.setShareTicket(res.shareTicket);
                            this.shareCallback && this.shareCallback(flag);
                            this.shareCallback = null;
                        }
                    }, 1000);
                });
                if (qq.getUpdateManager) {
                    let updateManager = qq.getUpdateManager();
                    updateManager.onCheckForUpdate(function (res) {
                        if (res.hasUpdate) {
                            console.log("用户新版本更新了...");
                        }
                    });
                    updateManager.onUpdateReady(function () {
                        qq.showModal({
                            title: '更新提示',
                            content: '新版本已经准备好，是否重启应用？',
                            success(res) {
                                if (res.confirm) {
                                    updateManager.applyUpdate();
                                }
                            }
                        });
                    });
                    updateManager.onUpdateFailed(function () {
                        tt.showModal({
                            title: '更新提示',
                            content: '新版本下载失败',
                            showCancel: false
                        });
                    });
                }
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.QQAdAgent();
                }
                return this.adAgent;
            }
            getPlatformAnalytics() {
                if (!this.analytics) {
                    this.analytics = new ly.analytics.Ald();
                }
                return this.analytics;
            }
            share(title, imageUrl, callback, query) {
                this.shareId = new Date().getTime();
                this.shareTime = this.shareId;
                this.shareCallback = callback;
                let queryStr = "ly_share_id=" + this.shareId;
                if (query) {
                    query.forEach((value, key) => {
                        queryStr += "&" + key + "=" + value;
                    });
                }
                qq.shareAppMessage({
                    title: title,
                    imageUrl: imageUrl,
                    query: queryStr
                });
                return true;
            }
            showToast(text) {
                qq.showToast({
                    title: text,
                    icon: "none"
                });
                return true;
            }
            login(callback) {
                qq.login({
                    success: (res) => {
                        this.user = new core.QQUser();
                        this.user.login((retcode) => {
                            if (retcode == 0) {
                                callback(true);
                            }
                            else {
                                callback(false);
                            }
                        }, res);
                    },
                    fail: (res) => {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                try {
                    qq.getSetting({
                        success: (res) => {
                            let authSetting = res.authSetting;
                            if (authSetting && res.authSetting["scope.userInfo"]) {
                                if (this.user && autoSync) {
                                    this.user.syncThirdUserInfo();
                                }
                                callback(true);
                            }
                            else {
                                callback(false);
                            }
                        },
                        fail: (res) => {
                            callback(false);
                        }
                    });
                }
                catch (error) {
                    console.log(error);
                    callback(false);
                }
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
                this.checkThirdAuthUserInfo((isAuthed) => {
                    if (isAuthed) {
                        qq.getUserInfo({
                            success: (res) => {
                                let qqUserInfo = res.userInfo;
                                callback && callback(qqUserInfo);
                            },
                            fail: (res) => {
                                callback && callback(null);
                            }
                        });
                    }
                    else {
                        callback && callback(null);
                    }
                }, false);
            }
            parseThirdUserInfoOriginal(qqUserInfo) {
                if (qqUserInfo) {
                    let userInfo = new ly.UserInfoImpl();
                    userInfo.userName = qqUserInfo.nickName;
                    userInfo.sex = qqUserInfo.gender;
                    userInfo.headImgUrl = qqUserInfo.avatarUrl;
                    userInfo.score_all = 0;
                    userInfo.score_week = 0;
                    return userInfo;
                }
                return null;
            }
            setShareTicket(shareTicket) {
                console.log("this shareTicket = " + this.shareTicket + ", new shareTicket = " + shareTicket);
                if (shareTicket && typeof shareTicket == "string" && shareTicket.length > 0) {
                    this.shareTicket = shareTicket;
                }
            }
            isShare() {
                return true;
            }
            hasVibrate() {
                return true;
            }
            vibrate(milliseconds, amplitude) {
                qq.vibrateShort({});
            }
        }
        core.QQPlatform = QQPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class QQUser extends core.NetUser {
            login(callback, res) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "qq", source_id: res.code, game: ly.getAppConfig().appId };
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.QQUser = QQUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class HtmlPlatfrom extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.Web;
            }
            init() {
                return true;
            }
            isShare() {
                return false;
            }
            login(callback) {
                this.user = new core.HtmlUser();
                this.user.login((retcode) => {
                    if (retcode == 0) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
            }
            parseThirdUserInfoOriginal(webUserInfo) {
                return null;
            }
        }
        core.HtmlPlatfrom = HtmlPlatfrom;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class HtmlUser extends core.NetUser {
            constructor() {
                super(...arguments);
                this.userSourceId = null;
            }
            randomString(len) {
                len = len || 32;
                let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
                let uid = '' + new Date().getTime() + '_';
                for (let i = 0; i < len; i++) {
                    uid += chars[Math.round(Math.random() * chars.length)];
                }
                uid = uid.substr(0, len);
                return uid;
            }
            login(callback, res = null) {
                let appId = ly.getAppConfig().appId;
                if (!appId) {
                    callback(1);
                    return;
                }
                let isNewUser = true;
                let sourceId = localStorage.getItem(`userSourceId_${appId}`);
                if (!sourceId) {
                    isNewUser = false;
                    if (res && res.code) {
                        sourceId = res.code;
                    }
                    else {
                        sourceId = appId + '_' + this.randomString(64);
                    }
                    localStorage.setItem(`userSourceId_${appId}`, this.userSourceId);
                }
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "web", source_id: sourceId, game: appId };
                console.log("HtmlUser - data:", data);
                ly.LyHttp1.post({ url: url, timeout: 10000 }, JSON.stringify(data), (lyHttpResponse) => {
                    let retcode = 1;
                    console.log("HtmlUser - lyHttpResponse:", lyHttpResponse);
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            if (!isNewUser) {
                                this.userSourceId = lyHttpResponse.data.sourceId;
                            }
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log(error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.HtmlUser = HtmlUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class QttBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                if (qttGame) {
                    this.onLoadSuccess();
                }
            }
            open() {
                qttGame.showBanner();
                this.onShowSuccess();
            }
            close() {
                qttGame.hideBanner();
                this.onClosed();
            }
        }
        ads.QttBannerAdItem = QttBannerAdItem;
        class optionsAd {
        }
        ads.optionsAd = optionsAd;
        class QttInterationAdItem extends ads.BaseInteractionAdItem {
            load() {
                if (qttGame) {
                    var options = new optionsAd;
                    ;
                    let gametype = Math.floor(Math.random() * 3 + 1);
                    options.gametype = gametype;
                    options.rewardtype = 1;
                    options.data = {};
                    options.data.title = "刷新道具";
                    options.data.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png";
                    this.optionsAd = options;
                    options.callback = (res) => {
                        if (res == 1) {
                            this.onReward();
                            this.onClosed();
                        }
                        else if (res == 0) {
                            this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                        }
                        else {
                            this.onClosed();
                        }
                    };
                    this.onLoadSuccess();
                }
            }
            open() {
                qttGame.showHDAD(this.optionsAd);
            }
        }
        ads.QttInterationAdItem = QttInterationAdItem;
        class QttVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                if (qttGame) {
                    this.onLoadSuccess();
                }
            }
            open() {
                var options = new optionsAd;
                let gametype = Math.floor(Math.random() * 3 + 1);
                options.gametype = gametype;
                options.rewardtype = 1;
                options.data = {};
                options.data.title = "刷新道具";
                options.data.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png";
                this.onShowSuccess();
                qttGame.showVideo((res) => {
                    if (res == 0) {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                    else {
                        if (res == 1) {
                            this.onReward();
                        }
                        this.onClosed();
                    }
                }, options);
            }
        }
        ads.QttVideoAdItem = QttVideoAdItem;
        class QttAdAgent extends ads.BaseAdAgent {
            get name() {
                return "qtt";
            }
            isSupported() {
                return true;
            }
            createBannerAd(adItemParam) {
                return new QttBannerAdItem(adItemParam);
            }
            createVideoAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new QttVideoAdItem(adItemParam);
            }
            createInteractionAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new QttInterationAdItem(adItemParam);
            }
        }
        ads.QttAdAgent = QttAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class QttPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.adAgent = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.QTTGame;
            }
            init() {
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.QttAdAgent();
                }
                return this.adAgent;
            }
            isShare() {
                return false;
            }
            login(callback) {
                this.user = new core.HtmlUser();
                this.user.login((retcode) => {
                    if (retcode == 0) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
            }
            parseThirdUserInfoOriginal(webUserInfo) {
                return null;
            }
        }
        core.QttPlatform = QttPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class BaiduBannerAdItem extends ads.BaseBannerAdItem {
            constructor() {
                super(...arguments);
                this.isFirstLoad = true;
            }
            load() {
                var delayTime = 30000;
                if (this.isFirstLoad) {
                    this.isFirstLoad = false;
                    delayTime = 6000;
                }
                setTimeout(() => {
                    try {
                        let systemInfo = swan.getSystemInfoSync();
                        let screenWidth = systemInfo.screenWidth;
                        let screenHeight = systemInfo.screenHeight;
                        let bannerAd = swan.createBannerAd({
                            appSid: this.getAppId(),
                            adUnitId: this.getAdPlacementId(),
                            style: {
                                left: 0,
                                top: screenHeight - 100,
                                width: screenWidth
                            }
                        });
                        bannerAd.style.width = screenWidth;
                        bannerAd.style.left = (screenWidth - bannerAd.style.width) / 2;
                        bannerAd.style.top = screenHeight - 100;
                        bannerAd.onLoad(() => {
                            console.log("百度 - banner - onLoad");
                            this.onLoadSuccess();
                        });
                        bannerAd.onError((err) => {
                            console.log("百度 - banner - onError - ", err.errCode, err.errMsg);
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                            adError.setSdkCode(err.errCode);
                            adError.setSdkMsg(err.errMsg);
                            this.onLoadFail(adError);
                        });
                        this.bannerAd = bannerAd;
                    }
                    catch (error) {
                        console.log("百度 - banner - Error - ", error);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setMsg(error.toString());
                        this.onLoadFail(adError);
                    }
                }, delayTime);
            }
            open() {
                if (this.bannerAd) {
                    this.bannerAd.show()
                        .then(() => {
                        this.onShowSuccess();
                    })
                        .catch(err => {
                        console.log('百度 - banner - 广告组件出现问题', err);
                    });
                }
            }
            close() {
                if (this.bannerAd) {
                    this.onClosed();
                    this.bannerAd.destroy();
                    this.bannerAd = null;
                }
            }
        }
        ads.BaiduBannerAdItem = BaiduBannerAdItem;
        class BaiduVideoAd {
            constructor(appSid, adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.rewardedVideoAd = swan.createRewardedVideoAd({
                    appSid: appSid,
                    adUnitId: adUnitId
                });
                this.rewardedVideoAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                    console.log("百度 - 视频广告 - 加载成功");
                });
                this.rewardedVideoAd.onError((err) => {
                    this.status = 2;
                    this.onStatusChange();
                    console.log("百度 - 视频广告 - 加载失败 - err:", err);
                });
                this.rewardedVideoAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                    if (res && res.isEnded || res === undefined) {
                        if (this.onAdCloseCallback) {
                            console.log("百度 - 视频广告 - 看完关闭");
                            this.onAdCloseCallback(true);
                            return;
                        }
                    }
                    else {
                    }
                    if (this.onAdCloseCallback) {
                        console.log("百度 - 视频广告 - 未看完关闭");
                        this.onAdCloseCallback(false);
                    }
                });
                this.rewardedVideoAd.load()
                    .then()
                    .catch(err => {
                    console.log("百度 - 视频广告 - load err:", err);
                });
            }
            static getVideoAd(appSid, adUnitId) {
                let rewardedVideoAd = this.videoAdList.get(adUnitId);
                if (!rewardedVideoAd) {
                    rewardedVideoAd = new BaiduVideoAd(appSid, adUnitId);
                    this.videoAdList.set(adUnitId, rewardedVideoAd);
                }
                return rewardedVideoAd;
            }
            isReady() {
                return this.status == 1;
            }
            onStatusChange() {
                let isReady = this.isReady();
                for (let adItem of this.onLoadListenerList) {
                    if (isReady) {
                        adItem.onLoadSuccess();
                    }
                    else {
                        adItem.onLoading();
                    }
                }
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.status = 3;
                    openAdResultCallback(true);
                    this.onAdCloseCallback = onAdCloseCallback;
                    this.rewardedVideoAd.show()
                        .then()
                        .catch(err => {
                        console.log("百度 - 播放视频失败 - err:", err);
                        openAdResultCallback(false);
                        this.rewardedVideoAd.load();
                    });
                }
                else {
                    openAdResultCallback(false);
                }
            }
        }
        BaiduVideoAd.videoAdList = new Map();
        class BaiduVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    let videoAd = BaiduVideoAd.getVideoAd(this.getAppId(), this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = BaiduVideoAd.getVideoAd(this.getAppId(), this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                }, (isReward) => {
                    if (isReward) {
                        this.onReward();
                    }
                    this.onClosed();
                });
            }
        }
        ads.BaiduVideoAdItem = BaiduVideoAdItem;
        class BaiduAdAgent extends ads.BaseAdAgent {
            get name() {
                return "swan";
            }
            isSupported() {
                return true;
            }
            createBannerAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new BaiduBannerAdItem(adItemParam);
            }
            createVideoAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new BaiduVideoAdItem(adItemParam);
            }
        }
        ads.BaiduAdAgent = BaiduAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class BaiduPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.shareTicket = null;
                this.adAgent = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.BaiduGame;
            }
            init() {
                if (swan.getLaunchOptionsSync) {
                    const launchInfo = swan.getLaunchOptionsSync();
                    console.log('launchOptionsSync:', launchInfo.query);
                }
                swan.showShareMenu({});
                swan.onShareAppMessage(() => {
                    let shareParam = core.PlatformManager.getInstance().getShareParam();
                    if (shareParam) {
                        this.shareId = new Date().getTime();
                        let queryStr = "ly_share_id=&" + this.shareId;
                        return {
                            title: shareParam.title,
                            imageUrl: shareParam.imageUrl,
                            query: queryStr,
                            success: res => {
                                console.log('百度 - onShareAppMessage share success', JSON.stringify(res));
                            },
                            fail: err => {
                                console.log('百度 - onShareAppMessage share fail', JSON.stringify(err));
                            }
                        };
                    }
                });
                swan.onShow((res) => {
                    if (res && res.shareTicket) {
                        this.setShareTicket(res.shareTicket);
                    }
                });
                if (swan.getUpdateManager) {
                    const updateManager = swan.getUpdateManager();
                    updateManager.onCheckForUpdate(res => console.log(res));
                    updateManager.onUpdateReady(() => {
                        swan.showModal({
                            title: '有新版本',
                            content: '更新 ready， 是否重启游戏',
                            success(res) {
                                if (res.confirm) {
                                    updateManager.applyUpdate();
                                }
                            }
                        });
                    });
                    updateManager.onUpdateFailed(() => console.log('百度 - onUpdateFailed - 更新失败'));
                }
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.BaiduAdAgent();
                }
                return this.adAgent;
            }
            setShareTicket(shareTicket) {
                console.log("this shareTicket = " + this.shareTicket + ", new shareTicket = " + shareTicket);
                if (shareTicket && typeof shareTicket == "string" && shareTicket.length > 0) {
                    this.shareTicket = shareTicket;
                }
            }
            isShare() {
                return true;
            }
            share(title, imageUrl, callback, query) {
                this.shareId = new Date().getTime();
                let queryStr = "ly_share_id=" + this.shareId;
                if (query) {
                    query.forEach((value, key) => {
                        queryStr += "&" + key + "=" + value;
                    });
                }
                swan.shareAppMessage({
                    title: title,
                    imageUrl: imageUrl,
                    query: queryStr,
                    success() {
                        console.log("百度 - 分享成功");
                        callback(true);
                    },
                    fail(e) {
                        console.log("百度 - 分享失败");
                        callback(false);
                    }
                });
                return true;
            }
            showToast(text) {
                swan.showToast({
                    title: text,
                    icon: 'none',
                    duration: 1000,
                    success: () => { console.log('百度 - 提示框显示成功'); }
                });
            }
            login(callback) {
                let self = this;
                swan.getSwanId({
                    success: function (res) {
                        self.selfSwanId = res.data.swanid;
                        let swanId32 = self.selfSwanId.substr(0, 32);
                        console.log("百度 swanId = ", self.selfSwanId, "\n swanId32 = ", swanId32);
                        self.user = new core.HtmlUser();
                        self.user.login((retcode) => {
                            if (retcode == 0) {
                                console.log('百度 - 服务器 登录成功');
                                callback(true);
                            }
                            else {
                                console.log('百度 - 服务器 登录失败');
                                callback(false);
                            }
                        }, { code: swanId32 });
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                callback(false);
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
            }
            parseThirdUserInfoOriginal(baiduUserInfo) {
                return null;
            }
        }
        core.BaiduPlatform = BaiduPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class BaiduUser extends core.NetUser {
            login(callback, res) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "bdu", source_id: res.code, game: ly.getAppConfig().appId };
                console.log("baidu login data: " + JSON.stringify(data));
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    console.log("baidu login code: " + lyHttpResponse.code);
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log("baidu login error:", error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.BaiduUser = BaiduUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class UCBannerAdItem extends ads.BaseBannerAdItem {
            constructor() {
                super(...arguments);
                this.isFirstLoad = true;
            }
            load() {
                var delayTime = 30000;
                if (this.isFirstLoad) {
                    this.isFirstLoad = false;
                    delayTime = 6000;
                }
                setTimeout(() => {
                    try {
                        let systemInfo = uc.getSystemInfoSync();
                        let screenWidth = systemInfo.screenWidth;
                        let screenHeight = systemInfo.screenHeight;
                        let bannerAd = uc.createBannerAd({
                            style: {
                                left: 0,
                                top: screenHeight - 100,
                                width: screenWidth
                            }
                        });
                        bannerAd.style.width = screenWidth;
                        bannerAd.style.left = (screenWidth - bannerAd.style.width) / 2;
                        bannerAd.style.top = screenHeight - 100;
                        bannerAd.onLoad(() => {
                            console.log("UC - banner - onLoad");
                            this.onLoadSuccess();
                        });
                        bannerAd.onError((err) => {
                            console.log("UC - banner - onError - ", err.errCode, err.errMsg);
                            let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                            adError.setSdkCode(err.errCode);
                            adError.setSdkMsg(err.errMsg);
                            this.onLoadFail(adError);
                        });
                        this.bannerAd = bannerAd;
                    }
                    catch (error) {
                        console.log("UC - banner - Error - ", error);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setMsg(error.toString());
                        this.onLoadFail(adError);
                    }
                }, delayTime);
            }
            open() {
                if (this.bannerAd) {
                    this.bannerAd.show()
                        .then(() => {
                        this.onShowSuccess();
                    })
                        .catch(err => {
                        console.log('UC - banner - 广告组件出现问题', err);
                    });
                }
            }
            close() {
                if (this.bannerAd) {
                    this.onClosed();
                    this.bannerAd.destroy();
                    this.bannerAd = null;
                }
            }
        }
        ads.UCBannerAdItem = UCBannerAdItem;
        class UCVideoAd {
            constructor(appSid, adUnitId) {
                this.status = 0;
                this.onLoadListenerList = new Array();
                this.rewardedVideoAd = uc.createRewardedVideoAd();
                this.rewardedVideoAd.onLoad(() => {
                    this.status = 1;
                    this.onStatusChange();
                    console.log("UC - 视频广告 - 加载成功");
                });
                this.rewardedVideoAd.onError((err) => {
                    this.status = 2;
                    this.onStatusChange();
                    console.log("UC - 视频广告 - 加载失败 - err:", err);
                });
                this.rewardedVideoAd.onClose((res) => {
                    this.status = 4;
                    this.onStatusChange();
                    if (res && res.isEnded) {
                        if (this.onAdCloseCallback) {
                            console.log("UC - 视频广告 - 看完关闭.");
                            this.onAdCloseCallback(true);
                            return;
                        }
                    }
                    else {
                        if (this.onAdCloseCallback) {
                            console.log("UC - 视频广告 - 未看完关闭");
                            this.onAdCloseCallback(false);
                        }
                    }
                });
            }
            static getVideoAd(appSid, adUnitId) {
                adUnitId = "commonRewardVideo";
                let rewardedVideoAd = this.videoAdList.get(adUnitId);
                if (!rewardedVideoAd) {
                    rewardedVideoAd = new UCVideoAd(appSid, adUnitId);
                    this.videoAdList.set(adUnitId, rewardedVideoAd);
                }
                rewardedVideoAd.loadAd();
                return rewardedVideoAd;
            }
            loadAd() {
                this.rewardedVideoAd.load()
                    .then()
                    .catch(err => {
                    switch (err.errCode) {
                        case -3:
                            console.log("激励广告加载失败---调用太频繁", JSON.stringify(err));
                            break;
                        case -4:
                            console.log("激励广告加载失败--- 一分钟内不能重复加载", JSON.stringify(err));
                            break;
                        case 30008:
                            console.log("激励广告加载失败--- 当前启动来源不支持激励视频广告，请选择其他激励策略");
                            break;
                        default:
                            console.log("激励广告展示失败", JSON.stringify(err));
                            break;
                    }
                });
            }
            isReady() {
                return this.status == 1;
            }
            onStatusChange() {
                let isReady = this.isReady();
                for (let adItem of this.onLoadListenerList) {
                    if (isReady) {
                        adItem.onLoadSuccess();
                    }
                    else {
                        adItem.onLoading();
                    }
                }
            }
            onLoadListener(adItem) {
                if (this.isReady()) {
                    adItem.onLoadSuccess();
                }
                this.onLoadListenerList.push(adItem);
            }
            offLoadListener(adItem) {
                let index = this.onLoadListenerList.findIndex((value, index, arr) => {
                    return value == adItem;
                });
                this.onLoadListenerList.splice(index, 1);
            }
            open(openAdResultCallback, onAdCloseCallback) {
                if (this.isReady()) {
                    this.status = 3;
                    this.onAdCloseCallback = onAdCloseCallback;
                    let t_ad = this.rewardedVideoAd.show();
                    if (t_ad) {
                        t_ad.then(() => {
                            console.log("UC - open - 激励视频广告显示成功");
                            if (typeof openAdResultCallback == "function") {
                                openAdResultCallback(true);
                            }
                        }).catch(err => {
                            console.log("UC - open - 激励视频广告显示失败", err);
                            if (typeof openAdResultCallback == "function") {
                                openAdResultCallback(false);
                            }
                        });
                    }
                    else {
                        console.log("UC - open - t_ad = null");
                        if (typeof openAdResultCallback == "function") {
                            openAdResultCallback(false);
                        }
                    }
                }
                else {
                    console.log("UC - open - 广告尚未准备好.");
                    openAdResultCallback(false);
                }
            }
        }
        UCVideoAd.videoAdList = new Map();
        class UCVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    let videoAd = UCVideoAd.getVideoAd(this.getAppId(), this.getAdPlacementId());
                    videoAd.onLoadListener(this);
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                let videoAd = UCVideoAd.getVideoAd(this.getAppId(), this.getAdPlacementId());
                videoAd.offLoadListener(this);
                videoAd.open((success) => {
                    if (success) {
                        this.onShowSuccess();
                    }
                    else {
                        this.onShowFailed(new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL));
                    }
                }, (isReward) => {
                    if (isReward) {
                        this.onReward();
                    }
                    this.onClosed();
                });
            }
        }
        ads.UCVideoAdItem = UCVideoAdItem;
        class UCAdAgent extends ads.BaseAdAgent {
            get name() {
                return "uc";
            }
            isSupported() {
                return true;
            }
            createBannerAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new UCBannerAdItem(adItemParam);
            }
            createVideoAd(adItemParam) {
                if (!this.isSupported()) {
                    return null;
                }
                return new UCVideoAdItem(adItemParam);
            }
        }
        ads.UCAdAgent = UCAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class UCPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.guestid = null;
                this.shareTicket = null;
                this.adAgent = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.UCGame;
            }
            getSystemInfoSync() {
                if (!uc)
                    return false;
                try {
                    const data = uc.getSystemInfoSync();
                    return JSON.parse(data);
                }
                catch (err) {
                }
                return false;
            }
            ;
            compareVersion(v1, v2) {
                v1 = v1.split('.');
                v2 = v2.split('.');
                const len = Math.max(v1.length, v2.length);
                while (v1.length < len) {
                    v1.push('0');
                }
                while (v2.length < len) {
                    v2.push('0');
                }
                for (let i = 0; i < len; i++) {
                    const num1 = parseInt(v1[i]);
                    const num2 = parseInt(v2[i]);
                    if (num1 > num2) {
                        return 1;
                    }
                    else if (num1 < num2) {
                        return -1;
                    }
                }
                return 0;
            }
            ;
            checkVersionAvailable(version) {
                const { version: UCVersion } = this.getSystemInfoSync() || {};
                if (!UCVersion || !version)
                    return false;
                return this.compareVersion(UCVersion, version) >= 0;
            }
            ;
            checkSDKVersionAvailable(version) {
                const { SDKVersion } = this.getSystemInfoSync() || {};
                if (!SDKVersion || !version)
                    return false;
                return this.compareVersion(SDKVersion, version) >= 0;
            }
            ;
            fetchSessionData(params) {
                const { request_id: requestID } = params;
                const paramStr = signSort(params).map(([name, value]) => `${name}=${value}`).join('&');
                const signText = `${clientID}${clientKey}${requestID}${paramStr}`;
                const sign = md5(signText);
                const postData = Object.assign(Object.assign({}, params), { sign });
                return request('/getSessionData', {
                    method: 'POST',
                    body: JSON.stringify(postData),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                });
            }
            ;
            checkSession() {
                return new Promise((resolve) => {
                    uc.checkSession({
                        success: () => resolve({ code: 0 }),
                        fail: () => resolve({ code: -1 }),
                    });
                });
            }
            ;
            getSetting() {
                return new Promise((resolve, reject) => {
                    uc.getSetting({
                        success: (data) => resolve(data),
                        fail: (data) => reject(data),
                    });
                });
            }
            ;
            checkLogin() {
                return new Promise((resolve, reject) => {
                    uc.isLogin({
                        success: (data) => resolve(data),
                        fail: (data) => reject(data),
                    });
                });
            }
            ;
            checkSessionAvailable() {
                const checkSessionRes = this.checkSession();
                return checkSessionRes.code === 0;
            }
            ;
            getSessionData(code) {
                const isSessionAvailable = this.checkSessionAvailable();
                if (isSessionAvailable)
                    return { code: 0, msg: 'session available' };
                const params = {
                    request_id: Date.now(),
                    code,
                    app_id: "appID",
                    client_id: "clientID",
                    timestamp: Date.now(),
                };
                return this.fetchSessionData(params);
            }
            ;
            init() {
                if (uc.getLaunchOptionsSync) {
                    const isAvailable = this.checkSDKVersionAvailable('1.0.3');
                    if (isAvailable) {
                        uc.getLaunchOptionsSync({
                            success: res => {
                                console.log('getLaunchOptionsSync success', JSON.stringify(res));
                                console.log('launchOptionsSync:', res.query);
                            },
                            fail: err => {
                                console.log('getLaunchOptionsSync fail', JSON.stringify(err));
                            },
                        });
                    }
                    else {
                        console.error("UCPlatform - init - getLaunchOptionsSync: 版本过低");
                    }
                }
                const isAvailable = this.checkVersionAvailable('12.6.5');
                if (isAvailable) {
                }
                else {
                    console.error("UCPlatform - init - enableWebGL: 版本过低");
                }
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.UCAdAgent();
                }
                return this.adAgent;
            }
            setShareTicket(shareTicket) {
                console.log("this shareTicket = " + this.shareTicket + ", new shareTicket = " + shareTicket);
                if (shareTicket && typeof shareTicket == "string" && shareTicket.length > 0) {
                    this.shareTicket = shareTicket;
                }
            }
            isShare() {
                return true;
            }
            share(title, imageUrl, callback, query) {
                this.shareId = new Date().getTime();
                let queryStr = "ly_share_id=" + this.shareId;
                if (query) {
                    query.forEach((value, key) => {
                        queryStr += "&" + key + "=" + value;
                    });
                }
                uc.shareAppMessage({
                    title: title,
                    imageUrl: imageUrl,
                    query: queryStr,
                    success: (res) => {
                        console.log("UC - 分享成功");
                        callback(true);
                    },
                    fail: (err) => {
                        console.log("UC - 分享失败");
                        callback(false);
                    },
                });
                return true;
            }
            showToast(text) {
                if (!uc) {
                    return;
                }
                try {
                    let options = {
                        content: text,
                        duration: 1000,
                        success: () => { console.log('UC - 提示框显示成功'); }
                    };
                    uc.showToast(options);
                }
                catch (err) {
                    console.log('showToast error: ', err);
                }
            }
            login(callback) {
                let self = this;
                uc.getGuestInfo({
                    success: function (data) {
                        console.log("UC - 游客登录成功: ", data);
                        var guestid = data.guestid;
                        self.guestid = guestid;
                        self.user = new core.HtmlUser();
                        self.user.login((retcode) => {
                            if (retcode == 0) {
                                console.log('UC - 服务器 登录成功');
                                callback(true);
                            }
                            else {
                                console.log('UC - 服务器 登录失败');
                                callback(false);
                            }
                        }, { code: guestid });
                    },
                    fail: function (data) {
                        console.error("UC - 游客登录失败: ", data);
                    },
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
                if (typeof callback == "function") {
                    callback(false);
                }
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
            }
            parseThirdUserInfoOriginal(UCUserInfo) {
                return null;
            }
        }
        core.UCPlatform = UCPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class UCUser extends core.NetUser {
            login(callback, res) {
                let url = ly.ConstInner.URL_DOMAIN_LOGIN + ly.ConstInner.URL_DOMAIN_LOGIN_INTERFACE;
                let data = { source: "uc", source_id: res.code, game: ly.getAppConfig().appId };
                console.log("UC login data: " + JSON.stringify(data));
                ly.LyHttp1.post({ url: url, timeout: 5000 }, JSON.stringify(data), (lyHttpResponse) => {
                    console.log("UC login code: " + lyHttpResponse.code);
                    let retcode = 1;
                    if (lyHttpResponse.code == 0) {
                        try {
                            let netUserInfo = new core.NetUserInfo();
                            Object.assign(netUserInfo, lyHttpResponse.data);
                            this.setUserInfo(netUserInfo.toUserInfo());
                            this.syncThirdUserInfo();
                            retcode = 0;
                        }
                        catch (error) {
                            retcode = 1;
                            console.log("UC login error:", error);
                        }
                    }
                    else {
                        retcode = -1;
                    }
                    callback(retcode);
                });
            }
        }
        core.UCUser = UCUser;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var ads;
    (function (ads) {
        class LianShangBannerAdItem extends ads.BaseBannerAdItem {
            load() {
                let systemInfo = wuji.getSystemInfoSync();
                try {
                    let windowWidth = systemInfo.windowWidth;
                    let windowHeight = systemInfo.windowHeight;
                    let targetBannerAdWidth = windowWidth - 20;
                    this.bannerAd = qg.createBannerAd({
                        posId: this.getAdPlacementId(),
                        style: {
                            left: (windowWidth - targetBannerAdWidth) / 2,
                            top: windowHeight,
                            width: targetBannerAdWidth
                        }
                    });
                    this.bannerAd.onError((err) => {
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode("" + err.errCode);
                        adError.setSdkMsg("" + err.errMsg);
                        this.onLoadFail(adError);
                    });
                    this.bannerAd.onLoad(() => {
                        this.onLoadSuccess();
                    });
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.bannerAd) {
                    this.bannerAd.show()
                        .then(() => {
                        console.log("banner广告展示成功");
                        this.onShowSuccess();
                        if (this.bannerAd.onClose) {
                            this.bannerAd.onClose(() => {
                                this.close();
                            });
                        }
                    }).catch(err => {
                        console.log("banner广告展示失败", err);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                        adError.setSdkCode("" + err.errCode);
                        adError.setSdkMsg("" + err.errMsg);
                        this.onShowFailed(adError);
                    });
                }
            }
            close() {
                if (this.bannerAd) {
                    this.bannerAd.hide();
                    this.bannerAd.destroy();
                    if (this.bannerAd.offClose) {
                        this.bannerAd.offClose();
                    }
                    this.bannerAd = null;
                    this.onClosed();
                }
            }
        }
        ads.LianShangBannerAdItem = LianShangBannerAdItem;
        class LianShangVideoAdItem extends ads.BaseVideoAdItem {
            load() {
                try {
                    if (!this.videoAd) {
                        this.videoAd = wuji.createRewardedVideoAd({
                            adUnitId: this.getAdPlacementId()
                        });
                        this.videoAd.onError((err) => {
                            if (this.isLoadSuccess()) {
                                let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                                adError.setSdkCode("" + err.errCode);
                                adError.setSdkMsg("" + err.errMsg);
                                this.onShowFailed(adError);
                            }
                            else {
                                let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                                adError.setSdkCode("" + err.errCode);
                                adError.setSdkMsg("" + err.errMsg);
                                this.onLoadFail(adError);
                            }
                        });
                        this.videoAd.onLoad(() => {
                            this.onLoadSuccess();
                        });
                    }
                    this.videoAd.load();
                }
                catch (error) {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_LOAD_FAIL);
                    adError.setMsg(error.toString());
                    this.onLoadFail(adError);
                }
            }
            open() {
                if (this.videoAd) {
                    this.videoAd.onClose(res => {
                        if (res.isEnded) {
                            this.onReward();
                            console.log('激励视频广告完成，发放奖励');
                        }
                        else {
                            console.log('激励视频广告取消关闭，不发放奖励');
                        }
                        this.videoAd = null;
                        this.onClosed();
                    });
                    this.videoAd.show()
                        .then(() => {
                        console.log("激励视频广告显示成功");
                        this.onShowSuccess();
                    })
                        .catch(err => {
                        console.log(err);
                        let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                        adError.setMsg(err.toString());
                        this.onShowFailed(adError);
                    });
                }
                else {
                    let adError = new ads.AdError(ads.AdErrorCode.CODE_AD_SHOW_FAIL);
                    adError.setMsg("展示失败，广告已被销毁");
                    this.onShowFailed(adError);
                }
            }
        }
        ads.LianShangVideoAdItem = LianShangVideoAdItem;
        class LianShangAdAgent extends ads.BaseAdAgent {
            get name() {
                return "lianshang_miniapp";
            }
            loadAdSource(adSourceParam, callback) {
                callback(true);
            }
            createBannerAd(adItemParam) {
                if (wuji.createBannerAd) {
                    return new LianShangBannerAdItem(adItemParam);
                }
                return null;
            }
            createVideoAd(adItemParam) {
                if (wuji.createRewardedVideoAd) {
                    return new LianShangVideoAdItem(adItemParam);
                }
                return null;
            }
        }
        ads.LianShangAdAgent = LianShangAdAgent;
    })(ads = ly.ads || (ly.ads = {}));
})(ly || (ly = {}));
var ly;
(function (ly) {
    var core;
    (function (core) {
        class LianShangPlatform extends core.BasePlatform {
            constructor() {
                super(...arguments);
                this.user = null;
                this.adAgent = null;
            }
            getPlatformType() {
                return ly.PlatformDefine.LianShangMiniGame;
            }
            init() {
                return true;
            }
            getPlatformAdAgent() {
                if (!this.adAgent) {
                    this.adAgent = new ly.ads.LianShangAdAgent();
                }
                return this.adAgent;
            }
            login(callback) {
                this.user = new core.HtmlUser();
                this.user.login((retcode) => {
                    if (retcode == 0) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                });
            }
            logout() {
                this.user = null;
            }
            checkThirdAuthUserInfo(callback, autoSync) {
            }
            getUser() {
                return this.user;
            }
            getThirdUserInfoOriginal(callback) {
            }
            parseThirdUserInfoOriginal(webUserInfo) {
                return null;
            }
            showToast(text) {
                wuji.showToast({
                    title: text,
                    duration: 2000,
                });
                return true;
            }
            hasVibrate() {
                return true;
            }
            vibrate(milliseconds, amplitude) {
                if (milliseconds < 400) {
                    wuji.vibrateShort();
                }
                else {
                    wuji.vibrateLong();
                }
            }
        }
        core.LianShangPlatform = LianShangPlatform;
    })(core = ly.core || (ly.core = {}));
})(ly || (ly = {}));
