// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Option = require("rescript/lib/js/belt_Option.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;
var BitFlags$DarkgamingRescriptTerrariapacket = require("../BitFlags.bs.js");
var PacketType$DarkgamingRescriptTerrariapacket = require("../PacketType.bs.js");
var TileFrameImportant$DarkgamingRescriptTerrariapacket = require("../TileFrameImportant.bs.js");

function parse(payload) {
  var reader = new Packetreader(payload);
  var tileX = reader.readInt16();
  var tileY = reader.readInt16();
  var width = reader.readByte();
  var height = reader.readByte();
  var changeType = reader.readByte();
  var tiles = [];
  for(var _x = 0; _x < width; ++_x){
    var column = [];
    for(var _y = 0; _y < height; ++_y){
      var flags1 = BitFlags$DarkgamingRescriptTerrariapacket.fromByte(reader.readByte());
      var flags2 = BitFlags$DarkgamingRescriptTerrariapacket.fromByte(reader.readByte());
      var active = BitFlags$DarkgamingRescriptTerrariapacket.flag1(flags1);
      var hasWall = BitFlags$DarkgamingRescriptTerrariapacket.flag3(flags1);
      var hasLiquid = BitFlags$DarkgamingRescriptTerrariapacket.flag4(flags1);
      var wire = BitFlags$DarkgamingRescriptTerrariapacket.flag5(flags1);
      var halfBrick = BitFlags$DarkgamingRescriptTerrariapacket.flag6(flags1);
      var actuator = BitFlags$DarkgamingRescriptTerrariapacket.flag7(flags1);
      var inActive = BitFlags$DarkgamingRescriptTerrariapacket.flag8(flags1);
      var wire2 = BitFlags$DarkgamingRescriptTerrariapacket.flag1(flags2);
      var wire3 = BitFlags$DarkgamingRescriptTerrariapacket.flag2(flags2);
      var color = BitFlags$DarkgamingRescriptTerrariapacket.flag3(flags2) ? reader.readByte() : undefined;
      var wallColor = BitFlags$DarkgamingRescriptTerrariapacket.flag4(flags2) ? reader.readByte() : undefined;
      var activeTile;
      if (active) {
        var tileType = reader.readUInt16();
        var frame = TileFrameImportant$DarkgamingRescriptTerrariapacket.isImportant(tileType) ? ({
              x: reader.readInt16(),
              y: reader.readInt16()
            }) : undefined;
        var slope = ((0 + (
              BitFlags$DarkgamingRescriptTerrariapacket.flag5(flags2) ? 1 : 0
            ) | 0) + (
            BitFlags$DarkgamingRescriptTerrariapacket.flag6(flags2) ? 2 : 0
          ) | 0) + (
          BitFlags$DarkgamingRescriptTerrariapacket.flag7(flags2) ? 4 : 0
        ) | 0;
        activeTile = {
          tileType: tileType,
          slope: slope,
          frame: frame
        };
      } else {
        activeTile = undefined;
      }
      var wall = hasWall ? reader.readUInt16() : undefined;
      var liquid = hasLiquid ? ({
            liquidValue: reader.readByte(),
            liquidType: reader.readByte()
          }) : undefined;
      var wire4 = BitFlags$DarkgamingRescriptTerrariapacket.flag8(flags2);
      column.push({
            wire: wire,
            halfBrick: halfBrick,
            actuator: actuator,
            inActive: inActive,
            wire2: wire2,
            wire3: wire3,
            wire4: wire4,
            color: color,
            wallColor: wallColor,
            activeTile: activeTile,
            wall: wall,
            liquid: liquid
          });
    }
    tiles.push(column);
  }
  return {
          width: width,
          height: height,
          changeType: changeType,
          tileX: tileX,
          tileY: tileY,
          tiles: tiles
        };
}

function packTile(writer, tile) {
  var flags1 = BitFlags$DarkgamingRescriptTerrariapacket.fromFlags(Belt_Option.isSome(tile.activeTile), false, Belt_Option.isSome(tile.wall), Belt_Option.isSome(tile.liquid), tile.wire, tile.halfBrick, tile.actuator, tile.inActive);
  var flags2 = BitFlags$DarkgamingRescriptTerrariapacket.fromFlags(tile.wire2, tile.wire3, Belt_Option.isSome(tile.color), Belt_Option.isSome(tile.wallColor), Belt_Option.mapWithDefault(tile.activeTile, false, (function (tile) {
              return (tile.slope & 1) === 1;
            })), Belt_Option.mapWithDefault(tile.activeTile, false, (function (tile) {
              return (tile.slope & 2) === 2;
            })), Belt_Option.mapWithDefault(tile.activeTile, false, (function (tile) {
              return (tile.slope & 4) === 4;
            })), tile.wire4);
  writer.packByte(BitFlags$DarkgamingRescriptTerrariapacket.toByte(flags1)).packByte(BitFlags$DarkgamingRescriptTerrariapacket.toByte(flags2)).packByte(0);
  var color = tile.color;
  if (color !== undefined) {
    writer.packByte(color);
  }
  var color$1 = tile.wallColor;
  if (color$1 !== undefined) {
    writer.packByte(color$1);
  }
  var activeTile = tile.activeTile;
  if (activeTile !== undefined) {
    writer.packUInt16(activeTile.tileType);
    if (TileFrameImportant$DarkgamingRescriptTerrariapacket.isImportant(activeTile.tileType)) {
      writer.packInt16(Belt_Option.mapWithDefault(activeTile.frame, 0, (function (frame) {
                    return frame.x;
                  }))).packInt16(Belt_Option.mapWithDefault(activeTile.frame, 0, (function (frame) {
                  return frame.y;
                })));
    }
    
  }
  var wall = tile.wall;
  if (wall !== undefined) {
    writer.packUInt16(wall);
  }
  var liquid = tile.liquid;
  if (liquid !== undefined) {
    writer.packByte(liquid.liquidValue).packByte(liquid.liquidType);
  }
  return writer;
}

function packTiles(writer, tiles) {
  for(var x = 0 ,x_finish = tiles.length; x < x_finish; ++x){
    for(var y = 0 ,y_finish = tiles[x].length; y < y_finish; ++y){
      packTile(writer, tiles[x][y]);
    }
  }
  return writer;
}

function toBuffer(self) {
  return packTiles(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$DarkgamingRescriptTerrariapacket.toInt("TileSquareSend")).packInt16(self.tileX).packInt16(self.tileY).packByte(self.width).packByte(self.height).packByte(self.changeType), self.tiles).data;
}

exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
