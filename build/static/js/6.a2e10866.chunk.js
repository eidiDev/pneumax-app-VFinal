(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1153:function(e,t,a){},1164:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(13),r=a(14),i=a(16),l=a(15),s=a(17),d=a(3),u=a(115),m=a(1139),f=a(1146),h=a(168),g=a(90),b=a(1144),v=a(533),E=a(334),C=a(522),p=a(55),w=a(48),k=a(9),O=a(53),S=[{title:"Codigo",dataIndex:"cod",key:"cod",render:function(e){return e}},{title:"Valor",dataIndex:"valor",key:"valor",type:"number"},{title:"Tipo",dataIndex:"tipo",key:"tipo",render:function(e){return e.toUpperCase()}}],j="taxaHora",N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(l.a)(t).call(this))).fetchLeftList=function(){k.a.get("".concat(j,"/"),{}).then(function(e){a.setState({data:e.data})}).catch(function(e){console.log("error",e)})},a.state={data:[]},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetchLeftList()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(O.a,{columns:S,data:this.state.data,onRowClick:function(t,a){return{onClick:function(n){return e.props.onClickRow(t,a)}}}}))}}]),t}(n.Component),x=(a(1153),u.a.Option),T="TaxaHora",y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).onHandleClickNew=function(){e.setStateNew()},e.handleOnClickRow1=function(t,a){var n=Object(d.a)(Object(d.a)(e));e.setState({loading:!0,loadingTip:"Carregando registro, aguarde..."}),setTimeout(function(){k.a.get("".concat(T,"/").concat(t.id),{}).then(function(e){m.a.success("Taxa Hora carregada com sucesso!"),n.setStateEdit(e.data)}).catch(function(e){m.a.error("Erro ao buscar registro, tente novamente mais tarde!"),n.setStateNew()})},1e3)},e.onHandleClickSave=function(){var t=e.state.user,a=Object(d.a)(Object(d.a)(e));e.setState({loading:!0,loadingTip:"Salvando registro, aguarde..."}),setTimeout(function(){var e="PATCH",n="".concat(T,"/").concat(t.id);a.state.isNew&&(e="POST",n="".concat(T));var c=t.cod,o=t.valor,r=t.tipo;Object(k.a)({method:e,url:n,data:{cod:c,valor:o,tipo:r}}).then(function(e){m.a.success("Taxa hora salva com sucesso!"),a.setStateEdit(e.data),a.leftListChild.current.fetchLeftList()}).catch(function(e){a.setStateEdit(t),m.a.error("Erro ao gravar registro, tente novamente mais tarde!")})},1e3)},e.onCancel=function(){w.a.replace("/dashboard"),document.location.reload(!0)},e.onHandleClickDelete=function(){var t=e.state.user,a=Object(d.a)(Object(d.a)(e));f.a.confirm({title:"Tem certeza que deseja excluir esse registro?",onOk:function(){a.setState({loading:!0,loadingTip:"Excluindo registro, aguarde..."}),setTimeout(function(){var e="".concat(T,"/").concat(t.id);Object(k.a)({method:"DELETE",url:e}).then(function(e){m.a.success("Registro excluido com sucesso!"),a.setStateNew(),a.leftListChild.current.fetchLeftList()}).catch(function(e){m.a.error("Erro ao excluir registro, tente novamente mais tarde!")})},1e3),a.setStateNew()},onCancel:function(){}})},e.setStateNew=function(){e.setState({canSave:!0,canNew:!0,canDelete:!1,user:{},loading:!1,isNew:!0,refreshLeftList:!1})},e.setStateEdit=function(t){e.setState({canSave:!0,canNew:!0,canDelete:!0,user:t,loading:!1,isNew:!1})},e.handleChange=function(t){var a=e.state.user;a[t.target.name]=t.target.value,e.setState(function(){return{user:a}})},e.LeftList=function(){return c.a.createElement(N,{onClickRow:e.handleOnClickRow1,ref:e.leftListChild})},e.handleTip=function(t){console.log(t);var a=e.state.user;a.tipo=t,e.setState({user:a})},e.Content=function(t){return c.a.createElement("div",{className:"main"},c.a.createElement(h.a,null,c.a.createElement(g.a,{span:24},c.a.createElement(b.a,{layout:"horizontal",size:"small"},c.a.createElement(v.a,{type:"inner",title:"Cadastro de Taxa Hora"},c.a.createElement(h.a,null,c.a.createElement(g.a,{lg:6,md:8,sm:12,xs:24},c.a.createElement("div",{className:"gx-form-row0"},c.a.createElement(b.a.Item,{label:"C\xf3digo"},c.a.createElement(E.a,{type:"text",value:t.cod,name:"cod",disabled:!e.state.isNew,onChange:e.handleChange})))),c.a.createElement(g.a,{lg:6,md:8,sm:12,xs:24},c.a.createElement("div",{className:"gx-form-row0"},c.a.createElement(b.a.Item,{label:"Valor"},c.a.createElement(E.a,{type:"number",value:t.valor,name:"valor",onChange:e.handleChange})))),c.a.createElement(g.a,{lg:6,md:8,sm:12,xs:24},c.a.createElement("div",{className:"gx-form-row0"},c.a.createElement(b.a.Item,{label:"Tipo"},c.a.createElement(u.a,{value:t.tipo,onChange:e.handleTip},c.a.createElement(x,{value:"maquina"},"Maquina"),c.a.createElement(x,{value:"montagem"},"Montagem")))))))))))},e.state={isNew:!0,loader:!0,user:{},canNew:!0,canSave:!0,canDelete:!1,loading:!1},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.setStateNew=e.setStateNew.bind(Object(d.a)(Object(d.a)(e))),e.onHandleClickSave=e.onHandleClickSave.bind(Object(d.a)(Object(d.a)(e))),e.onHandleClickDelete=e.onHandleClickDelete.bind(Object(d.a)(Object(d.a)(e))),e.onHandleClickNew=e.onHandleClickNew.bind(Object(d.a)(Object(d.a)(e))),e.leftListChild=c.a.createRef(),e}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(C.a,{spinning:this.state.loading,tip:this.state.loadingTip},c.a.createElement(h.a,null,c.a.createElement(g.a,{lg:5,md:5,sm:24,xs:24},this.LeftList()),c.a.createElement(g.a,{lg:15,md:15,sm:24,xs:24},this.Content(this.state.user)),c.a.createElement(g.a,{lg:4,md:4,sm:24,xs:24},c.a.createElement(v.a,{type:"inner",title:"Taxa Hora"},c.a.createElement(p.a,{block:!0,type:"primary",className:"gx-btn-secondary",disabled:!this.state.canNew,onClick:this.onHandleClickNew},"Novo"),c.a.createElement(p.a,{block:!0,type:"primary",onClick:this.onHandleClickSave,disabled:!this.state.canSave},"Salvar"),c.a.createElement("br",null),c.a.createElement(p.a,{block:!0,disabled:!this.state.canDelete,type:"primary",onClick:this.onHandleClickDelete,className:"gx-btn-red"},"Excluir")))))}}]),t}(n.Component);t.default=function(){return c.a.createElement(y,null)}}}]);
//# sourceMappingURL=6.a2e10866.chunk.js.map