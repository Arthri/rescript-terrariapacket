// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$TerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readByte(prim) {
  return prim.readByte();
}

function readInt16(prim) {
  return prim.readInt16();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var x = reader.readInt16();
  var y = reader.readInt16();
  return {
          x: x,
          y: y
        };
}

var Decode = {
  readByte: readByte,
  readInt16: readInt16,
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt(/* ChestOrTempleUnlock */47)).packInt16(self.x).packInt16(self.y).data;
}

var Encode = {
  Writer: undefined,
  packByte: packByte,
  packInt16: packInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
