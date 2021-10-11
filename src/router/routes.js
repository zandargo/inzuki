const routes = [
	{
		path: "/",
		component: () => import("layouts/MainLayout.vue"),
		props: true,
		children: [
			{
				name: "index",
				path: "/",
				component: () => import("pages/Index.vue"),
				meta: {
					title: "INZUKI",
				},
			},
			// {
			// 	name: "index",
			// 	path: "/",
			// 	component: () => import("pages/Auth.vue"),
			// },
			{
				name: "auth",
				path: "/auth",
				component: () => import("pages/Auth.vue"),
				meta: {
					title: "Login de Usuário",
				},
			},
			{
				name: "home",
				path: "/home",
				component: () => import("pages/Index.vue"),
				meta: {
					title: "INZUKI",
				},
			},
			// {
			// 	name: "home",
			// 	path: "/home",
			// 	component: () => import("pages/Home.vue"),
			// },
			{
				name: "Finance1",
				path: "/finance1",
				component: () => import("pages/Finance101.vue"),
				meta: {
					title: "Setup",
				},
			},
			{
				name: "PeriodSum",
				path: "/periodsum",
				component: () => import("pages/PeriodSum.vue"),
				meta: {
					title: "Resumo",
				},
			},
			{
				name: "page1",
				path: "/page1",
				component: () => import("pages/Page1.vue"),
				meta: {
					title: "Página 1",
				},
			},
			{
				name: "page2",
				path: "/page2",
				component: () => import("pages/Page2.vue"),
				meta: {
					title: "Página 2",
				},
			},
			{
				name: "page3",
				path: "/page3",
				component: () => import("pages/Page3.vue"),
				meta: {
					title: "Página 3",
				},
			},
			{
				name: "splscr",
				path: "/splscr",
				component: () => import("pages/Splash01.vue"),
				meta: {
					title: "",
				},
			},
		],
	},

	{
		name: "SplashScreen",
		path: "/SplashScreen",
		component: () => import("pages/Splash01.vue"),
		meta: {
			title: "",
		},
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
