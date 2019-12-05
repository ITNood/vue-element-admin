const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

export default [
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            console.log(config)
            const  username = JSON.parse(config.body).username
            console.log(username)
            const token = tokens[username]
            if (!token) {
                return {
                    code: 500,
                    message:'Account and password are incorrect'
                }
            }
            return {
                code: 200,
                data:token
            }
        }
    }
]