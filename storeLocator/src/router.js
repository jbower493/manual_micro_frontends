import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import LocationsView from "./views/LocationsView.vue";
import OpeningHoursView from "./views/OpeningHoursView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/store-locator",
            name: "home",
            component: HomeView,
            children: [
                {
                    path: "/store-locator/locations",
                    name: "locations",
                    component: LocationsView,
                },
                {
                    path: "/store-locator/opening-hours",
                    name: "hours",
                    component: OpeningHoursView,
                },
            ],
        },
    ],
});

router.afterEach(() => {
    window.postMessage("ROUTE_CHANGE");
});

export default router;
