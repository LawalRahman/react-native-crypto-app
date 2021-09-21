import 'package:flutter/material.dart';
import 'package:kudi_exchange/signup.dart';

import 'main.dart';


void main() {
  runApp(const ForgotPage());
}


class ForgotPage extends StatelessWidget {
  const ForgotPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.deepPurple,
        ),
        home : ForgotPasswordMainPage()
    );
  }
}



class ForgotPasswordMainPage extends StatefulWidget {
  const ForgotPasswordMainPage({Key? key}) : super(key: key);

  @override
  State<ForgotPasswordMainPage> createState() => _PasswordRessetMainPageState();
}


class _PasswordRessetMainPageState extends State<ForgotPasswordMainPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      appBar: AppBar(
        title: new Center ( child : new Text("KUDIEX Password Resset", textAlign: TextAlign.start)),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.only(top: 150.0),
              child: Center(
              ),
            ),
            Padding(
              //padding: const EdgeInsets.only(left:15.0,right: 15.0,top:0,bottom: 0),
              padding: const EdgeInsets.only(
                  left: 15.0, right: 15.0, top: 15, bottom: 30),
              child: TextField(
                decoration: InputDecoration(
                    border: OutlineInputBorder(),
                    labelText: 'Username/Email',
                    hintText: 'Enter your username or email'),
              ),
            ),
            Container(
              height: 40,
              width: 200,
              decoration: BoxDecoration(
                  color: Colors.deepPurple, borderRadius: BorderRadius.circular(20)),

              child: ElevatedButton.icon(
                label: new Center ( child : new  Text('REQUEST', style: TextStyle(color: Colors.white, fontSize: 23))),
                icon: Icon(Icons.fact_check_outlined),
                onPressed: () {
                  Navigator.push(
                      context, MaterialPageRoute(builder: (_) => kudiHomePage()));
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}




