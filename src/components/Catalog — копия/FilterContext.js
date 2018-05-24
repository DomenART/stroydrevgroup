import React, { createContext } from 'react'

export const Context = createContext({
    projects: [],
    filters: [],
    query: {
        filter: {
            meta_query: {}
        }
    },
    actions: {}
})