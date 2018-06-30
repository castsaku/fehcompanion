import 'package:flutter/material.dart';
import 'package:fheroes/presenters/firstPage.dart' as first;
import './secondPage.dart' as second;
void main() => runApp(new MaterialApp(

  theme: new ThemeData(fontFamily: "fheroes"),
  home: MyTabs(),
));

class MyTabs extends StatefulWidget{
  @override
  MyTabsState createState()=> MyTabsState();



}

class MyTabsState extends State<MyTabs> with SingleTickerProviderStateMixin{


  TabController controller;
  @override

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller= TabController(vsync: this,length: 2);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
   return Scaffold(

     /*appBar: AppBar(
       title: Text('Pages'),
       backgroundColor: Colors.deepOrange,
     ),*/

     bottomNavigationBar: Material(
       //color: Color(0xFF344955),

       color: Color(0xF0000000),
       child: TabBar(
         controller: controller,
         tabs: <Tab>[
           Tab(icon: Icon(Icons.event_note),text :'News'),
           Tab(icon: Icon(Icons.people),text: "Heroes"),

         ],

       ),
     ),
     body: TabBarView(
       controller: controller,
       children: <Widget>[

         second.Second(),
         first.First(),
       ],
     ) ,
   );
  }

}