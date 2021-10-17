import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:kudi_exchange/constants.dart';
import 'package:kudi_exchange/token.dart';
import 'package:kudi_exchange/widgets/bottom_navigation_bar.dart';
import 'package:kudi_exchange/widgets/top_navigation_bar.dart';

/// This is the stateful widget that the main application instantiates.
class Home extends StatefulWidget {
  const Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _MyStatefulWidgetState();
}

/// This is the private State class that goes with MyStatefulWidget.
class _MyStatefulWidgetState extends State<Home> {
  bool visibilityController = true;
  @override
  Widget build(BuildContext context) {
    var currency = '\$';
    var height = MediaQuery.of(context).size.height;
    return Container(
      width: MediaQuery.of(context).size.width,
      height: MediaQuery.of(context).size.height,
      padding: const EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: 5,
      ),
      child: ListView(
        shrinkWrap: true,
        physics: ClampingScrollPhysics(),
        children: [
          TopNavigation(
            header: "Watchlist",
          ),
          const SizedBox(
            height: 20,
          ),
          ListView(
            shrinkWrap: true,
            physics: ClampingScrollPhysics(),
            children: [
              Visibility(
                visible: visibilityController,
                child: Stack(
                  children: [
                    Card(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: InkWell(
                        splashColor: Colors.blue.withAlpha(30),
                        onTap: () {
                          print("Notification");
                        },
                        child: SizedBox(
                          width: MediaQuery.of(context).size.width,
                          height: height * 0.15,
                          child: const Padding(
                            padding: EdgeInsets.symmetric(
                                horizontal: 30.0, vertical: 0),
                            child: Center(
                              child: Text(
                                'Here is a notification shown to the user',
                                style: TextStyle(fontSize: 18),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    Align(
                      alignment: Alignment.topRight,
                      child: Container(
                        margin: EdgeInsets.all(16.0),
                        width: 30,
                        height: 30,
                        decoration: BoxDecoration(
                          color: Colors.grey.shade300,
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Center(
                          child: IconButton(
                            iconSize: 15,
                            icon: const Icon(Icons.close),
                            color: Colors.white,
                            tooltip: MaterialLocalizations.of(context)
                                .closeButtonTooltip,
                            onPressed: () {
                              setState(() {
                                visibilityController = false;
                              });
                            },
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(
                height: 10,
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                padding: EdgeInsets.symmetric(horizontal: 14, vertical: 13),
                width: MediaQuery.of(context).size.width,
                child: InkWell(
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) {
                          return Token();
                        },
                      ),
                    );
                  },
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      vertical: 4,
                      horizontal: 0,
                    ),
                    width: MediaQuery.of(context).size.width,
                    child: Row(
                      children: [
                        Container(
                          width: 30,
                          height: 30,
                          child: SvgPicture.asset(
                            "asset/image/ethereum-eth.svg",
                          ),
                        ),
                        const SizedBox(
                          width: 10,
                        ),
                        Container(
                          width: MediaQuery.of(context).size.width * 0.6,
                          child: Column(
                            children: [
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Container(
                                    child: const Text(
                                      "Ethereum",
                                      style: TextStyle(
                                        fontSize: fontSize,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  ),
                                  Container(
                                    child: Text(
                                      "$currency 0.50",
                                      // textAlign: TextAlign.right,
                                      style: const TextStyle(
                                        fontSize: fontSize,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                  )
                                ],
                              ),
                              const SizedBox(
                                height: 5,
                              ),
                              Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Container(
                                    child: const Text(
                                      "ETH",
                                      style: TextStyle(
                                        fontSize: fontSize,
                                        color: Colors.grey,
                                      ),
                                    ),
                                  ),
                                  Container(
                                    child: const Text(
                                      "+0.05%",
                                      // textAlign: TextAlign.right,
                                      style: TextStyle(
                                        fontSize: fontSize,
                                        color: Colors.green,
                                      ),
                                    ),
                                  )
                                ],
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                padding: EdgeInsets.symmetric(horizontal: 14, vertical: 13),
                width: MediaQuery.of(context).size.width,
                child: Center(
                  child: InkWell(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return Token();
                          },
                        ),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        vertical: 4,
                        horizontal: 0,
                      ),
                      width: MediaQuery.of(context).size.width,
                      child: Row(
                        children: [
                          Container(
                            width: 30,
                            height: 30,
                            child: SvgPicture.asset(
                              "asset/image/bitcoin.svg",
                            ),
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          Container(
                            width: MediaQuery.of(context).size.width * 0.6,
                            child: Column(
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "Bitcoin",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: Text(
                                        "$currency 0.50",
                                        // textAlign: TextAlign.right,
                                        style: const TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                                const SizedBox(
                                  height: 5,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "BTC",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.grey,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: const Text(
                                        "+0.05%",
                                        // textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.green,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                padding: EdgeInsets.symmetric(horizontal: 14, vertical: 13),
                width: MediaQuery.of(context).size.width,
                child: Center(
                  child: InkWell(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return Token();
                          },
                        ),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        vertical: 4,
                        horizontal: 0,
                      ),
                      width: MediaQuery.of(context).size.width,
                      child: Row(
                        children: [
                          Container(
                            width: 30,
                            height: 30,
                            child: SvgPicture.asset(
                              "asset/image/dogecoin.svg",
                            ),
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          Container(
                            width: MediaQuery.of(context).size.width * 0.6,
                            child: Column(
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "Dogecoin",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: Text(
                                        "$currency 0.50",
                                        // textAlign: TextAlign.right,
                                        style: const TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                                const SizedBox(
                                  height: 5,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "DOGE",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.grey,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: const Text(
                                        "+0.05%",
                                        // textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.green,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                padding: EdgeInsets.symmetric(horizontal: 14, vertical: 13),
                width: MediaQuery.of(context).size.width,
                child: Center(
                  child: InkWell(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return Token();
                          },
                        ),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        vertical: 4,
                        horizontal: 0,
                      ),
                      width: MediaQuery.of(context).size.width,
                      child: Row(
                        children: [
                          Container(
                            width: 30,
                            height: 30,
                            child: SvgPicture.asset(
                              "asset/image/cardano.svg",
                            ),
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          Container(
                            width: MediaQuery.of(context).size.width * 0.6,
                            child: Column(
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "Cardano",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: Text(
                                        "$currency 0.50",
                                        // textAlign: TextAlign.right,
                                        style: const TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                                const SizedBox(
                                  height: 5,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "ADA",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.grey,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: const Text(
                                        "+0.05%",
                                        // textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.green,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                padding: EdgeInsets.symmetric(horizontal: 14, vertical: 13),
                width: MediaQuery.of(context).size.width,
                child: Center(
                  child: InkWell(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return Token();
                          },
                        ),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        vertical: 4,
                        horizontal: 0,
                      ),
                      width: MediaQuery.of(context).size.width,
                      child: Row(
                        children: [
                          Container(
                            width: 30,
                            height: 30,
                            child: SvgPicture.asset(
                              "asset/image/ven.svg",
                            ),
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          Container(
                            width: MediaQuery.of(context).size.width * 0.6,
                            child: Column(
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "Vechain",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: Text(
                                        "$currency 0.50",
                                        // textAlign: TextAlign.right,
                                        style: const TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                                const SizedBox(
                                  height: 5,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "VET",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.grey,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: const Text(
                                        "+0.05%",
                                        // textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.green,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 5,
              ),
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                ),
                padding: EdgeInsets.symmetric(horizontal: 14, vertical: 13),
                width: MediaQuery.of(context).size.width,
                child: Center(
                  child: InkWell(
                    onTap: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) {
                            return Token();
                          },
                        ),
                      );
                    },
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        vertical: 4,
                        horizontal: 0,
                      ),
                      width: MediaQuery.of(context).size.width,
                      child: Row(
                        children: [
                          Container(
                            width: 30,
                            height: 30,
                            child: SvgPicture.asset(
                              "asset/image/bitcoin-cash.svg",
                            ),
                          ),
                          const SizedBox(
                            width: 10,
                          ),
                          Container(
                            width: MediaQuery.of(context).size.width * 0.6,
                            child: Column(
                              children: [
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "Bitcoin Cash",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: Text(
                                        "$currency 0.50",
                                        // textAlign: TextAlign.right,
                                        style: const TextStyle(
                                          fontSize: fontSize,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                                const SizedBox(
                                  height: 5,
                                ),
                                Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Container(
                                      child: const Text(
                                        "BCH",
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.grey,
                                        ),
                                      ),
                                    ),
                                    Container(
                                      child: const Text(
                                        "+0.05%",
                                        // textAlign: TextAlign.right,
                                        style: TextStyle(
                                          fontSize: fontSize,
                                          color: Colors.green,
                                        ),
                                      ),
                                    )
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          )
        ],
      ),
    );
  }
}
