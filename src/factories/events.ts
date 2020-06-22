
import { DemoFile } from "demofile";
import { Factory } from "../factories/index";
import * as i from "../interfaces";
import * as events from "../interfaces/events";

export class EventFactory {

  public static Event(type: string, d: DemoFile): events.Event {
    return {
      tick: d.currentTick,
      time: d.currentTime,
      type,
    };
  }

  public static SayText(d: DemoFile, e: any): events.SayText {
    return {...EventFactory.Event("say_text", d), ...{
      text: e.text,
    }};
  }

  public static SayText2(d: DemoFile, e: any): events.SayText2 {
    return {...EventFactory.Event("say_text2", d), ...{
      text: e.params[1],
      username: e.params[0],
    }};
  }

  /* @UNUSED
  public static BombBeep(d: DemoFile, e: any): events.BombBeep {
    return {...EventFactory.Event("bomb_beep", d), ...{
      entindex: e.entindex,
    }};
  }
  */

  public static BombBeginDefuse(d: DemoFile, e: any): events.BombBeginDefuse {
    return {...EventFactory.Event("bomb_begindefuse", d), ...{
      haskit: e.haskit,
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static BombBeginPlant(d: DemoFile, e: any): events.BombBeginPlant {
    return {...EventFactory.Event("bomb_beginplant", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      site: e.site,
      userid: e.userid,
    }};
  }

  public static BombDefused(d: DemoFile, e: any): events.BombDefused {
    return {...EventFactory.Event("bomb_defused", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      site: e.site,
      userid: e.userid,
    }};
  }

  public static BombDropped(d: DemoFile, e: any): events.BombDropped {
    return {...EventFactory.Event("bomb_dropped", d), ...{
      entindex: e.entindex,
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static BombExploded(d: DemoFile, e: any): events.BombExploded {
    return {...EventFactory.Event("bomb_exploded", d), ...{
      site: e.site,
      userid: e.userid,
    }};
  }

  public static BombPickup(d: DemoFile, e: any): events.BombPickup {
    return {...EventFactory.Event("bomb_pickup", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static BombPlanted(d: DemoFile, e: any): events.BombPlanted {
    return {...EventFactory.Event("bomb_planted", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      site: e.site,
      userid: e.userid,
    }};
  }

  public static CSWinPanelRound(d: DemoFile, e: any): events.CSWinPanelRound {
    return {...EventFactory.Event("cs_win_panel_round", d), ...{
      final_event: e.final_event,
      funfact_data1: e.funfact_data1,
      funfact_data2: e.funfact_data2,
      funfact_data3: e.funfact_data3,
      funfact_player: e.funfact_player,
      funfact_token: e.funfact_token,
      show_timer_attack: e.show_timer_attack,
      show_timer_defend: e.show_timer_defend,
      timer_time: e.timer_time,
    }};
  }

  public static FlashbangDetonate(d: DemoFile, e: any, playerAtThrow: i.Player | undefined): events.FlashbangDetonate {
    return {...EventFactory.Event("flashbang_detonate", d), ...{
      entityid: e.entityid,
      player: Factory.playerFromUserID(d, e.userid),
      player_at_throw: playerAtThrow,
      players_blind: [],
      position: Factory.Position(e),
      userid: e.userid,
    }};
  }

  public static HEGrenadeDetonate(d: DemoFile, e: any, playerAtThrow: i.Player | undefined): events.HEGrenadeDetonate {
    return {...EventFactory.Event("hegrenade_detonate", d), ...{
      entityid: e.entityid,
      player: Factory.playerFromUserID(d, e.userid),
      player_at_throw: playerAtThrow,
      players_hurt: [],
      position: Factory.Position(e),
      userid: e.userid,
    }};
  }

  public static HLTVChase(d: DemoFile, e: any): events.HLTVChase {
    return {...EventFactory.Event("hltv_chase", d), ...{
      distance: e.distance,
      inertia: e.inertia,
      ineye: e.ineye,
      phi: e.phi,
      target1: e.target1,
      target2: e.target2,
      theta: e.theta,
    }};
  }

  public static HLTVStatus(d: DemoFile, e: any): events.HLTVStatus {
    return {...EventFactory.Event("hltv_status", d), ...{
      clients: e.clients,
      externallinked: e.externallinked,
      externaltotal: e.externaltotal,
      master: e.master,
      proxies: e.proxies,
      slots: e.slots,
    }};
  }

  public static InfernoExpire(d: DemoFile, e: any): events.InfernoExpire {
    return {...EventFactory.Event("inferno_expire", d), ...{
      entityid: e.entityid,
      position: Factory.Position(e),
    }};
  }

  public static InfernoStartburn(d: DemoFile, e: any): events.InfernoStartburn {
    let player;
    const entity = d.entities.entities[e.entityid] || null;
    if (entity) {
      player = Factory.Player(entity.owner);
    }

    return {...EventFactory.Event("inferno_startburn", d), ...{
      entityid: e.entityid,
      player,
      position: Factory.Position(e),
    }};
  }

  public static ItemEquip(d: DemoFile, e: any): events.ItemEquip {
    return {...EventFactory.Event("item_equip", d), ...{
      canzoom: e.canzoom,
      defindex: e.defindex,
      hassilencer: e.hassilencer,
      hastracers: e.hastracers,
      ispainted: e.ispainted,
      issilenced: e.issilenced,
      item: e.item,
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
      weptype: e.weptype,
    }};
  }

  public static ItemPickup(d: DemoFile, e: any): events.ItemPickup {
    return {...EventFactory.Event("item_pickup", d), ...{
      defindex: e.defindex,
      item: e.item,
      player: Factory.playerFromUserID(d, e.userid),
      silent: e.silent,
      userid: e.userid,
    }};
  }

  public static ItemRemove(d: DemoFile, e: any): events.ItemRemove {
    return {...EventFactory.Event("item_remove", d), ...{
      defindex: e.defindex,
      item: e.item,
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static OtherDeath(d: DemoFile, e: any): events.OtherDeath {
    return {...EventFactory.Event("other_death", d), ...{
      attacker: e.attacker,
      headshot: e.headshot,
      otherid: e.otherid,
      othertype: e.othertype,
      penetrated: e.penetrated,
      player: Factory.playerFromUserID(d, e.attacker),
      weapon: e.weapon,
      weapon_fauxitemid: e.weapon_fauxitemid,
      weapon_itemid: e.weapon_itemid,
      weapon_originalowner_xuid: e.weapon_originalowner_xuid,
    }};
  }

  public static PlayerBlind(d: DemoFile, e: any): events.PlayerBlind {
    let attackerPlayer;
    if (e.attacker) {
      attackerPlayer = Factory.playerFromUserID(d, e.attacker);
    }

    return {...EventFactory.Event("player_blind", d), ...{
      attacker: e.attacker,
      attacker_player: attackerPlayer,
      blind_duration: e.blind_duration,
      entityid: e.entityid,
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static PlayerDeath(d: DemoFile, e: any, playersUnblindAt: { [userid: number]: number }): events.PlayerDeath {
    let assisterPlayer;
    if (e.assister && e.assister > 0) {
      assisterPlayer = Factory.playerFromUserID(d, e.assister);
    }

    let attackerPlayer;
    let attackerPlayerBlind;
    if (e.attacker) {
      attackerPlayer = Factory.playerFromUserID(d, e.attacker);
      attackerPlayerBlind = Factory.isPlayerBlind(d, playersUnblindAt, e.attacker);
    }

    return {...EventFactory.Event("player_death", d), ...{
      assister: e.assister,
      assister_player: assisterPlayer,
      attacker: e.attacker,
      attacker_player: attackerPlayer,
      attacker_player_blind: attackerPlayerBlind,
      dominated: e.dominated,
      headshot: e.headshot,
      noreplay: e.noreplay,
      penetrated: e.penetrated,
      player: Factory.playerFromUserID(d, e.userid),
      player_blind: Factory.isPlayerBlind(d, playersUnblindAt, e.userid),
      revenge: e.revenge,
      userid: e.userid,
      weapon: e.weapon,
      weapon_fauxitemid: e.weapon_fauxitemid,
      weapon_itemid: e.weapon_itemid,
      weapon_originalowner_xuid: e.weapon_originalowner_xuid,
      // @TODO: weapon more detail?
    }};
  }

  public static PlayerDisconnect(d: DemoFile, e: any): events.PlayerDisconnect {
    return {...EventFactory.Event("player_disconnect", d), ...{
      name: e.name,
      networkid: e.networkid,
      player: Factory.playerFromUserID(d, e.userid),
      reason: e.reason,
      userid: e.userid,
    }};
  }

  public static PlayerFalldamage(d: DemoFile, e: any): events.PlayerFalldamage {
    return {...EventFactory.Event("player_falldamage", d), ...{
      damage: e.damage,
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static PlayerFootstep(d: DemoFile, e: any): events.PlayerFootstep {
    return {...EventFactory.Event("player_footstep", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static PlayerHurt(d: DemoFile, e: any, playersUnblindAt: { [userid: number]: number }): events.PlayerHurt {
    let attackerPlayer;
    let attackerSpottedPlayer = false;
    let playerSpottedAttacker = false;
    let attackerIsBlind = false;

    const playerEntity = d.entities.getByUserId(e.userid);
    if (e.attacker && e.attacker > 0) {
      const attackerEntity = d.entities.getByUserId(e.attacker);

      playerSpottedAttacker = !!(playerEntity && playerEntity.hasSpotted(attackerEntity));
      attackerSpottedPlayer = !!(attackerEntity && attackerEntity.hasSpotted(playerEntity));

      attackerPlayer = attackerEntity ? Factory.Player(attackerEntity) : undefined;

      attackerIsBlind = Factory.isPlayerBlind(d, playersUnblindAt, e.attacker);
    }

    return {...EventFactory.Event("player_hurt", d), ...{
      armor: e.armor,
      attacker: e.attacker,
      attacker_is_blind: attackerIsBlind,
      attacker_player: attackerPlayer,
      attacker_spotted_player: attackerSpottedPlayer,
      dmg_armor: e.dmg_armor,
      dmg_health: e.dmg_health,
      health: e.health,
      hitgroup: e.hitgroup,
      player: playerEntity ? Factory.Player(playerEntity) : undefined,
      player_is_blind: Factory.isPlayerBlind(d, playersUnblindAt, e.userid),
      player_spotted_attacker: playerSpottedAttacker,
      userid: e.userid,
      weapon: e.weapon,
    }};
  }

  public static PlayerJump(d: DemoFile, e: any): events.PlayerJump {
    return {...EventFactory.Event("player_jump", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static PlayerSpawn(d: DemoFile, e: any): events.PlayerSpawn {
    return {...EventFactory.Event("player_spawn", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      teamnum: e.teamnum,
      userid: e.userid,
    }};
  }

  public static PlayerTeam(d: DemoFile, e: any): events.PlayerTeam {
    return {...EventFactory.Event("player_team", d), ...{
      autoteam: e.autoteam,
      disconnect: e.disconnect,
      isbot: e.isbot,
      oldteam: e.oldteam,
      player: Factory.playerFromUserID(d, e.userid),
      silent: e.silent,
      team: e.team,
      userid: e.userid,
    }};
  }

  public static RoundEnd(d: DemoFile, e: any): events.RoundEnd {
    return {...EventFactory.Event("round_end", d), ...{
      message: e.message,
      player_count: e.player_count,
      players: Factory.PlayersListFull(d),
      reason: e.reason,
      round: Factory.RoundNumber(d),
      winner: e.winner,
    }};
  }

  public static RoundFreezeEnd(d: DemoFile): events.RoundFreezeEnd {
    return {...EventFactory.Event("round_freeze_end", d), ...{
      players: Factory.PlayersListFull(d),
      round: Factory.RoundNumber(d),
    }};
  }

  public static RoundOfficiallyEnded(d: DemoFile): events.RoundOfficiallyEnded {
    return {...EventFactory.Event("round_officially_ended", d), ...{
      players: Factory.PlayersListFull(d),
      round: Factory.RoundNumber(d),
    }};
  }

  public static RoundStart(d: DemoFile, e: any): events.RoundStart {
    return {...EventFactory.Event("round_start", d), ...{
      objective: e.objective,
      players: Factory.PlayersListFull(d),
      round: Factory.RoundNumber(d),
      timelimit: e.timelimit,
    }};
  }

  public static RoundMVP(d: DemoFile, e: any): events.RoundMVP {
    return {...EventFactory.Event("round_mvp", d), ...{
      musickitmvps: e.userid, // @TODO: Why is this userid?
      player: Factory.playerFromUserID(d, e.userid),
      reason: e.userid,
      round: Factory.RoundNumber(d),
      userid: e.userid,
    }};
  }

  public static SmokegrenadeDetonate(
    d: DemoFile,
    e: any,
    playerAtThrow: i.Player | undefined,
  ): events.SmokegrenadeDetonate {
    return {...EventFactory.Event("smokegrenade_detonate", d), ...{
      entityid: e.entityid,
      player: Factory.playerFromUserID(d, e.userid),
      player_at_throw: playerAtThrow,
      position: Factory.Position(e),
      userid: e.userid,
    }};
  }

  public static SmokegrenadeExpired(d: DemoFile, e: any): events.SmokegrenadeExpired {
    return {...EventFactory.Event("smokegrenade_expired", d), ...{
      entityid: e.entityid,
      player: Factory.playerFromUserID(d, e.userid),
      position: Factory.Position(e),
      userid: e.userid,
    }};
  }

  public static WeaponFire(d: DemoFile, e: any): events.WeaponFire {
    return {...EventFactory.Event("weapon_fire", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      silenced: e.silenced,
      userid: e.userid,
      weapon: e.weapon,
    }};
  }

  public static WeaponReload(d: DemoFile, e: any): events.WeaponReload {
    return {...EventFactory.Event("weapon_reload", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }

  public static WeaponZoom(d: DemoFile, e: any): events.WeaponZoom {
    return {...EventFactory.Event("weapon_zoom", d), ...{
      player: Factory.playerFromUserID(d, e.userid),
      userid: e.userid,
    }};
  }
}
