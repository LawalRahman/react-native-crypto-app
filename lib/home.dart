import 'package:flutter/material.dart';

import 'main.dart';

void main() => runApp(const HomePage());

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  static const appTitle = 'WELCOME';

  @override
  Widget build(BuildContext context) {
    return  MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      title: appTitle,
      home: Scaffold(
        body : Container(


        //
        // title: _title,
        child:HomePageMain(title: appTitle),

    )));
  }
}

class HomePageMain extends StatelessWidget {
  const HomePageMain({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(title)),
      body: SingleChildScrollView(


          child: Column (mainAxisAlignment: MainAxisAlignment.start,
          children: <Widget>[
            NotificationAndWelcomeCard(),
            BitCoinGraphCard(),
            EhereumCoinGraphCard(),
            DogeCoinGraphCard(),
            CardanoCoinGraphCard(),
            VETChainCoinGraphCard(),
            SHIBAChainCoinGraphCard()
      ])),



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
                color: Colors.blue,
              ),
              child: Text('PROFILE', style: TextStyle(color: Colors.white, fontSize: 35)),
            ),
            ListTile(
              title: const Text('User Details',style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              onTap: () {
                var push = Navigator.push(
                    context, MaterialPageRoute(builder: (_) => showUserDetailsModal())
                );
              },
            ),
            ListTile(
              title: const Text('Update Password',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
              onTap: () {
                // Navigator.pop(context);
                Navigator.push(
                    context, MaterialPageRoute(builder: (_) => passwordDetailsModal()));
              },

            ),

            ListTile(
              title: const Text('Activate MFA',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
              onTap: () {
                Navigator.pop(context);
              },
            ),

            ListTile(
              title: const Text('Logout',style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
              onTap: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
    );
  }
}


class NotificationAndWelcomeCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child:Container(
        height: 80,
        color: Colors.black12,
            child: ListTile(
              isThreeLine: true,
                leading: CircleAvatar(
                  backgroundImage: AssetImage("asset/image/username.png"), // no matter how big it is, it won't overflow
                ),
              title: Text('Welcome {Username}', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
              subtitle: Text('NOTIFICATIONS', style: TextStyle(fontWeight: FontWeight.bold, color : Colors.blue)),
                trailing:Icon(Icons.notifications,color: Colors.blue,),
              onTap: () {
                  }
            ),
        ),
      elevation: 10,
      margin: const EdgeInsets.all(10),
    );
  }
}



class BitCoinGraphCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(

      child: Container(
          child: Column(
              children: <Widget>[
        ListTile(
            leading: CircleAvatar(
              backgroundImage: AssetImage("asset/image/btc.png"), // no matter how big it is, it won't overflow
            ),
            title: Text('Bitcoin', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color : Colors.deepOrangeAccent)),
            subtitle: Text('BTC', style: TextStyle(fontWeight: FontWeight.bold, color : Colors.deepOrangeAccent)),
          trailing :  Text('35,000.00', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color : Colors.black)),
          onTap: () {
          }
        ),
]
    )
        ),
    );
  }
}


class EhereumCoinGraphCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
          child: Column(
              children: <Widget>[
                ListTile(
                    leading: CircleAvatar(
                      backgroundImage: AssetImage("asset/image/eth.png"), // no matter how big it is, it won't overflow
                    ),
                    title: const Text('Ethereum', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color : Colors.deepPurpleAccent)),
                    subtitle: const Text('ETH', style: TextStyle(fontWeight: FontWeight.bold, color : Colors.deepPurpleAccent)),
                    trailing :  const Text('3,500.00', style:  TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color : Colors.black)),
                    onTap: () {
                    }
                ),
              ]
          )
      ),
    );
  }
}


class DogeCoinGraphCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
          child: Column(
              children: <Widget>[

                ListTile(
                    leading:  CircleAvatar(
                      // backgroundColor: Colors.black87,
                      backgroundImage: AssetImage("asset/image/dogecoin.png"), // no matter how big it is, it won't overflow
                    ),
                    title: Text('Dogecoin', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color : Colors.brown)),
                    subtitle: Text('DOGE', style: const TextStyle(fontWeight: FontWeight.bold, color : Colors.brown)),
                    trailing :  Text('10.00', style: const TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color : Colors.black)),
                    onTap: () {
                    }
                ),
              ]
          )
      ),
    );
  }
}

class CardanoCoinGraphCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
          child: Column(
              children: <Widget>[

                ListTile(
                    leading:  Image(
              image: AssetImage("asset/image/cardano.png"),
      ), // no matter how big it is, it won't overflow

                    title: const Text('Cardano', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color : Colors.indigoAccent)),
                    subtitle: const Text('ADA', style: TextStyle(fontWeight: FontWeight.bold, color : Colors.indigoAccent)),
                    trailing :  const Text('5.00', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color : Colors.black)),
                    onTap: () {
                    }
                ),
              ]
          )
      ),
    );
  }
}


class VETChainCoinGraphCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
          child: Column(
              children: <Widget>[

                ListTile(
                    leading: const CircleAvatar(
                      backgroundImage: AssetImage("asset/image/vechain.png"), // no matter how big it is, it won't overflow
                    ),
                    title: const Text('VeChain', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color : Colors.lightBlueAccent)),
                    subtitle: const Text('VET', style: TextStyle(fontWeight: FontWeight.bold, color : Colors.lightBlueAccent)),
                    trailing :  const Text('5.00', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color : Colors.black)),
                    onTap: () {
                    }
                ),
              ]
          )
      ),
    );
  }
}


class SHIBAChainCoinGraphCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
          child: Column(
              children: <Widget>[

                ListTile(
                    leading: CircleAvatar(
                      backgroundImage: AssetImage("asset/image/shiba.png"), // no matter how big it is, it won't overflow
                    ),
                    title: Text('SHIBA INU', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold, color : Colors.black87)),
                    subtitle: Text('SHIB', style: TextStyle(fontWeight: FontWeight.bold, color : Colors.black87)),
                    trailing :  Text('5.00', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold, color : Colors.black)),
                    onTap: () {
                    }
                ),
              ]
          )
      ),
    );
  }
}



class showUserDetailsModal extends StatelessWidget {
  @override
  Widget  build (BuildContext context) {
    return Container(
      height: 200,
      // color: Colors.orangeAccent,
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[

            UserDetailCard(),


            ElevatedButton(
              child: const Text('Close'),
              onPressed: () => Navigator.pop(context),
            )
          ],
        ),
      ),
    );
  }
}


class passwordDetailsModal extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 200,

      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[

            UpdatePasswordCard(),
            ElevatedButton(
              child: const Text('submit'),
              onPressed: () => Navigator.pop(context),
            )
          ],
        ),
      ),
    );
  }
}


class UserDetailCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      child:Container(
        height: 120,
        color: Colors.black12,
        child: ListTile(
          contentPadding: EdgeInsets.all(30),
            isThreeLine: true,
            leading: CircleAvatar(
              backgroundImage: AssetImage("asset/image/username.png"), // no matter how big it is, it won't overflow
            ),
            title: Text('{Username}', style: TextStyle(fontSize: 17, fontWeight: FontWeight.bold)),
            subtitle: Text('{email}', style: TextStyle(fontWeight: FontWeight.bold, color : Colors.blue)),
            onTap: () {
            }
        ),
      ),
      elevation: 10,
      margin: const EdgeInsets.all(10),
    );
  }
}



class UpdatePasswordCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(

          crossAxisAlignment: CrossAxisAlignment.start,



          children: <Widget>[

            Text('Update Password', style: TextStyle(color: Colors.blueAccent, fontSize: 20, fontWeight: FontWeight.bold)),

      const Padding(
      padding: EdgeInsets.symmetric(horizontal: 8, vertical: 5),
      child: TextField(
        decoration: InputDecoration(
          border: OutlineInputBorder(),
          hintText: 'Enter old password',
        ),
      ),


    ),

            const Padding(
              padding: EdgeInsets.symmetric(horizontal: 8, vertical: 5),
              child: TextField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                  hintText: 'Enter new password',
                ),
              ),


            ),
      ]);
      // elevation: 10,
      // margin: const EdgeInsets.all(10),

  }
}
