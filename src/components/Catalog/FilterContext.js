import React, { createContext } from 'react'

export const filters = {
    type: [{
        active: false,
        disabled: false,
        name: "type",
        value: "Дома",
        compare: "=",
        type: "BINARY",
        title: "Дома"
    }, {
        active: false,
        disabled: false,
        name: "type",
        value: "Дачные дома",
        compare: "=",
        type: "BINARY",
        title: "Дачные дома"
    }, {
        active: false,
        disabled: false,
        name: "type",
        value: "Бытовки/беседки",
        compare: "=",
        type: "BINARY",
        title: "Бытовки/беседки"
    }, {
        active: false,
        disabled: false,
        name: "type",
        value: "Часовни",
        compare: "=",
        type: "BINARY",
        title: "Часовни"
    }],
    material: [{
        active: false,
        disabled: false,
        name: "material",
        value: "металлические",
        compare: "=",
        type: "BINARY",
        title: "металлические"
    }, {
        active: false,
        disabled: false,
        name: "material",
        value: "деревянные",
        compare: "=",
        type: "BINARY",
        title: "деревянные"
    }],
    area: [{
        active: false,
        disabled: false,
        name: "area",
        value: "100",
        compare: "<",
        type: "numeric",
        title: "до 100 м<sup>2</sup>"
    }, {
        active: false,
        disabled: false,
        name: "area",
        value: "100",
        compare: ">",
        type: "numeric",
        title: "больше 100 м<sup>2</sup>"
    }],
    floors: [{
        active: false,
        disabled: false,
        name: "floors",
        value: "1",
        compare: "=",
        type: "CHAR",
        title: "1 этаж"
    }, {
        active: false,
        disabled: false,
        name: "floors",
        value: "1.5",
        compare: "=",
        type: "CHAR",
        title: "1,5 эт."
    }, {
        active: false,
        disabled: false,
        name: "floors",
        value: "2",
        compare: "=",
        type: "CHAR",
        title: "2 эт."
    }, {
        active: false,
        disabled: false,
        name: "floors",
        value: "2.5",
        compare: "=",
        type: "CHAR",
        title: "2,5 эт."
    }]
}

export const Context = createContext({
    projects: [],
    filters: filters,
    actions: {}
})