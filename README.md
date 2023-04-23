---
title: figma-spring-resolver
date: 
author: Mizok
tags: 
---

## Introduction

https://www.figma.com/blog/how-we-built-spring-animations/

Figma 的 Bouncing Animation 動畫效果是依靠 Apple 提供的 Webkit Spring Resolver 實現的。Webkit Spring Resolver 是一個使用 C++ 編寫的庫，專門負責處理 UI 中的彈簧彈跳效果，而 Figma 在 Smart Animate 中就是使用了這個庫來實現動畫效果。在這裡，我提供了一個類似 Git Gist 的方案，讓您可以使用我將其轉換為 TypeScript 版本的 Spring Resolver。這個程式碼可以在 `./src/ts/lib/lib.ts` 檔案中找到，您可以複製程式碼並應用它。如果您需要進一步了解如何使用它，請參考 `./src/ts/main.ts` 檔案中的使用範例。

The Bouncing Animation in Figma is implemented using Apple's Webkit Spring Resolver. Webkit Spring Resolver is a C++ library that specializes in handling spring bounce effects in UI. Figma utilizes this library to create the animation effects in Smart Animate. Here, I offer a solution similar to Git Gist, allowing you to use the TypeScript version of the Spring Resolver that I have converted. You can find the code in the `./src/ts/lib/lib.ts` file, and you can copy and apply it as needed. If you require further information on how to use it, please refer to the usage example in the `./src/ts/main.ts` file.








[DEMO](https://mizok.github.io/figma-spring-solver/)
