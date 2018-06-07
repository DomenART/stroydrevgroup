export default (link) => {
    let icon = false
    switch (true) {
        case (link.search(/^((http|https):\/\/)(www\.)?facebook/) != -1):
            icon = 'facebook'
            break
        case (link.search(/^((http|https):\/\/)(www\.)?instagram/) != -1):
            icon = 'instagram'
            break
        case (link.search(/^((http|https):\/\/)(www\.)?twitter/) != -1):
            icon = 'twitter'
            break
        case (link.search(/^((http|https):\/\/)(www\.)?youtube/) != -1):
            icon = 'youtube'
            break
        case (link.search(/^((http|https):\/\/)(www\.)?vk.com/) != -1):
            icon = 'vk'
            break
        case (link.search(/^((http|https):\/\/)(www\.)?ok.ru/) != -1):
            icon = 'odnoklassniki'
            break
    }
    return icon
}
