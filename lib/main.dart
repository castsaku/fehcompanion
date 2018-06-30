import 'package:flutter/material.dart';

void main() => runApp(FriendlyChatApp());
const String _name = "Your Name";
class FriendlyChatApp extends StatelessWidget {
  @override
  Widget build(BuildContext c) {
    return MaterialApp(
      title: "Friendly chat APp",
      home: ChatScreen(),
    );
  }
}

class ChatScreen extends StatefulWidget {
  @override
  State createState() => ChatScreenState();
}

class ChatScreenState extends State<ChatScreen> with TickerProviderStateMixin{
  final TextEditingController _textController = new TextEditingController();
  final List<ChatMessage> _messages= <ChatMessage>[];
  bool _isComposing =false;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("WEA"),
      ),
      body: new Column(
        children: <Widget>[
          new Flexible(
            child: ListView.builder(
              padding: EdgeInsets.all(8.0),
              reverse: true,
              itemBuilder: (_,int index)=>_messages[index],
              itemCount: _messages.length,
            ),
          ),
          Divider(height: 1.0,),
          Container(
            decoration: BoxDecoration(
              color: Theme.of(context).cardColor),
              child: _buildTextComposer(),
            ),
        ],
      ),
    );
  }
  Widget _buildTextComposer() {
    return new IconTheme(
      data:IconThemeData(color: Theme.of(context).accentColor),
      child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 8.0),
          child: new Row(
            children: <Widget>[
               Flexible(
                child: TextField(
                  controller: _textController,
                  onChanged: (String text){
                    setState(() {
                      _isComposing=text.length>0;
                    });
                  },
                  onSubmitted: _handleSubmitted,
                  decoration: InputDecoration.collapsed(
                      hintText: "send message "),
                ),
              ),
              Container(
                margin: EdgeInsets.symmetric(horizontal:4.0),
                child: IconButton(
                  icon: Icon(Icons.send),
                  onPressed: _isComposing ? ()=>_handleSubmitted(_textController.text)
                      :null,
                ),
              )
            ],
          )),
    );
  }


  void _handleSubmitted(String text) {
    _textController.clear();
    setState(() {
      _isComposing=false;
    });
    ChatMessage message= ChatMessage(
      text:  text,
      animationController: AnimationController(
        duration: Duration(milliseconds: 700),
        vsync: this,
      ),
    );
    setState(() {
      _messages.insert(0, message);
    });
    message.animationController.forward();
  }

  @override
  void dispose() {                                                   //new
    for (ChatMessage message in _messages)                           //new
      message.animationController.dispose();                         //new
    super.dispose();                                                 //new
  }


}

class ChatMessage extends StatelessWidget{
  ChatMessage({this.text,this.animationController})
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
                  child: CircleAvatar(child: Text(_name[0]),),
                ),
                new Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      Text(_name,style: Theme.of(context).textTheme.subhead,),
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