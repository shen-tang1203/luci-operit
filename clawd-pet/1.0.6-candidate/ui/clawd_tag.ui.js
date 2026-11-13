"use strict";
// 主对话里 <clawd anim="...">话</clawd> 的小卡片
// 点一下 = 让桌面上的 Clawd 再做一次（并把话再说一遍）
Object.defineProperty(exports, "__esModule", { value: true });

var ANIM_ZH = {
  happy: "开心", love: "比心", shy: "害羞", dizzy: "晕乎乎", annoyed: "哼", error: "呜呜",
  wake: "伸懒腰", notify: "注意！", left: "往左躲", right: "往右躲", double_jump: "蹦起来",
  idle: "发呆", look: "东张西望", reading: "看书", yawn: "打哈欠", doze: "打盹", bubble: "吹泡泡",
  sweeping: "扫地", carrying: "搬东西", designing: "画图", coffee: "喝咖啡", headphones: "听歌",
  low_battery: "没电了", collapse: "瘫倒", sleep: "睡觉", think: "思考", typing: "打字",
  juggling: "手忙脚乱", ultrathink: "脑子冒烟", building: "搭积木", debugger: "调试",
  wizard: "施法", outlaw: "耍酷", surf: "冲浪", toast: "烤吐司", jelly: "变水母", talk: "说话", spin: "转圈", walk: "散步", wave: "挥手"
};
var C = { primary: "#D97757", text: "#3D2B22", sub: "#8C7266" };

function Screen(ctx) {
  var UI = ctx.UI, M = ctx.Modifier;
  var cs = (ctx.MaterialTheme && ctx.MaterialTheme.colorScheme) || {};
  var anim = ctx.useState("_anim", "")[0];
  var animRaw = ctx.useState("_animRaw", "")[0];
  var text = ctx.useState("_text", "")[0];
  var st = ctx.useState("sent", 0), sent = st[0], setSent = st[1];

  var label = anim ? (ANIM_ZH[anim] || anim) : (animRaw ? "不认识的动作：" + animRaw : "");
  var cardBg = (cs.surfaceVariant && typeof cs.surfaceVariant.copy === "function")
    ? cs.surfaceVariant.copy({ alpha: 0.45 }) : "#33D97757";
  var textColor = cs.onSurface || C.text;
  var subColor = cs.onSurfaceVariant || C.sub;

  function replay() {
    var name = text ? "clawd:clawd_say" : "clawd:clawd_play";
    var params = text ? { text: text, anim: anim || undefined } : { name: anim || "happy" };
    setSent(1);
    try {
      Promise.resolve(ctx.callTool(name, params)).then(function () { setSent(2); }, function () { setSent(3); });
    } catch (e) { setSent(3); }
  }

  // 一横条（参照 moodlet）：图标 | 话 + 小字说明（占满中间）| 右侧状态图标
  var mid = [];
  var title = text || ("Clawd " + (label || ""));
  mid.push(UI.Text({ text: title, fontSize: 13, fontWeight: "semibold", color: textColor, maxLines: 2, overflow: "ellipsis" }));
  var meta = text ? ("Clawd" + (label ? " · " + label : "")) : "点一下再做一次";
  if (sent === 1) meta += " · 发送中…";
  else if (sent === 2) meta += " · 已重播";
  else if (sent === 3) meta += " · 桌宠没响应";
  mid.push(UI.Text({ text: meta, fontSize: 11, color: subColor, maxLines: 1, overflow: "ellipsis" }));
  var stIcon = sent === 1 ? "hourglassEmpty" : sent === 2 ? "check" : sent === 3 ? "errorOutline" : "replay";
  return UI.Card({
    containerColor: cardBg,
    shape: { cornerRadius: 14 },
    elevation: 0,
    modifier: M.clickable(replay)
  }, [
    UI.Row({ padding: { horizontal: 12, vertical: 10 }, spacing: 10, verticalAlignment: "center" }, [
      UI.Icon({ name: "pets", tint: C.primary, size: 22 }),
      UI.Column({ spacing: 2, weight: 1 }, mid),
      UI.Icon({ name: stIcon, tint: subColor, size: 16 })
    ])
  ]);
}
exports.default = Screen;
