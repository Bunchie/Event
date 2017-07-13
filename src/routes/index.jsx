import {Events, News, Music, Sport} from "./import_components";
import ImageEvents from "../components/App/Main/ImageEvents";

export const routes = [
    {
        path: '/events',
        component: Events
    },
    {
        path: '/news',
        component: News,
        routes: [
            {
                path: '/news/music',
                component: Music
            },
            {
                path: '/news/sport',
                component: Sport
            }
        ]
    },
    {
        path:'/images',
        component: ImageEvents
    }
];