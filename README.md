# carefree-carousel

A click-based carousel (run it care-free).

---
![](./assets/carousel.svg)

![Maintenance](https://img.shields.io/maintenance/yes/2021?label=Active%3F&style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/eno-d/carefree-carousel/Publish%20to%20npm?style=for-the-badge)
![npm](https://img.shields.io/npm/v/carefree-carousel?label=Latest&style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/min/carefree-carousel?label=Size&style=for-the-badge)
![GitHub](https://img.shields.io/github/license/eno-d/carefree-carousel?style=for-the-badge)
![](https://img.shields.io/github/package-json/dependency-version/eno-d/carefree-carousel/react-dom?style=for-the-badge&label=Need:%20React-dom)
![](https://img.shields.io/github/package-json/dependency-version/eno-d/carefree-carousel/react?style=for-the-badge&label=Need:%20React)
![](https://img.shields.io/github/package-json/dependency-version/eno-d/carefree-carousel/react-use-images?style=for-the-badge&label=Need:%20React-use-images)
![](https://img.shields.io/github/package-json/dependency-version/eno-d/carefree-carousel/prop-types?style=for-the-badge&label=Need:%20prop-types)
![David](https://img.shields.io/david/eno-d/carefree-carousel?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/carefree-carousel?label=Downloads&style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/eno-d/carefree-carousel?style=social)

---

## Installing

<br/>

``` npm install carefree-carousel ```

---

## Importing usage

<br/>

1. ``` import Carousel from 'carefree-carousel'; ```

2. ``` var Carousel = require('carefree-carousel'); ```

    * If the above are not working or fitting your specific use-case try one of the other bundle versions by explicit import/require 
    - ``` (Example) import Carousel from 'carefree-carousel/dist/bundle.min.js' ```

---

## Demo

<br/>

<video src="https://user-images.githubusercontent.com/88824507/134108105-acd1dc0d-30f6-4e6f-a83a-71b97109b001.mov"></video>

#### This is how the parameters were loaded for the video above
```
<Carousel toggleDots={false} slideText={false} toggleNav={false} startIndex={0} delayTime={4000} />

```
#### The content array expects either a valid React element or a valid image string.
```
content={[<div>An element</div>, "a-image-link-here", "other-image-link", <p>a new element</p>]}
```
#### The navImg array expects two valid image strings in the following order 
```
navImg={["image-for-left-arrow-here", "image-for-right-arrow-here"]}
```

---

## Features

1) Preloading images
2) Transitioning effect between images
3) Error checking for correct types (Will display an error message)

<br/>

---

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
| navImg        | arrayOfStrings | Provided 2 images  | Add custom images for pagination arrows 
|               |       |                    | 
| slideText     | bool  | true              | Toggle displaying On/Off of current slide # 
|               |       |                    | 
| startIndex    | int   | 0                  | Choose which slide to begin playback on  
|               |       |                    | 
| toggleDots    | bool  | false              | Toggle displaying dots navigation On/Off 
|               |       |                    | 
| toggleNav     | bool  | true               | Toggle displaying arrows navigation On/Off

---

## Image references

<br/>

Thank you to Unsplash for image hosting and individual contributors for uploading their images:

* [1st default slide picture](https://unsplash.com/@corey_lyfe)
* [2nd default slide picture](https://unsplash.com/@reallynattu)
* [3rd default slide picture](https://unsplash.com/@rpnickson)

---

## Badges

Thank you to shields.io for the templates they have provided.

---

## Dependency authors

Thank you to all dependency library authors, make sure to check them out if you get the chance.

---
