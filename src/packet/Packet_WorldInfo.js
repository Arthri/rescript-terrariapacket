// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var BitFlags$negTerrariaPacket = require("../BitFlags.js");
var PacketType$negTerrariaPacket = require("../PacketType.js");
var ManagedPacketWriter$negPacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function readByte(prim) {
  return prim.readByte();
}

function readInt16(prim) {
  return prim.readInt16();
}

function readInt32(prim) {
  return prim.readInt32();
}

function readUInt64(prim) {
  return prim.readUInt64();
}

function readString(prim) {
  return prim.readString();
}

function readBytes(prim0, prim1) {
  return prim0.readBytes(prim1);
}

function readSingle(prim) {
  return prim.readSingle();
}

function readSByte(prim) {
  return prim.readSByte();
}

function readEventInfo(reader) {
  var eventInfo1 = BitFlags$negTerrariaPacket.fromByte(reader.readByte());
  var eventInfo2 = BitFlags$negTerrariaPacket.fromByte(reader.readByte());
  var eventInfo3 = BitFlags$negTerrariaPacket.fromByte(reader.readByte());
  var eventInfo4 = BitFlags$negTerrariaPacket.fromByte(reader.readByte());
  var eventInfo5 = BitFlags$negTerrariaPacket.fromByte(reader.readByte());
  var eventInfo6 = BitFlags$negTerrariaPacket.fromByte(reader.readByte());
  var eventInfo7 = BitFlags$negTerrariaPacket.fromByte(reader.readByte());
  var shadowOrbSmashed = BitFlags$negTerrariaPacket.flag1(eventInfo1);
  var killedBoss1 = BitFlags$negTerrariaPacket.flag2(eventInfo1);
  var killedBoss2 = BitFlags$negTerrariaPacket.flag3(eventInfo1);
  var killedBoss3 = BitFlags$negTerrariaPacket.flag4(eventInfo1);
  var hardMode = BitFlags$negTerrariaPacket.flag5(eventInfo1);
  var killedClown = BitFlags$negTerrariaPacket.flag6(eventInfo1);
  var serverSidedCharacters = BitFlags$negTerrariaPacket.flag7(eventInfo1);
  var killedPlantBoss = BitFlags$negTerrariaPacket.flag8(eventInfo1);
  var killedMechBoss = BitFlags$negTerrariaPacket.flag1(eventInfo2);
  var killedMechBoss2 = BitFlags$negTerrariaPacket.flag2(eventInfo2);
  var killedMechBoss3 = BitFlags$negTerrariaPacket.flag3(eventInfo2);
  var killedAnyMechBoss = BitFlags$negTerrariaPacket.flag4(eventInfo2);
  var cloudBg = BitFlags$negTerrariaPacket.flag5(eventInfo2);
  var crimson = BitFlags$negTerrariaPacket.flag6(eventInfo2);
  var pumpkinMoon = BitFlags$negTerrariaPacket.flag7(eventInfo2);
  var snowMoon = BitFlags$negTerrariaPacket.flag8(eventInfo2);
  var expertMode = BitFlags$negTerrariaPacket.flag1(eventInfo3);
  var fastForwardTime = BitFlags$negTerrariaPacket.flag2(eventInfo3);
  var slimeRain = BitFlags$negTerrariaPacket.flag3(eventInfo3);
  var killedKingSlime = BitFlags$negTerrariaPacket.flag4(eventInfo3);
  var killedQueenBee = BitFlags$negTerrariaPacket.flag5(eventInfo3);
  var killedFishron = BitFlags$negTerrariaPacket.flag6(eventInfo3);
  var killedMartians = BitFlags$negTerrariaPacket.flag7(eventInfo3);
  var killedAncientCultist = BitFlags$negTerrariaPacket.flag8(eventInfo3);
  var killedMoonLord = BitFlags$negTerrariaPacket.flag1(eventInfo4);
  var killedPumpking = BitFlags$negTerrariaPacket.flag2(eventInfo4);
  var killedMounringWood = BitFlags$negTerrariaPacket.flag3(eventInfo4);
  var killedIceQueen = BitFlags$negTerrariaPacket.flag4(eventInfo4);
  var killedSantank = BitFlags$negTerrariaPacket.flag5(eventInfo4);
  var killedEverscream = BitFlags$negTerrariaPacket.flag6(eventInfo4);
  var killedGolem = BitFlags$negTerrariaPacket.flag7(eventInfo4);
  var birthdayParty = BitFlags$negTerrariaPacket.flag8(eventInfo4);
  var killedPirates = BitFlags$negTerrariaPacket.flag1(eventInfo5);
  var killedFrostLegion = BitFlags$negTerrariaPacket.flag2(eventInfo5);
  var killedGoblins = BitFlags$negTerrariaPacket.flag3(eventInfo5);
  var sandstorm = BitFlags$negTerrariaPacket.flag4(eventInfo5);
  var dungeonDefendersEvent = BitFlags$negTerrariaPacket.flag5(eventInfo5);
  var killedDungeonDefendersTier1 = BitFlags$negTerrariaPacket.flag6(eventInfo5);
  var killedDungeonDefendersTier2 = BitFlags$negTerrariaPacket.flag7(eventInfo5);
  var killedDungeonDefendersTier3 = BitFlags$negTerrariaPacket.flag8(eventInfo5);
  var combatBookUsed = BitFlags$negTerrariaPacket.flag1(eventInfo6);
  var manualLanterns = BitFlags$negTerrariaPacket.flag2(eventInfo6);
  var killedSolarTower = BitFlags$negTerrariaPacket.flag3(eventInfo6);
  var killedVortexTower = BitFlags$negTerrariaPacket.flag4(eventInfo6);
  var killedNebulaTower = BitFlags$negTerrariaPacket.flag5(eventInfo6);
  var killedStardustTower = BitFlags$negTerrariaPacket.flag6(eventInfo6);
  var forceHalloween = BitFlags$negTerrariaPacket.flag7(eventInfo6);
  var forceChristmas = BitFlags$negTerrariaPacket.flag8(eventInfo6);
  var boughtCat = BitFlags$negTerrariaPacket.flag1(eventInfo7);
  var boughtDog = BitFlags$negTerrariaPacket.flag2(eventInfo7);
  var boughtBunny = BitFlags$negTerrariaPacket.flag3(eventInfo7);
  var freeCake = BitFlags$negTerrariaPacket.flag4(eventInfo7);
  var drunkWorld = BitFlags$negTerrariaPacket.flag5(eventInfo7);
  var killedEmpressOfLight = BitFlags$negTerrariaPacket.flag6(eventInfo7);
  var killedQueenSlime = BitFlags$negTerrariaPacket.flag7(eventInfo7);
  var getGoodWorld = BitFlags$negTerrariaPacket.flag8(eventInfo7);
  return {
          shadowOrbSmashed: shadowOrbSmashed,
          killedBoss1: killedBoss1,
          killedBoss2: killedBoss2,
          killedBoss3: killedBoss3,
          hardMode: hardMode,
          killedClown: killedClown,
          serverSidedCharacters: serverSidedCharacters,
          killedPlantBoss: killedPlantBoss,
          killedMechBoss: killedMechBoss,
          killedMechBoss2: killedMechBoss2,
          killedMechBoss3: killedMechBoss3,
          killedAnyMechBoss: killedAnyMechBoss,
          cloudBg: cloudBg,
          crimson: crimson,
          pumpkinMoon: pumpkinMoon,
          snowMoon: snowMoon,
          expertMode: expertMode,
          fastForwardTime: fastForwardTime,
          slimeRain: slimeRain,
          killedKingSlime: killedKingSlime,
          killedQueenBee: killedQueenBee,
          killedFishron: killedFishron,
          killedMartians: killedMartians,
          killedAncientCultist: killedAncientCultist,
          killedMoonLord: killedMoonLord,
          killedPumpking: killedPumpking,
          killedMounringWood: killedMounringWood,
          killedIceQueen: killedIceQueen,
          killedSantank: killedSantank,
          killedEverscream: killedEverscream,
          killedGolem: killedGolem,
          birthdayParty: birthdayParty,
          killedPirates: killedPirates,
          killedFrostLegion: killedFrostLegion,
          killedGoblins: killedGoblins,
          sandstorm: sandstorm,
          dungeonDefendersEvent: dungeonDefendersEvent,
          killedDungeonDefendersTier1: killedDungeonDefendersTier1,
          killedDungeonDefendersTier2: killedDungeonDefendersTier2,
          killedDungeonDefendersTier3: killedDungeonDefendersTier3,
          combatBookUsed: combatBookUsed,
          manualLanterns: manualLanterns,
          killedSolarTower: killedSolarTower,
          killedVortexTower: killedVortexTower,
          killedNebulaTower: killedNebulaTower,
          killedStardustTower: killedStardustTower,
          forceHalloween: forceHalloween,
          forceChristmas: forceChristmas,
          boughtCat: boughtCat,
          boughtDog: boughtDog,
          boughtBunny: boughtBunny,
          freeCake: freeCake,
          drunkWorld: drunkWorld,
          killedEmpressOfLight: killedEmpressOfLight,
          killedQueenSlime: killedQueenSlime,
          getGoodWorld: getGoodWorld
        };
}

function parse(payload) {
  var reader = new Packetreader(payload);
  var time = reader.readInt32();
  var dayAndMoonInfo = reader.readByte();
  var moonPhase = reader.readByte();
  var maxTilesX = reader.readInt16();
  var maxTilesY = reader.readInt16();
  var spawnX = reader.readInt16();
  var spawnY = reader.readInt16();
  var worldSurface = reader.readInt16();
  var rockLayer = reader.readInt16();
  var worldId = reader.readInt32();
  var worldName = reader.readString();
  var gameMode = reader.readByte();
  var worldUniqueId = reader.readBytes(16);
  var worldGeneratorVersion = reader.readUInt64();
  var moonType = reader.readByte();
  var treeBackground = reader.readByte();
  var treeBackground2 = reader.readByte();
  var treeBackground3 = reader.readByte();
  var treeBackground4 = reader.readByte();
  var corruptionBackground = reader.readByte();
  var jungleBackground = reader.readByte();
  var snowBackground = reader.readByte();
  var hallowBackground = reader.readByte();
  var crimsonBackground = reader.readByte();
  var desertBackground = reader.readByte();
  var oceanBackground = reader.readByte();
  var mushroomBackground = reader.readByte();
  var underworldBackground = reader.readByte();
  var iceBackStyle = reader.readByte();
  var jungleBackStyle = reader.readByte();
  var hellBackStyle = reader.readByte();
  var windSpeedSet = reader.readSingle();
  var cloudNumber = reader.readByte();
  var tree1 = reader.readInt32();
  var tree2 = reader.readInt32();
  var tree3 = reader.readInt32();
  var treeStyle1 = reader.readByte();
  var treeStyle2 = reader.readByte();
  var treeStyle3 = reader.readByte();
  var treeStyle4 = reader.readByte();
  var caveBack1 = reader.readInt32();
  var caveBack2 = reader.readInt32();
  var caveBack3 = reader.readInt32();
  var caveBackStyle1 = reader.readByte();
  var caveBackStyle2 = reader.readByte();
  var caveBackStyle3 = reader.readByte();
  var caveBackStyle4 = reader.readByte();
  var forest1TreeTopStyle = reader.readByte();
  var forest2TreeTopStyle = reader.readByte();
  var forest3TreeTopStyle = reader.readByte();
  var forest4TreeTopStyle = reader.readByte();
  var corruptionTreeTopStyle = reader.readByte();
  var jungleTreeTopStyle = reader.readByte();
  var snowTreeTopStyle = reader.readByte();
  var hallowTreeTopStyle = reader.readByte();
  var crimsonTreeTopStyle = reader.readByte();
  var desertTreeTopStyle = reader.readByte();
  var oceanTreeTopStyle = reader.readByte();
  var glowingMushroomTreeTopStyle = reader.readByte();
  var underworldTreeTopStyle = reader.readByte();
  var rain = reader.readSingle();
  var eventInfo = readEventInfo(reader);
  var copperOreTier = reader.readInt16();
  var ironOreTier = reader.readInt16();
  var silverOreTier = reader.readInt16();
  var goldOreTier = reader.readInt16();
  var cobaltOreTier = reader.readInt16();
  var mythrilOreTier = reader.readInt16();
  var adamantiteOreTier = reader.readInt16();
  var invasionType = reader.readSByte();
  var lobbyId = reader.readUInt64();
  var sandstormSeverity = reader.readSingle();
  return {
          time: time,
          dayAndMoonInfo: dayAndMoonInfo,
          moonPhase: moonPhase,
          maxTilesX: maxTilesX,
          maxTilesY: maxTilesY,
          spawnX: spawnX,
          spawnY: spawnY,
          worldSurface: worldSurface,
          rockLayer: rockLayer,
          worldId: worldId,
          worldName: worldName,
          gameMode: gameMode,
          worldUniqueId: worldUniqueId,
          worldGeneratorVersion: worldGeneratorVersion,
          moonType: moonType,
          treeBackground: treeBackground,
          treeBackground2: treeBackground2,
          treeBackground3: treeBackground3,
          treeBackground4: treeBackground4,
          corruptionBackground: corruptionBackground,
          jungleBackground: jungleBackground,
          snowBackground: snowBackground,
          hallowBackground: hallowBackground,
          crimsonBackground: crimsonBackground,
          desertBackground: desertBackground,
          oceanBackground: oceanBackground,
          mushroomBackground: mushroomBackground,
          underworldBackground: underworldBackground,
          iceBackStyle: iceBackStyle,
          jungleBackStyle: jungleBackStyle,
          hellBackStyle: hellBackStyle,
          windSpeedSet: windSpeedSet,
          cloudNumber: cloudNumber,
          tree1: tree1,
          tree2: tree2,
          tree3: tree3,
          treeStyle1: treeStyle1,
          treeStyle2: treeStyle2,
          treeStyle3: treeStyle3,
          treeStyle4: treeStyle4,
          caveBack1: caveBack1,
          caveBack2: caveBack2,
          caveBack3: caveBack3,
          caveBackStyle1: caveBackStyle1,
          caveBackStyle2: caveBackStyle2,
          caveBackStyle3: caveBackStyle3,
          caveBackStyle4: caveBackStyle4,
          forest1TreeTopStyle: forest1TreeTopStyle,
          forest2TreeTopStyle: forest2TreeTopStyle,
          forest3TreeTopStyle: forest3TreeTopStyle,
          forest4TreeTopStyle: forest4TreeTopStyle,
          corruptionTreeTopStyle: corruptionTreeTopStyle,
          jungleTreeTopStyle: jungleTreeTopStyle,
          snowTreeTopStyle: snowTreeTopStyle,
          hallowTreeTopStyle: hallowTreeTopStyle,
          crimsonTreeTopStyle: crimsonTreeTopStyle,
          desertTreeTopStyle: desertTreeTopStyle,
          oceanTreeTopStyle: oceanTreeTopStyle,
          glowingMushroomTreeTopStyle: glowingMushroomTreeTopStyle,
          underworldTreeTopStyle: underworldTreeTopStyle,
          rain: rain,
          eventInfo: eventInfo,
          copperOreTier: copperOreTier,
          ironOreTier: ironOreTier,
          silverOreTier: silverOreTier,
          goldOreTier: goldOreTier,
          cobaltOreTier: cobaltOreTier,
          mythrilOreTier: mythrilOreTier,
          adamantiteOreTier: adamantiteOreTier,
          invasionType: invasionType,
          lobbyId: lobbyId,
          sandstormSeverity: sandstormSeverity
        };
}

var Decode = {
  readByte: readByte,
  readInt16: readInt16,
  readInt32: readInt32,
  readUInt64: readUInt64,
  readString: readString,
  readBytes: readBytes,
  readSingle: readSingle,
  readSByte: readSByte,
  readEventInfo: readEventInfo,
  parse: parse
};

function packSingle(prim0, prim1) {
  return prim0.packSingle(prim1);
}

function packInt32(prim0, prim1) {
  return prim0.packInt32(prim1);
}

function packByte(prim0, prim1) {
  return prim0.packByte(prim1);
}

function packInt16(prim0, prim1) {
  return prim0.packInt16(prim1);
}

function packUInt64(prim0, prim1) {
  return prim0.packUInt64(prim1);
}

function packString(prim0, prim1) {
  return prim0.packString(prim1);
}

function packSByte(prim0, prim1) {
  return prim0.packSByte(prim1);
}

function packBytes(prim0, prim1) {
  return prim0.packBytes(prim1);
}

function data(prim) {
  return prim.data;
}

function packEventInfo(writer, eventInfo) {
  var eventInfo1 = BitFlags$negTerrariaPacket.fromFlags(eventInfo.shadowOrbSmashed, eventInfo.killedBoss1, eventInfo.killedBoss2, eventInfo.killedBoss3, eventInfo.hardMode, eventInfo.killedClown, eventInfo.serverSidedCharacters, eventInfo.killedPlantBoss);
  var eventInfo2 = BitFlags$negTerrariaPacket.fromFlags(eventInfo.killedMechBoss, eventInfo.killedMechBoss2, eventInfo.killedMechBoss3, eventInfo.killedAnyMechBoss, eventInfo.cloudBg, eventInfo.crimson, eventInfo.pumpkinMoon, eventInfo.snowMoon);
  var eventInfo3 = BitFlags$negTerrariaPacket.fromFlags(eventInfo.expertMode, eventInfo.fastForwardTime, eventInfo.slimeRain, eventInfo.killedKingSlime, eventInfo.killedQueenBee, eventInfo.killedFishron, eventInfo.killedMartians, eventInfo.killedAncientCultist);
  var eventInfo4 = BitFlags$negTerrariaPacket.fromFlags(eventInfo.killedMoonLord, eventInfo.killedPumpking, eventInfo.killedMounringWood, eventInfo.killedIceQueen, eventInfo.killedSantank, eventInfo.killedEverscream, eventInfo.killedGolem, eventInfo.birthdayParty);
  var eventInfo5 = BitFlags$negTerrariaPacket.fromFlags(eventInfo.killedPirates, eventInfo.killedFrostLegion, eventInfo.killedGoblins, eventInfo.sandstorm, eventInfo.dungeonDefendersEvent, eventInfo.killedDungeonDefendersTier1, eventInfo.killedDungeonDefendersTier2, eventInfo.killedDungeonDefendersTier3);
  var eventInfo6 = BitFlags$negTerrariaPacket.fromFlags(eventInfo.combatBookUsed, eventInfo.manualLanterns, eventInfo.killedSolarTower, eventInfo.killedVortexTower, eventInfo.killedNebulaTower, eventInfo.killedStardustTower, eventInfo.forceHalloween, eventInfo.forceChristmas);
  var eventInfo7 = BitFlags$negTerrariaPacket.fromFlags(eventInfo.boughtCat, eventInfo.boughtDog, eventInfo.boughtBunny, eventInfo.freeCake, eventInfo.drunkWorld, eventInfo.killedEmpressOfLight, eventInfo.killedQueenSlime, eventInfo.getGoodWorld);
  return writer.packByte(BitFlags$negTerrariaPacket.toByte(eventInfo1)).packByte(BitFlags$negTerrariaPacket.toByte(eventInfo2)).packByte(BitFlags$negTerrariaPacket.toByte(eventInfo3)).packByte(BitFlags$negTerrariaPacket.toByte(eventInfo4)).packByte(BitFlags$negTerrariaPacket.toByte(eventInfo5)).packByte(BitFlags$negTerrariaPacket.toByte(eventInfo6)).packByte(BitFlags$negTerrariaPacket.toByte(eventInfo7));
}

function toBuffer(self) {
  return packEventInfo(ManagedPacketWriter$negPacketFactory.setType(new Packetwriter(), PacketType$negTerrariaPacket.toInt(/* WorldInfo */6)).packInt32(self.time).packByte(self.dayAndMoonInfo).packByte(self.moonPhase).packInt16(self.maxTilesX).packInt16(self.maxTilesY).packInt16(self.spawnX).packInt16(self.spawnY).packInt16(self.worldSurface).packInt16(self.rockLayer).packInt32(self.worldId).packString(self.worldName).packByte(self.gameMode).packBytes(self.worldUniqueId).packUInt64(self.worldGeneratorVersion).packByte(self.moonType).packByte(self.treeBackground).packByte(self.treeBackground2).packByte(self.treeBackground3).packByte(self.treeBackground4).packByte(self.corruptionBackground).packByte(self.jungleBackground).packByte(self.snowBackground).packByte(self.hallowBackground).packByte(self.crimsonBackground).packByte(self.desertBackground).packByte(self.oceanBackground).packByte(self.mushroomBackground).packByte(self.underworldBackground).packByte(self.iceBackStyle).packByte(self.jungleBackStyle).packByte(self.hellBackStyle).packSingle(self.windSpeedSet).packByte(self.cloudNumber).packInt32(self.tree1).packInt32(self.tree2).packInt32(self.tree3).packByte(self.treeStyle1).packByte(self.treeStyle2).packByte(self.treeStyle3).packByte(self.treeStyle4).packInt32(self.caveBack1).packInt32(self.caveBack2).packInt32(self.caveBack3).packByte(self.caveBackStyle1).packByte(self.caveBackStyle2).packByte(self.caveBackStyle3).packByte(self.caveBackStyle4).packByte(self.forest1TreeTopStyle).packByte(self.forest2TreeTopStyle).packByte(self.forest3TreeTopStyle).packByte(self.forest4TreeTopStyle).packByte(self.corruptionTreeTopStyle).packByte(self.jungleTreeTopStyle).packByte(self.snowTreeTopStyle).packByte(self.hallowTreeTopStyle).packByte(self.crimsonTreeTopStyle).packByte(self.desertTreeTopStyle).packByte(self.oceanTreeTopStyle).packByte(self.glowingMushroomTreeTopStyle).packByte(self.underworldTreeTopStyle).packSingle(self.rain), self.eventInfo).packInt16(self.copperOreTier).packInt16(self.ironOreTier).packInt16(self.silverOreTier).packInt16(self.goldOreTier).packInt16(self.cobaltOreTier).packInt16(self.mythrilOreTier).packInt16(self.adamantiteOreTier).packSByte(self.invasionType).packUInt64(self.lobbyId).packSingle(self.sandstormSeverity).data;
}

var Encode = {
  packSingle: packSingle,
  packInt32: packInt32,
  packByte: packByte,
  packInt16: packInt16,
  packUInt64: packUInt64,
  packString: packString,
  packSByte: packSByte,
  packBytes: packBytes,
  setType: ManagedPacketWriter$negPacketFactory.setType,
  data: data,
  packEventInfo: packEventInfo,
  toBuffer: toBuffer
};

exports.Decode = Decode;
exports.Encode = Encode;
exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
