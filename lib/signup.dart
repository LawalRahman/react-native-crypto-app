import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:kudi_exchange/constants.dart';
import 'package:kudi_exchange/extras/countries.dart';
import 'package:kudi_exchange/home.dart';
import 'package:kudi_exchange/login.dart';
import 'package:kudi_exchange/welcome.dart';
import 'package:kudi_exchange/widgets/bottom_navigation_bar.dart';
import 'package:kudi_exchange/widgets/input_widget.dart';

class SignUp extends StatefulWidget {
  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  var _mySelection;
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    return Scaffold(
      body: Stack(
        children: [
          Container(
            color: primaryColor,
            padding: EdgeInsets.only(top: 70, left: 20, right: 20),
            width: double.infinity,
            height: size.height,
            child: Column(
              children: [
                RichText(
                  textAlign: TextAlign.center,
                  text: const TextSpan(
                    children: [
                      TextSpan(
                        text: "WELCOME TO KUDIEX\n",
                        style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 40),
                      ),
                      TextSpan(
                        text: "Easiest platform to trade your crypto!",
                        style: TextStyle(color: Colors.white, fontSize: 15),
                      )
                    ],
                  ),
                ),
              ],
            ),
          ),
          Center(
            child: Container(
              padding: EdgeInsets.only(top: 20, left: 30, right: 30),
              margin: EdgeInsets.only(
                top: size.height * 0.3,
              ),
              // transform: Matrix4.translationValues(0, size.height * 0.3, 0),
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                ),
              ),
              child: ListView(
                shrinkWrap: true,
                physics: ClampingScrollPhysics(),
                children: [
                  const Center(
                    child: Text(
                      "Sign Up",
                      style: TextStyle(
                        color: textColor,
                        fontSize: 40,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  Input(
                    hintText: "Enter Username",
                    passwordField: false,
                  ),
                  Input(
                    hintText: "Enter Email",
                    passwordField: false,
                  ),
                  Container(
                    margin: const EdgeInsets.symmetric(
                      vertical: 15,
                    ),
                    padding: const EdgeInsets.symmetric(
                      horizontal: 30,
                      vertical: 5,
                    ),
                    decoration: BoxDecoration(
                      border: Border.all(
                        width: 0,
                        color: Colors.grey,
                      ),
                      borderRadius: BorderRadius.circular(
                        20,
                      ),
                    ),
                    child: DropdownButton(
                      underline: SizedBox(),
                      isExpanded: true,
                      hint: const Text("Select a country"),
                      value: _mySelection,
                      items: countries.map((country) {
                        return DropdownMenuItem(
                          value: country["name"],
                          child: Text(country["name"].toString()),
                        );
                      }).toList(),
                      onChanged: (newVal) {
                        setState(() {
                          _mySelection = newVal.toString();
                        });
                      },
                    ),
                  ),
                  Input(
                    hintText: "Phone Number",
                    passwordField: false,
                  ),
                  Input(
                    hintText: "Password",
                    passwordField: true,
                  ),
                  Input(
                    hintText: "Confirm Password",
                    passwordField: true,
                  ),
                  const SizedBox(
                    height: 20,
                  ),
                  ElevatedButton(
                    style: ButtonStyle(
                      minimumSize: MaterialStateProperty.all<Size>(
                        Size(MediaQuery.of(context).size.width, 60),
                      ),
                      backgroundColor:
                          MaterialStateProperty.all<Color>(primaryColor),
                      shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                        RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(20.0),
                        ),
                      ),
                    ),
                    child: const Text(
                      "SIGN UP",
                      style: TextStyle(color: Colors.white),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return NavigationWidget(pageIndex: 0);
                          },
                        ),
                      );
                    },
                  ),
                  const SizedBox(
                    height: 50,
                  ),
                  Container(
                    margin: EdgeInsets.only(bottom: 50),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Text(
                          "You have an account? ",
                          style: TextStyle(
                            color: textColor,
                            fontSize: 15,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        GestureDetector(
                          onTap: () {
                            Navigator.push(
                              context,
                              MaterialPageRoute(
                                builder: (context) {
                                  return Login();
                                },
                              ),
                            );
                          },
                          child: const Text(
                            "Login",
                            style: TextStyle(
                              color: primaryColor,
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
