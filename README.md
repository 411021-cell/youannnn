# youannnn
# 蛋白質攝取計算器 (Protein Calculator)

## 專案介紹

本專案是一個使用 HTML、CSS、JavaScript 製作的蛋白質攝取量計算器。

使用者輸入體重並選擇運動強度後，系統會自動計算每日建議蛋白質攝取量，並透過 Google Apps Script (GAS) 將資料儲存至 Google Sheet。

---

## 功能介紹

### 1. 蛋白質攝取量計算

根據體重與運動強度計算每日建議蛋白質攝取量。

計算公式：

蛋白質需求量(g) = 體重(kg) × 活動係數

| 運動強度 | 活動係數 |
|----------|----------|
| 久坐 | 0.8 |
| 一般運動 | 1.2 |
| 重訓增肌 | 1.6 |
| 高強度運動 | 2.0 |

---

### 2. 資料自動儲存

每次計算完成後，自動將資料送至 Google Apps Script API。

儲存內容：

- 時間
- 體重
- 運動強度
- 蛋白質需求量

---

## 使用技術

### 前端

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Fetch API

### 後端

- Google Apps Script (GAS)

### 資料庫

- Google Spreadsheet

### 部署平台

- GitHub Pages

---

## 專案結構

```text
protein-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 執行方式

### 1. 下載專案

```bash
git clone https://github.com/你的帳號/protein-calculator.git
```

### 2. 開啟網站

直接開啟：

```text
index.html
```

或使用 GitHub Pages：

```text
https://你的帳號.github.io/protein-calculator/
```

---

## Google Apps Script 設定

建立 Google Sheet：

```text
protein
```

建立欄位：

| 時間 | 體重 | 活動係數 | 蛋白質 |
|------|------|----------|--------|

部署為 Web App：

- 執行身分：自己
- 存取權限：任何人

取得 Web App URL 後填入：

```javascript
const GAS_URL = "YOUR_GAS_URL";
```

---

## 系統流程

使用者輸入資料
↓
JavaScript 計算蛋白質需求量
↓
Fetch API 傳送資料
↓
Google Apps Script 接收資料
↓
Google Sheet 儲存紀錄

---

## 開發者

姓名：侯宥安

課程：Web 前端程式設計

學校：高師大附中

蛋白質計算