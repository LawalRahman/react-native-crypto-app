import 'package:flutter/material.dart';
import 'package:kudi_exchange/account.dart';
import 'package:kudi_exchange/constants.dart';
import 'package:kudi_exchange/home.dart';
import 'package:kudi_exchange/trade.dart';

class NavigationWidget extends StatefulWidget {
  // const NavigationWidget({Key? key}) : super(key: key);
  int pageIndex = -1;
  NavigationWidget({Key? key, required this.pageIndex}) : super(key: key);
  @override
  State<NavigationWidget> createState() => NavigationWidgetState();
}

class NavigationWidgetState extends State<NavigationWidget> {
  int _selectedIndex = 0;
  dynamic currentPage = Home();
  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
      switch (_selectedIndex) {
        case 0:
          currentPage = Home();
          break;
        case 1:
          currentPage = Trade();
          break;
        case 2:
          currentPage = Account();
          break;
        default:
          currentPage = Home();
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    if (widget.pageIndex > 0) {
      int p = widget.pageIndex;
      widget.pageIndex = -1;
      _onItemTapped(p);
    }
    print(_selectedIndex);
    return Scaffold(
      body: currentPage,
      bottomNavigationBar: BottomNavigationBar(
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: "Home",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.double_arrow),
            label: "Trade",
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: "Profile",
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: primaryColor,
        onTap: _onItemTapped,
      ),
    );
  }
}
