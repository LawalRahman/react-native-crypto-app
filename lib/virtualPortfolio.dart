import 'package:flutter/material.dart';

void main() => runApp(const VirtualPortfolioPage());

class VirtualPortfolioPage extends StatelessWidget {
  const VirtualPortfolioPage({Key? key}) : super(key: key);

  static const appTitle = 'VIRTUAL PORFOLIO';

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      title: appTitle,
      home: HomePageMain(title: appTitle),
    );
  }
}

class HomePageMain extends StatelessWidget {
  const HomePageMain({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: const Center(
        child: Text('Virtual portfolio Page!'),
      ),
      drawer: Drawer(
        // Add a ListView to the drawer. This ensures the user can scroll
        // through the options in the drawer if there isn't enough vertical
        // space to fit everything.
        child: ListView(
          // Important: Remove any padding from the ListView.
          padding: EdgeInsets.zero,
          children: [
            const DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.green,
              ),
              child: Text('MANAGE PORTFOLIO', style: TextStyle(color: Colors.white, fontSize: 30)),
            ),
            ListTile(
              title: const Text('Create Portfolio',style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              onTap: () {
                // Update the state of the app
                // ...
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
            ListTile(
              title: const Text('Browse Portfolio',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
              onTap: () {
                // Update the state of the app
                // ...
                // Then close the drawer
                Navigator.pop(context);
              },
            ),

            ListTile(
              title: const Text('Update Portfolio',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
              onTap: () {
                // Update the state of the app
                // ...
                // Then close the drawer
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}