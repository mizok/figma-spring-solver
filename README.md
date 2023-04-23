---
title: figma-spring-resolver
date: 
author: Mizok
tags: 
---

## Introduction

Figma 的 Smart Animate 使用了 Apple 提供的 Webkit Spring Resolver來實作ui 的 spring bouncing 動畫，  而Webkit Spring Resolver是使用 C++ 編寫, 這邊提供一個解析為typescript 的版本, 可以直接拿./src/ts/lib/lib.ts 裡面的 Spring Resolver 來使用。（使用的方法請見 ./src/ts/main.ts）

[DEMO網址](https://mizok.github.io/figma-spring-solver/)
