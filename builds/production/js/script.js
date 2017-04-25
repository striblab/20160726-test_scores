!function t(e,r,o){function a(i,s){if(!r[i]){if(!e[i]){var l="function"==typeof require&&require;if(!s&&l)return l(i,!0);if(c)return c(i,!0);throw new Error("Cannot find module '"+i+"'")}var n=r[i]={exports:{}};e[i][0].call(n.exports,function(t){var r=e[i][1][t];return a(r||t)},n,n.exports,t,e,r,o)}return r[i].exports}for(var c="function"==typeof require&&require,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(t,e,r){function o(t){this.dd=t,this.placeholder=this.dd.children("span"),this.opts=this.dd.find("ul.dropdown > li"),this.val="",this.index=-1,this.initEvents()}d3.csv("./data/scores.csv",function(t){return{id:t.SchoolID,district:t.districtname_new,school:t.SCHOOLNAME_NEW,type:t.Grades,metro:t.Metro7county,region:t.Location,location:t.SchoolLocationCountyName,county:t.SchoolLocationCountyName,year:String(t.dataYear),subject:t.subject,profpct:+t.PctProf,freelunch:+t.FreeLunch,povertypct:+t.PctPoverty,povertycat:t.PovertyCategory,minoritypct:+t.PctMinority,predicted:+t.Predicted,residual:+t.Residual,category:t.CategoryName,enrollment:t.K12Enr}},function(t,e){function r(t,e){var r=0,o=0,a=0,c=0;if(1==e)for(var i=0;i<d.length;i++)"M"==d[i].subject&&"15 to 16"==d[i].year&&(r++,"About as expected"==d[i].category&&a++,"Falling short"==d[i].category&&o++,"Better than expected"==d[i].category&&c++);else for(var i=0;i<d.length;i++)d[i].district==t&&"M"==d[i].subject&&"15 to 16"==d[i].year&&(r++,"About as expected"==d[i].category&&a++,"Falling short"==d[i].category&&o++,"Better than expected"==d[i].category&&c++);$("#failM").html(d3.format("%")(o/r)),$("#metM").html(d3.format("%")(a/r)),$("#betterM").html(d3.format("%")(c/r))}function o(t,e){var r=0,o=0,a=0,c=0;if(1==e)for(var i=0;i<d.length;i++)"R"==d[i].subject&&"15 to 16"==d[i].year&&(r++,"About as expected"==d[i].category&&a++,"Falling short"==d[i].category&&o++,"Better than expected"==d[i].category&&c++);else for(var i=0;i<d.length;i++)d[i].district==t&&"R"==d[i].subject&&"15 to 16"==d[i].year&&(r++,"About as expected"==d[i].category&&a++,"Falling short"==d[i].category&&o++,"Better than expected"==d[i].category&&c++);$("#failR").html(d3.format("%")(o/r)),$("#metR").html(d3.format("%")(a/r)),$("#betterR").html(d3.format("%")(c/r))}function a(t,e){var r=[];console.log(e),r[0]="x";var o=1,a=[],c=[];a[0]="Reading",c[0]="Math",dataRP=0,dataMP=0;for(var i=!1,s=0;s<d.length;s++)t==d[s].school&&e==d[s].district&&(i=!0,"R"==d[s].subject&&(a[o]=d[s].profpct,r[o]=d[s].year,o++,dataRP=d[s].predicted));o=1;for(var s=0;s<d.length;s++)t==d[s].school&&e==d[s].district&&(i=!0,"M"==d[s].subject&&(c[o]=d[s].profpct,r[o]=d[s].year,o++,dataMP=d[s].predicted));if(1==i){var l={top:20,right:60,bottom:20,left:70};c3.generate({bindto:"#chart",padding:l,data:{x:"x",columns:[r,a,c],type:"line"},color:{pattern:["#51373E","#E3B5A4"]},axis:{y:{max:1,min:0,padding:{bottom:0,top:0},tick:{count:4,format:d3.format("%")}},x:{type:"category",categories:["'12 to '13","'13 to '14","'14 to '15","'15 to '16"],tick:{count:4,multiline:!1}}},grid:{y:{lines:[]}}})}}var c,i,s,l,n,d=e,y="",h="All";d3.select("#schoolsList").selectAll(".switch").data(d.filter(function(t){return"15 to 16"==t.year&&"R"==t.subject})).enter().append("div").attr("class",function(t){return"switch"}).attr("categoryr",function(t){return"About as expected"==t.category?"expected":"Better than expected"==t.category?"better":"Falling short"==t.category&&"worse",t.category}).attr("categorym",function(t){for(var e,r=0;r<d.length;r++)d[r].school==t.school&&d[r].district==t.district&&"M"==d[r].subject&&"15 to 16"==d[r].year&&(e=d[r].category);return e}).attr("district",function(t){return t.district}).attr("id",function(t){return"s"+t.id}).attr("latitude",function(t){return t.latitude}).attr("longitude",function(t){return t.longitude}).on("click",function(t){$("#minority").removeClass("gray5"),$("#minority").removeClass("gray4"),$("#minority").removeClass("gray3"),$("#minority").removeClass("gray2"),$("#minority").removeClass("gray1"),$("#poverty,#freelunch").removeClass("gray5"),$("#poverty,#freelunch").removeClass("gray4"),$("#poverty,#freelunch").removeClass("gray3"),$("#poverty,#freelunch").removeClass("gray2"),$("#poverty,#freelunch").removeClass("gray1"),$("#categoryR,#categoryM").removeClass("better"),$("#categoryR,#categoryM").removeClass("worse"),$("#categoryR,#categoryM").removeClass("expected"),$("#categoryR,#categoryM").removeClass("nan"),a(t.school,t.district);for(var e=0;e<d.length;e++)d[e].school==t.school&&d[e].district==t.district&&"M"==d[e].subject&&"15 to 16"==d[e].year&&($("#categoryM").html(d[e].category),$("#categoryR").html(t.category),$("#mPCT").html(d3.format("%")(d[e].profpct)+" proficiency"),$("#rPCT").html(d3.format("%")(t.profpct)+" proficiency"),$("#mPCTP").html(d3.format("%")(d[e].predicted)+" predicted"),$("#rPCTP").html(d3.format("%")(t.predicted)+" predicted"),"About as expected"==d[e].category&&(n="expected"),"Falling short"==d[e].category&&(n="worse"),"Better than expected"==d[e].category&&(n="better"),"Not enough students tested"==d[e].category&&(n="nan"));var r=t.freelunch/t.enrollment;r>=.7?s="gray5":r>=.5?s="gray4":r>=.4?s="gray3":r>=.2?s="gray2":r>=0&&(s="gray1"),t.minoritypct>=.7?i="gray5":t.minoritypct>=.5?i="gray4":t.minoritypct>=.4?i="gray3":t.minoritypct>=.2?i="gray2":t.minoritypct>=0&&(i="gray1"),t.povertypct>=.7?c="gray5":t.povertypct>=.5?c="gray4":t.povertypct>=.4?c="gray3":t.povertypct>=.2?c="gray2":t.povertypct>=0&&(c="gray1"),"About as expected"==t.category&&(l="expected"),"Falling short"==t.category&&(l="worse"),"Better than expected"==t.category&&(l="better"),"Not enough students tested"==t.category&&(l="nan"),$("#schoolname").html(t.school),$("#district").html(t.district),$("#enrolled").html(d3.format(",")(t.enrollment)),$("#type").html(t.type),$("#location").html(" ("+t.location+")"),$("#category").html(t.category),$("#freelunch").html(d3.format("%")(r)),$("#poverty").html(d3.format("%")(t.povertypct)),$("#minority").html(d3.format("%")(t.minoritypct)),$("#freelunch").addClass(s),$("#minority").addClass(i),$("#poverty").addClass(c),$("#categoryR").addClass(l),$("#categoryM").addClass(n)}).html(function(t){return y!=t.district&&(y=t.district,$("#listedSchools").append("<li class='district'>"+y+"</li>")),t.school}),$("#districtSelect").click(function(){$("#listedSchools").slideToggle()}),$("li.district").click(function(){$("li.district").removeClass("selected"),$(".cell").removeClass("selected2"),$(this).addClass("selected"),$("#listedSchools").slideToggle(),$("#thisDistrict").html($(this).text()),$(".switch").hide(),$(".switch[district='"+$(this).text()+"']").show(),r($(this).text(),!1),o($(this).text(),!1),h=$(this).text()}),$(".cell").click(function(){$(".cell").removeClass("selected2"),$(this).addClass("selected2"),$(".switch").hide(),"All"==h?"R"==$(this).attr("type")?$(".switch[categoryr='"+$(this).attr("data")+"']").show():"M"==$(this).attr("type")&&$(".switch[categorym='"+$(this).attr("data")+"']").show():"R"==$(this).attr("type")?$(".switch[categoryr='"+$(this).attr("data")+"'][district='"+h+"']").show():"M"==$(this).attr("type")&&$(".switch[categorym='"+$(this).attr("data")+"'][district='"+h+"']").show()}),$("#filter_box").keyup(function(t){$(".switch").hide();var e=$("#filter_box").val();$(".switch").each(function(){$(this).text().toUpperCase().indexOf(e.toUpperCase())!=-1&&$(this).show()})}),$("#filter2 input").keyup(function(t){$(".district").hide();var e=$("#filter2 input").val();$(".district").each(function(){$(this).text().toUpperCase().indexOf(e.toUpperCase())!=-1&&$(this).show()})}),$(".switch").click(function(){$(".switch").removeClass("selected"),$(this).addClass("selected"),$("#instructions").hide(),$("#infobox,#chart,#chartLabel").show()}),$("#infobox,#chart,#chartLabel").hide(),$("#instructions").show(),$("#schoolname").html(d[4].school),$("#district").html(d[4].district),$("#enrolled").html(d[4].enrollment),$("#freelunch").html(d3.format("%")(d[4].freelunch/d[4].enrollment)),$("#type").html(d[4].type),$("#location").html(" ("+d[4].location+")"),$("#categoryR").html(d[4].category),$("#categoryM").html(d[5].category),$("#poverty").html(d3.format("%")(d[4].povertypct)),$("#povertycat").html(d[4].povertycat),$("#minority").html(d3.format("%")(d[4].minoritypct)),$("#minority").addClass("gray1"),$("#poverty").addClass("gray3"),$("#freelunch").addClass("gray3"),$("#categoryR,#categoryM").addClass("better"),$("#mPCT").html(d3.format("%")(d[4].profpct)+" proficiency"),$("#rPCT").html(d3.format("%")(d[5].profpct)+" proficiency"),$("#mPCTP").html(d3.format("%")(d[4].predicted)+" predicted"),$("#rPCTP").html(d3.format("%")(d[5].predicted)+" predicted"),r("",!0),o("",!0),$(".zoom").click(function(){return h="All",$("#infobox,#chart,#chartLabel").hide(),$("#instructions").show(),$(".switch, li.district").removeClass("selected"),$(".switch").show(),$("li.district").show(),$("#listedSchools").hide(),$("#thisDistrict").html("All"),$("#schoolsList").animate({scrollTop:0},800),$("#listedSchools").animate({scrollTop:0},800),$("#filter input, #filter2 input").val(""),$("#enrolled").html(d[4].enrollment),$("#minority").removeClass("gray5"),$("#minority").removeClass("gray4"),$("#minority").removeClass("gray3"),$("#minority").removeClass("gray2"),$("#minority").removeClass("gray1"),$("#poverty,#freelunch").removeClass("gray5"),$("#poverty,#freelunch").removeClass("gray4"),$("#poverty,#freelunch").removeClass("gray3"),$("#poverty,#freelunch").removeClass("gray2"),$("#poverty,#freelunch").removeClass("gray1"),$("#categoryR,#categoryM").removeClass("better"),$("#categoryR,#categoryM").removeClass("worse"),$("#categoryR,#categoryM").removeClass("expected"),$("#categoryR,#categoryM").removeClass("nan"),$("#mPCT").html("75% math proficiency"),$("#rPCT").html("65% reading proficiency"),$("#mPCTP").html("57% predicted"),$("#rPCTP").html("54% predicted"),$("#categoryR").html(d[4].category),$("#categoryM").html(d[5].category),$("#schoolname").html(d[4].school),$("#district").html(d[4].district),$("#type").html(d[4].type),$("#location").html(" ("+d[0].location+")"),$("#category").html(d[4].category),$("#poverty").html(d3.format("%")(d[4].povertypct)),$("#povertycat").html(d[4].povertycat),$("#minority").html(d3.format("%")(d[4].minoritypct)),$("#minority").addClass("gray1"),$("#freelunch").addClass("gray3"),$("#poverty").addClass("gray3"),r("",!0),o("",!0),$("#categoryR,#categoryM").addClass("better"),$(".cell").removeClass("selected2"),a("A.C.G.C. SECONDARY"),!1}),a("A.C.G.C. SECONDARY"),$(".switch").first().addClass("selected")}),o.prototype={initEvents:function(){var t=this;t.dd.on("click",function(t){return $(this).toggleClass("active"),!1}),t.opts.on("click",function(){var e=$(this);t.val=e.text(),t.index=e.index(),t.placeholder.text(t.val)})},getValue:function(){return this.val},getIndex:function(){return this.index}},$(function(){new o($("#dd")),new o($("#ddY"));$(document).click(function(){$(".wrapper-dropdown-1").removeClass("active")})})},{}]},{},[1]);