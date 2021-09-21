# carefree-carousel

A click-based carousel (run it care-free).

---
![](./assets/carousel.svg)

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/eno-d/carefree-carousel/main?style=for-the-badge)

![npm](https://img.shields.io/npm/v/carefree-carousel?label=Latest&style=for-the-badge)

![GitHub](https://img.shields.io/github/license/eno-d/carefree-carousel?style=for-the-badge)

![Requires.io (branch)](https://img.shields.io/requires/github/eno-d/carefree-carousel/main?style=for-the-badge)

![npm bundle size](https://img.shields.io/bundlephobia/min/carefree-carousel?label=Size&style=for-the-badge)

![npm](https://img.shields.io/npm/dw/carefree-carousel?label=Downloads&style=for-the-badge)

![GitHub Repo stars](https://img.shields.io/github/stars/eno-d/carefree-carousel?style=social)

---

<br/>

## Installing

<br/>

``` npm install carefree-carousel ```

---
<br/>

## Importing usage

<br/>

1. ``` import Carousel from 'carefree-carousel'; ```

2. ``` var Carousel = require('carefree-carousel'); ```

    * If the above are not working or fitting your specific use-case try one of the other bundle versions by explicit import/require 
    - ``` (Example) import Carousel from 'carefree-carousel/dist/bundle.min.js' ```

---

<br/>

## Demo

<br/>

<video src="./assets/demo.mov" width=100%></video>

<br/>

---

<br/>

## Features

<br/>

1) Preloading images
2) Transitioning effect between images
3) Error checking for correct types (Will display an error message)

<br/>

---

<br/>

## Documentation

<br/>

| Parameter 	| Type 	| Default value(s)      | Trigger action         
|:------------:	|:-----:|:------------------:|:------------------------:
| autoPlay      | bool 	| false	             | Toggle On/Off auto-play between slides
|               |       |                    |                        
| content       | array | Provided 3 images  | Add custom images or elements for each slide
|               |       |                    |  
| delayTime     | int 	| 3 seconds          | Change the time between each slide 
|               |       |                    | 
| navImg        | array | Provided 2 images  | Add custom images for pagination arrows 
|               |       |                    | 
| slideText     | bool  | true              | Toggle displaying On/Off of current slide # 
|               |       |                    | 
| startIndex    | int   | 0                  | Choose which slide to begin playback on  
|               |       |                    | 
| toggleDots    | bool  | false              | Toggle displaying dots navigation On/Off 
|               |       |                    | 
| toggleNav     | bool  | true               | Toggle displaying arrows navigation On/Off

---

<br/>

## Image references

<br/>

Thank you to Unsplash for image hosting and individual contributors for uploading their images

* [1st default slide picture](https://unsplash.com/@corey_lyfe)
* [2nd default slide picture](https://unsplash.com/@reallynattu)
* [3rd default slide picture](https://unsplash.com/@rpnickson)

---