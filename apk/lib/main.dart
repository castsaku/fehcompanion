import 'package:flutter/material.dart';
import 'package:fheroes/presenters/firstPage.dart' as first;
import './secondPage.dart' as second;

void main() => runApp(new MaterialApp(
      theme: new ThemeData(fontFamily: "fheroes"),
      home: MyTabs(),
    ));

class MyTabs extends StatefulWidget {
  @override
  MyTabsState createState() => MyTabsState();
}

class MyTabsState extends State<MyTabs> with SingleTickerProviderStateMixin {
  var _isLoading=true;

  TabController controller;
  @override
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller = TabController(vsync: this, length: 2);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    return MaterialApp(
      home: Scaffold(
        drawer: Drawer(
          child: ListView(
            children: <Widget>[
              Listview(
                I


              )
            ],
          ),
        ),
        appBar: AppBar(
          backgroundColor: Color(0xFF3F51B5),
          title: const Text("Heroes"),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.search),
              onPressed: (){
                setState(() {
                  _isLoading=false;
                });
              }
            )
          ],
        ),
        body: Center(
          child: _isLoading?CircularProgressIndicator():second.Second(),
        ),
      ),
    );
  }
}
