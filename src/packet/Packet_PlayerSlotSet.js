// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$negTerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$negPacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function parse(payload) {
  var reader = new Packetreader(payload);
  return reader.readByte();
}

var Decode = {
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$negPacketFactory.setType(new Packetwriter(), PacketType$negTerrariaPacket.toInt(/* PlayerSlotSet */2)).packByte(self).data;
}

var Encode = {
  packByte: packByte,
  setType: ManagedPacketWriter$negPacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
