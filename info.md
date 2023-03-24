## 字段说明

单个角色的信息示例及其字段说明如下：

```jsonc
{
  // 中文名称
  "name": "瑶瑶",
  // 英文名称
  "en_name": "Yaoyao",
  // 元素属性
  "element": "Dendro",
  // 角色星级
  "rarity": 4,
  // 角色头像
  "avatar": {
    // png-透明背景-正面头图
    "basic": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yaoyao.png",
    // png-透明背景-侧面头图
    "side": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_Yaoyao.png",
    // png-不透明带星级色背景（4为紫色，5为金色）-带元素属性-正面头图
    "full": "https://uploadstatic.mihoyo.com/ys-obc/2023/01/17/4328207/6616c1963d8b8cd12303e683872778d6_5414525268363973241.png"
  },
  // 海报
  "poster": {
    // 手机端角色半透明展示海报
    "mobile": "https://upload-bbs.mihoyo.com/game_record/genshin/character_image/UI_AvatarIcon_Yaoyao@2x.png"
  },
  // 角色材料
  "material": {
    // 天赋材料
    "talent": {
      // 高级天赋材料（周本材料）
      "advance": {
        // 周本材料名称
        "name": "空行的虚铃",
        "icon": "https://uploadstatic.mihoyo.com/ys-obc/2022/10/24/187743934/995d4d209d9314f7339764f89ccde2d8_6382700579117595568.png",
        // 材料所属周本
        "domain": {
          "name": "正机之神",
          "icon": "https://uploadstatic.mihoyo.com/ys-obc/2022/11/01/8797197/b3490c8868f8699d2230a5d6d105be71_8356333016604948321.png"
        }
      },
      // 普通天赋材料
      "normal": {
        "name": "「勤劳」系列",
        "icon": "https://uploadstatic.mihoyo.com/ys-obc/2020/07/01/80410800/7bcdfc964568483041339346b20ac870_8802895355053984746.png",
        // 天赋掉落周期，1-7 为周一到周日
        "drop": [5, 7, 2],
        // 天赋副本
        "domain": {
          "name": "太山府",
          "icon": "https://uploadstatic.mihoyo.com/ys-obc/2020/06/26/4839652/955166e60ef4b0b2f4b6f71e283ed734_8023134565096444298.png"
        }
      }
    }
  }
}
```

## 信息来源

- 英文名称、星级、属性见：[HoyoWiki - Character Archive](https://wiki.hoyolab.com/pc/genshin/aggregate/character)
- 元素属性对应表：

|   英文    | 对应元素 |
| :-------: | :------: |
|  `Cryo`   |    冰    |
| `Electro` |    雷    |
|  `Pyro`   |    火    |
|  `Anemo`  |    风    |
|   `Geo`   |    岩    |
| `Dendro`  |    草    |
|  `Hydro`  |    水    |

- 角色头图格式如下（可能英文名不对应，要检查）

```jsonc
// [name] 为目标英文名，首字母大写
{
  "avatar": {
    // png-透明背景-正面头图
    "basic": "https://upload-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_[name].png",
    // png-透明背景-侧面头图
    "side": "https://upload-bbs.mihoyo.com/game_record/genshin/character_side_icon/UI_AvatarIcon_Side_[name].png",
    // png-不透明带星级色背景（4为紫色，5为金色）-带元素属性-正面头图
    "full": "" // 这个链接从米游社角色图鉴（本文下方有链接）里找图片直链
  },
  // 海报
  "poster": {
    // 手机端角色半透明展示海报
    "mobile": "https://upload-bbs.mihoyo.com/game_record/genshin/character_image/UI_AvatarIcon_[name]@2x.png"
  }
}
```

- 角色材料及其图片，参考：[米游社角色图鉴](https://bbs.mihoyo.com/ys/obc/channel/map/189/25)
