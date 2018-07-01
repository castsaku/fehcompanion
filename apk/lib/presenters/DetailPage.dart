import 'package:fheroes/views/HeroDetailBody.dart';
import 'package:flutter/material.dart';
import 'package:fheroes/views/HeroDetailHeader.dart';

class DetailPage extends StatelessWidget {
  var _hero;
  var _url;

  DetailPage(this._hero);

  @override
  Widget build(BuildContext context) {
    _url = _hero['assets']['portrait']['150px'];
    return new Scaffold(
        body: new SingleChildScrollView(
            child: new SafeArea(
      child: new Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          HeroDetailHeader(this._hero),
          HeroDetailBody(_hero),
        ],
      ),
    )));
  }
}
