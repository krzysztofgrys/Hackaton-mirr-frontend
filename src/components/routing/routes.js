import Login from "../login/login";
import PostAdd from "../post-add/post-add";
import PostList from "../post-list/post-list";
import PostView from "../post-view";
import Home from "../home/home";

export default [
    {path: '/login', description: 'Logowanie', component: Login},
    {path: '/posts', description: 'Lista ogłoszeń', component: PostList},
    {path: '/posts/add', description: 'Dodaj ogłoszenie', component: PostAdd},
    {path: '/posts/map', description: 'Widok mapy', component: PostAdd},
    {path: '/posts/:postId', description: 'Podgląd ogłoszenia', component: PostView},
    {path: '/', description: 'Strona główna', component: Home}
];
