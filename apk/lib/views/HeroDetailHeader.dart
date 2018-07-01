import 'package:flutter/material.dart';

class HeroDetailHeader extends StatelessWidget {
  var _hero;
  var _url;
  static const BACKGROUND_IMAGE = "assets/back.jpg";
  HeroDetailHeader(this._hero);

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
              _buildTitle(_hero["rarities"])
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

  Widget _buildTitle(String rarities) {

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
    });
    return  DropdownButton<String>(
            value: arrStars[0] ,
            items: arrStars.map((String value) {
              return new DropdownMenuItem<String>(
                value: value,
                child: new Text(value),
              );
            }).toList(),
            onChanged: (_) {},
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
