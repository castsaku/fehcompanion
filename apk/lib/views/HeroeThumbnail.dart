import 'package:flutter/material.dart';

class HeroeThumbnail extends StatelessWidget {
  final String url;
  HeroeThumbnail(this.url);
  @override
  Widget build(BuildContext context) {
    return Container(
        //margin: new EdgeInsets.symmetric(vertical: 16.0),
        //alignment: FractionalOffset.centerLeft,
        child: Container(
          width:56.0,
          height: 65.0,
            child: CircleAvatar(
              backgroundImage: NetworkImage(url),
              backgroundColor: Colors.grey[900]//Color(0XFF000000),
            ),
          //  child:  Image(image: NetworkImage(url),fit: BoxFit.fitHeight,),
         decoration: new BoxDecoration(
            color: const Color(0X000000),
           /* image: DecorationImage(
              image: NetworkImage(url),
              fit: BoxFit.contain,
            ),*/
         //   borderRadius: new BorderRadius.circular(50.0),
           // border: new Border.all(
              //color: Color.fromRGBO(204, 171, 0, 0.8),
             // color: Color(0xFFE8D000),
              //color: Colors.black87,E8B000
              //width: 2.0,),
            //),
           /* boxShadow: <BoxShadow>[
              new BoxShadow(
                color: Colors.white,
                blurRadius: 5.0,
                offset: new Offset(3.0, 0.0),
              ),
            ],*/
          ),
        ));
  }
}
