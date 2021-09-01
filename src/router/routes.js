const routes = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		children: [
			{
				name: "index",
				path: "",
				component: () => import("pages/Index.vue"),
			},
			// {
			// 	name: "login",
			// 	path: "/",
			// 	component: () => import("pages/Auth.vue"),
			// },
			// {
			// 	name: "home",
			// 	path: "/home",
			// 	component: () => import("pages/Home.vue"),
			// },
			{
				name: "Finance1",
				path: "/finance1",
				component: () => import("pages/Finance101.vue"),
			},
			{
				name: "page1",
				path: "/page1",
				component: () => import("pages/Page1.vue"),
			},
			{
				name: "page2",
				path: "/page2",
				component: () => import("pages/Page2.vue"),
			},
			{
				name: "page3",
				path: "/page3",
				component: () => import("pages/Page3.vue"),
			},
			{
				name: "splscr",
				path: "/splscr",
				component: () => import("pages/Splash01.vue"),
			},
		],
	},

	{
		name: "SplashScreen",
		path: "/SplashScreen",
		component: () => import("pages/Splash01.vue"),
	},
	// Always leave this as last one,
	// but you can also remove it
	{
		name: "NotFound",
		path: "/:catchAll(.*)*",
		component: () => import("pages/Error404.vue"),
	},
];

export default routes;
