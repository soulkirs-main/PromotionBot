module.exports = {
    name: "공지",
    aliases: ["공지", "notice"],
    category: "Developer Commands",
    description: "공지",
    usage: "[공지할 내용]",
    run: async (client, message) => {
        client.channels.cache.map(cn => {
            if(cn.name.includes("공지")){
                cn.send(message.data.args)
            }
        })
    }
}