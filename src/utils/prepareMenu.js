const urlParse = require('url-parse')

export default (data) => {
    const fn = (rows) => {
        return rows.map(row => {
            let item = {
                key: row.object_id,
                title: row.title,
                slug: urlParse(row.url).pathname
            }
            if (row.wordpress_children) {
                item.children = fn(row.wordpress_children)
            }
            return item
        })
    }

    return fn(data)
}