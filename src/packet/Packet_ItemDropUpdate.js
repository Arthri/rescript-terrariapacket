// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$negTerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$negPacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readInt16(prim) {
  return prim.readInt16();
}

function readSingle(prim) {
  return prim.readSingle();
}

function readByte(prim) {
  return prim.readByte();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var itemDropId = reader.readInt16();
  var x = reader.readSingle();
  var y = reader.readSingle();
  var vx = reader.readSingle();
  var vy = reader.readSingle();
  var stack = reader.readInt16();
  var prefix = reader.readByte();
  var noDelay = reader.readByte();
  var itemId = reader.readInt16();
  return {
          itemDropId: itemDropId,
          x: x,
          y: y,
          vx: vx,
          vy: vy,
          stack: stack,
          prefix: prefix,
          noDelay: noDelay,
          itemId: itemId
        };
}

var Decode = {
  readInt16: readInt16,
  readSingle: readSingle,
  readByte: readByte,
  parse: parse
};

function packSingle(prim0, prim1) {
  return prim0.packSingle(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$negPacketFactory.setType(new Packetwriter(), PacketType$negTerrariaPacket.toInt(/* ItemDropUpdate */19)).packInt16(self.itemDropId).packSingle(self.x).packSingle(self.y).packSingle(self.vx).packSingle(self.vy).packInt16(self.stack).packByte(self.prefix).packByte(self.noDelay).packInt16(self.itemId).data;
}

var Encode = {
  packSingle: packSingle,
  packInt16: packInt16,
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
