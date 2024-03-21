// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readByte();
  var slot = reader.readInt16();
  var stack = reader.readInt16();
  var prefix = reader.readByte();
  var itemId = reader.readInt16();
  return {
          playerId: playerId,
          slot: slot,
          stack: stack,
          prefix: prefix,
          itemId: itemId
        };
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("PlayerInventorySlot")).packByte(self.playerId).packInt16(self.slot).packInt16(self.stack).packByte(self.prefix).packInt16(self.itemId).data;
}

exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
