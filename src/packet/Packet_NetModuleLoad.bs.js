// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Networktext = require("@popstarfreas/packetfactory/networktext").default;
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");

function fromInt(n) {
  switch (n) {
    case 0 :
        return "Liquid";
    case 1 :
        return "Text";
    case 2 :
        return "Ping";
    case 3 :
        return "Ambience";
    case 4 :
        return "Bestiary";
    case 5 :
        return "CreativeUnlocks";
    case 6 :
        return "CreativePower";
    case 7 :
        return "CreativeUnlocksPlayerReport";
    case 8 :
        return "TeleportPylon";
    case 9 :
        return "Particles";
    case 10 :
        return "CreativePowerPermissions";
    default:
      return ;
  }
}

function toInt(self) {
  switch (self) {
    case "Liquid" :
        return 0;
    case "Text" :
        return 1;
    case "Ping" :
        return 2;
    case "Ambience" :
        return 3;
    case "Bestiary" :
        return 4;
    case "CreativeUnlocks" :
        return 5;
    case "CreativePower" :
        return 6;
    case "CreativeUnlocksPlayerReport" :
        return 7;
    case "TeleportPylon" :
        return 8;
    case "Particles" :
        return 9;
    case "CreativePowerPermissions" :
        return 10;
    
  }
}

var NetModuleType = {
  fromInt: fromInt,
  toInt: toInt
};

function toBuffer(self) {
  switch (self.TAG) {
    case "Liquid" :
        var liquid = self._0;
        var writer = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("NetModuleLoad")).packUInt16(0).packUInt16(liquid.changes.length);
        liquid.changes.forEach(function (change) {
              writer.packInt16(change.y).packInt16(change.x).packByte(change.amount).packByte(change.liquidType);
            });
        return writer.data;
    case "ClientText" :
        var commandId = self._0;
        var message = self._1;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("NetModuleLoad")).packUInt16(1).packString(commandId).packString(message).data;
    case "ServerText" :
        var playerId = self._0;
        var networkText = self._1;
        var color = self._2;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("NetModuleLoad")).packUInt16(1).packByte(playerId).packNetworkText(networkText).packColor(color).data;
    case "Ping" :
        var ping = self._0;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("NetModuleLoad")).packUInt16(2).packSingle(ping.x).packSingle(ping.y).data;
    case "Ambience" :
        var ambience = self._0;
        return ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("NetModuleLoad")).packUInt16(3).packByte(ambience.playerId).packInt32(ambience.seed).packByte(ambience.skyEntityType).data;
    case "Bestiary" :
        var bestiary = self._0;
        var writer$1 = ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("NetModuleLoad")).packUInt16(4);
        var _count = bestiary.unlockType;
        var tmp;
        tmp = typeof _count !== "object" ? (
            _count === "Sight" ? writer$1.packByte(1) : writer$1.packByte(2)
          ) : writer$1.packByte(0);
        tmp.packInt16(bestiary.npcId);
        var count = bestiary.unlockType;
        var tmp$1;
        tmp$1 = typeof count !== "object" ? writer$1 : writer$1.packUInt16(count._0);
        return tmp$1.data;
    default:
      return Buffer.allocUnsafe(0);
  }
}

function parse(payload, fromServer) {
  var reader = new Packetreader(payload);
  var moduleType = reader.readUInt16();
  var match = fromInt(moduleType);
  if (match === undefined) {
    return ;
  }
  switch (match) {
    case "Liquid" :
        var changesCount = reader.readUInt16();
        var changes = [];
        for(var _for = 0; _for < changesCount; ++_for){
          var y = reader.readInt16();
          var x = reader.readInt16();
          var amount = reader.readByte();
          var liquidType = reader.readByte();
          changes.push({
                x: x,
                y: y,
                amount: amount,
                liquidType: liquidType
              });
        }
        return {
                TAG: "Liquid",
                _0: {
                  changes: changes
                }
              };
    case "Text" :
        if (fromServer) {
          var playerId = reader.readByte();
          var mode = reader.readByte();
          var message = reader.readString();
          var color = reader.readColor();
          return {
                  TAG: "ServerText",
                  _0: playerId,
                  _1: new Networktext(mode, message),
                  _2: color
                };
        }
        var commandId = reader.readString();
        var message$1 = reader.readString();
        return {
                TAG: "ClientText",
                _0: commandId,
                _1: message$1
              };
    case "Ping" :
        var x$1 = reader.readSingle();
        var y$1 = reader.readSingle();
        return {
                TAG: "Ping",
                _0: {
                  x: x$1,
                  y: y$1
                }
              };
    case "Ambience" :
        var playerId$1 = reader.readByte();
        var seed = reader.readInt32();
        var skyEntityType = reader.readByte();
        return {
                TAG: "Ambience",
                _0: {
                  playerId: playerId$1,
                  seed: seed,
                  skyEntityType: skyEntityType
                }
              };
    case "Bestiary" :
        var rawBestiaryUnlockType = reader.readByte();
        var npcId = reader.readInt16();
        var bestiaryUnlockType;
        switch (rawBestiaryUnlockType) {
          case 0 :
              bestiaryUnlockType = {
                TAG: "Kill",
                _0: reader.readUInt16()
              };
              break;
          case 1 :
              bestiaryUnlockType = "Sight";
              break;
          case 2 :
              bestiaryUnlockType = "Chat";
              break;
          default:
            bestiaryUnlockType = undefined;
        }
        if (bestiaryUnlockType !== undefined) {
          return {
                  TAG: "Bestiary",
                  _0: {
                    unlockType: bestiaryUnlockType,
                    npcId: npcId
                  }
                };
        } else {
          return ;
        }
    case "CreativeUnlocks" :
        var itemId = reader.readInt16();
        var researchedCount = reader.readUInt16();
        return {
                TAG: "CreativeUnlocks",
                _0: {
                  itemId: itemId,
                  researchedCount: researchedCount
                }
              };
    case "CreativePower" :
        var powerType = reader.readUInt16();
        return {
                TAG: "CreativePower",
                _0: {
                  powerType: powerType
                }
              };
    case "CreativeUnlocksPlayerReport" :
        reader.readByte();
        var itemId$1 = reader.readUInt16();
        var researchedCount$1 = reader.readUInt16();
        return {
                TAG: "CreativeUnlocksPlayerReport",
                _0: {
                  itemId: itemId$1,
                  researchedCount: researchedCount$1
                }
              };
    case "TeleportPylon" :
        var rawPylonAction = reader.readByte();
        var x$2 = reader.readInt16();
        var y$2 = reader.readInt16();
        var pylonType = reader.readByte();
        var pylonAction;
        switch (rawPylonAction) {
          case 0 :
              pylonAction = "Added";
              break;
          case 1 :
              pylonAction = "Removed";
              break;
          case 2 :
              pylonAction = "RequestTeleport";
              break;
          default:
            pylonAction = undefined;
        }
        if (pylonAction !== undefined) {
          return {
                  TAG: "TeleportPylon",
                  _0: {
                    pylonAction: pylonAction,
                    x: x$2,
                    y: y$2,
                    pylonType: pylonType
                  }
                };
        } else {
          return ;
        }
    case "Particles" :
        var particleType = reader.readByte();
        var x$3 = reader.readSingle();
        var y$3 = reader.readSingle();
        var vx = reader.readSingle();
        var vy = reader.readSingle();
        var shaderIndex = reader.readInt32();
        var invokedByPlayer = reader.readByte();
        return {
                TAG: "Particles",
                _0: {
                  particleType: particleType,
                  x: x$3,
                  y: y$3,
                  vx: vx,
                  vy: vy,
                  shaderIndex: shaderIndex,
                  invokedByPlayer: invokedByPlayer
                }
              };
    case "CreativePowerPermissions" :
        reader.readByte();
        var powerType$1 = reader.readUInt16();
        var rawPowerLevel = reader.readByte();
        var powerLevel;
        switch (rawPowerLevel) {
          case 0 :
              powerLevel = "LockedForEveryone";
              break;
          case 1 :
              powerLevel = "CanBeChangedByHostAlone";
              break;
          case 2 :
              powerLevel = "CanBeChangedByEveryone";
              break;
          default:
            powerLevel = undefined;
        }
        if (powerLevel !== undefined) {
          return {
                  TAG: "CreativePowerPermissions",
                  _0: {
                    powerType: powerType$1,
                    powerLevel: powerLevel
                  }
                };
        } else {
          return ;
        }
    
  }
}

exports.NetModuleType = NetModuleType;
exports.toBuffer = toBuffer;
exports.parse = parse;
/* @popstarfreas/packetfactory/networktext Not a pure module */
