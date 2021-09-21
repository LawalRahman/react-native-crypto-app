import 'package:flutter/material.dart';
import 'package:kudi_exchange/signup.dart';
import 'package:kudi_exchange/website_training.dart';


import 'login.dart';

void main() {
  runApp(const kudiHomePage());
}

class kudiHomePage extends StatelessWidget {
  const kudiHomePage({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'KUDIEX',
        theme: ThemeData(
        primarySwatch: Colors.deepPurple,
      ),
      home:  Scaffold(

      body : Container(
          child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
          Column( mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                "KUDI EXCHANGE!!",
                style: TextStyle(color: Colors.deepPurple, fontWeight: FontWeight.bold, fontSize: 25,),
                textAlign: TextAlign.center,
              ),
              MyHomePage()
            ]
          ),
  ]
      ),
      )
    ));
  }
}



class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomeBottom();
}



/// This is the private State class that goes with MyStatefulWidget.
class _MyHomeBottom extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    final ButtonStyle style =
    ElevatedButton.styleFrom(
        textStyle: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
        ),
        elevation: 20, padding: EdgeInsets.all(5),
        shape : RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(10)));

    return Center(
        child: SizedBox(
        height:300, //height of button
        width:500,


      child: Padding(
        padding: const EdgeInsets.all(5.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,

          children: <Widget>[
            ElevatedButton.icon(
              label: Text('                 SIGNUP                 '),
              icon: Icon(Icons.perm_identity),
              style: style,
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(
                    builder: (context) => SignUpPage()
                ));
              },
            ),

            ElevatedButton.icon(
              label: Text('                 SIGNIN                 '),
              icon: Icon(Icons.login),
              style: style,
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(
                    builder: (context) => LoginPage()
                ));

              },

            ),
            OutlinedButton.icon(
              label: Text('Visit www.kudiex.com'),
              icon: Icon(Icons.language),
              style: TextButton.styleFrom(
                elevation: 40,
                shadowColor: Colors.white,

                textStyle: const TextStyle(
                    fontSize: 22,
                    fontStyle: FontStyle.italic,
                    fontWeight: FontWeight.w900,
                ),
              ),
              onPressed: () {
                var push = Navigator.push(
                    context, MaterialPageRoute(builder: (_) => kudiHomePage()));
              },
            ),
          ],
        ),
      ),
    ));
  }
}











