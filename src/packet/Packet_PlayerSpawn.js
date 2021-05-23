// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$negTerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$negPacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readByte(prim) {
  return prim.readByte();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readInt32(prim) {
  return prim.readInt32();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readByte();
  var x = reader.readInt16();
  var y = reader.readInt16();
  var timeRemaining = reader.readInt32();
  var match = reader.readByte();
  var context;
  switch (match) {
    case 0 :
        context = /* ReviveFromDeath */0;
        break;
    case 1 :
        context = /* SpawningIntoWorld */1;
        break;
    case 2 :
        context = /* RecallFromItem */2;
        break;
    default:
      context = undefined;
  }
  if (context !== undefined) {
    return {
            playerId: playerId,
            x: x,
            y: y,
            timeRemaining: timeRemaining,
            context: context
          };
  }
  
}

var Decode = {
  readByte: readByte,
  readInt16: readInt16,
  readInt32: readInt32,
  parse: parse
};

function toBuffer(self) {
  return ManagedPacketWriter$negPacketFactory.setType(new Packetwriter(), PacketType$negTerrariaPacket.toInt(/* PlayerSpawn */11)).packByte(self.playerId).packInt16(self.x).packInt16(self.y).packInt32(self.timeRemaining).packByte(self.context).data;
}

var Encode = {
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */