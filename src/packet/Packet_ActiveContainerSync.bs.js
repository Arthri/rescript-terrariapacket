// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readByte(prim) {
  return prim.readByte();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readString(prim) {
  return prim.readString();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var chestId = reader.readInt16();
  var x = reader.readInt16();
  var y = reader.readInt16();
  var nameLength = reader.readByte();
  var name = nameLength > 0 && nameLength <= 20 ? reader.readString() : "";
  return {
          chestId: chestId,
          x: x,
          y: y,
          nameLength: nameLength,
          name: name
        };
}

var Decode = {
  readByte: readByte,
  readInt16: readInt16,
  readString: readString,
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packString(prim0, prim1) {
  return prim0.packString(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt(/* ActiveContainerSync */29)).packInt16(self.chestId).packInt16(self.x).packInt16(self.y).packByte(self.nameLength);
  if (self.nameLength > 0 && self.nameLength <= 20) {
    writer.packString(self.name);
  }
  return writer.data;
}

var Encode = {
  packByte: packByte,
  packInt16: packInt16,
  packString: packString,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */