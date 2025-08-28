import{r as c,v,j as t,$ as C,Y as j}from"./app-DpfpjghG.js";/* empty css                    *//**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,n)=>n?n.toUpperCase():s.toLowerCase()),g=e=>{const r=_(e);return r.charAt(0).toUpperCase()+r.slice(1)},x=(...e)=>e.filter((r,s,n)=>!!r&&r.trim()!==""&&n.indexOf(r)===s).join(" ").trim(),y=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=c.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:n,className:a="",children:l,iconNode:i,...d},m)=>c.createElement("svg",{ref:m,...L,width:r,height:r,stroke:e,strokeWidth:n?Number(s)*24/Number(r):s,className:x("lucide",a),...!l&&!y(d)&&{"aria-hidden":"true"},...d},[...i.map(([p,o])=>c.createElement(p,o)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,r)=>{const s=c.forwardRef(({className:n,...a},l)=>c.createElement(A,{ref:l,iconNode:r,className:x(`lucide-${E(g(e))}`,`lucide-${e}`,n),...a}));return s.displayName=g(e),s};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],R=$("loader-circle",k);function I(){const{data:e,setData:r,post:s,processing:n,errors:a,reset:l,setError:i,clearErrors:d}=v({nombre:"",telefono:"",email:"",password:"",password_confirmation:""}),m=()=>{d();let o=!1;const b=(e.nombre||"").trim(),u=(e.telefono||"").trim(),f=(e.email||"").trim(),h=e.password||"",w=e.password_confirmation||"";return b||(i("nombre","El nombre es obligatorio."),o=!0),u||(i("telefono","El teléfono es obligatorio."),o=!0),f||(i("email","El correo electrónico es obligatorio."),o=!0),h||(i("password","La contraseña es obligatoria."),o=!0),w||(i("password_confirmation","Debes confirmar la contraseña."),o=!0),u&&u.length!==9&&(i("telefono","El teléfono debe tener 9 caracteres."),o=!0),h&&w&&h!==w&&(i("password","Las contraseñas no coinciden."),i("password_confirmation","Las contraseñas no coinciden."),o=!0),f&&!/^[^\s@]+@gmail\.com$/i.test(f)&&(i("email","El correo debe ser de Gmail (terminar en @gmail.com)."),o=!0),!o},p=o=>{o.preventDefault(),m()&&s(route("register"),{onFinish:()=>l("password","password_confirmation")})};return t.jsxs(t.Fragment,{children:[t.jsx(C,{title:"Registro"}),t.jsx("h1",{children:"Crear cuenta"}),t.jsxs("form",{onSubmit:p,noValidate:!0,children:[t.jsx("input",{type:"text",value:e.nombre,onChange:o=>r("nombre",o.target.value),placeholder:"Nombre completo"}),a.nombre&&t.jsx("div",{children:a.nombre}),t.jsx("input",{type:"text",value:e.telefono,onChange:o=>r("telefono",o.target.value),placeholder:"Telefono",maxLength:9}),a.telefono&&t.jsx("div",{children:a.telefono}),t.jsx("input",{type:"email",value:e.email,onChange:o=>r("email",o.target.value),placeholder:"Correo electrónico"}),a.email&&t.jsx("div",{children:a.email}),t.jsx("input",{type:"password",value:e.password,onChange:o=>r("password",o.target.value),placeholder:"Contraseña"}),a.password&&t.jsx("div",{children:a.password}),t.jsx("input",{type:"password",value:e.password_confirmation,onChange:o=>r("password_confirmation",o.target.value),placeholder:"Confirmar contraseña"}),a.password_confirmation&&t.jsx("div",{children:a.password_confirmation}),t.jsxs("button",{type:"submit",disabled:n,children:["Registrarse ",n&&t.jsx(R,{className:"spin"})]})]}),t.jsxs("p",{children:["¿Ya tienes cuenta? ",t.jsx(j,{href:route("login"),children:"Iniciar sesión"})]})]})}export{I as default};
