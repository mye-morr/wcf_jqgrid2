var $jscomp={scope:{},findInternal:function(a,k,n){a instanceof String&&(a=String(a));for(var m=a.length,v=0;v<m;v++){var z=a[v];if(k.call(n,z,v,a))return{i:v,v:z}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,k,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[k]=n.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,k,n,m){if(k){n=$jscomp.global;a=a.split(".");for(m=0;m<a.length-1;m++){var v=a[m];v in n||(n[v]={});n=n[v]}a=a[a.length-1];m=n[a];k=k(m);k!=m&&null!=k&&$jscomp.defineProperty(n,a,{configurable:!0,writable:!0,value:k})}};
$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,n){return $jscomp.findInternal(this,a,n).v}},"es6-impl","es3");
(function(a){"function"===typeof define&&define.amd?define("jquery ./grid.base jquery-ui/dialog jquery-ui/draggable jquery-ui/droppable jquery-ui/resizable jquery-ui/sortable".split(" "),a):"object"===typeof exports?a(require("jquery")):a(jQuery)})(function(a){var k=a.jgrid,n=k.jqID,m=null!=a.ui?a.ui.multiselect:null,v=function(b){if(null!=this.grid&&null!=this.grid.p){var h=this,e=this.grid.p,d,c,g,r,l=this.gh,f=this.selectedList,p=f.find("li"),u,t=Array(e.colModel.length),k=p.length-1,n=function(b,
c,e){var g,d=f.find("li");for(void 0===c&&(c=e?d.length-1:0);e?0<=c:c<d.length;e?c--:c++)if((g=a(d[c]).data("optionLink"))&&b.call(d[c],parseInt(g.val(),10),c))return c};u=function(c){if(t[c]===t[b])return a(this).after(p[k]),q(),!0};var m=function(c){if(t[c]===t[b])return a(this).before(p[k]),q(),!0},v=function(a){if(t[a]===t[b]&&void 0!==t[a])return l[t[a]].startColumnName=e.colModel[a].name,!0},q=function(){c=a.inArray(e.colModel[b].name,h.newColOrder);0<=c&&h.newColOrder.splice(c,1);p=f.find("li");
d=0;n(function(c,f){if(c===b){for(k=f;0<=d&&!e.colModel[d].hidden&&e.colModel[d].hidedlg&&t[d]===t[b];)d++;h.newColOrder.splice(d,0,e.colModel[b].name);return!0}d=a.inArray(e.colModel[c].name,h.newColOrder,d);0>d&&(d=a.inArray(e.colModel[c].name,h.newColOrder));d++})};if(l)for(g=0;g<l.length;g++)for(r=l[g],d=0;d<r.numberOfColumns;d++)t[e.iColByName[r.startColumnName]+d]=g;q();if(l&&void 0!==l[t[b]])for(r=l[t[b]],c=0;c<r.numberOfColumns;c++){if(d=e.iColByName[r.startColumnName]+c,!e.colModel[d].hidden&&
!e.colModel[d].hidedlg){n(u,k-1,!0);n(m,k+1);n(v);break}}else!l||(p=f.find("li"),c=n(function(a){if(a===b)return!0}),c+1>=p.length||0>c||!(u=a(p[c+1]).data("optionLink")))||(g=t[parseInt(u.val(),10)],void 0!==g&&(u=a(p[c-1]).data("optionLink"))&&t[parseInt(u.val(),10)]===g&&(u=n(function(a){if(t[a]!==g)return!0},c+1),a(p[u>=p.length?p.length-1:u-1]).after(p[k]),q()))}};k.msie&&8===k.msiever()&&(a.expr[":"].hidden=function(a){return 0===a.offsetWidth||0===a.offsetHeight||"none"===a.style.display});
k._multiselect=!1;if(m){if(m.prototype._setSelected){var z=m.prototype._setSelected;m.prototype._setSelected=function(b,h){var e=z.call(this,b,h),d=this.element,c=parseInt(b.data("optionLink").val(),10);h&&this.selectedList&&(v.call(this,c),this.selectedList.find("li").each(function(){a(this).data("optionLink")&&a(this).data("optionLink").remove().appendTo(d)}));return e}}m.prototype.destroy&&(m.prototype.destroy=function(){this.element.show();this.container.remove();void 0===a.Widget?a.widget.prototype.destroy.apply(this,
arguments):a.Widget.prototype.destroy.apply(this,arguments)});k._multiselect=!0}k.extend({sortableColumns:function(b){return this.each(function(){function h(){d.disableClick=!0}var e=this,d=e.p,c=n(d.id),c={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+c+"_cb,#jqgh_"+c+"_rn,#jqgh_"+c+"_subgrid),:hidden)",placeholder:{element:function(b){return a(document.createElement(b[0].nodeName)).addClass(b[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]},
update:function(a,b){b.height(a.currentItem.innerHeight()-parseInt(a.currentItem.css("paddingTop")||0,10)-parseInt(a.currentItem.css("paddingBottom")||0,10));b.width(a.currentItem.innerWidth()-parseInt(a.currentItem.css("paddingLeft")||0,10)-parseInt(a.currentItem.css("paddingRight")||0,10))}},start:function(){e.grid.hDiv.scrollLeft=e.grid.bDiv.scrollLeft},update:function(b,c){var f=a(">th",a(c.item).parent()),g=d.id+"_",l=[];f.each(function(){var b=a(">div",this).get(0).id.replace(/^jqgh_/,"").replace(g,
""),b=d.iColByName[b];void 0!==b&&l.push(b)});a(e).jqGrid("remapColumns",l,!0,!0);a.isFunction(d.sortable.update)&&d.sortable.update(l);setTimeout(function(){d.disableClick=!1},50)}};d.sortable.options?a.extend(c,d.sortable.options):a.isFunction(d.sortable)&&(d.sortable={update:d.sortable});if(c.start){var g=c.start;c.start=function(a,b){h();g.call(this,a,b)}}else c.start=h;d.sortable.exclude&&(c.items+=":not("+d.sortable.exclude+")");c=b.sortable(c);c=c.data("sortable")||c.data("uiSortable")||c.data("ui-sortable");
null!=c&&(c.floating=!0)})},columnChooser:function(b){function h(b,c){b&&("string"===typeof b?a.fn[b]&&a.fn[b].apply(c,a.makeArray(arguments).slice(2)):a.isFunction(b)&&b.apply(c,a.makeArray(arguments).slice(2)))}var e=this,d=e[0],c=d.p,g,r,l,f,p=c.colModel;l=p.length;var u=c.colNames,t=function(a){return m&&m.prototype&&a.data(m.prototype.widgetFullName||m.prototype.widgetName)||a.data("ui-multiselect")||a.data("multiselect")};if(!a("#colchooser_"+n(c.id)).length){g=a('<div id="colchooser_'+c.id+
'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>');r=a("select",g);b=a.extend({width:400,height:240,classname:null,done:function(a){a&&e.jqGrid("remapColumns",a,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(b){var c={};c[b.bSubmit]=function(){b.apply_perm();b.cleanup(!1)};c[b.bCancel]=function(){b.cleanup(!0)};return a.extend(!0,{buttons:c,close:function(){b.cleanup(!0)},modal:b.modal||
!1,resizable:b.resizable||!0,width:b.width+70,resize:function(){var a=t(r),b=a.container.closest(".ui-dialog-content");0<b.length&&"object"===typeof b[0].style?b[0].style.width="":b.css("width","");a.selectedList.height(Math.max(a.selectedContainer.height()-a.selectedActions.outerHeight()-1,1));a.availableList.height(Math.max(a.availableContainer.height()-a.availableActions.outerHeight()-1,1))}},b.dialog_opts||{})},apply_perm:function(){var g=Array(c.colModel.length),d,l={notSkipFrozen:void 0===b.notSkipFrozen?
!1:b.notSkipFrozen,skipSetGridWidth:!0,skipSetGroupHeaders:!0};for(d=0;d<c.colModel.length;d++)g[d]=c.iColByName[f.newColOrder[d]];a("option",r).each(function(){a(this).is(":selected")?e.jqGrid("showCol",p[this.value].name,l):e.jqGrid("hideCol",p[this.value].name,l)});b.done&&b.done.call(e,g);if(c.groupHeader&&("object"===typeof c.groupHeader||a.isFunction(c.groupHeader)))if(e.jqGrid("destroyGroupHeader",!1),c.groupHeader.groupHeaders=f.gh,null!=c.pivotOptions&&null!=c.pivotOptions.colHeaders&&1<
c.pivotOptions.colHeaders.length)for(g=c.pivotOptions.colHeaders,d=0;d<g.length;d++)g[d]&&g[d].groupHeaders.length&&e.jqGrid("setGroupHeaders",g[d]);else e.jqGrid("setGroupHeaders",c.groupHeader);e.jqGrid("setGridWidth",c.autowidth||void 0!==c.widthOrg&&"auto"!==c.widthOrg&&"100%"!==c.widthOrg?c.width:c.tblwidth,c.shrinkToFit)},cleanup:function(a){h(b.dlog,g,"destroy");h(b.msel,r,"destroy");g.remove();a&&b.done&&b.done.call(e)},msel_opts:{}},e.jqGrid("getGridRes","col"),k.col,b||{});if(a.ui&&m&&m.defaults){if(!k._multiselect){(null!=
k.defaults&&a.isFunction(k.defaults.fatalError)?k.defaults.fatalError:alert)("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");return}b.msel_opts=a.extend(m.defaults,b.msel_opts)}b.caption&&g.attr("title",b.caption);b.classname&&(g.addClass(b.classname),r.addClass(b.classname));b.width&&(a(">div",g).css({width:b.width,margin:"0 auto"}),r.css("width",b.width));b.height&&(a(">div",g).css("height",b.height),r.css("height",b.height-10));r.empty();var A=null!=c.groupHeader?
c.groupHeader.groupHeaders:0,x={},B,y,q,w;if(A)for(B=0;B<A.length;B++)for(w=A[B],y=0;y<w.numberOfColumns;y++)q=c.iColByName[w.startColumnName]+y,x[q]=a.isFunction(b.buildItemText)?b.buildItemText.call(e[0],{iCol:q,cm:p[q],cmName:p[q].name,colName:u[q],groupTitleText:w.titleText}):a.jgrid.stripHtml(w.titleText)+": "+a.jgrid.stripHtml(""===u[q]?p[q].name:u[q]);for(q=0;q<l;q++)void 0===x[q]&&(x[q]=a.isFunction(b.buildItemText)?b.buildItemText.call(e[0],{iCol:q,cm:p[q],cmName:p[q].name,colName:u[q],groupTitleText:null}):
a.jgrid.stripHtml(u[q]));a.each(p,function(a){this.hidedlg||r.append("<option value='"+a+"'"+(c.headertitles||this.headerTitle?" title='"+k.stripHtml("string"===typeof this.headerTitle?this.headerTitle:x[a])+"'":"")+(this.hidden?"":" selected='selected'")+">"+x[a]+"</option>")});l=a.isFunction(b.dlog_opts)?b.dlog_opts.call(e,b):b.dlog_opts;h(b.dlog,g,l);l=a.isFunction(b.msel_opts)?b.msel_opts.call(e,b):b.msel_opts;h(b.msel,r,l);l=a("#colchooser_"+n(c.id));l.css({margin:"auto"});l.find(">div").css({width:"100%",
height:"100%",margin:"auto"});if(f=t(r)){f.grid=d;null!=c.groupHeader&&(f.gh=a.extend(!0,[],c.groupHeader.groupHeaders));f.newColOrder=a.map(p,function(a){return a.name});f.container.css({width:"100%",height:"100%",margin:"auto"});f.selectedContainer.css({width:100*f.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"});f.availableContainer.css({width:100-100*f.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"});f.selectedList.css("height","auto");
f.availableList.css("height","auto");l=Math.max(f.selectedList.height(),f.availableList.height());l=Math.min(l,a(window).height());f.selectedList.css("height",l);f.availableList.css("height",l);if(null!=f.options&&f.options.sortable)f.selectedList.on("sortupdate",function(c,g){A&&v.call(f,parseInt(g.item.data("optionLink").val(),10));g.item.css({width:"",height:""});a.isFunction(b.sortUpdate)&&b.sortUpdate.call(d,c,g)});a.isFunction(b.init)&&b.init.call(d,f)}}},sortableRows:function(b){return this.each(function(){var h=
this,e=h.grid,d=h.p;e&&!d.treeGrid&&a.fn.sortable&&(b=a.extend({cursor:"move",axis:"y",items:">tbody>.jqgrow"},b||{}),b.start&&a.isFunction(b.start)?(b._start_=b.start,delete b.start):b._start_=!1,b.update&&a.isFunction(b.update)?(b._update_=b.update,delete b.update):b._update_=!1,b.start=function(c,g){a(g.item).css("border-width","0");a("td",g.item).each(function(a){this.style.width=e.cols[a].style.width});if(d.subGrid){var r=a(g.item).attr("id");try{a(h).jqGrid("collapseSubGridRow",r)}catch(l){}}b._start_&&
b._start_.apply(this,[c,g])},b.update=function(c,g){a(g.item).css("border-width","");!0===d.rownumbers&&a("td.jqgrid-rownum",h.rows).each(function(b){a(this).html(b+1+(parseInt(d.page,10)-1)*parseInt(d.rowNum,10))});b._update_&&b._update_.apply(this,[c,g])},a(h).sortable(b))})},gridDnD:function(b){return this.each(function(){function h(){var b=a.data(e,"dnd");a("tr.jqgrow:not(.ui-draggable)",e).draggable(a.isFunction(b.drag)?b.drag.call(a(e),b):b.drag)}var e=this,d,c;if(e.grid&&!e.p.treeGrid&&a.fn.draggable&&
a.fn.droppable)if(void 0===a("#jqgrid_dnd")[0]&&a("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>"),"string"===typeof b&&"updateDnD"===b&&!0===e.p.jqgdnd)h();else if(b=a.extend({drag:function(b){return a.extend({start:function(c,d){var f;if(e.p.subGrid){f=a(d.helper).attr("id");try{a(e).jqGrid("collapseSubGridRow",f)}catch(p){}}for(f=0;f<a.data(e,"dnd").connectWith.length;f++)0===a(a.data(e,"dnd").connectWith[f]).jqGrid("getGridParam","reccount")&&a(a.data(e,"dnd").connectWith[f]).jqGrid("addRowData",
"jqg_empty_row",{});d.helper.addClass("ui-state-highlight");a("td",d.helper).each(function(a){this.style.width=e.grid.headers[a].width+"px"});b.onstart&&a.isFunction(b.onstart)&&b.onstart.call(a(e),c,d)},stop:function(c,d){var f;d.helper.dropped&&!b.dragcopy&&(f=a(d.helper).attr("id"),void 0===f&&(f=a(this).attr("id")),a(e).jqGrid("delRowData",f));for(f=0;f<a.data(e,"dnd").connectWith.length;f++)a(a.data(e,"dnd").connectWith[f]).jqGrid("delRowData","jqg_empty_row");b.onstop&&a.isFunction(b.onstop)&&
b.onstop.call(a(e),c,d)}},b.drag_opts||{})},drop:function(b){return a.extend({accept:function(b){if(!a(b).hasClass("jqgrow"))return b;b=a(b).closest("table.ui-jqgrid-btable");return 0<b.length&&void 0!==a.data(b[0],"dnd")?(b=a.data(b[0],"dnd").connectWith,-1!==a.inArray("#"+n(this.id),b)?!0:!1):!1},drop:function(c,d){if(a(d.draggable).hasClass("jqgrow")){var f=a(d.draggable).attr("id"),f=d.draggable.parent().parent().jqGrid("getRowData",f);if(!b.dropbyname){var g=0,l={},h,k,r=a("#"+n(this.id)).jqGrid("getGridParam",
"colModel");try{for(k in f)f.hasOwnProperty(k)&&(h=r[g].name,"cb"!==h&&"rn"!==h&&"subgrid"!==h&&f.hasOwnProperty(k)&&r[g]&&(l[h]=f[k]),g++);f=l}catch(y){}}d.helper.dropped=!0;b.beforedrop&&a.isFunction(b.beforedrop)&&(h=b.beforedrop.call(this,c,d,f,a("#"+n(e.p.id)),a(this)),void 0!==h&&null!==h&&"object"===typeof h&&(f=h));if(d.helper.dropped){var m;b.autoid&&(a.isFunction(b.autoid)?m=b.autoid.call(this,f):(m=Math.ceil(1E3*Math.random()),m=b.autoidprefix+m));a("#"+n(this.id)).jqGrid("addRowData",
m,f,b.droppos);f[e.p.localReader.id]=m}b.ondrop&&a.isFunction(b.ondrop)&&b.ondrop.call(this,c,d,f)}}},b.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5E3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},b||{}),b.connectWith)for(b.connectWith=b.connectWith.split(","),b.connectWith=a.map(b.connectWith,function(b){return a.trim(b)}),a.data(e,"dnd",b),0===
e.p.reccount||e.p.jqgdnd||h(),e.p.jqgdnd=!0,d=0;d<b.connectWith.length;d++)c=b.connectWith[d],a(c).droppable(a.isFunction(b.drop)?b.drop.call(a(e),b):b.drop)})},gridResize:function(b){return this.each(function(){var h=this,e=h.grid,d=h.p,c=d.gView+">.ui-jqgrid-bdiv",g=!1,k,l=d.height;if(e&&a.fn.resizable){b=a.extend({},b||{});b.alsoResize?(b._alsoResize_=b.alsoResize,delete b.alsoResize):b._alsoResize_=!1;b.stop&&a.isFunction(b.stop)?(b._stop_=b.stop,delete b.stop):b._stop_=!1;b.stop=function(f,m){a(h).jqGrid("setGridWidth",
m.size.width,b.shrinkToFit);a(d.gView+">.ui-jqgrid-titlebar").css("width","");g?(a(k).each(function(){a(this).css("height","")}),"auto"!==l&&"100%"!==l||a(e.bDiv).css("height",l)):a(h).jqGrid("setGridParam",{height:a(c).height()});h.fixScrollOffsetAndhBoxPadding&&h.fixScrollOffsetAndhBoxPadding();b._stop_&&b._stop_.call(h,f,m)};k=c;"auto"!==l&&"100%"!==l||void 0!==b.handles||(b.handles="e,w");if(b.handles){var f=a.map(String(b.handles).split(","),function(b){return a.trim(b)});2===f.length&&("e"===
f[0]&&"w"===f[1]||"e"===f[1]&&"w"===f[1])&&(k=d.gView+">div:not(.frozen-div)",g=!0,d.pager&&(k+=","+d.pager))}b.alsoResize=b._alsoResize_?k+","+b._alsoResize_:k;delete b._alsoResize_;a(d.gBox).resizable(b)}})}})});
//# sourceMappingURL=grid.jqueryui.map