// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$negTerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$negPacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function parse(payload) {
  var reader = new Packetreader(payload);
  var version = reader.readString();
  return {
          version: version
        };
}

function toBuffer(self) {
  return ManagedPacketWriter$negPacketFactory.setType(new Packetwriter(), PacketType$negTerrariaPacket.toInt(/* ConnectRequest */0)).packString(self.version).data;
}

exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */