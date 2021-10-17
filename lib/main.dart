import 'package:flutter/material.dart';
import 'package:kudi_exchange/constants.dart';
import 'package:kudi_exchange/welcome.dart';


void main() {
  runApp(const kudiHomePage());
}

class kudiHomePage extends StatelessWidget {
  const kudiHomePage({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp( 
      debugShowCheckedModeBanner: false,
      title: 'KUDIEX',
        theme: ThemeData(
        primaryColor: primaryColor,
        scaffoldBackgroundColor: backgroundColor,
      ),
      home: WelcomePage(),
    );
  }
}










