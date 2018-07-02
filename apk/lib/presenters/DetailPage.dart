import 'package:fheroes/views/HeroDetailBody.dart';
import 'package:flutter/material.dart';
import 'package:fheroes/views/HeroDetailHeader.dart';

class DetailPage extends StatefulWidget {
  var _hero;

  DetailPage(this._hero);

  @override
  State<StatefulWidget> createState() {
    return DetailState(_hero);
  }
}

class DetailState extends State<DetailPage> {
  var _url;
  var _hero;
  DetailState(this._hero);
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

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
