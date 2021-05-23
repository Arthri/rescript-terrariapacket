// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Zlib = require("zlib");
var Belt_Option = require("rescript/lib/js/belt_Option.js");
var BitFlags$negTerrariaPacket = require("../BitFlags.js");
var TileSolid$negTerrariaPacket = require("../TileSolid.js");
var TileFrameImportant$negTerrariaPacket = require("../TileFrameImportant.js");
var Bufferreader = require("@popstarfreas/packetfactory/bufferreader").default;
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;

function defaultTileCache(param) {
  return {
          activeTile: undefined,
          color: undefined,
          wallColor: undefined,
          wall: undefined,
          liquid: undefined,
          lava: false,
          honey: false,
          wire: false,
          wire2: false,
          wire3: false,
          wire4: false,
          halfBrick: false,
          slope: undefined,
          actuator: false,
          inActive: false
        };
}

function cacheToTile(cache) {
  return {
          activeTile: cache.activeTile,
          color: cache.color,
          wallColor: cache.wallColor,
          wall: cache.wall,
          liquid: cache.liquid,
          lava: cache.lava,
          honey: cache.honey,
          wire: cache.wire,
          wire2: cache.wire2,
          wire3: cache.wire3,
          wire4: cache.wire4,
          halfBrick: cache.halfBrick,
          slope: cache.slope,
          actuator: cache.actuator,
          inActive: cache.inActive
        };
}

function readBuffer(prim0, prim1) {
  return prim0.readBuffer(prim1);
}

function getBytesLeft(prim) {
  return prim.bytesLeft;
}

function readString(prim) {
  return prim.readString();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readUInt16(prim) {
  return prim.readUInt16();
}

function readInt32(prim) {
  return prim.readInt32();
}

function readByte(prim) {
  return prim.readByte();
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var compressed = reader.readByte() === 1;
  if (!compressed) {
    return ;
  }
  var deflated = reader.readBuffer(reader.bytesLeft);
  var reader$1 = new Bufferreader(Zlib.inflateRawSync(deflated));
  var tileX = reader$1.readInt32();
  var tileY = reader$1.readInt32();
  var width = reader$1.readInt16();
  var height = reader$1.readInt16();
  var tiles = [];
  var tileCache = defaultTileCache(undefined);
  var rleCount = 0;
  if (height < 0 || width < 0) {
    return ;
  }
  for(var _y = 0; _y < height; ++_y){
    var row = [];
    for(var _x = 0; _x < width; ++_x){
      if (rleCount !== 0) {
        rleCount = rleCount - 1 | 0;
        row.push(cacheToTile(tileCache));
      } else {
        var header5 = BitFlags$negTerrariaPacket.fromByte(reader$1.readByte());
        var match;
        if (BitFlags$negTerrariaPacket.flag1(header5)) {
          var header4 = BitFlags$negTerrariaPacket.fromByte(reader$1.readByte());
          var header3 = BitFlags$negTerrariaPacket.flag1(header4) ? BitFlags$negTerrariaPacket.fromByte(reader$1.readByte()) : BitFlags$negTerrariaPacket.fromByte(0);
          match = [
            header4,
            header3
          ];
        } else {
          match = [
            BitFlags$negTerrariaPacket.fromByte(0),
            BitFlags$negTerrariaPacket.fromByte(0)
          ];
        }
        var header3$1 = match[1];
        var header4$1 = match[0];
        var oldActive = tileCache.activeTile;
        if (BitFlags$negTerrariaPacket.flag2(header5)) {
          var oldType = Belt_Option.mapWithDefault(tileCache.activeTile, 0, (function (active) {
                  return active.tileType;
                }));
          var tileType;
          if (BitFlags$negTerrariaPacket.flag6(header5)) {
            var $$byte = reader$1.readByte();
            var secondByte = reader$1.readByte();
            tileType = (secondByte << 8) | $$byte;
          } else {
            tileType = reader$1.readByte();
          }
          var frame;
          if (TileFrameImportant$negTerrariaPacket.isImportant(tileType)) {
            var x = reader$1.readInt16();
            var y = reader$1.readInt16();
            frame = {
              x: x,
              y: y
            };
          } else {
            frame = Belt_Option.isSome(oldActive) && tileType === oldType ? oldActive.frame : undefined;
          }
          if (BitFlags$negTerrariaPacket.flag4(header3$1)) {
            tileCache.color = reader$1.readByte();
          }
          tileCache.activeTile = {
            tileType: tileType,
            frame: frame
          };
        }
        if (BitFlags$negTerrariaPacket.flag3(header5)) {
          tileCache.wall = reader$1.readByte();
          if (BitFlags$negTerrariaPacket.flag5(header3$1)) {
            tileCache.wallColor = reader$1.readByte();
          }
          
        }
        var liquidBits = ((BitFlags$negTerrariaPacket.toByte(header5) & 24) >>> 3);
        if (liquidBits !== 0) {
          tileCache.liquid = reader$1.readByte();
          if (liquidBits > 1) {
            if (liquidBits === 2) {
              tileCache.lava = true;
            } else {
              tileCache.honey = true;
            }
          }
          
        }
        if (BitFlags$negTerrariaPacket.toByte(header4$1) > 1) {
          if (BitFlags$negTerrariaPacket.flag2(header4$1)) {
            tileCache.wire = true;
          }
          if (BitFlags$negTerrariaPacket.flag3(header4$1)) {
            tileCache.wire2 = true;
          }
          if (BitFlags$negTerrariaPacket.flag4(header4$1)) {
            tileCache.wire3 = true;
          }
          var slopeBits = ((BitFlags$negTerrariaPacket.toByte(header4$1) & 112) >>> 4);
          if (slopeBits !== 0 && TileSolid$negTerrariaPacket.isSolid(Belt_Option.mapWithDefault(tileCache.activeTile, 0, (function (tile) {
                        return tile.tileType;
                      })))) {
            if (slopeBits === 1) {
              tileCache.halfBrick = true;
            } else {
              tileCache.slope = slopeBits - 1 | 0;
            }
          }
          
        }
        if (BitFlags$negTerrariaPacket.toByte(header3$1) > 0) {
          if (BitFlags$negTerrariaPacket.flag2(header3$1)) {
            tileCache.actuator = true;
          }
          if (BitFlags$negTerrariaPacket.flag3(header3$1)) {
            tileCache.inActive = true;
          }
          if (BitFlags$negTerrariaPacket.flag6(header3$1)) {
            tileCache.wire4 = true;
          }
          if (BitFlags$negTerrariaPacket.flag7(header3$1)) {
            var $$byte$1 = reader$1.readByte();
            tileCache.wall = ($$byte$1 << 8) | tileCache.wall;
          }
          
        }
        var repeatCountBytes = ((BitFlags$negTerrariaPacket.toByte(header5) & 192) >>> 6);
        rleCount = repeatCountBytes !== 0 ? (
            repeatCountBytes !== 1 ? reader$1.readInt16() : reader$1.readByte()
          ) : 0;
      }
    }
    tiles.push(row);
  }
  return {
          height: height,
          width: width,
          tileX: tileX,
          tileY: tileY,
          tiles: tiles
        };
}

var Decode = {
  PacketReader: undefined,
  readBuffer: readBuffer,
  getBytesLeft: getBytesLeft,
  readString: readString,
  readInt16: readInt16,
  readUInt16: readUInt16,
  readInt32: readInt32,
  readByte: readByte,
  parse: parse
};

var Encode = {};

var $$Option;

exports.$$Option = $$Option;
exports.defaultTileCache = defaultTileCache;
exports.cacheToTile = cacheToTile;
exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
/* zlib Not a pure module */
