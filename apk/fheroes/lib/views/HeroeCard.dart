import 'package:flutter/material.dart';
class HeroeCard extends StatelessWidget{
  @override
  Widget build(BuildContext context) {
    return  Container(
      height: 130.0,
      margin: new EdgeInsets.only(left: 25.0),
      decoration: new BoxDecoration(
        color: new Color(0xFF333358),
        shape: BoxShape.rectangle,
        borderRadius: new BorderRadius.circular(10.0),
        border: new Border.all(
          color: Color.fromRGBO(204,171,0,0.8),
          //color: Colors.black87,
          width: 1.0,
        ),
        boxShadow: <BoxShadow>[
          new BoxShadow(
            color: Colors.black12,
            blurRadius: 10.0,
            offset: new Offset(0.0, 10.0),
          ),
        ],
      ),
    );
  }
}