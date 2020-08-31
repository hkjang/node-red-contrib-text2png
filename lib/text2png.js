var text2png = require('text2png');
module.exports = function (RED) {

  function text2pngFunction(config) {
    RED.nodes.createNode(this, config);
    var self = this;

    this.on('input', function(msg) {
      var options = {};
      // var options = {
      //   font: '80px Futura',
      //       color: 'teal',
      //     backgroundColor: 'linen',
      //     lineSpacing: 10,
      //     padding: 20
      // }
      if(msg.options){
        var options = msg.options;
      }
      msg.payload = text2png(msg.payload, options);
      self.send(msg);
    });
  }

  RED.nodes.registerType('text2png', text2pngFunction);

};
