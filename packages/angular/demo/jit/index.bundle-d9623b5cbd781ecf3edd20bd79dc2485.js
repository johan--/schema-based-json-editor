webpackJsonp([2],{151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(92),n=(a.n(r),a(124)),o=(a.n(n),a(125)),p=(a.n(o),a(126)),l=a(4),i=a(329);Object(l._8)(),Object(p.a)().bootstrapModule(i.a)},329:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(4),n=a(66),o=a(89),p=a(139),l=a(356),i=function(){function e(){}return e.decorators=[{type:r.E,args:[{imports:[n.a,o.b,p.a],declarations:[l.a],bootstrap:[l.a]}]}],e.ctorParameters=function(){return[]},e}()},356:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var r=a(4),n=a(357),o=a(148),p=(a.n(o),a(149)),l=(a.n(p),a(150)),i=(a.n(l),function(){function e(){this.locale=null,this.schema=n.c,this.value=n.a,this.color="black",this.dragula=o,this.markdownit=p,this.hljs=l,this.schemaSchema=n.d,this.initialValueSchema=n.b,this.editingSchema=JSON.stringify(n.c,null,"  "),this.editingInitialValue=JSON.stringify(n.a,null,"  ")}return e.prototype.ngOnInit=function(){var e=this;"zh-CN"===navigator.language&&a(546)("./"+navigator.language+".js").then(function(t){e.locale=t.locale})},e.prototype.updateSchema=function(e){var t=e.value;try{this.editingSchema=t,localStorage.setItem("json-editor:schema",this.editingSchema)}catch(e){console.log(e)}},e.prototype.updateInitialValue=function(e){var t=e.value;try{this.editingInitialValue=t,localStorage.setItem("json-editor:initial-value",this.editingInitialValue)}catch(e){console.log(e)}},Object.defineProperty(e.prototype,"valueHtml",{get:function(){return l.highlight("json",JSON.stringify(this.value,null,"  ")).value},enumerable:!0,configurable:!0}),e.prototype.updateValue=function(e){var t=e.value,a=e.isValid;this.value=t,this.color=a?"black":"red"},e.decorators=[{type:r.m,args:[{selector:"app",changeDetection:r.i.OnPush,template:'\n    <div style="position: relative">\n      <a href="https://github.com/plantain-00/schema-based-json-editor/tree/master/packages/angular/demo" target="_blank">the source code of the demo</a>\n      <br/>\n      <div style="width: 400px; margin: 10px; overflow-y: scroll; position: absolute;" class="bootstrap3-row-container">\n        <json-editor [schema]="schemaSchema"\n          [initialValue]="editingSchema"\n          (updateValue)="updateSchema($event)"\n          theme="bootstrap3"\n          icon="fontawesome4"\n          [locale]="locale"\n          [dragula]="dragula"\n          [markdownit]="markdownit"\n          [hljs]="hljs"\n          [forceHttps]="false">\n        </json-editor>\n      </div>\n      <div style="width: 400px; margin: 10px; overflow-y: scroll; position: absolute; top: 300px;" class="bootstrap3-row-container">\n        <json-editor [schema]="initialValueSchema"\n          [initialValue]="editingInitialValue"\n          (updateValue)="updateInitialValue($event)"\n          theme="bootstrap3"\n          icon="fontawesome4"\n          [locale]="locale"\n          [dragula]="dragula"\n          [markdownit]="markdownit"\n          [hljs]="hljs"\n          [forceHttps]="false">\n        </json-editor>\n      </div>\n      <div style="width: 500px; margin: 10px; overflow-y: scroll; height: 600px; position: absolute; left: 450px;" class="bootstrap3-row-container">\n        <json-editor [schema]="schema"\n          [initialValue]="value"\n          (updateValue)="updateValue($event)"\n          theme="bootstrap3"\n          icon="fontawesome4"\n          [locale]="locale"\n          [dragula]="dragula"\n          [markdownit]="markdownit"\n          [hljs]="hljs"\n          [forceHttps]="false">\n        </json-editor>\n      </div>\n      <div style="width: 400px; margin: 10px; overflow-y: scroll; height: 600px; position: absolute; right: 10px;">\n        Value:\n        <pre [style.borderColor]="color"><code [innerHTML]="valueHtml"></code></pre>\n      </div>\n    </div>\n    '}]}],e.ctorParameters=function(){return[]},e}())},357:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"d",function(){return l}),a.d(t,"b",function(){return i});var r={type:"object",title:"GUI:",description:"a description example",properties:{stringExample:{type:"string",title:"A string example",description:"a string description example",default:"a default string example",minLength:20,maxLength:25},booleanExample:{type:"boolean",title:"A boolean example",description:"a boolean description example",default:!0},numberExample:{type:"number",title:"A number example",description:"a number description example",default:123.4,minimum:10,exclusiveMinimum:!0,maximum:1e3,exclusiveMaximum:!0},integerExample:{type:"integer",title:"A integer example",description:"a integer description example",default:124,multipleOf:2},nullExample:{type:"null",title:"A null example",description:"a null description example",default:null},objectExample:{type:"object",title:"A object example",description:"a object description example",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},default:{},required:["propertyExample1","propertyExample2"]},arrayExample:{type:"array",title:"A array example",description:"a array description example",items:{type:"string",maxLength:15},default:["default item 1","default item 2"],minItems:1,uniqueItems:!0},readOnlyExample:{type:"string",readonly:!0,default:"abc"},readOnlyAndOptionalExample:{type:"string",readonly:!0,default:"abc"},enumExample:{type:"string",enum:["enum 1","enum 2"]},optionalExample:{type:"string"},optionalAndDefaultExample:{type:"string",default:"abc"},booleanOptionalExample:{type:"boolean"},colorExample:{type:"string",format:"color",default:"#000000"},textareaExample:{type:"string",format:"textarea"},patternExample:{type:"string",pattern:"^[A-z]{3}$",default:"abc"},imagePreviewExample:{type:"string",default:"http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg"},markdownExample:{type:"string",format:"markdown",default:"###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```"},codeExample:{type:"string",format:"code",default:"function foo(bar) {\n    console.log(bar);\n}\n"},itemTitleExample:{type:"array",items:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},required:["propertyExample1","propertyExample2"],collapsed:!0},default:[{propertyExample1:"foo",propertyExample2:1},{propertyExample1:"bar",propertyExample2:2},{propertyExample1:"baz",propertyExample2:3},{propertyExample1:"abc",propertyExample2:4},{propertyExample1:"def",propertyExample2:5},{propertyExample1:"ghi",propertyExample2:6}]},optionalObjectExample:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},maxProperties:1,minProperties:0},propertyOrderExample:{type:"object",properties:{propertyExample1:{type:"string",propertyOrder:3},propertyExample2:{type:"number",propertyOrder:1},propertyExample3:{type:"number",propertyOrder:2}}},collapsedObjectExample:{type:"object",properties:{propertyExample1:{type:"string"}},collapsed:!0},emptyEnumExample:{type:"string",enum:[]},uploadFileExample:{type:"string",format:"base64"},requiredWhenExample:{type:"object",properties:{kind:{type:"string",enum:["enum 1","enum 2","enum 3"]},propertyExample1:{type:"number",requiredWhen:["kind","===","enum 1"]},propertyExample2:{type:"string",requiredWhen:["kind","===","enum 2"]},propertyExample3:{type:"number",requiredWhen:["kind","in",["enum 1","enum 2"]]},propertyExample4:{type:"string"},propertyExample5:{type:"string"}},required:["kind","propertyExample4"]}},required:["stringExample","booleanExample","numberExample","integerExample","nullExample","objectExample","arrayExample","readOnlyExample","enumExample","colorExample","textareaExample","patternExample","imagePreviewExample","markdownExample","codeExample","performanceExample","itemTitleExample","optionalObjectExample","propertyOrderExample","collapsedObjectExample","emptyEnumExample","uploadFileExample","requiredWhenExample"]},n=localStorage.getItem("json-editor:schema");if(n)try{r=JSON.parse(n)}catch(e){console.log(e)}var o={},p=localStorage.getItem("json-editor:initial-value");if(p)try{o=JSON.parse(p)}catch(e){console.log(e)}var l={title:"Schema(refresh the page to make it work when you change it):",type:"string",format:"textarea"},i={title:"Initial Value(refresh the page to make it work when you change it):",type:"string",format:"textarea"}},546:function(e,t,a){function r(e){var t=n[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var n={"./zh-CN.js":[549,0]};r.keys=function(){return Object.keys(n)},r.id=546,e.exports=r}},[151]);