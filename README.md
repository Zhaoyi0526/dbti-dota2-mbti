# DBTI — Dota2 Behavioral Type Indicator

基于 Dota 2 7.41C 对局行为的 25 题 H5 人格测试。Next.js App Router + Tailwind + Recharts + html2canvas。

## 开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 构建

```bash
npm run build
npm start
```

## 结构

- `src/data/questions.ts` — 25 道题目与选项分值
- `src/data/personas.ts` — 16 种人格档案与平局解析
- `src/lib/scoring.ts` — 四维向量计分与类型推导
- `src/app/` — 首页、问卷、结果页
