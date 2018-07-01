import 'dart:async';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:fheroes/views/HeroeRow.dart';
import 'package:fheroes/presenters/DetailPage.dart';

class First extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return FirsState();
  }
}

class FirsState extends State<First> with TickerProviderStateMixin {
  bool _isLoading = true;
  var heroes;
  final url2 = 'https://raw.githubusercontent.com/ajhyndman/fire-emblem-working-title/master/packages/fire-emblem-heroes-stats/stats.json';

  Future<String> _fetchData() async {
    final response = await http
        .get(Uri.encodeFull(url2), headers: {"Accept": "application/json"});
    if (response.statusCode == 200) {
      final map = json.decode(response.body);
      final heroesJson = map['heroes'];
      setState(() {
        _isLoading = false;
        this.heroes = heroesJson;
      });
      return "OK";
    } else
      return "no";
  }

  int _angle = 90;
  bool _isRotated = true;

  AnimationController _controller;
  Animation<double> _animation;
  Animation<double> _animation2;
  Animation<double> _animation3;

  @override
  void initState() {
    _isLoading = true;
    var a=_fetchData();
    _controller = new AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 180),
    );

    _animation = new CurvedAnimation(
      parent: _controller,
      curve: new Interval(0.0, 1.0, curve: Curves.linear),
    );

    _animation2 = new CurvedAnimation(
      parent: _controller,
      curve: new Interval(0.5, 1.0, curve: Curves.linear),
    );

    _animation3 = new CurvedAnimation(
      parent: _controller,
      curve: new Interval(0.8, 1.0, curve: Curves.linear),
    );
    _controller.reverse();
    super.initState();
  }

  void _rotate() {
    setState(() {
      if (_isRotated) {
        _angle = 45;
        _isRotated = false;
        _controller.forward();
      } else {
        _angle = 90;
        _isRotated = true;
        _controller.reverse();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(

          //   backgroundColor: Color.fromRGBO(50, 50, 50, 0.8),
         // backgroundColor: Color(0xFF9E9E9E),
        backgroundColor: Colors.grey[500],
        //backgroundColor: Color(0xFFFFFFFF),
          /*appBar: AppBar(
            title: Text('Q saen de pulentitulo'),
            backgroundColor: Color(0xFF344955),
            actions: <Widget>[
              IconButton(
                icon: Icon(Icons.refresh),
                onPressed: () {


                }, //onPressed
              )
            ],
          ),*/
          body: /*new Container(
        decoration: new BoxDecoration(
          image: new DecorationImage(
            image: new AssetImage("assets/bagr.jpg"),
            fit: BoxFit.cover,
          ),
        ),
        child: */new Padding(

          padding: const EdgeInsets.only(top: 8.0),
          child: new Stack(children: <Widget>[
            // body: new Row(children: <Widget>[
            Center(
                child: _isLoading
                    ? CircularProgressIndicator(
                        valueColor:
                            AlwaysStoppedAnimation<Color>(Colors.black26),
                      )
                    : ListView.builder(
                        itemCount: this.heroes != null ? this.heroes.length : 0,
                        itemBuilder: (context, i) {
                          final hero = this.heroes[i];
                          return FlatButton(
                            padding: EdgeInsets.all(0.0),
                            child: HeroeRow(hero),
                            onPressed: () => Navigator.push(
                                context,
                                MaterialPageRoute(
                                    builder: (context) => DetailPage(hero))),
                          );
                        },
                      )),
            new Positioned(
                bottom: 200.0,
                right: 24.0,
                child: new Container(
                  child: new Row(
                    children: <Widget>[
                      new ScaleTransition(
                        scale: _animation3,
                        alignment: FractionalOffset.center,
                        child: new Container(
                          margin: new EdgeInsets.only(right: 16.0),
                          child: new Text(
                            'Flying',
                            style: new TextStyle(
                              fontSize: 13.0,
                              fontFamily: 'Roboto',
                              color: new Color(0xFF9E9E9E),
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                      new ScaleTransition(
                        scale: _animation3,
                        alignment: FractionalOffset.center,
                        child: new Material(
                            color: new Color(0xFF9E9E9E),
                            type: MaterialType.circle,
                            elevation: 6.0,
                            child: new GestureDetector(
                              child: new Container(
                                  color: Colors.black,
                                  width: 40.0,
                                  height: 40.0,
                                  child: new InkWell(
                                    onTap: () {
                                      if (_angle == 45.0) {
                                        print("Flying");
                                      }
                                    },
                                    child: new Center(
                                      child: new Image(
                                        image:
                                            AssetImage("assets/bat-blade.png"),
                                        width: 30.0,
                                        height: 30.0,
                                        //color: new Color(0xFFFFFFFF),
                                        //color: Colors.black,
                                      ),
                                    ),
                                  )),
                            )),
                      ),
                    ],
                  ),
                )),
            new Positioned(
                bottom: 144.0,
                right: 24.0,
                child: new Container(
                  child: new Row(
                    children: <Widget>[
                      new ScaleTransition(
                        scale: _animation2,
                        alignment: FractionalOffset.center,
                        child: new Container(
                          margin: new EdgeInsets.only(right: 16.0),
                          child: new Text(
                            'Infantry',
                            style: new TextStyle(
                              fontSize: 13.0,
                              fontFamily: 'Roboto',
                              color: new Color(0xFF9E9E9E),
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                      new ScaleTransition(
                        scale: _animation2,
                        alignment: FractionalOffset.center,
                        child: new Material(
                            color: new Color(0xFF00BFA5),
                            type: MaterialType.circle,
                            elevation: 6.0,
                            child: new GestureDetector(
                              child: new Container(
                                  color: Colors.black,
                                  width: 40.0,
                                  height: 40.0,
                                  child: new InkWell(
                                    onTap: () {
                                      if (_angle == 45.0) {
                                        print("Infantry");
                                      }
                                    },
                                    child: new Center(
                                      child: new Image(
                                        // Icons.add,
                                        image:
                                            AssetImage("assets/swordwoman.png"),
                                        width: 30.0,
                                        height: 30.0,
                                        // color: new Color(0xFFFFFFFF),
                                      ),
                                    ),
                                  )),
                            )),
                      ),
                    ],
                  ),
                )),
            new Positioned(
                bottom: 254.0,
                right: 24.0,
                child: new Container(
                  child: new Row(
                    children: <Widget>[
                      new ScaleTransition(
                        scale: _animation2,
                        alignment: FractionalOffset.center,
                        child: new Container(
                          margin: new EdgeInsets.only(right: 16.0),
                          child: new Text(
                            'Armored',
                            style: new TextStyle(
                              fontSize: 13.0,
                              fontFamily: 'Roboto',
                              color: new Color(0xFF9E9E9E),
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                      new ScaleTransition(
                        scale: _animation2,
                        alignment: FractionalOffset.center,
                        child: new Material(
                            color: new Color(0xFF00BFA5),
                            type: MaterialType.circle,
                            elevation: 6.0,
                            child: new GestureDetector(
                              child: new Container(
                                  color: Colors.black,
                                  width: 40.0,
                                  height: 40.0,
                                  child: new InkWell(
                                    onTap: () {
                                      if (_angle == 45.0) {
                                        print("Infantry");
                                      }
                                    },
                                    child: new Center(
                                      child: new Image(
                                        // Icons.add,
                                        image: AssetImage(
                                            "assets/shoulder-armor.png"),
                                        width: 30.0,
                                        height: 30.0,
                                        // color: new Color(0xFFFFFFFF),
                                      ),
                                    ),
                                  )),
                            )),
                      ),
                    ],
                  ),
                )),
            new Positioned(
                bottom: 88.0,
                right: 24.0,
                child: new Container(
                  child: new Row(
                    children: <Widget>[
                      new ScaleTransition(
                        scale: _animation,
                        alignment: FractionalOffset.center,
                        child: new Container(
                          margin: new EdgeInsets.only(right: 16.0),
                          child: new Text(
                            'Cavalry',
                            style: new TextStyle(
                              fontSize: 13.0,
                              fontFamily: 'Roboto',
                              color: new Color(0xFF9E9E9E),
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ),
                      new ScaleTransition(
                        scale: _animation,
                        alignment: FractionalOffset.center,
                        child: new Material(
                            color: new Color(0xFFE57373),
                            type: MaterialType.circle,
                            elevation: 6.0,
                            child: new GestureDetector(
                              child: new Container(
                                  color: Colors.black,
                                  width: 40.0,
                                  height: 40.0,
                                  child: new InkWell(
                                    onTap: () {
                                      if (_angle == 45.0) {
                                        print("Cavalry");
                                      }
                                    },
                                    child: new Center(
                                      child: new Image(
                                        //Icons.add,
                                        image:
                                            AssetImage("assets/horseshoe.png"),
                                        width: 30.0,
                                        height: 30.0,
                                        //color: new Color(0xFFFFFFFF),
                                      ),
                                    ),
                                  )),
                            )),
                      ),
                    ],
                  ),
                )),
            new Positioned(
              bottom: 16.0,
              right: 16.0,
              child: new Material(
                  //color: Color.fromRGBO( 117, 117, 117, 45.9), //new Color(0xFFE57373),
                  color: Color(0xFFF9AA33),
                  type: MaterialType.circle,
                  elevation: 6.0,
                  child: new GestureDetector(
                    child: new Container(
                        width: 56.0,
                        height: 56.00,
                        child: new InkWell(
                          onTap: _rotate,
                          child: new Center(
                              child: new RotationTransition(
                            turns: new AlwaysStoppedAnimation(_angle / 1),
                            child: new Icon(
                              Icons.all_inclusive,
                              color: new Color(0xFFFFFFFF),
                            ),
                          )),
                        )),
                  )),
            ),
          ]),//HERE
        ),
      ));
    //); esto es pal q saen de backgrouynd
  }
}
