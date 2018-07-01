import 'package:flutter/material.dart';

class Hero extends StatelessWidget{
  Hero({this.text,this.animationController})
  final String text; // ignore: missing_function_body
  final AnimationController animationController;
  @override
  Widget build(BuildContext context) {

    return SizeTransition(
        sizeFactor: CurvedAnimation(
            parent: animationController,curve: Curves.easeOut),
        axisAlignment: 0.0,
        child:
        Container(
          margin: EdgeInsets.symmetric(vertical: 10.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Container(
                margin: EdgeInsets.only(right: 16.0),
                child: CircleAvatar(child: Text('awdadw'),),
              ),
              new Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text('dwadaw',style: Theme.of(context).textTheme.subhead,),
                    Container(
                      margin: const EdgeInsets.only(top: 5.0),
                      child: Text(text),
                    )
                  ],
                ),
              )
            ],
          ),
        )
    );
  }

}