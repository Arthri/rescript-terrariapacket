// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function readNetworkText(prim) {
  return prim.readNetworkText();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var reason = reader.readNetworkText();
  return {
          reason: reason
        };
}

var Decode = {
  readNetworkText: readNetworkText,
  parse: parse
};

function packNetworkText(prim0, prim1) {
  return prim0.packNetworkText(prim1);
}

function data(prim) {
  return prim.data;
}

function toBuffer(self) {
  return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("Disconnect")).packNetworkText(self.reason).data;
}

var Encode = {
  packNetworkText: packNetworkText,
  setType: ManagedPacketWriter$PacketFactory.setType,
  data: data,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
