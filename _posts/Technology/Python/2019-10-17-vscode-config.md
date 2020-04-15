---
title: VSCode 配置用户片段
date: 2019-10-17 17:10:37  
tags: python
author: androllen  
---

### 配置 Python 文首注释
  - Manage or Preferences -> User Snippets -> python
  - 将下面的内容复制进去

  ``` bash
  {
    "HEADER": {
      "prefix": "header",
      "body": [
        "#!/usr/bin/env python",
        "# -*- coding: utf-8 -*-",
        "",
        "#Time: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
        "#Author: androllen",
        "#Contact: androllen#hotmail.com",
        "",
        "$0"
      ],
      "description": "header Comment"
    }
  }
  ```

