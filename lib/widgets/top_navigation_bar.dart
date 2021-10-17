import 'package:flutter/material.dart';

class TopNavigation extends StatefulWidget {
  final String header;
  TopNavigation({required this.header});

  @override
  State<TopNavigation> createState() => _TopNavigationState();
}

class _TopNavigationState extends State<TopNavigation> {
  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        GestureDetector(
          onTap: () {
            Navigator.of(context).pop();
          },
          child: const Icon(
            Icons.arrow_back,
          ),
        ),
        Text(
          widget.header,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
          ),
        ),
        GestureDetector(
          onTap: () {
            // Navigator.push(
            //   context,
            //   MaterialPageRoute(
            //     builder: (context) {
            //       return Trade();
            //     },
            //   ),
            // );
          },
          child: const Icon(
            Icons.notifications,
          ),
        ),
      ],
    );
  }
}
