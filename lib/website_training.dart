import 'package:flutter/material.dart';



class WebsitePage extends StatelessWidget {
  const WebsitePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("KUDIEX - WEBSITE"),
      ),
      body: const Center(
        child: Text('WEB page!!'),
      ),
    );
  }
}



