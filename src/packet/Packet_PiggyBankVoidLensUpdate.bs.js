// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function readInt16(prim) {
  return prim.readInt16();
}

function tryReading(reader) {
  var n = reader.readInt16();
  if (n !== -1) {
    return ;
  }
  var expectedIdentity = reader.readInt16();
  var expectedType = reader.readInt16();
  return {
          expectedIdentity: expectedIdentity,
          expectedType: expectedType
        };
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function pack(writer, self) {
  if (self !== undefined) {
    return writer.packInt16(self.expectedIdentity).packInt16(self.expectedType);
  } else {
    return writer.packInt16(-1);
  }
}

var TrackedProjectileReference = {
  readInt16: readInt16,
  tryReading: tryReading,
  packInt16: packInt16,
  pack: pack
};

function readByte(prim) {
  return prim.readByte();
}

function readSingle(prim) {
  return prim.readSingle();
}

function readInt32(prim) {
  return prim.readInt32();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readByte();
  var piggyBankProj = tryReading(reader);
  var voidLensChest = tryReading(reader);
  return {
          playerId: playerId,
          piggyBankProj: piggyBankProj,
          voidLensChest: voidLensChest
        };
}

var Decode = {
  readByte: readByte,
  readSingle: readSingle,
  readInt32: readInt32,
  parse: parse
};

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt32(prim0, prim1) {
  return prim0.packInt32(prim1);
}

function packSingle(prim0, prim1) {
  return prim0.packSingle(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return pack(pack(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("PiggyBankVoidLensUpdate")).packByte(self.playerId), self.piggyBankProj), self.voidLensChest).data;
}

var Encode = {
  Writer: undefined,
  packByte: packByte,
  packInt32: packInt32,
  packSingle: packSingle,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.TrackedProjectileReference = TrackedProjectileReference;
exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
