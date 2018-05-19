import React from 'react'

export default React.createContext({
    projects: [],
    filters: []
    // filters: [{
    //     active: false,
    //     name: "type",
    //     value: "houses",
    //     compare: "<",
    //     type: "numeric",
    //     title: "до 100 м<sup>2</sup>"
    // }, {
    //     active: false,
    //     name: "type",
    //     value: "summer",
    //     compare: "<",
    //     type: "numeric",
    //     title: "до 100 м<sup>2</sup>"
    // }, {
    //     active: false,
    //     name: "type",
    //     value: "cabins",
    //     compare: "<",
    //     type: "numeric",
    //     title: "до 100 м<sup>2</sup>"
    // }, {
    //     active: false,
    //     name: "type",
    //     value: "chapels",
    //     compare: "<",
    //     type: "numeric",
    //     title: "до 100 м<sup>2</sup>"
    // }]
})