var jsRoutes = {}; (function(_root){
var _nS = function(c,f,b){var e=c.split(f||"."),g=b||_root,d,a;for(d=0,a=e.length;d<a;d++){g=g[e[d]]=g[e[d]]||{}}return g}
var _qS = function(items){var qs = ''; for(var i=0;i<items.length;i++) {if(items[i]) qs += (qs ? '&' : '') + items[i]}; return qs ? ('?' + qs) : ''}
var _s = function(p,s){return p+((s===true||(s&&s.secure))?'s':'')+'://'}
var _wA = function(r){return {ajax:function(c){c=c||{};c.url=r.url;c.type=r.method;return jQuery.ajax(c)}, method:r.method,type:r.method,url:r.url,absoluteURL: function(s){return _s('http',s)+'adnet.qq.com'+r.url},webSocketURL: function(s){return _s('ws',s)+'adnet.qq.com'+r.url}}}
_nS('controllers.UserController'); _root['controllers']['UserController']['getLoginStatus'] = 
        function() {
          return _wA({method:"GET", url:"/" + "user/getloginstatus"})
        }
      ;
_nS('controllers.UserController'); _root['controllers']['UserController']['logout'] = 
        function() {
          return _wA({method:"GET", url:"/" + "user/logout"})
        }
      ;
_nS('controllers.UserController'); _root['controllers']['UserController']['getProfile'] = 
        function(accountId0) {
          return _wA({method:"GET", url:"/" + "user/getprofile/" + (function(k,v) {return v})("accountId", accountId0)})
        }
      ;
_nS('controllers.Home'); _root['controllers']['Home']['index'] = 
        function() {
        
          if (true) {
            return _wA({method:"GET", url:"/" + "index/add"})
          }
        
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getMemberIncome'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "report/memberincome/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getIndexReportChartData'] = 
        function() {
          return _wA({method:"POST", url:"/" + "index/chart/getIndexReportChartData"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getMemberQualityScore'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "report/memberscore/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getMemberClassType'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "member/memberclasstype/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['isReportDelay'] = 
        function() {
          return _wA({method:"GET", url:"/" + "index/reportStatus"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getReportTableData'] = 
        function() {
          return _wA({method:"POST", url:"/" + "report/getReportTableData"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getAllPlacementInfoByUin'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "report/getAllPlacementInfoByUin" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0)])})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getReportChartData'] = 
        function() {
          return _wA({method:"POST", url:"/" + "report/getReportChartData"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getSumReportTableData'] = 
        function() {
          return _wA({method:"POST", url:"/" + "report/getSumReportTableData"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['downloadReport'] = 
        function() {
          return _wA({method:"POST", url:"/" + "report/download"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['queryBillingSettlement'] = 
        function() {
          return _wA({method:"POST", url:"/" + "report/queryBillingSettlement"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getMemberSupplierInfo'] = 
        function() {
          return _wA({method:"POST", url:"/" + "report/memberSupplierInfo"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getRealTimeChartData'] = 
        function() {
          return _wA({method:"POST", url:"/" + "report/getRealTimeChartData"})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['getProvicne'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "province/get" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0)])})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['getMailCode'] = 
        function() {
          return _wA({method:"POST", url:"/" + "register/getMailCode"})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['compareEmailVerification'] = 
        function() {
          return _wA({method:"POST", url:"/" + "register/compareEmailVerification"})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['registerSecondStep'] = 
        function(emailCode0) {
          return _wA({method:"POST", url:"/" + "register/registerSecondStep" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("emailCode", emailCode0)])})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['getCity'] = 
        function(memberId0,provinceId1) {
          return _wA({method:"GET", url:"/" + "city/get" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("provinceId", provinceId1)])})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['getBank'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "bank" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0)])})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['getBankBranch'] = 
        function(memberId0,bankId1) {
          return _wA({method:"GET", url:"/" + "bankbranch" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("bankId", bankId1)])})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['getMemberView'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "member/getMemberView" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0)])})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['registerThirdStep'] = 
        function() {
          return _wA({method:"POST", url:"/" + "register/registerThirdStep"})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['registerFourthStep'] = 
        function() {
          return _wA({method:"POST", url:"/" + "register/registerFourthStep"})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['getPhoneCode'] = 
        function() {
          return _wA({method:"POST", url:"/" + "register/user/getPhoneCode"})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['comparePhoneCode'] = 
        function() {
          return _wA({method:"POST", url:"/" + "register/user/comparePhoneCode"})
        }
      ;
_nS('controllers.RegisterController'); _root['controllers']['RegisterController']['applyForOperator'] = 
        function() {
          return _wA({method:"POST", url:"/" + "register/user/applyForOperator"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMedium'] = 
        function(memberId0,mediumId1) {
          return _wA({method:"GET", url:"/" + "medium/get/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("mediumId", mediumId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumList'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "medium/list/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['searchMediumList'] = 
        function() {
          return _wA({method:"POST", url:"/" + "medium/search"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getLevel1IndustryList'] = 
        function() {
          return _wA({method:"GET", url:"/" + "medium/industryLevel1List"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getLevel2IndustryList'] = 
        function(industryId0) {
          return _wA({method:"GET", url:"/" + "medium/industryLevel2List/" + (function(k,v) {return v})("industryId", industryId0)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['addMedium'] = 
        function() {
          return _wA({method:"POST", url:"/" + "medium/create"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['updateMedium'] = 
        function() {
          return _wA({method:"POST", url:"/" + "medium/update"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['updateMediumToDraft'] = 
        function() {
          return _wA({method:"POST", url:"/" + "medium/updateToDraft"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getLatestH5Token'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "medium/h5Token" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0)])})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getLatestH5File'] = 
        function() {
          return _wA({method:"GET", url:"/" + "medium/h5File"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['verifyDomainFile'] = 
        function(memberId0,domain1) {
          return _wA({method:"GET", url:"/" + "medium/verifyDomainFile" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("domain", domain1)])})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['verifyDomainHtml'] = 
        function(memberId0,domain1) {
          return _wA({method:"GET", url:"/" + "medium/verifyDomainHtml" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("domain", domain1)])})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['isFreeDomain'] = 
        function(memberId0,domain1) {
          return _wA({method:"GET", url:"/" + "medium/isFreeDomain" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("domain", domain1)])})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['isInDownloadPauseWhiteList'] = 
        function(memberId0,mediumId1) {
          return _wA({method:"GET", url:"/" + "medium/isInDownloadPauseWhiteList" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("mediumId", mediumId1)])})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getDemographyMediumList'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "medium/demography/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getAppMarket'] = 
        function() {
          return _wA({method:"GET", url:"/" + "medium/appMarket"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['verifyPackageName'] = 
        function() {
          return _wA({method:"POST", url:"/" + "medium/verifyPackageName"})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getIndustryTree'] = 
        function() {
          return _wA({method:"GET", url:"/" + "medium/industry"})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['searchMonthBillsList'] = 
        function() {
          return _wA({method:"GET", url:"/" + "settlement/search"})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['getMediumSettlementList'] = 
        function() {
          return _wA({method:"POST", url:"/" + "settlement/getMediumSettlement"})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['getAllDetailMedium'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "settlement/getMedium/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['getMemberSettlementList'] = 
        function() {
          return _wA({method:"POST", url:"/" + "settlement/getMemberSettlement"})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['downloadReport'] = 
        function() {
          return _wA({method:"POST", url:"/" + "settlement/download"})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['mediumDownloadReport'] = 
        function() {
          return _wA({method:"POST", url:"/" + "settlement/mediumDownload"})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['isApiMember'] = 
        function(memberId0,month1) {
          return _wA({method:"GET", url:"/" + "settlement/apiMember/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("month", month1)})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['getSettlementConversion'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "settlement/conversion/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['verifyAdvertiserInfo'] = 
        function(memberId0,advertiserId1) {
          return _wA({method:"GET", url:"/" + "settlement/getCustomerInfo/" + (function(k,v) {return v})("memberId", encodeURIComponent(memberId0)) + "/" + (function(k,v) {return v})("advertiserId", encodeURIComponent(advertiserId1))})
        }
      ;
_nS('controllers.SettlementController'); _root['controllers']['SettlementController']['decideSettlementConversion'] = 
        function() {
          return _wA({method:"POST", url:"/" + "settlement/conversion/addOrUpdate"})
        }
      ;
_nS('controllers.MtaController'); _root['controllers']['MtaController']['getAllMtaReportApplicationInfoByMemberId'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "mta/getAllMtaReportApplicationInfoByMemberId/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MtaController'); _root['controllers']['MtaController']['queryMtaReport'] = 
        function() {
          return _wA({method:"POST", url:"/" + "mta/report/query"})
        }
      ;
_nS('controllers.MtaController'); _root['controllers']['MtaController']['queryMtaChart'] = 
        function() {
          return _wA({method:"POST", url:"/" + "mta/chart/query"})
        }
      ;
_nS('controllers.MtaController'); _root['controllers']['MtaController']['addAppToMta'] = 
        function() {
          return _wA({method:"POST", url:"/" + "mta/addAppToMta"})
        }
      ;
_nS('controllers.MtaController'); _root['controllers']['MtaController']['downloadMtaReport'] = 
        function(memberId0,appId1,startDate2,endDate3) {
          return _wA({method:"GET", url:"/" + "mta/report/download/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", encodeURIComponent(appId1)) + "/" + (function(k,v) {return v})("startDate", encodeURIComponent(startDate2)) + "/" + (function(k,v) {return v})("endDate", encodeURIComponent(endDate3))})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['addPlacement'] = 
        function() {
          return _wA({method:"POST", url:"/" + "placement/create"})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['editPlacement'] = 
        function() {
          return _wA({method:"POST", url:"/" + "placement/edit"})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['getPlacement'] = 
        function(memberId0,placementId1) {
          return _wA({method:"GET", url:"/" + "placement/get/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("placementId", placementId1)})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['searchPlacementList'] = 
        function() {
          return _wA({method:"POST", url:"/" + "placement/search"})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['updatePlacementPauseStatus'] = 
        function(memberId0,placementId1,pauseStatus2) {
          return _wA({method:"POST", url:"/" + "placement/updatePauseStatus" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("placementId", placementId1), (function(k,v){return k+'='+(!!v)})("pauseStatus", pauseStatus2)])})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['unfreezePlacement'] = 
        function(memberId0,placementId1) {
          return _wA({method:"POST", url:"/" + "placement/unfreezePlacement" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("placementId", placementId1)])})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['addPlacementVersion'] = 
        function(memberId0,placementId1) {
          return _wA({method:"POST", url:"/" + "placement/addPlacementVersion" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("memberId", memberId0), (function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("placementId", placementId1)])})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['getPlacementListByMediumId'] = 
        function() {
          return _wA({method:"POST", url:"/" + "placement/getPlacementListByMediumId"})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['getTemplateType'] = 
        function(memberId0,placementId1) {
          return _wA({method:"GET", url:"/" + "placement/templateType/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("placementId", placementId1)})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['deletePlacement'] = 
        function(memberId0,placementId1) {
          return _wA({method:"POST", url:"/" + "placement/delete/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("placementId", placementId1)})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['batchUpdatePlacementPauseStatus'] = 
        function() {
          return _wA({method:"POST", url:"/" + "placement/batchUpdatePauseStatus"})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['batchDeletePlacement'] = 
        function() {
          return _wA({method:"POST", url:"/" + "placement/batchDelete"})
        }
      ;
_nS('controllers.PlacementController'); _root['controllers']['PlacementController']['batchUnfreezePlacement'] = 
        function() {
          return _wA({method:"POST", url:"/" + "placement/batchUnfreeze"})
        }
      ;
_nS('controllers.TemplateController'); _root['controllers']['TemplateController']['getTemplate'] = 
        function(memberId0,placementId1) {
          return _wA({method:"GET", url:"/" + "template/get/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("placementId", placementId1)})
        }
      ;
_nS('controllers.TemplateController'); _root['controllers']['TemplateController']['setTemplate'] = 
        function() {
          return _wA({method:"POST", url:"/" + "template/set"})
        }
      ;
_nS('controllers.ReportController'); _root['controllers']['ReportController']['getDemographyReport'] = 
        function() {
          return _wA({method:"POST", url:"/" + "demography/getDemographyReport"})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getMemberFinaceInfo'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "member/finace/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['updateMemberInfo'] = 
        function(mailCode0) {
          return _wA({method:"POST", url:"/" + "account/edit" + _qS([(function(k,v) {return encodeURIComponent(k)+'='+encodeURIComponent(v)})("mailCode", mailCode0)])})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getAdNetworkUserPermissionList'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "member/user/getAdNetworkUserPermissionList/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getAdNetworkUserPermissionListByUserId'] = 
        function(memberId0,adNetworkUserId1) {
          return _wA({method:"GET", url:"/" + "member/user/getAdNetworkUserPermissionListByUserId/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("adNetworkUserId", adNetworkUserId1)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['grantOwnerToAnother'] = 
        function() {
          return _wA({method:"POST", url:"/" + "member/user/grantOwnerToAnother"})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['unbindAdNetworkUser'] = 
        function() {
          return _wA({method:"POST", url:"/" + "member/user/unbindAdNetworkUser"})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getAllAdNetworkUserList'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "member/user/getAllAdNetworkUserList/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['updateAdNetworkUserPermission'] = 
        function() {
          return _wA({method:"POST", url:"/" + "member/user/updateAdNetworkUserPermission"})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['unbindWx'] = 
        function(memberId0) {
          return _wA({method:"POST", url:"/" + "member/user/unbindWx/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getMyMpBindingList'] = 
        function(memberId0) {
          return _wA({method:"POST", url:"/" + "member/user/getMyMpBindingList/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['approveOperator'] = 
        function(memberId0) {
          return _wA({method:"POST", url:"/" + "member/user/approveOperator/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['rejectOperator'] = 
        function(memberId0) {
          return _wA({method:"POST", url:"/" + "member/user/rejectOperator/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getQualityPlanApplyInfo'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "member/quality/signinfo/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MemberController'); _root['controllers']['MemberController']['getMemberHistoryScore'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "member/historyScore/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumHistoryScore'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/historyScore/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumAdviceCoords'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/mediumAdviceCoords/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumAdviceImpression'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/mediumAdviceImpression/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumAdviceQQWuid'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/mediumAdviceQQWuid/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumAdviceSDK'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/mediumAdviceSDK/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumAdviceTrace'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/mediumAdviceDownloadInstall/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumOrderByScore'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "medium/mediumOrderByScore/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumOrderByExpose'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "medium/mediumOrderByExpose/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getLastMonthEncourageMediumCount'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "medium/encourageMediumCount/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getAppAdvice'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/getAppAdvice/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getMediumInfo'] = 
        function(memberId0,appId1) {
          return _wA({method:"GET", url:"/" + "medium/getMediumInfo/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("appId", appId1)})
        }
      ;
_nS('controllers.MediumController'); _root['controllers']['MediumController']['getLastMonthEncourageLine'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "medium/LastMonthEncourageLine/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MessageController'); _root['controllers']['MessageController']['getAllMemberMessageList'] = 
        function(memberId0,pageIndex1,pageNum2) {
          return _wA({method:"GET", url:"/" + "message/all/list/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("pageIndex", pageIndex1) + "/" + (function(k,v) {return v})("pageNum", pageNum2)})
        }
      ;
_nS('controllers.MessageController'); _root['controllers']['MessageController']['getUnreadMemberMessageList'] = 
        function(memberId0,pageIndex1,pageNum2) {
          return _wA({method:"GET", url:"/" + "message/unread/list/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("pageIndex", pageIndex1) + "/" + (function(k,v) {return v})("pageNum", pageNum2)})
        }
      ;
_nS('controllers.MessageController'); _root['controllers']['MessageController']['getUnreadMessageNum'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "message/unread/count/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.MessageController'); _root['controllers']['MessageController']['setMessageRead'] = 
        function() {
          return _wA({method:"POST", url:"/" + "message/setread"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['getIndustryFisrtLevel'] = 
        function() {
          return _wA({method:"GET", url:"/" + "adFilter/industry/firstlevel/list"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['setCreativeBlockBatchStatus'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adFilter/block/batch"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['setCreativeBlockStatus'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adFilter/block/single"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['search'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adFilter/search"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['searchReview'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adreview/search"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['setCreativeReviewBatchStatus'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adreview/block/batch"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['uploadSearchPic'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adreview/uploadPic"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['getTrafficGroup'] = 
        function(memberId0,autoPolicy1) {
          return _wA({method:"GET", url:"/" + "adreview/trafficGroup/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("autoPolicy", autoPolicy1)})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['getSpecificTypePlacements'] = 
        function(memberId0,placementType1) {
          return _wA({method:"GET", url:"/" + "placement/listByPlacementType/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("placementType", encodeURIComponent(placementType1))})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['setReviewSearchRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adreview/searchRule/add"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['getReviewSearchRule'] = 
        function(memberId0) {
          return _wA({method:"GET", url:"/" + "adreview/searchRule/" + (function(k,v) {return v})("memberId", memberId0)})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['deleteReviewSearchRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "adreview/searchRule/delete"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['searchReviewAfterExposure'] = 
        function() {
          return _wA({method:"POST", url:"/" + "exposurereview/search"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['setReviewAfterExposureBlockBatchStatus'] = 
        function() {
          return _wA({method:"POST", url:"/" + "exposurereview/block/batch"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['getBlockNum'] = 
        function(memberId0,trafficGroupId1) {
          return _wA({method:"GET", url:"/" + "exposurereview/blocknum/" + (function(k,v) {return v})("memberId", memberId0) + "/" + (function(k,v) {return v})("trafficGroupId", trafficGroupId1)})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['setAdvertiserBlockStatus'] = 
        function() {
          return _wA({method:"POST", url:"/" + "exposurereview/advertiser/block"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['searchFilterRuleList'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/search"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['deleteFilterRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/delete"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['searchMediumPlacementsWithFilterRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/searchMediumsWithFilterRule"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['searchPlacementVoWithFilterRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/searchPlacementVoWithFilterRule"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['addFilterRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/addFilterRule"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['getFilterRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/getFilterRule"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['editFilterRule'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/editFilterRule"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['searchSimpleFilterRuleList'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/searchSimpleFilterRule"})
        }
      ;
_nS('controllers.FilterManagementController'); _root['controllers']['FilterManagementController']['addFilterRuleWithNoPlacements'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/rule/addFilterRuleWithNoPlacements"})
        }
      ;
_nS('controllers.CreativeBlockingController'); _root['controllers']['CreativeBlockingController']['editTrafficGroupContent'] = 
        function() {
          return _wA({method:"POST", url:"/" + "filter/trafficGroup/editTrafficGroupContent"})
        }
      ;
_nS('controllers.PdbController'); _root['controllers']['PdbController']['getPDBContractList'] = 
        function() {
          return _wA({method:"POST", url:"/" + "pdb/search"})
        }
      ;
_nS('controllers.Assets'); _root['controllers']['Assets']['versioned'] = 
        function(file1) {
          return _wA({method:"GET", url:"/" + "assets/" + (function(k,v) {return v})("file", file1)})
        }
      ;
})(jsRoutes)