new Router ({
    base: 'http://127.0.0.1:8000',
    routes: {
        '/': 'home',
        '/connections': 'connections',
        '/terms': 'terms',
        '/login': 'login',
        '/register': 'register',
        '/tanks': 'tanks'
    }
})
export default{
    return(){
        let BASE_URL = base;
    }
}