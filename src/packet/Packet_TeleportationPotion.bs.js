// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function teleportTypeToInt(teleportType) {
  switch (teleportType) {
    case "TeleportationPotion" :
        return 0;
    case "MagicConch" :
        return 1;
    case "DemonConch" :
        return 2;
    case "ShellphoneSpawn" :
        return 3;
    
  }
}

function readByte(prim) {
  return prim.readByte();
}

function readInt16(prim) {
  return prim.readInt16();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var match = reader.readByte();
  var teleportType;
  switch (match) {
    case 0 :
        teleportType = "TeleportationPotion";
        break;
    case 1 :
        teleportType = "MagicConch";
        break;
    case 2 :
        teleportType = "DemonConch";
        break;
    case 3 :
        teleportType = "ShellphoneSpawn";
        break;
    default:
      teleportType = undefined;
  }
  if (teleportType !== undefined) {
    return {
            teleportType: teleportType
          };
  }
  
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
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("TeleportationPotion")).packByte(teleportTypeToInt(self.teleportType)).data;
}

var Encode = {
  Writer: undefined,
  packByte: packByte,
  packInt16: packInt16,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.teleportTypeToInt = teleportTypeToInt;
exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
