import 'dart:async';
import 'dart:io';

import 'package:path/path.dart';

import 'package:sqflite/sqflite.dart';
import 'package:path_provider/path_provider.dart';

class DataBase{
  static final DataBase _instance=DataBase._internal();
  static DataBase _db;


  Future<DataBase> get db async{
    if(_db != null){
      return _db;
    }
    //_db await initDB();
    return _db;
  }
  DataBase._internal();

  Future<DataBase>initDb()async{
    Directory documentsDirectory=await getApplicationDocumentsDirectory();
    String path= join(documentsDirectory.path, "main/db");
    var theDb=await openDatabase(path,version: 1,onCreate: _onCreate);

  }

  void _onCreate(Database db, int version) async{
    await db.execute('''""''');
  }
}
