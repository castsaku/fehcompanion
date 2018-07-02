import 'package:flutter/material.dart';

class SkillsItem extends StatelessWidget {
  var _skills;

  SkillsItem(this._skills);
  @override
  Widget build(BuildContext context) {
    return new Container(
      margin: EdgeInsets.only(top: 8.0),
      decoration: new BoxDecoration(
        border: new Border.all(
          color: Color(0xE8D000),
          width: 1.0,
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(

            margin: EdgeInsets.only(right: 16.0),
            child: Image(
              image: AssetImage("assets/ui icons/Icon_Skill_Weapon.png"),
              width: 40.0,
              height: 40.0,
            ),
          ),
          new Expanded(
            child: Column(
              children: <Widget>[
                ListTile(
                    title: Text(_skills["name"]),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(_skills["effect"]),
                        Text("learn default at 5 x", style: TextStyle(color: Colors.red),),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>[
                            Text("SP 50"),
                            Text("Rng. 2"),
                            Text("Mt. 3"),
                          ],
                        )
                      ],
                    )),

              ],
            ),
          ),
        ],
      ),
    );
  }
}
