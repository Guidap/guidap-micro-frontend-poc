import { registerApplication, start, navigateToUrl } from "single-spa";

registerApplication({
  name: "@GUIDAP/guidap-login",
  app: () => System.import("@GUIDAP/guidap-login"),
  activeWhen: "/login", // localhost:9000/page1 redirige vers le micro-front-end vue
	customProps: {
    domElement: document.getElementById("micro-front-ends-container"),
  },
});

registerApplication({
  name: "@GUIDAP/guidap-home",
  app: () => System.import("@GUIDAP/guidap-home"),
  activeWhen: [(location) => location.pathname === '/', '/home'],
	customProps: {
    domElement: document.getElementById("micro-front-ends-container"),
  },
});

registerApplication({
  name: "@GUIDAP/guidap-nav",
  app: () => System.import("@GUIDAP/guidap-nav"),
  activeWhen: "/",
	customProps: {
    domElement: document.getElementById("nav-container"),
  },
});

registerApplication({
  name: "@GUIDAP/404",
  app: () => System.import("@GUIDAP/guidap-404"),
  activeWhen: "/404",
	customProps: {
    domElement: document.getElementById("micro-front-ends-container"),
  },
});

window.addEventListener('single-spa:routing-event', (evt) => {
  if (evt.detail.appsByNewStatus.MOUNTED.length === 1 && evt.detail.appsByNewStatus.MOUNTED[0] === '@GUIDAP/guidap-nav') {
    navigateToUrl('/404')
  }
});

start({
  urlRerouteOnly: true,
});
