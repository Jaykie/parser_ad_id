window.jsMessages=(function(u){function f(k){
var m;
if(typeof k==='object'){
for(var i=0,l=k.length;i<l&&f.messages[k[i]]===u;++i);
m=f.messages[k[i]]||k[0]
}else{
m=((f.messages[k]!==u)?f.messages[k]:k)
}
for(i=1;i<arguments.length;i++){
m=m.replace('{'+(i-1)+'}',arguments[i])
}
return m};
f.messages={"error.min.strict":"Must be strictly greater than {0}","error.expected.keypathnode":"Node value expected","error.real.precision":"Real number value with no more than {0} digit(s) including {1} decimal(s) expected","error.expected.jsarray":"Array value expected","error.expected.jsboolean":"Boolean value expected","error.expected.jsnumberorjsstring":"String or number expected","constraint.email":"Email","MessageType.MediumReview":"媒体审核","format.uuid":"UUID","error.pattern":"Must satisfy {0}","error.path.result.multiple":"Multiple results for the given path","constraint.maxLength":"Maximum length: {0}","error.date":"Valid date required","constraint.required":"Required","MessageType.System":"系统消息","error.minLength":"Minimum length is {0}","error.max.strict":"Must be strictly less than {0}","constraint.minLength":"Minimum length: {0}","error.expected.jsnumber":"Number value expected","error.expected.date.isoformat":"Iso date value expected","error.expected.date":"Date value expected","error.number":"Numeric value expected","MessageType.Unknown":"全员消息","MessageType.MemberReview":"会员审核","constraint.min":"Minimum value: {0}","error.expected.jsobject":"Object value expected","error.real":"Real number value expected","error.min":"Must be greater or equal to {0}","error.required":"This field is required","error.maxLength":"Maximum length is {0}","error.invalid.java.util.Date":"Invalid date value","constraint.max":"Maximum value: {0}","format.real":"Real","formats.date":"yyyy-MM-dd","error.invalid":"Invalid value","error.email":"Valid email required","error.uuid":"Valid UUID required","error.expected.jsstring":"String value expected","error.max":"Must be less or equal to {0}","format.numeric":"Numeric","error.expected.uuid":"UUID value expected","format.date":"Date ('{0}')","error.expected.validenumvalue":"Valid enumeration value expected","error.path.empty":"Empty path","constraint.pattern":"Required pattern: {0}","error.expected.time":"Time value expected","error.expected.enumstring":"String value expected","error.path.missing":"Missing path"};
return f})()