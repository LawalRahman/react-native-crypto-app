import 'package:flutter/material.dart';
import 'package:kudi_exchange/signup.dart';
import 'package:kudi_exchange/trade.dart';
import 'package:kudi_exchange/virtualPortfolio.dart';

import 'home.dart';
import 'learn.dart';
import 'main.dart';

void main() => runApp(const WelcomePage());

/// This is the main application widget.
class WelcomePage extends StatelessWidget {
  const WelcomePage({Key? key}) : super(key: key);
  //
  // static const String _title = 'Kudi Welcome Page';

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
        home:  Scaffold(
    body : Container(


      //
      // title: _title,
     child: WelcomeMainPage(),
      )
    ));
  }
}

/// This is the stateful widget that the main application instantiates.
class WelcomeMainPage extends StatefulWidget {
  const WelcomeMainPage({Key? key}) : super(key: key);

  @override
  State<WelcomeMainPage> createState() => _WelcomePageState();
}

/// This is the private State class that goes with MyStatefulWidget.
class _WelcomePageState extends State<WelcomeMainPage> {
  int _selectedIndex = 0;
  static const TextStyle optionStyle =
  TextStyle(fontSize: 30, fontWeight: FontWeight.bold);
  static const List<Widget> _widgetOptions = <Widget>[
    HomePage(),
    VirtualPortfolioPage(),
    TradePage(),
    LearnPage(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: _widgetOptions.elementAt(_selectedIndex),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
            backgroundColor: Colors.blue,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.business),
            label: 'Virtual Portfolio',
            backgroundColor: Colors.green,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.timeline),
            label: 'Trade',
            backgroundColor: Colors.red,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.school),
            label: 'Learn',
            backgroundColor: Colors.deepPurple,

          ),

        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.white,
        onTap: _onItemTapped,
      ),
    );
  }
}
