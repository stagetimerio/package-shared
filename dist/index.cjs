"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const ae="UNKNOWN",ge="CONNECTED",ue="DISCONNECTED",Zt={UNKNOWN:ae,CONNECTED:ge,DISCONNECTED:ue},Te=Object.freeze(Object.defineProperty({__proto__:null,UNKNOWN:ae,CONNECTED:ge,DISCONNECTED:ue,lifecycle:Zt},Symbol.toStringTag,{value:"Module"})),Oe="JOINED",De="LEFT",fe="DENIED_ROOM_PROTECTED",_e="DENIED_ROOM_FULL",Ee="DENIED_KICKED",Jt={JOINED:Oe,LEFT:De,DENIED_ROOM_PROTECTED:fe,DENIED_ROOM_FULL:_e,DENIED_KICKED:Ee},de=Object.freeze(Object.defineProperty({__proto__:null,JOINED:Oe,LEFT:De,DENIED_ROOM_PROTECTED:fe,DENIED_ROOM_FULL:_e,DENIED_KICKED:Ee,states:Jt},Symbol.toStringTag,{value:"Module"})),Se="VIEWER",Fe="CONTROLLER",Ne="AGENDA",be="MODERATOR",Ae={VIEWER:Se,CONTROLLER:Fe,AGENDA:Ne,MODERATOR:be},qt={...Ae},Me=Object.freeze(Object.defineProperty({__proto__:null,VIEWER:Se,CONTROLLER:Fe,AGENDA:Ne,MODERATOR:be,views:Ae,default:qt},Symbol.toStringTag,{value:"Module"})),Y="MMMSSF",Ie="MMMSS",R="HHMMSSF",U="HHMMSS",p="DHMS",P="DHHMMSSF",H="DHHMMSS",W={MMMSSF:Y,MMMSS:Ie,HHMMSSF:R,HHMMSS:U,DHMS:p,DHHMMSSF:P,DHHMMSS:H},ve=U,Ce=e=>[Y,R,P].includes(e),Ue=e=>[R,U,p,P,H].includes(e),Pe=e=>[p,P,H].includes(e),Qt={...W,DEFAULT_COUNTDOWN_FORMAT:ve,countdownFormats:W,withDecimals:Ce,withHours:Ue,withDays:Pe},Le=Object.freeze(Object.defineProperty({__proto__:null,MMMSSF:Y,MMMSS:Ie,HHMMSSF:R,HHMMSS:U,DHMS:p,DHHMMSSF:P,DHHMMSS:H,countdownFormats:W,DEFAULT_COUNTDOWN_FORMAT:ve,withDecimals:Ce,withHours:Ue,withDays:Pe,default:Qt},Symbol.toStringTag,{value:"Module"})),es={INTER:"Inter",IBM_PLEX_MONO:"IBM Plex Mono",OPEN_SANS:"Open Sans",POPPINS:"Poppins",DSEG7:"DSEG7 7-Segment Display",DSEG14:"DSEG14 14-Segment Display",INDIE_FLOWER:"Indie Flower",BALSAMIQ_SANS:"Balsamiq Sans",BALOO_2:"Baloo 2",PRESS_START_2P:"Press Start 2P",CUTIVE_MONO:"Cutive Mono",UBUNTU_MONO:"Ubuntu Mono"},ts={LIGHT:300,REGULAR:400,MEDIUM:500,SEMIBOLD:600,BOLD:700},ss={SM:"sm",MD:"md",LG:"lg"},f={DEFAULT:"TEXT_STYLE_DEFAULT",OUTLINE:"TEXT_STYLE_OUTLINE",SHADOW:"TEXT_STYLE_SHADOW"},ns={TOP:"top",CENTER:"center",BOTTOM:"bottom"},rs={CUSTOM:"BG_CUSTOM",DEFAULT:"BG_DEFAULT",TRANSPARENT:"BG_TRANSPARENT",CROWD:"/assets/customize/background-crowd-1920.jpg",CITY:"/assets/customize/background-new-york-1920.jpg",STARS:"/assets/customize/background-stars-1920.jpg",PENCILS:"/assets/customize/background-pencils-1920.jpg",STREET:"/assets/customize/background-street-1920.jpg",BLUE:"/assets/customize/background-blue-1920.jpg",PARCHMENT:"/assets/customize/background-parchment-1920.jpg"},is={HEADER:"HEADER",FOOTER:"FOOTER",NONE:"NONE"},os={TOP_LEFT:"topLeft",TOP_CENTER:"topCenter",TOP_RIGHT:"topRight",CENTER_LEFT:"centerLeft",CENTER:"center",CENTER_RIGHT:"centerRight",BOTTOM_LEFT:"bottomLeft",BOTTOM_CENTER:"bottomCenter",BOTTOM_RIGHT:"bottomRight"},cs={BAR_TOP:"BAR_TOP",BAR_BOTTOM:"BAR_BOTTOM",RING:"RING",NONE:"NONE"},_={CUSTOM:"CUSTOM",DEFAULT:"DEFAULT",LIGHT:"LIGHT",CONTRAST_LIGHT:"CONTRAST_LIGHT",CONTRAST_DARK:"CONTRAST_DARK",CANDY:"CANDY",MATRIX:"MATRIX",MONOKAI:"MONOKAI",GRUVBOX:"GRUVBOX"},ls={[_.CUSTOM]:{header:"#38BDF8",footer:"#38BDF8",countdown:"#FFFFFF",tod:"#FFFFFF",message:"#FFFFFF",progress:["#22C55D","#F59E0C","#EF4444"],bg:"#1C1918",textStyle:f.DEFAULT},[_.DEFAULT]:{header:"#38BDF8",footer:"#38BDF8",countdown:"#FFFFFF",tod:"#FFFFFF",message:"#FFFFFF",progress:["#22C55D","#F59E0C","#EF4444"],bg:"#1C1918",textStyle:f.DEFAULT},[_.LIGHT]:{header:"#0891B2",footer:"#0891B2",countdown:"#262626",tod:"#262626",message:"#262626",progress:["#16A34A","#F59E0B","#DC2626"],bg:"#F5F5F5",textStyle:f.DEFAULT},[_.CONTRAST_DARK]:{header:"#FFFFFF",footer:"#FFFFFF",countdown:"#FFFFFF",tod:"#FFFFFF",message:"#FFFFFF",progress:["#39E039","#F2C420","#FF3838"],bg:"#000000",textStyle:f.DEFAULT},[_.CONTRAST_LIGHT]:{header:"#000000",footer:"#000000",countdown:"#000000",tod:"#000000",message:"#000000",progress:["#00C600","#F5B206","#EA0000"],bg:"#FFFFFF",textStyle:f.DEFAULT},[_.CANDY]:{header:"#81F1FD",footer:"#81F1FD",countdown:"#FFFFFF",tod:"#FFFFFF",message:"#FFFFFF",progress:["#59EE85","#FC9091","#FA6CBD"],bg:"#24252F",textStyle:f.DEFAULT},[_.MATRIX]:{header:"#0D7C1C",footer:"#0D7C1C",countdown:"#71F080",tod:"#71F080",message:"#71F080",progress:["#15BF2D","#E4AC1D","#B23D40"],bg:"#0D0D0D",textStyle:f.DEFAULT},[_.MONOKAI]:{header:"#A193EB",footer:"#A193EB",countdown:"#FDF8F2",tod:"#FDF8F2",message:"#FDF8F2",progress:["#A0D774","#FB8E62","#FE577D"],bg:"#272528",textStyle:f.DEFAULT},[_.GRUVBOX]:{header:"#8EC07C",footer:"#8EC07C",countdown:"#EBDBB2",tod:"#EBDBB2",message:"#EBDBB2",progress:["#B8BB26","#FABD2F","#FB4934"],bg:"#282828",textStyle:f.DEFAULT}},ms=90,as=75,gs=20,Re=Object.freeze(Object.defineProperty({__proto__:null,fonts:es,fontWeights:ts,fontSizes:ss,textStyles:f,textAlignments:ns,backgrounds:rs,headerFooterPositions:is,logoPosition:os,progressTypes:cs,themeNames:_,themeObjects:ls,DEFAULT_TIMER_SIZE:ms,DEFAULT_MESSAGE_SIZE:as,DEFAULT_LOGO_SIZE:gs},Symbol.toStringTag,{value:"Module"})),us="STAGETIMERUSER0001",pe=Object.freeze(Object.defineProperty({__proto__:null,default:us},Symbol.toStringTag,{value:"Module"})),He="white",Be="green",he="red",je={WHITE:He,GREEN:Be,RED:he},Ts={...je},we=Object.freeze(Object.defineProperty({__proto__:null,WHITE:He,GREEN:Be,RED:he,colors:je,default:Ts},Symbol.toStringTag,{value:"Module"})),Ge="@stagetimer/shared",ye="1.0.0",xe="Shared Library for stagetimer.io",ze="index.js",We="Lukas Hermann <hey@lukashermann.dev>",$e={type:"git",url:"git+https://github.com/lhermann/stagetimer-shared.git"},Ye="module",ke={jsonwebtoken:"^8.5.1"},Ke={vite:"^3.2.4"},Os={name:Ge,version:ye,description:xe,main:ze,author:We,private:!0,repository:$e,type:Ye,dependencies:ke,devDependencies:Ke},Ve=Object.freeze(Object.defineProperty({__proto__:null,name:Ge,version:ye,description:xe,main:ze,author:We,repository:$e,type:Ye,dependencies:ke,devDependencies:Ke,default:Os},Symbol.toStringTag,{value:"Module"})),Xe="stop",k="continue",Ze={STOP:Xe,CONTINUE:k},Ds={...Ze},Je=Object.freeze(Object.defineProperty({__proto__:null,STOP:Xe,CONTINUE:k,behaviors:Ze,default:Ds},Symbol.toStringTag,{value:"Module"})),K="AUTO",B="H:mm:ss",V="H:mm",h="h:mm:ss aa",X="h:mm aa",Z="h:mm:ss",J="h:mm",qe=h,Qe=B,et=e=>[h,X,Z,J].includes(e),tt=e=>[B,V].includes(e),st={AUTO:K,HHMMSS:B,HHMM:V,HHMMSS_AM:h,HHMM_AM:X,HHMMSS_12H:Z,HHMM_12H:J},fs={...st,DEFAULT_H12:qe,DEFAULT_H24:Qe,isH12:et,isH24:tt},nt=Object.freeze(Object.defineProperty({__proto__:null,AUTO:K,HHMMSS:B,HHMM:V,HHMMSS_AM:h,HHMM_AM:X,HHMMSS_12H:Z,HHMM_12H:J,DEFAULT_H12:qe,DEFAULT_H24:Qe,isH12:et,isH24:tt,formats:st,default:fs},Symbol.toStringTag,{value:"Module"})),le={countdownFormat:{type:String,default:U},todFormat:{type:String,default:K},behavior:{type:String,default:k}},rt=Object.freeze(Object.defineProperty({__proto__:null,timersSettings:le,default:le},Symbol.toStringTag,{value:"Module"})),it="updated_desc",ot="created_desc",ct="created_asc",lt="name_asc",_s={UPDATED_DESC:it,CREATED_DESC:ot,CREATED_ASC:ct,NAME_ASC:lt},mt=Object.freeze(Object.defineProperty({__proto__:null,UPDATED_DESC:it,CREATED_DESC:ot,CREATED_ASC:ct,NAME_ASC:lt,default:_s},Symbol.toStringTag,{value:"Module"})),r="subscription",u="product",d="special",j="free",Es={SUBSCRIPTION:r,PRODUCT:u,SPECIAL:d,FREE:j},w="active",at="trialing",G="past_due",q="paused",M="deleted",ds={ACTIVE:w,TRIALING:at,PAST_DUE:G,PAUSED:q,DELETED:M},T="YEARLY",O="MONTHLY",E="ONE_TIME",v="NONE",Ss={YEARLY:T,MONTHLY:O,ONE_TIME:E,NONE:v},o="LICENSED",c="API_ACCESS",l="CUSTOM_LOGO",a="CUSTOM_THEMING",y="FULL_ACCESS",Fs={LICENSED:o,API_ACCESS:c,CUSTOM_LOGO:l,CUSTOM_THEMING:a,FULL_ACCESS:y},D="PREMIUM",m="PRO",S="ADMIN",N="TRIAL",A="STARTER",Ns={STARTER:A,PRO:m,PREMIUM:D,ADMIN:S,TRIAL:N},$=[S,D,N,m,A],Q={777756:{id:777756,type:r,name:"stagetimer.io Premium Monthly",label:D,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:O,legacy:!1,tags:[]},777755:{id:777755,type:r,name:"stagetimer.io Premium Yearly",label:D,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:T,legacy:!1,tags:[]},777758:{id:777758,type:u,name:"stagetimer.io Premium (Single-Event, 10-days)",label:D,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:E,legacy:!1,tags:[]},777754:{id:777754,type:r,name:"stagetimer.io Pro Monthly",label:m,limits:{rooms:-1,devices:10,timers:-1,messages:-1},permissions:[o,c,l],billingInterval:O,legacy:!1,tags:[]},777753:{id:777753,type:r,name:"stagetimer.io Pro Yearly",label:m,limits:{rooms:-1,devices:10,timers:-1,messages:-1},permissions:[o,c,l],billingInterval:T,legacy:!1,tags:[]},777757:{id:777757,type:u,name:"stagetimer.io Pro (Single-Event, 10-days)",label:m,limits:{rooms:-1,devices:10,timers:-1,messages:-1},permissions:[o,c,l],billingInterval:E,legacy:!1,tags:[]},746138:{id:746138,type:r,name:"stagetimer.io Pro Monthly (2022-06)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:O,legacy:!0,tags:[]},746137:{id:746137,type:r,name:"stagetimer.io Pro Yearly (2022-06)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:T,legacy:!0,tags:[]},746139:{id:746139,type:u,name:"stagetimer.io Event (2022-06)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:E,legacy:!0,tags:[]},652732:{id:652732,type:r,name:"stagetimer.io Pro Monthly (2021-12)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:O,legacy:!0,tags:[]},652733:{id:652733,type:r,name:"stagetimer.io Pro Yearly (2021-12)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:T,legacy:!0,tags:[]},31179:{id:31179,type:r,name:"dev.stagetimer.io Premium Monthly",label:D,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:O,legacy:!1,tags:[]},31180:{id:31180,type:r,name:"dev.stagetimer.io Premium Yearly",label:D,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:T,legacy:!1,tags:[]},31211:{id:31211,type:u,name:"dev.stagetimer.io Premium (Single-Event, 10-days)",label:D,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:E,legacy:!1,tags:[]},31178:{id:31178,type:r,name:"dev.stagetimer.io Pro Monthly",label:m,limits:{rooms:-1,devices:10,timers:-1,messages:-1},permissions:[o,c,l],billingInterval:O,legacy:!1,tags:[]},31177:{id:31177,type:r,name:"dev.stagetimer.io Pro Yearly",label:m,limits:{rooms:-1,devices:10,timers:-1,messages:-1},permissions:[o,c,l],billingInterval:T,legacy:!1,tags:[]},31210:{id:31210,type:u,name:"dev.stagetimer.io Pro (Single-Event, 10-days)",label:m,limits:{rooms:-1,devices:10,timers:-1,messages:-1},permissions:[o,c,l],billingInterval:E,legacy:!1,tags:[]},20122:{id:20122,type:r,name:"dev.stagetimer.io Pro Monthly (2022-06)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:O,legacy:!0,tags:[]},20123:{id:20123,type:r,name:"dev.stagetimer.io Pro Yearly (2022-06)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:T,legacy:!0,tags:[]},20126:{id:20126,type:u,name:"dev.stagetimer.io Event (2022-06)",label:m,limits:{rooms:-1,devices:50,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:E,legacy:!0,tags:[]},11184:{id:11184,type:r,name:"dev.stagetimer.io Pro Monthly (2021-12)",label:m,limits:{rooms:-1,devices:-1,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:O,legacy:!0,tags:[]},11170:{id:11170,type:r,name:"dev.stagetimer.io Pro Yearly (2021-12)",label:m,limits:{rooms:-1,devices:-1,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:T,legacy:!0,tags:[]},2001:{id:2001,type:r,name:"stagetimer.io Enterprise Pro 20",label:m,limits:{rooms:-1,devices:20,timers:-1,messages:-1},permissions:[o,c,l],billingInterval:T,legacy:!1,tags:["enterprise"]},100:{id:100,type:d,name:"stagetimer.io Admin",label:S,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[y],billingInterval:v,legacy:!1,tags:[]},200:{id:200,type:d,name:"stagetimer.io Premium Trial",label:N,limits:{rooms:-1,devices:100,timers:-1,messages:-1},permissions:[o,c,l,a],billingInterval:v,legacy:!1,tags:[]},0:{id:0,type:j,name:"stagetimer.io Starter",label:A,limits:{rooms:3,devices:3,timers:3,messages:3},permissions:[],billingInterval:v,legacy:!1,tags:[]}},gt=Q[0],L=10;function F(e){let t=0;return(e==null?void 0:e.type)===r&&(t=Number(e==null?void 0:e.subscription_plan_id)),(e==null?void 0:e.type)===u&&(t=Number(e==null?void 0:e.product_id)),(e==null?void 0:e.type)===d&&(t=Number(e==null?void 0:e.plan_id)),C(t)}function C(e=0){return Q[e]||gt}function bs(e,t){return(e==null?void 0:e.permissions.includes(t))||(e==null?void 0:e.permissions.includes(y))}function As(e){const t=F(e);return(t==null?void 0:t.name)||""}function Ms(e){return[m,D].includes(e==null?void 0:e.label)}function ut(e,t=new Date){return!e||!Array.isArray(e)?[]:e.filter(s=>new Date(s.created)<=t).map(s=>({...s,isActive:ee(s,t),isArchived:I(s,t)})).sort((s,i)=>{if(s.isActive&&!i.isActive)return-1;if(!s.isActive&&i.isActive||s.isArchived&&!i.isArchived)return 1;if(!s.isArchived&&i.isArchived)return-1;const g=$.findIndex(z=>z===F(s).label),b=$.findIndex(z=>z===F(i).label);return g!==b?g-b:i.updated-s.updated})}function Is(e,t=new Date){return ut(e,t).find(s=>s.isActive)||null}function I(e,t=new Date){if(!e)return!1;const n=F(e);if((e==null?void 0:e.type)===r){const s=e.status===M,i=e.cancellation_effective_date||e.next_bill_date,g=i?t>new Date(i):!1;return s&&g}if((e==null?void 0:e.type)===u){const s=x(new Date(e.created),L);return ne(s)?t>s:!1}if((e==null?void 0:e.type)===d){if((n==null?void 0:n.label)===S)return!1;const s=e.active_until;return n.label===N?t>new Date(s):!1}return!1}function ee(e,t=new Date){if(!e||I(e,t))return!1;const s=F(e);if((e==null?void 0:e.type)===r){const i=[w].includes(e.status),g=e.cancellation_effective_date||e.next_bill_date,b=g?t<new Date(g):!1;return i||b}if((e==null?void 0:e.type)===u){const i=x(new Date(e.created),L);return ne(i)?t<i:!1}if((e==null?void 0:e.type)===d){if((s==null?void 0:s.label)===S)return!0;const i=e.active_until;return i?t<new Date(i):!1}return!1}function vs(e=""){if(!e||I(e)||se(e))return null;if((e==null?void 0:e.type)===r){let t=e.next_bill_date;return e.status===G&&(t=e.next_retry_date),e.status===M&&(t=e.cancellation_effective_date),t?new Date(t):null}return(e==null?void 0:e.type)===u?x(new Date(e.created),L):(e==null?void 0:e.type)===d?te(e)?null:e.active_until?new Date(e.active_until):null:null}function Cs(e){if(!e||I(e)||te(e)||se(e)||(e==null?void 0:e.type)===j)return"";const t=ee(e);if((e==null?void 0:e.type)===r){if((e==null?void 0:e.status)===G)return"Next retry date";if((e==null?void 0:e.status)===q)return t?"Active until":"Paused since";if((e==null?void 0:e.status)!==M)return"Next due"}return"Active until"}function Us(e){return e&&(e==null?void 0:e.type)===r?I(e)||e.status===M?0:Number(e.next_payment_amount):0}function te(e){const t=F(e);return Boolean((t==null?void 0:t.label)===S)}function se(e,t=new Date){return F(e).tags.includes("enterprise")}function Ps(e){return e?(e.created=me(e==null?void 0:e.created),e.updated=me(e==null?void 0:e.updated),e):null}function Ls({gross:e="",net:t="",tax:n=""}={}){return{currency:String(t.match(/^[^\d]+/)).replace("US$","$"),gross:Number(String(e.match(/[\d.,]+/)).replace(/,/g,"")),net:Number(String(t.match(/[\d.,]+/)).replace(/,/g,"")),tax:Number(String(n.match(/[\d.,]+/)).replace(/,/g,""))}}function Rs(e,t){if(e===void 0||t===void 0)return null;const n=C(e),s=C(t);let i=!1,g="",b=null;return e===t&&(i=!1,g="Your plan"),[A,N,S,m].includes(n.label)&&s.label===D&&(i=!0,g="Upgrade to Premium"),[A,N,S].includes(n.label)&&s.label===m&&(i=!0,g="Upgrade to Pro"),n.label===D&&s.label===m&&(n.type===r&&s.type===r?(i=!0,g="Downgrade to Pro"):(i=!1,g="Included in your plan")),n.label===s.label&&(n.billingInterval!==T&&s.billingInterval===T?(i=!0,g="Change to yearly"):n.billingInterval!==O&&s.billingInterval===O?(i=!0,g="Change to monthly"):n.billingInterval!==E&&s.billingInterval===E&&(i=!1,g="Included in your plan")),{can:i,description:g,action:b}}function ps(e,t){const n=C(e),s={type:n.type,status:w,created:new Date};return n.type===r&&(s.subscription_plan_id=e),n.type===u&&(s.product_id=e),n.type===d&&(s.plan_id=e),n.type===r&&(s.next_bill_date=new Date(t)),n.type===u&&(s.created=x(new Date(t),-L)),n.type===d&&(s.active_until=new Date(t)),s}function me(e){return e?ne(e)?e:typeof e.toDate=="function"?e.toDate():isNaN(Date.parse(e))?e:new Date(e):null}function x(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function ne(e){return e instanceof Date&&!isNaN(e)}const Tt=Object.freeze(Object.defineProperty({__proto__:null,SUBSCRIPTION:r,PRODUCT:u,SPECIAL:d,FREE:j,types:Es,ACTIVE:w,TRIALING:at,PAST_DUE:G,PAUSED:q,DELETED:M,statuses:ds,YEARLY:T,MONTHLY:O,ONE_TIME:E,NONE:v,billingIntervals:Ss,LICENSED:o,API_ACCESS:c,CUSTOM_LOGO:l,CUSTOM_THEMING:a,FULL_ACCESS:y,permissions:Fs,PREMIUM:D,PRO:m,ADMIN:S,TRIAL:N,STARTER:A,planLabels:Ns,planLabelOrder:$,PLANS:Q,FREE_PLAN:gt,PRODUCT_DAYS:L,getPlan:F,getPlanById:C,planCan:bs,planName:As,planIsPaid:Ms,getSortedSubscriptions:ut,getActiveSubscription:Is,planIsArchived:I,planIsActive:ee,activeUntil:vs,activeUntilLabel:Cs,nextBillingAmount:Us,isAdmin:te,isEnterprise:se,parseFirebaseDocument:Ps,parsePaddlePrice:Ls,canChangeToPlan:Rs,getElectronSubscription:ps},Symbol.toStringTag,{value:"Module"})),Ot="COUNTDOWN",Dt="COUNTUP",ft="TOD",_t="COUNTDOWN_TOD",Et="COUNTUP_TOD",dt="HIDDEN",St={COUNTDOWN:Ot,COUNTUP:Dt,TOD:ft,COUNTDOWN_TOD:_t,COUNTUP_TOD:Et,HIDDEN:dt},Hs={...St},Ft=Object.freeze(Object.defineProperty({__proto__:null,COUNTDOWN:Ot,COUNTUP:Dt,TOD:ft,COUNTDOWN_TOD:_t,COUNTUP_TOD:Et,HIDDEN:dt,appearances:St,default:Hs},Symbol.toStringTag,{value:"Module"})),Nt="NONE",bt="BELL",At="DING",Mt="BEEP",It="BUZZER",vt="GONG",Ct="WINDCHIME",Ut="ITSTIME",Pt="SILENCE",Lt={NONE:Nt,BELL:bt,DING:At,WINDCHIME:Ct,BEEP:Mt,BUZZER:It,GONG:vt,ITSTIME:Ut,SILENCE:Pt},Bs={...Lt},Rt=Object.freeze(Object.defineProperty({__proto__:null,NONE:Nt,BELL:bt,DING:At,BEEP:Mt,BUZZER:It,GONG:vt,WINDCHIME:Ct,ITSTIME:Ut,SILENCE:Pt,chimes:Lt,default:Bs},Symbol.toStringTag,{value:"Module"})),re="COUNTDOWN",ie="COUNTUP",pt="TOD",oe="COUNTDOWN_TOD",ce="COUNTUP_TOD",Ht="HIDDEN",Bt={COUNTDOWN:re,COUNTUP:ie,TOD:pt,COUNTDOWN_TOD:oe,COUNTUP_TOD:ce,HIDDEN:Ht},ht=e=>[re,oe].includes(e),jt=e=>[ie,ce].includes(e),hs={...Bt,isCountdown:ht,isCountup:jt},wt=Object.freeze(Object.defineProperty({__proto__:null,COUNTDOWN:re,COUNTUP:ie,TOD:pt,COUNTDOWN_TOD:oe,COUNTUP_TOD:ce,HIDDEN:Ht,modes:Bt,isCountdown:ht,isCountup:jt,default:hs},Symbol.toStringTag,{value:"Module"})),Gt="MANUAL",yt="LINKED",xt="SCHEDULED",zt="UNTIL",Wt={MANUAL:Gt,LINKED:yt,SCHEDULED:xt,UNTIL:zt},js={...Wt},$t=Object.freeze(Object.defineProperty({__proto__:null,MANUAL:Gt,LINKED:yt,SCHEDULED:xt,UNTIL:zt,triggers:Wt,default:js},Symbol.toStringTag,{value:"Module"})),Yt="DURATION",kt="FINISH_TIME",Kt={DURATION:Yt,FINISH_TIME:kt},ws={...Kt},Vt=Object.freeze(Object.defineProperty({__proto__:null,DURATION:Yt,FINISH_TIME:kt,types:Kt,default:ws},Symbol.toStringTag,{value:"Module"})),Xt=Object.freeze(Object.defineProperty({__proto__:null,clientLifecycle:Te,clientStates:de,clientViews:Me,countdownFormats:Le,customizeOptions:Re,electronUid:pe,index:Xt,messageColors:we,package:Ve,settings:rt,sortOptions:mt,subscriptionHandler:Tt,timerAppearances:Ft,timerBehaviors:Je,timerChimes:Rt,timerModes:wt,timerTriggers:$t,timerTypes:Vt,todFormats:nt},Symbol.toStringTag,{value:"Module"}));exports.clientLifecycle=Te;exports.clientStates=de;exports.clientViews=Me;exports.countdownFormats=Le;exports.customizeOptions=Re;exports.electronUid=pe;exports.index=Xt;exports.messageColors=we;exports.package=Ve;exports.settings=rt;exports.sortOptions=mt;exports.subscriptionHandler=Tt;exports.timerAppearances=Ft;exports.timerBehaviors=Je;exports.timerChimes=Rt;exports.timerModes=wt;exports.timerTriggers=$t;exports.timerTypes=Vt;exports.todFormats=nt;
