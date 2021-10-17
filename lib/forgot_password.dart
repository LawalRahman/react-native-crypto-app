import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:kudi_exchange/constants.dart';
import 'package:kudi_exchange/login.dart';
import 'package:kudi_exchange/signup.dart';
import 'package:kudi_exchange/welcome.dart';
import 'package:kudi_exchange/widgets/input_widget.dart';

class ForgotPassword extends StatelessWidget {
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
              // transform: Matrix4.translationValues(0, size.height * 0.3, 0),
              margin: EdgeInsets.only(
                top: size.height * 0.3,
              ),
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(30),
                  topRight: Radius.circular(30),
                ),
              ),
              child: ListView(
                children: [
                  const Text(
                    "Forgot Password",
                    style: TextStyle(
                      color: textColor,
                      fontSize: 40,
                      fontWeight: FontWeight.bold,
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
                    hintText: "Enter New Password",
                    passwordField: true,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
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
                          "Back to login",
                          style: TextStyle(
                            color: primaryColor,
                            fontSize: 15,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ],
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
                      "SUBMIT",
                      style: TextStyle(color: Colors.white),
                    ),
                    onPressed: null,
                  ),
                  const SizedBox(
                    height: 50,
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
