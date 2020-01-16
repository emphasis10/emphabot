//Code Archive
function urlBuild(baseURL, msg) {
	//msg를 보고 api에 던질 url을 만듦
}

function getAns(url, attr) {
	var html = Utils.parse(url).text();
	var jsonobject = org.json.JSONObject(j);
	return jsonobject.getString(attr);
}
