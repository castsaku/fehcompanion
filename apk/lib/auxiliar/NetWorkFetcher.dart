import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;

class NetWorkFethcer {
  String _url;

  NetWorkFethcer(this._url);

   /* Future<String> fetchData() async {
    final response = await http.get(Uri.encodeFull(_url)
                                    , headers: {"Accept": "application/json"});
    response.statusCode == 200 ? json.decode(response.body)["heroes"] : null;
  }*/
  Future<String> fetchData() async {
    final response = await http
        .get(Uri.encodeFull(_url), headers: {"Accept": "application/json"});
    if (response.statusCode == 200) {
      final map = json.decode(response.body);
      final heroesJson = map['heroes'];

      return "test";
    } else
      return "no";
  }
}
