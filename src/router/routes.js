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
				props: {
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
				props: {
					title: "Login de Usuário",
				},
			},
			{
				name: "home",
				path: "/home",
				component: () => import("pages/Index.vue"),
				props: {
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
				props: {
					title: "Setup",
				},
			},
			{
				name: "PeriodSum",
				path: "/periodsum",
				component: () => import("pages/PeriodSum.vue"),
				props: {
					title: "Resumo",
				},
			},
			{
				name: "page1",
				path: "/page1",
				component: () => import("pages/Page1.vue"),
				props: {
					title: "Página 1",
				},
			},
			{
				name: "page2",
				path: "/page2",
				component: () => import("pages/Page2.vue"),
				props: {
					title: "Página 2",
				},
			},
			{
				name: "page3",
				path: "/page3",
				component: () => import("pages/Page3.vue"),
				props: {
					title: "Página 3",
				},
			},
			{
				name: "splscr",
				path: "/splscr",
				component: () => import("pages/Splash01.vue"),
				props: {
					title: "",
				},
			},
		],
	},

	{
		name: "SplashScreen",
		path: "/SplashScreen",
		component: () => import("pages/Splash01.vue"),
		props: {
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
