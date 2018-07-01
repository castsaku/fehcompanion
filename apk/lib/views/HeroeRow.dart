import 'package:flutter/material.dart';
import './HeroeCard.dart';
import './HeroeThumbnail.dart';

class HeroeRow extends StatelessWidget {
  final hero;

  HeroeRow(this.hero);

  @override
  Widget build(BuildContext context) {
    var x=hero["weaponType"].toString().split(" ");
    Color color;
    print(x[0]);
    switch(x[0]){
      case "Red":
        color=Colors.red[900];
        break;
      case "Blue":
        color=Colors.blue[900];
        break;
      case "Green":
        color=Colors.green[900];
        break;
      default:
        color=Colors.grey[900];
        break;
    }
    color=Colors.grey[900];
    final _url = hero['assets']['portrait']['113px'];
    return new Card(
      //color: Color(0xF303030),
      color: color,
      elevation: 5.0,
      margin: const EdgeInsets.symmetric(
        vertical: 2.0,
        horizontal: 8.0,
      ),

      child: new Container(
        height: 75.0,
        decoration:  new BoxDecoration(
          border: new Border.all(
            color: Color(0xE8D000),
            width: 1.0,
          ),),
       // padding: EdgeInsets.only(left: 0.0,top:10.0,right: 10.0,bottom: 0.0),
        padding: EdgeInsets.all(8.0),
        //color: Color(0xFF000000),
        child:
           Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(
                margin: EdgeInsets.only(right: 16.0),
                child: HeroeThumbnail(_url),
              ),
              new Expanded(

                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                      hero["name"],
                      style: new TextStyle(fontWeight:FontWeight.bold ,color: Colors.white.withOpacity(0.8),fontSize: 16.0),
                    ),
                    Container(
                      margin: const EdgeInsets.only(top: 5.0),
                      child: Text("${hero["moveType"]} ${hero["weaponType"]}", style: new TextStyle(color: Colors.white.withOpacity(0.8)) ,),
                    ),
                  ],
                ),
              ),
            ],
          ),
      ),
    );
  }
}
