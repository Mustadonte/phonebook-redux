"use strict";(self.webpackChunkphonebook_redux=self.webpackChunkphonebook_redux||[]).push([[657],{5657:function(e,n,o){o.r(n),o.d(n,{LoginPage:function(){return ie}});var a=o(1413),t=o(2791),r=o(3978),l=o(7205),i=o(3793),c=o(8610),d=o(4942),s=o(3366),u=o(7462),m=o(8182),p=o(4419),h=o(529),b=o(4565),f=o(9853),v=o(277),Z=o(5513),x=o(1217),g=o(5878);function k(e){return(0,x.Z)("MuiFormControlLabel",e)}var y=(0,g.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),P=o(40),j=o(184),C=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","value"],w=(0,v.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[(0,d.Z)({},"& .".concat(y.label),n.label),n.root,n["labelPlacement".concat((0,f.Z)(o.labelPlacement))]]}})((function(e){var n=e.theme,o=e.ownerState;return(0,u.Z)((0,d.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(y.disabled),{cursor:"default"}),"start"===o.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===o.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===o.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,d.Z)({},"& .".concat(y.label),(0,d.Z)({},"&.".concat(y.disabled),{color:(n.vars||n).palette.text.disabled})))})),F=t.forwardRef((function(e,n){var o=(0,Z.Z)({props:e,name:"MuiFormControlLabel"}),a=o.className,r=o.componentsProps,l=void 0===r?{}:r,i=o.control,c=o.disabled,d=o.disableTypography,v=o.label,x=o.labelPlacement,g=void 0===x?"end":x,y=(0,s.Z)(o,C),F=(0,h.Z)(),R=c;"undefined"===typeof R&&"undefined"!==typeof i.props.disabled&&(R=i.props.disabled),"undefined"===typeof R&&F&&(R=F.disabled);var S={disabled:R};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof i.props[e]&&"undefined"!==typeof o[e]&&(S[e]=o[e])}));var I=(0,P.Z)({props:o,muiFormControl:F,states:["error"]}),z=(0,u.Z)({},o,{disabled:R,labelPlacement:g,error:I.error}),B=function(e){var n=e.classes,o=e.disabled,a=e.labelPlacement,t=e.error,r={root:["root",o&&"disabled","labelPlacement".concat((0,f.Z)(a)),t&&"error"],label:["label",o&&"disabled"]};return(0,p.Z)(r,k,n)}(z),L=v;return null==L||L.type===b.Z||d||(L=(0,j.jsx)(b.Z,(0,u.Z)({component:"span",className:B.label},l.typography,{children:L}))),(0,j.jsxs)(w,(0,u.Z)({className:(0,m.Z)(B.root,a),ownerState:z,ref:n},y,{children:[t.cloneElement(i,S),L]}))})),R=o(2065),S=o(885),I=o(4938),z=o(753);function B(e){return(0,x.Z)("PrivateSwitchBase",e)}(0,g.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var L=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],M=(0,v.ZP)(z.Z)((function(e){var n=e.ownerState;return(0,u.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),D=(0,v.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),N=t.forwardRef((function(e,n){var o=e.autoFocus,a=e.checked,t=e.checkedIcon,r=e.className,l=e.defaultChecked,i=e.disabled,c=e.disableFocusRipple,d=void 0!==c&&c,b=e.edge,v=void 0!==b&&b,Z=e.icon,x=e.id,g=e.inputProps,k=e.inputRef,y=e.name,P=e.onBlur,C=e.onChange,w=e.onFocus,F=e.readOnly,R=e.required,z=e.tabIndex,N=e.type,E=e.value,O=(0,s.Z)(e,L),q=(0,I.Z)({controlled:a,default:Boolean(l),name:"SwitchBase",state:"checked"}),H=(0,S.Z)(q,2),T=H[0],V=H[1],W=(0,h.Z)(),A=i;W&&"undefined"===typeof A&&(A=W.disabled);var _="checkbox"===N||"radio"===N,U=(0,u.Z)({},e,{checked:T,disabled:A,disableFocusRipple:d,edge:v}),Y=function(e){var n=e.classes,o=e.checked,a=e.disabled,t=e.edge,r={root:["root",o&&"checked",a&&"disabled",t&&"edge".concat((0,f.Z)(t))],input:["input"]};return(0,p.Z)(r,B,n)}(U);return(0,j.jsxs)(M,(0,u.Z)({component:"span",className:(0,m.Z)(Y.root,r),centerRipple:!0,focusRipple:!d,disabled:A,tabIndex:null,role:void 0,onFocus:function(e){w&&w(e),W&&W.onFocus&&W.onFocus(e)},onBlur:function(e){P&&P(e),W&&W.onBlur&&W.onBlur(e)},ownerState:U,ref:n},O,{children:[(0,j.jsx)(D,(0,u.Z)({autoFocus:o,checked:a,defaultChecked:l,className:Y.input,disabled:A,id:_&&x,name:y,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;V(n),C&&C(e,n)}},readOnly:F,ref:k,required:R,ownerState:U,tabIndex:z,type:N},"checkbox"===N&&void 0===E?{}:{value:E},g)),T?t:Z]}))})),E=o(1245),O=(0,E.Z)((0,j.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),q=(0,E.Z)((0,j.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),H=(0,E.Z)((0,j.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function T(e){return(0,x.Z)("MuiCheckbox",e)}var V=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),W=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"],A=(0,v.ZP)(N,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var o=e.ownerState;return[n.root,o.indeterminate&&n.indeterminate,"default"!==o.color&&n["color".concat((0,f.Z)(o.color))]]}})((function(e){var n,o=e.theme,a=e.ownerState;return(0,u.Z)({color:(o.vars||o).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat("default"===a.color?o.vars.palette.action.activeChannel:o.vars.palette.primary.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,R.Fq)("default"===a.color?o.palette.action.active:o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(n={},(0,d.Z)(n,"&.".concat(V.checked,", &.").concat(V.indeterminate),{color:(o.vars||o).palette[a.color].main}),(0,d.Z)(n,"&.".concat(V.disabled),{color:(o.vars||o).palette.action.disabled}),n))})),_=(0,j.jsx)(q,{}),U=(0,j.jsx)(O,{}),Y=(0,j.jsx)(H,{}),G=t.forwardRef((function(e,n){var o,a,r=(0,Z.Z)({props:e,name:"MuiCheckbox"}),l=r.checkedIcon,i=void 0===l?_:l,c=r.color,d=void 0===c?"primary":c,m=r.icon,h=void 0===m?U:m,b=r.indeterminate,v=void 0!==b&&b,x=r.indeterminateIcon,g=void 0===x?Y:x,k=r.inputProps,y=r.size,P=void 0===y?"medium":y,C=(0,s.Z)(r,W),w=v?g:h,F=v?g:i,R=(0,u.Z)({},r,{color:d,indeterminate:v,size:P}),S=function(e){var n=e.classes,o=e.indeterminate,a=e.color,t={root:["root",o&&"indeterminate","color".concat((0,f.Z)(a))]},r=(0,p.Z)(t,T,n);return(0,u.Z)({},n,r)}(R);return(0,j.jsx)(A,(0,u.Z)({type:"checkbox",inputProps:(0,u.Z)({"data-indeterminate":v},k),icon:t.cloneElement(w,{fontSize:null!=(o=w.props.fontSize)?o:P}),checkedIcon:t.cloneElement(F,{fontSize:null!=(a=F.props.fontSize)?a:P}),ownerState:R,ref:n},C,{classes:S}))})),J=o(6283),K=o(5953),Q=o(6015),X=o(403),$=o(803),ee=o(4360),ne=o(7012),oe=o(9434),ae=o(527);function te(e){return(0,j.jsxs)(b.Z,(0,a.Z)((0,a.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,j.jsx)(J.Z,{color:"inherit",href:"https://mui.com/",children:"PhoneBook poject"})," ",(new Date).getFullYear(),"."]}))}var re=(0,ee.Z)();function le(){var e=(0,oe.I0)();return(0,j.jsx)(ne.Z,{theme:re,children:(0,j.jsxs)($.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(i.ZP,{}),(0,j.jsxs)(Q.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(r.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,j.jsx)(X.Z,{})}),(0,j.jsx)(b.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,j.jsxs)(Q.Z,{component:"form",onSubmit:function(n){n.preventDefault();var o=new FormData(n.currentTarget),a={email:o.get("email"),password:o.get("password")};e((0,ae.Ib)(a))},noValidate:!0,sx:{mt:1},children:[(0,j.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,j.jsx)(c.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,j.jsx)(F,{control:(0,j.jsx)(G,{value:"remember",color:"primary"}),label:"Remember me"}),(0,j.jsx)(l.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,j.jsx)(K.ZP,{container:!0,children:(0,j.jsx)(K.ZP,{item:!0,children:(0,j.jsx)(J.Z,{href:"Register",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),(0,j.jsx)(te,{sx:{mt:8,mb:4}})]})})}var ie=function(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(le,{})})}}}]);
//# sourceMappingURL=657.cc92f6d6.chunk.js.map