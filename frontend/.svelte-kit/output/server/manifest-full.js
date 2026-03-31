export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Cuq5fRmy.js",app:"_app/immutable/entry/app.rSI5NyBf.js",imports:["_app/immutable/entry/start.Cuq5fRmy.js","_app/immutable/chunks/cx3z8GgO.js","_app/immutable/chunks/DCJ-Hom-.js","_app/immutable/chunks/tMWLSHVJ.js","_app/immutable/chunks/wNQiJLam.js","_app/immutable/entry/app.rSI5NyBf.js","_app/immutable/chunks/tMWLSHVJ.js","_app/immutable/chunks/DCJ-Hom-.js","_app/immutable/chunks/wNQiJLam.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/yQoTQEIG.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
