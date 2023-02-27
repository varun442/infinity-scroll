# Custom Infinity Scroll in React

## Description

This is a custom implementation of an infinite scroll component for React. The component fetches data from an API in batches as the user scrolls down the page, allowing for a smooth browsing experience without the need to load all the data at once.

![](https://github.com/varun442/infinity-scroll/blob/master/src/assets/giphy.gif)

## Usage 

The main implementation logic lies in the handleScroll function of UserList.js which depends on innherHeight of the window, scrollTop and scrollHeight of the documentElement. Line (27 to 37)


