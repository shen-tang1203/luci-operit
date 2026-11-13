# ClawdPet 像素桌宠 · 1.0.6 候选版

基于原 ClawdPet 的非官方扩展版，新增47个动画，保留桌面悬浮、拖动、贴边、聊天气泡和绑定对话功能。

## 下载与安装

到[发行版页面](https://github.com/shen-tang1203/luci-operit/releases/tag/clawd-pet-1.0.6-candidate)下载 `clawd_pet-1.0.6-candidate.toolpkg`，在 Operit 工具包管理中导入并启用，按提示授予悬浮窗权限。源码附件为 `clawd_pet-1.0.6-candidate.source.zip`。本版本为预发布候选，最低兼容 Operit 版本尚未确认。

## 功能与使用

打开 Clawd 设置里的“表情播放与预览”，可分页点播47个扩展动画。开启“自动表情”后，“自由轮播全部表情”开启时随机选择扩展动画并避免连续重复；关闭时按绑定对话的24维角色状态选择。24维角色状态不是对用户情绪的测量。

在“外观与手势”调整统一大小，范围60–200dp。播放间隔在“小动作间隔”中调整。手动点播与工作状态优先；自由轮播受空闲、入睡和贴边状态限制，不是始终不间断播放。贴边时沿用迷你动作，不逐一展示全尺寸扩展动画。

双击桌宠可向绑定对话发消息，回复以气泡显示；聊天使用 Operit 已配置的对话服务。动画和设置在本地运行，不表示聊天流程完全离线。

## 本次更新

- 新增40个程序员日常动画，以及双人协作、三人协作、转晕、打哈欠、醒来、长告别、长测试通过7个桌宠动画。
- 增加24维情绪联动、自由随机轮播和分页点播入口。
- 新旧动画使用统一大小设置。
- 公开包移除9个未明确公开再分发许可的日常素材，未加入仅限个人使用的影视素材。
- 不附带用户聊天记录、私人对话绑定、settings.json或运行时情绪数据。

## 验证范围与候选状态

此前自用版完成部分动画播放和尺寸实机验证。候选包已做静态检查；本次上传核对压缩包完整性、资源引用、文件与源码目录一致性及附件下载校验。候选版全新安装、设置页逐项实机验收和最低兼容版本仍未完成。本发行版不表示已提交或通过 Operit 市场审核。

## 作者、来源与许可

原插件：[watersalt0305/operit-clawd](https://github.com/watersalt0305/operit-clawd)，作者 watersalt0305（Mishio）与 Claude。代码与原像素素材按原项目声明采用 AGPL-3.0。保留原作者署名。

扩展动画：[alwinecor/clawd-stickers](https://github.com/alwinecor/clawd-stickers)，作者 alwinecor 及贡献者。扩展美术采用 CC BY-NC-SA 4.0，相关代码采用 MIT。图片保持原样，本次修改主要为封装、播放映射与设置界面。新增美术须遵循非商业、署名及相同方式共享要求；根目录 AGPL-3.0 不覆盖第三方素材的独立许可。

Clawd 相关角色权利归原权利人，本项目为非官方粉丝作品，无官方关联或背书。完整许可原文与上游说明见 `clawd-pet/1.0.6-candidate/licenses/`，修改记录见同目录 `SOURCE-NOTICE.md`。

## 源码与发布入口

完整源码位于 `clawd-pet/1.0.6-candidate/`，包含真实 manifest.json、main.js、packages、ui、assets、sprites、native-src、resources 与许可文件。功能说明集中在本首页，运行必需的文件结构保持原样。

Operit 市场“引用 GitHub Release 资产”中填写仓库链接 `https://github.com/shen-tang1203/luci-operit`，加载发行版后选择对应 `.toolpkg`。当前 Operit 是否列出预发布版本尚待界面验证。
