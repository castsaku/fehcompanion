import 'package:flutter/material.dart';

class HeroDetailBody extends StatelessWidget {
  @override
var _hero;
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        // _buildTitle(),
         _buildTable(),
        _buildListWeaponSkills(_hero["skills"])
      ],
    );
  }

  HeroDetailBody(this._hero);

  Widget _buildTable() {
    return Card(
      child: new Padding(
        padding: const EdgeInsets.all(8.0),
        child: new Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            _buildTitleStatsSection(),
            _buildHeaderStats("  hp",_hero),
            _buildHeaderStats("atk",_hero),
            _buildHeaderStats("spd",_hero),
            _buildHeaderStats("def",_hero),
            _buildHeaderStats("res",_hero),

          ],
        ),
      ),
    );
  }

  Widget _buildListWeaponSkills(var skills){
   return  ListView.builder(
      itemCount: skills != null ? skills.length : 0,
      itemBuilder: (context, i) {
        final hero = skills[i];
        return FlatButton(
          padding: EdgeInsets.all(0.0),
          child: HeroeRow(hero),
          onPressed: () => Navigator.push(
              context,
              MaterialPageRoute(
                  builder: (context) => DetailPage(hero))),
        );
      },
    )
  }

  Widget _buildHeaderStats(String title,var hero,){
    print(hero["stats"]["1"].toString());
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: <Widget>[
        statText(title.toUpperCase(),Colors.black),
        statText(hero["stats"]["1"]["5"][title.trim()].toString(),Colors.green),
        statText(hero["stats"]["1"]["4"][title.trim()].toString(),Colors.orangeAccent),
        statText(hero["stats"]["1"]["3"][title.trim()].toString(),Colors.red),

      ],
    );
  }
  Widget _buildTitleStatsSection(){

    return
      new Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[

          new Container(
            width: 150.0,
            child: RadioListTile(
              title: const Text('Lv 1'),
              value: Text("wea"),
            ),
          ),
          new Container(
            width: 150.0,
            child: SwitchListTile(
                title: Text("WEAPON"),
                //subtitle: Text("Activer"),
                value: false,
                activeColor: Colors.grey,
                //secondary: const Icon(Icons.lightbulb_outline) ,
                onChanged: (_) {},
              ),
          ),
        ],
      );

  }

  Widget statText(String txt,Color color){
    return Container(

      margin:  EdgeInsets.only(left: 8.0),
      child: Text(
          txt,
          style:  TextStyle(fontSize: 16.0,fontWeight: FontWeight.bold,color: color),
      ),
    );
  }


}
