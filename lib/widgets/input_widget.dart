import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';

class Input extends StatefulWidget {
  final String hintText;
  final bool passwordField;
  Input({required this.hintText, required this.passwordField});

  @override
  _InputState createState() => _InputState();
}

class _InputState extends State<Input> {
  @override
  Widget build(BuildContext context) {
    return Container(
        margin: const EdgeInsets.symmetric(
          vertical: 15,
        ),
        padding: const EdgeInsets.symmetric(
          horizontal: 30,
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
        child: Row(
          children: [
            Expanded(
              child: TextField(
                decoration: InputDecoration(
                  hintText: widget.hintText,
                  border: InputBorder.none,
                  contentPadding: const EdgeInsets.symmetric(
                    vertical: 20,
                  ),
                ),
                obscureText: widget.passwordField,
              ),
            ),
          ],
        ));
  }
}
