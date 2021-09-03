import { registerApplication, start, navigateToUrl } from "single-spa";

registerApplication({
  name: "microfrontend-login",
  app: () => System.import("microfrontend-login"),
  activeWhen: "/login", // localhost:9000/page1 redirige vers le micro-front-end vue
	customProps: {
    domElement: document.getElementById("micro-front-ends-container"),
  },
});

registerApplication({
  name: "microfrontend-home",
  app: () => System.import("microfrontend-home"),
  activeWhen: [(location) => location.pathname === '/', '/home'],
	customProps: {
    domElement: document.getElementById("micro-front-ends-container"),
  },
});

registerApplication({
  name: "@GUIDAP/microfrontend-nav",
  app: () => System.import("@GUIDAP/microfrontend-nav"),
  activeWhen: "/",
	customProps: {
    domElement: document.getElementById("nav-container"),
  },
});

registerApplication({
  name: "microfrontend-404",
  app: () => System.import("microfrontend-404"),
  activeWhen: "/404",
	customProps: {
    domElement: document.getElementById("micro-front-ends-container"),
  },
});

window.addEventListener('single-spa:routing-event', (evt) => {
  if (evt.detail.appsByNewStatus.MOUNTED.length === 1 && evt.detail.appsByNewStatus.MOUNTED[0] === '@GUIDAP/microfrontend-nav') {
    navigateToUrl('/404')
  }
});

start({
  urlRerouteOnly: true,
});
