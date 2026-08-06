

给 `OpenCode` 装上万能技能 `oh-my-openagent`

参考地址：[https://github.com/code-yeongyu/oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)

### 配置`协作者`模型

1. %userprofile%\.config\opencode

2. 新建 `oh-my-openagent.jsonc`

```bash
{
  "$schema": "https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/master/assets/oh-my-opencode.schema.json",
  "auto_update": true,
  "agents": {
    "sisyphus": {
      "model": "opencode/deepseek-v4-flash-free",
      "description": "执行官：利用长上下文进行循环纠错"
    },
    "oracle": {
      "model": "opencode/deepseek-v4-flash-free",
      "description": "咨询官：处理深度逻辑与架构建议"
    },
    "explore": {
      "model": "opencode/big-pickle",
      "description": "探索者：快速扫描项目结构"
    },
    "prometheus": {
      "model": "opencode/deepseek-v4-flash-free",
      "description": "规划者：任务拆解与计划生成"
    },
    "atlas": {
      "model": "opencode/deepseek-v4-flash-free",
      "description": "导航与规划"
    },
    "artistry": {
      "model": "opencode/deepseek-v4-flash-free",
      "description": "创意任务"
    },
    "hephaestus": {
      "model": "opencode/deepseek-v4-flash-free",
      "description": "代码构建"
    },
    "librarian": {
      "model": "opencode/ling-3.0-flash-free",
      "description": "知识检索"
    },
    "metis": {
      "model": "opencode/mimo-v2.5-free",
      "description": "元认知"
    },
    "momus": {
      "model": "opencode/nemotron-3-ultra-free",
      "description": "创意任务"
    }
  },
  "categories": {
    "quick": {
      "model": "opencode/laguna-s-2.1-free"
    },
    "deep": {
      "model": "opencode/deepseek-v4-flash-free"
    }
  }
}
```

相关知识：

https://shihyu.github.io/jason_note/ai_agent/opencode-oh-my-opencode.html