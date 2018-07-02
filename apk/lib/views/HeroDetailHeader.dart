import 'package:flutter/material.dart';

class HeroDetailHeader extends StatefulWidget {
  var _hero;

  HeroDetailHeader(this._hero);
  State createState() => new HeroState(_hero);
}

class HeroState extends State<HeroDetailHeader>{
  static const BACKGROUND_IMAGE = "assets/back.jpg";
  var _hero;
  var _url;
  HeroState(this._hero);
  List<String> _values=new List<String>();
  String _value;
  @override
  void initState() {
    _values=returnStarsArray(_hero["rarities"]);
    _value=_values.first;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    _url = _hero['assets']['portrait']['150px'];
    var theme = Theme.of(context);
    var textTheme = theme.textTheme;
    return new Card(
      child: new Stack(
        children: <Widget>[
          _buildHeader(context),
          new Column(
            children: <Widget>[
              Container(
                  alignment: AlignmentDirectional.topStart,
                  child: BackButton(
                    color: Colors.white,
                  )),
              _buildAvatar(_url),
              _buildFollowerInfo(textTheme, _hero),
              _buildDropDown()
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildHeader(BuildContext context, {Color color}) {
    var screenWidth = MediaQuery.of(context).size.width;
    return Image(
      image: AssetImage(BACKGROUND_IMAGE),
      width: screenWidth,
      height: 75.56,
      fit: BoxFit.cover,
    );
  }

  Widget _buildFollowerInfo(TextTheme textTheme, var hero) {
    //var followerStyle = textTheme.subhead.copyWith(color: const Color(0xBBFFFFFF));
    var followerStyle = textTheme.subhead
        .copyWith(fontSize: 16.0, fontWeight: FontWeight.normal,color: const Color(0xFF707070));
    return new Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        new Text(hero["shortName"], style: followerStyle),
        // new Text(' - ',style: followerStyle.copyWith(fontSize: 24.0, fontWeight: FontWeight.normal),),
        new Text(hero["title"], style: followerStyle),
      ],
    );
  }

  Widget _buildAvatar(url) {
    Color color = _determineColor(_hero["weaponType"].toString().split(" ")[0]);
    color.withOpacity(1.0);
    return new Hero(
      tag: "test",
      child: new CircleAvatar(
          backgroundImage: NetworkImage(url),
          radius: 35.0,
          backgroundColor: color.withOpacity(0.01)),
    );
  }

  Widget _buildDropDown({String rarities}) {
    return  DropdownButton<String>(
      value: _value,
      items: _values.map((String value) {
        return new DropdownMenuItem<String>(
          value: value,
          child: new Text(value),
        );
      }).toList(),
    onChanged: (String value) {
      setState(() {
        _value=value;
      });
    },
    );
  }

  Color _determineColor(String x) {
    Color color;
    switch (x) {
      case "Red":
        color = Color(0XBBb71c1c);
        // color=Colors.red[900];

        return color;
      case "Blue":
        color = Colors.blue[900];
        color = Color(0XBB0D47A1);
        return color;
      case "Green":
        color = Colors.green[900];
        color = Color(0XBB1B5E20);
        return color;
      default:
        color = Colors.grey[900];
        color = Color(0XBB212121);
        return color;
    }
  }
}

List<String> returnStarsArray(String rarities){
  List<String> lstRarieties=rarities.split("-");
  List<int> numRarities=[];
  lstRarieties.forEach((num)=> numRarities.add(int.parse(num)));
  List<String>arrStars=[];
  numRarities.forEach((cant){
    String raryStar="";
    for(int i=0;i<cant;i++){
      raryStar+=new String.fromCharCode(11088);
    }
    arrStars.add(raryStar);
    print(raryStar);
  });
  
  return arrStars;
  
}
