
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const LESSOPEN: string;
	export const DB_URL: string;
	export const GOOGLE_CREDENTIALS_PATH: string;
	export const DATABASE_URL: string;
	export const LANGUAGE: string;
	export const GTK_CSD: string;
	export const USER: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const LC_TIME: string;
	export const npm_config_user_agent: string;
	export const XDG_SEAT: string;
	export const GIT_EDITOR: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_node_execpath: string;
	export const XDG_CACHE_HOME: string;
	export const SHLVL: string;
	export const BROWSER: string;
	export const VIPSHOME: string;
	export const HOME: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_json: string;
	export const XDG_SEAT_PATH: string;
	export const LC_MONETARY: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const WINDOWID: string;
	export const _: string;
	export const XDG_SESSION_CLASS: string;
	export const COLORFGBG: string;
	export const npm_config_registry: string;
	export const SAL_VCL_QT5_USE_CAIRO: string;
	export const TERM: string;
	export const GTK_OVERLAY_SCROLLING: string;
	export const XDG_SESSION_ID: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const SAL_USE_VCLPLUGIN: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const XDG_SESSION_PATH: string;
	export const XDG_MENU_PREFIX: string;
	export const LC_ADDRESS: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const XDG_DATA_HOME: string;
	export const XDG_CONFIG_HOME: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const APPDATA: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const npm_config_verify_deps_before_run: string;
	export const QT_ACCESSIBILITY: string;
	export const LESSCLOSE: string;
	export const CAPTCHA_API_KEY: string;
	export const LXQT_SESSION_CONFIG: string;
	export const CLAUDECODE: string;
	export const LC_MEASUREMENT: string;
	export const GOPRIVATE: string;
	export const GPG_AGENT_INFO: string;
	export const LC_IDENTIFICATION: string;
	export const QT_IM_MODULE: string;
	export const XDG_VTNR: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const CLUTTER_IM_MODULE: string;
	export const XDG_DATA_DIRS: string;
	export const PYTHONPATH: string;
	export const LC_NUMERIC: string;
	export const npm_config__jsr_registry: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const LC_PAPER: string;
	export const QT_PLATFORM_PLUGIN: string;
	export const PNPM_HOME: string;
	export const EDITOR: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		LESSOPEN: string;
		DB_URL: string;
		GOOGLE_CREDENTIALS_PATH: string;
		DATABASE_URL: string;
		LANGUAGE: string;
		GTK_CSD: string;
		USER: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		LC_TIME: string;
		npm_config_user_agent: string;
		XDG_SEAT: string;
		GIT_EDITOR: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_node_execpath: string;
		XDG_CACHE_HOME: string;
		SHLVL: string;
		BROWSER: string;
		VIPSHOME: string;
		HOME: string;
		DESKTOP_SESSION: string;
		npm_package_json: string;
		XDG_SEAT_PATH: string;
		LC_MONETARY: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		QT_QPA_PLATFORMTHEME: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		pnpm_config_verify_deps_before_run: string;
		WINDOWID: string;
		_: string;
		XDG_SESSION_CLASS: string;
		COLORFGBG: string;
		npm_config_registry: string;
		SAL_VCL_QT5_USE_CAIRO: string;
		TERM: string;
		GTK_OVERLAY_SCROLLING: string;
		XDG_SESSION_ID: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		SAL_USE_VCLPLUGIN: string;
		PATH: string;
		npm_package_name: string;
		NODE: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		XDG_SESSION_PATH: string;
		XDG_MENU_PREFIX: string;
		LC_ADDRESS: string;
		XDG_RUNTIME_DIR: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		NoDefaultCurrentDirectoryInExePath: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		XDG_DATA_HOME: string;
		XDG_CONFIG_HOME: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		APPDATA: string;
		SHELL: string;
		LC_NAME: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		npm_config_verify_deps_before_run: string;
		QT_ACCESSIBILITY: string;
		LESSCLOSE: string;
		CAPTCHA_API_KEY: string;
		LXQT_SESSION_CONFIG: string;
		CLAUDECODE: string;
		LC_MEASUREMENT: string;
		GOPRIVATE: string;
		GPG_AGENT_INFO: string;
		LC_IDENTIFICATION: string;
		QT_IM_MODULE: string;
		XDG_VTNR: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		CLUTTER_IM_MODULE: string;
		XDG_DATA_DIRS: string;
		PYTHONPATH: string;
		LC_NUMERIC: string;
		npm_config__jsr_registry: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		LC_PAPER: string;
		QT_PLATFORM_PLUGIN: string;
		PNPM_HOME: string;
		EDITOR: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
