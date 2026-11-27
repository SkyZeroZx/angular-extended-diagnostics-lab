# Angular Extended Diagnostics Lab

Minimal companion repository for the article **“Inside Angular’s Extended Diagnostics: Template Visitors and the Type-Check Block”**.

## Install

```bash
npm install
```

## 1. See the warnings

```bash
npm run build
```

You should see three warnings, two NG8021 and one NG8119, and the build still exits with 0.

## 2. Print a type-check block

```bash
npm run tcb -- src/app/storage-meter.ts
```

## 3. Run the demo

```bash
npm start
```

The `CartPreview` card shows up without any hover.

## Article

https://medium.com/@jaimeburgostejada/inside-angulars-extended-diagnostics-template-visitors-and-the-type-check-block-5309c055c361
