import 'package:flutter/material.dart';

void main() => runApp(const TradePage());

class TradePage extends StatelessWidget {
  const TradePage({Key? key}) : super(key: key);

  static const appTitle = 'TRADE';

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      title: appTitle,
      home: TradePageHome(title: appTitle),
    );
  }
}

class TradePageHome extends StatelessWidget {
  const TradePageHome({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: const Center(
        child: Text('My Coins Page!'),
      ),
    );
  }
}