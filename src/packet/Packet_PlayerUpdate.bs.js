// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var BitFlags$TerrariaPacket = require("../BitFlags.bs.js");
var PacketType$TerrariaPacket = require("../PacketType.bs.js");
var ManagedPacketWriter$PacketFactory = require("@popstarfreas/packetfactory/src/ManagedPacketWriter.bs.js");
var Packetreader = require("@popstarfreas/packetfactory/packetreader").default;
var Packetwriter = require("@popstarfreas/packetfactory/packetwriter").default;

function parse(payload) {
  var reader = new Packetreader(payload);
  var playerId = reader.readByte();
  var controlFlags = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var miscFlags1 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var miscFlags2 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var miscFlags3 = BitFlags$TerrariaPacket.fromByte(reader.readByte());
  var control_isHoldingUp = BitFlags$TerrariaPacket.flag1(controlFlags);
  var control_isHoldingDown = BitFlags$TerrariaPacket.flag2(controlFlags);
  var control_isHoldingLeft = BitFlags$TerrariaPacket.flag3(controlFlags);
  var control_isHoldingRight = BitFlags$TerrariaPacket.flag4(controlFlags);
  var control_isHoldingJump = BitFlags$TerrariaPacket.flag5(controlFlags);
  var control_isHoldingItemUse = BitFlags$TerrariaPacket.flag6(controlFlags);
  var control = {
    isHoldingUp: control_isHoldingUp,
    isHoldingDown: control_isHoldingDown,
    isHoldingLeft: control_isHoldingLeft,
    isHoldingRight: control_isHoldingRight,
    isHoldingJump: control_isHoldingJump,
    isHoldingItemUse: control_isHoldingItemUse
  };
  var direction = BitFlags$TerrariaPacket.flag7(controlFlags) ? "Right" : "Left";
  var pulleyDirection = BitFlags$TerrariaPacket.flag1(miscFlags1) ? (
      BitFlags$TerrariaPacket.flag2(miscFlags1) ? "Two" : "One"
    ) : undefined;
  var vortexStealthActive = BitFlags$TerrariaPacket.flag4(miscFlags1);
  var gravityDirection = BitFlags$TerrariaPacket.flag5(miscFlags1) ? "Normal" : "Inverted";
  var shouldGuard = BitFlags$TerrariaPacket.flag6(miscFlags1);
  var ghost = BitFlags$TerrariaPacket.flag7(miscFlags1);
  var selectedItem = reader.readByte();
  var position_x = reader.readSingle();
  var position_y = reader.readSingle();
  var position = {
    x: position_x,
    y: position_y
  };
  var velocity = BitFlags$TerrariaPacket.flag3(miscFlags1) ? ({
        x: reader.readSingle(),
        y: reader.readSingle()
      }) : undefined;
  var potionOfReturn = BitFlags$TerrariaPacket.flag7(miscFlags2) ? ({
        originalUsePosition: {
          x: reader.readSingle(),
          y: reader.readSingle()
        },
        homePosition: {
          x: reader.readSingle(),
          y: reader.readSingle()
        }
      }) : undefined;
  var tryKeepingHoveringUp = BitFlags$TerrariaPacket.flag1(miscFlags2);
  var isVoidVaultEnabled = BitFlags$TerrariaPacket.flag2(miscFlags2);
  var isSitting = BitFlags$TerrariaPacket.flag3(miscFlags2);
  var hasFinishedAnyDd2Event = BitFlags$TerrariaPacket.flag4(miscFlags2);
  var isPettingAnimal = BitFlags$TerrariaPacket.flag5(miscFlags2);
  var isTheAnimalBeingPetSmall = BitFlags$TerrariaPacket.flag6(miscFlags2);
  var tryKeepingHoveringDown = BitFlags$TerrariaPacket.flag8(miscFlags2);
  var isSleeping = BitFlags$TerrariaPacket.flag1(miscFlags3);
  return {
          playerId: playerId,
          control: control,
          direction: direction,
          pulleyDirection: pulleyDirection,
          vortexStealthActive: vortexStealthActive,
          gravityDirection: gravityDirection,
          shouldGuard: shouldGuard,
          ghost: ghost,
          selectedItem: selectedItem,
          position: position,
          velocity: velocity,
          potionOfReturn: potionOfReturn,
          tryKeepingHoveringUp: tryKeepingHoveringUp,
          isVoidVaultEnabled: isVoidVaultEnabled,
          isSitting: isSitting,
          hasFinishedAnyDd2Event: hasFinishedAnyDd2Event,
          isPettingAnimal: isPettingAnimal,
          isTheAnimalBeingPetSmall: isTheAnimalBeingPetSmall,
          tryKeepingHoveringDown: tryKeepingHoveringDown,
          isSleeping: isSleeping
        };
}

function packControlFlags(writer, control, direction) {
  var tmp;
  tmp = direction === "Left" ? false : true;
  return writer.packByte(BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(control.isHoldingUp, control.isHoldingDown, control.isHoldingLeft, control.isHoldingRight, control.isHoldingJump, control.isHoldingItemUse, tmp, false)));
}

function packMiscFlags1(writer, pulleyDirection, velocity, vortexStealthActive, gravityDirection, shouldGuard, ghost) {
  var tmp;
  tmp = pulleyDirection !== undefined && pulleyDirection !== "One" ? true : false;
  var tmp$1;
  tmp$1 = gravityDirection === "Normal" ? true : false;
  return writer.packByte(BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(pulleyDirection !== undefined, tmp, velocity !== undefined, vortexStealthActive, tmp$1, shouldGuard, ghost, false)));
}

function packMiscFlags2(writer, tryKeepingHoveringUp, isVoidVaultEnabled, isSitting, hasFinishedAnyDd2Event, isPettingAnimal, isTheAnimalBeingPetSmall, potionOfReturn, tryKeepingHoveringDown) {
  return writer.packByte(BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(tryKeepingHoveringUp, isVoidVaultEnabled, isSitting, hasFinishedAnyDd2Event, isPettingAnimal, isTheAnimalBeingPetSmall, potionOfReturn !== undefined, tryKeepingHoveringDown)));
}

function packMiscFlags3(writer, isSleeping) {
  return writer.packByte(BitFlags$TerrariaPacket.toByte(BitFlags$TerrariaPacket.fromFlags(isSleeping, false, false, false, false, false, false, false)));
}

function packVelocity(writer, velocity) {
  if (velocity !== undefined) {
    return writer.packSingle(velocity.x).packSingle(velocity.y);
  } else {
    return writer;
  }
}

function packPotionOfReturn(writer, potionOfReturn) {
  if (potionOfReturn !== undefined) {
    return writer.packSingle(potionOfReturn.originalUsePosition.x).packSingle(potionOfReturn.originalUsePosition.y).packSingle(potionOfReturn.homePosition.x).packSingle(potionOfReturn.homePosition.y);
  } else {
    return writer;
  }
}

function toBuffer(self) {
  return packPotionOfReturn(packVelocity(packMiscFlags3(packMiscFlags2(packMiscFlags1(packControlFlags(ManagedPacketWriter$PacketFactory.setType(new Packetwriter(), PacketType$TerrariaPacket.toInt("PlayerUpdate")).packByte(self.playerId), self.control, self.direction), self.pulleyDirection, self.velocity, self.vortexStealthActive, self.gravityDirection, self.shouldGuard, self.ghost), self.tryKeepingHoveringUp, self.isVoidVaultEnabled, self.isSitting, self.hasFinishedAnyDd2Event, self.isPettingAnimal, self.isTheAnimalBeingPetSmall, self.potionOfReturn, self.tryKeepingHoveringDown), self.isSleeping).packByte(self.selectedItem).packSingle(self.position.x).packSingle(self.position.y), self.velocity), self.potionOfReturn).data;
}

exports.parse = parse;
exports.toBuffer = toBuffer;
/* @popstarfreas/packetfactory/packetreader Not a pure module */
