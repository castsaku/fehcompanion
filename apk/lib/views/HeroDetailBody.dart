import 'dart:math';

import 'package:fheroes/models/Skill.dart';
import 'package:flutter/material.dart';
import '../presenters/DetailPage.dart';
import './SkillsItem.dart';

class HeroDetailBody extends StatefulWidget {
  @override
  var _hero;
  var _skills;
  HeroDetailBody(this._hero, this._skills);
  @override
  State createState() => HeroDetailState(_hero, _skills);
}

class HeroDetailState extends State<HeroDetailBody> {
  var _hero;
  var _skills;
  int radioValue = 0;
  bool switchValue = false;
  HeroDetailState(this._hero, this._skills);

  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        // _buildTitle(),
        _buildTable(),
        _buildListWeaponSkills(_hero["skills"], _hero)
      ],
    );
  }

  void handleRadioValueChanged(int value) {
    setState(() {
      radioValue = value;
    });
  }

  Widget _buildTable() {
    return Card(
      child: new Padding(
        padding: const EdgeInsets.all(8.0),
        child: new Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            _buildTitleStatsSection(),
            _buildHeaderStats("  hp", _hero),
            _buildHeaderStats("atk", _hero),
            _buildHeaderStats("spd", _hero),
            _buildHeaderStats("def", _hero),
            _buildHeaderStats("res", _hero),
          ],
        ),
      ),
    );
  }

  Widget _buildListWeaponSkills(var skills, var _hero) {
    return Card(
      child: new Padding(
          padding: const EdgeInsets.all(8.0),
          child: new Column(
            children: <Widget>[
              Row(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text(
                    "Weapon Skills",
                    style: TextStyle(fontSize: 18.0),
                  ),
                  Image(
                    image: AssetImage("assets/ui icons/Icon_Skill_Weapon.png"),
                    width: 22.0,
                    height: 22.0,
                  ),

                ],
              ),
              Column(children: _buildElements(_skills,_hero)),
            ],
          )),
    );
  }

  Widget _buildHeaderStats(String title, var hero) {
    print(hero["stats"]["1"].toString());
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: <Widget>[
        statText(title.toUpperCase(), Colors.black),
        statText(
            hero["stats"]["1"]["5"][title.trim()].toString(), Colors.green),
        statText(hero["stats"]["1"]["4"][title.trim()].toString(),
            Colors.orangeAccent),
        statText(hero["stats"]["1"]["3"][title.trim()].toString(), Colors.red),
      ],
    );
  }

  Widget _buildTitleStatsSection() {
    var styleBitch = TextStyle(
        fontSize: 18.0,
        fontWeight: FontWeight.normal,
        color: Color(0XFF707070));
    Color activeColor = Color(0XFF009688);
    return new Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text("Lv.1", style: styleBitch),
        Radio(
            groupValue: radioValue,
            value: 2,
            onChanged: handleRadioValueChanged,
            activeColor: activeColor),
        Text(
          "Lv.40",
          style: styleBitch,
        ),
        Radio(
            groupValue: radioValue,
            value: 1,
            onChanged: handleRadioValueChanged,
            activeColor: activeColor),
        Text(
          "Weapon",
          style: styleBitch,
        ),
        Switch(
          value: switchValue,
          activeColor: activeColor,
          onChanged: (bool value) {
            setState(() {
              switchValue = value;
            });
          },
        ),
      ],
    );
  }

  Widget statText(String txt, Color color) {
    var styleBitch =
        TextStyle(fontSize: 16.0, fontWeight: FontWeight.normal, color: color);
    return Container(
        //margin: EdgeInsets.only(left: 8.0),
        child: Text(
      txt,
      /* style: TextStyle(
            fontSize: 16.0, fontWeight: FontWeight.bold, color: color),
      ),*/
      style: styleBitch,
    ));
  }

  List<Widget> _buildElements(skills,_hero) {
    List<Widget> lstwdgt = new List<Widget>();
    List<Skill> skillList= new List();
    for(var value in _hero["skills"]){

      Skill skill= new Skill(name: value["name"],defLvl: value["default"]);
      skillList.add(skill);
    }

   /* var a=skillList.map((s){
      for(value in skill)
    });


    for (var value in skills) {
      (value["name"])
      lstwdgt.add(SkillsItem(value));
    }*/

    return lstwdgt;
  }
}
