# 颜色

- 颜色名称

<script setup>

import { ref } from 'vue'

const color_name = ref("black")
const color_hex = ref("000000")

</script>

<div :style="{ width: '100%', height: '80px', backgroundColor: color_name, display: 'flex', justifyContent: 'center', alignItems: 'center' }">
    <input v-model="color_name" type="text" style="color: black; border: 1px solid black; background-color: white;" >
</div>

- 十六进制

<div :style="{ width: '100%', height: '80px', backgroundColor: '#' + color_hex, display: 'flex', justifyContent: 'center', alignItems: 'center' }">
    <input v-model="color_hex" type="text" style="color: black; border: 1px solid black;  background-color: white;" >

</div>

- 十进制
- 百分比
- RGB
- RGBA
- HSL
- HSLA

## 140 钟颜色名称

https://www.w3school.com.cn/tags/html_ref_colornames.asp

## 取色器/拾色器

https://www.runoob.com/tags/html-colorpicker.html
