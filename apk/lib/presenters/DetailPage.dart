import 'package:fheroes/views/HeroDetailBody.dart';
import 'package:flutter/material.dart';
import 'package:fheroes/views/HeroDetailHeader.dart';

class DetailPage extends StatefulWidget {
  var _hero;
  var _skills;

  DetailPage(this._hero,this._skills);

  @override
  State<StatefulWidget> createState() {
    return DetailState(_hero,_skills);
  }
}

class DetailState extends State<DetailPage> {
  var _url;
  var _hero;
  var _skills;
  DetailState(this._hero,this._skills);
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
          HeroDetailBody(_hero,_skills),
        ],
      ),
    )));
  }
}
