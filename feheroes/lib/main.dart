import 'package:flutter/material.dart';
import 'package:feheroes/news.dart';

class UnicornOrientation {
  static const HORIZONTAL = 0;
  static const VERTICAL = 1;
}

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'News',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: new NewsPage(),
    );
  }
}
