import About from '../screens/App/screens/About';
import AppContainer from '../screens/App';
import BlogContainer from '../screens/App/screens/Blog';
import CompareContainer from '../screens/App/screens/Compare';
import NotFound from '../screens/App/screens/NotFound';
import PostContainer from '../screens/App/screens/Post';
import ReadContainer from '../screens/App/screens/Read';
import WelcomeContainer from '../screens/App/screens/Welcome';

const routes = [
    {
        path: '/',
        component: AppContainer,
        indexRoute: { component: WelcomeContainer },
        childRoutes: [
            {
                path: '/about',
                component: About
            },
            {
                path: '/compare/sentence/:refId',
                component: CompareContainer
            },
            {
                path: '/read/:book/:canto/:section',
                component: ReadContainer
            },
            {
                path: '/blogs/:blog/posts',
                component: BlogContainer
            },
            {
                path: '/blogs/:blog/posts/:post',
                component: PostContainer
            },
            // {
            //     path: '/blogs/:blog/:post',
            //     onEnter: (_, replaceState) => {
            //         // console.log(_);
            //         const params = _.params;
            //         replaceState(null, `/blogs/${params.blog}/posts/${params.post}`);
            //     }
            // },
            {
                path: '/read',
                onEnter: (_, replaceState) => {
                    console.log(_);
                    replaceState(null, '/read/1/1/1');
                }
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
];


export default routes;
