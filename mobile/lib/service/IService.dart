import 'dart:developer';

import 'package:flutter_web_auth/flutter_web_auth.dart';

class IService {
  String getName() {
    return "";
  }

  String getUrl() {
    return "";
  }

  String getIcon() {
    return "";
  }

  List<String> getParams() {
    return ['None'];
  }

  List<String> getAction() {
    return [];
  }

  List<String> getReaction() {
    return [];
  }

  bool getConnexionState() {
    return false;
  }

  Future<String> getToken(String srv) async {
    try {
      log('getToken: Start');
      final result = await FlutterWebAuth.authenticate(url: srv + getUrl(), callbackUrlScheme: "http");
      log('getToken: Authenticate');

      final token = Uri.parse(result).queryParameters['token'];
      log('getToken: END');

      log(token!);
      return (token == null) ? "" : token;
    } catch(e) {
      return e.toString();
    }
  }
}