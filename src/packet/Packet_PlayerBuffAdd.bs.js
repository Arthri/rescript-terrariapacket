// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readByte();
  var buff = reader.readUInt16();
  var time = reader.readInt32();
  return {
          playerId: playerId,
          buff: buff,
          time: time
        };
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt(/* PlayerBuffAdd */50)).packByte(self.playerId).packUInt16(self.buff).packInt32(self.time).data;
}

exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
