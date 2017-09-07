/**
 * Created by yuhao on 2017/9/7.
 */
var font_familyList=["宋体","SimSun","黑体","SimHei","微软雅黑","Microsoft YaHei",
    "微软正黑体","Microsoft JhengHei","新宋体","NSimSun",
    "新细明体","PMingLiU","细明体","MingLiU","标楷体","DFKai-SB","仿宋","FangSong",
    "楷体","KaiTi","仿宋_GB2312","FangSong_GB2312","楷体_GB2312","KaiTi_GB2312",
    "华文细黑","STHeiti Light [STXihei]","华文黑体","STHeiti","华文楷体","STKaiti",
    "华文宋体","STSong","华文仿宋","STFangsong","儷黑 Pro","LiHei Pro Medium",
    "儷宋 Pro","LiSong Pro Light","標楷體","BiauKai","蘋果儷中黑","Apple LiGothic Medium",
    "蘋果儷細宋","Apple LiSung Light","新細明體","PMingLiU","細明體","MingLiU",
    "標楷體","DFKai-SB","隶书","LiSu","幼圆","YouYuan","华文细黑","STXihei","华文楷体","STKaiti",
    "华文宋体","STSong","华文中宋","STZhongsong","华文仿宋","STFangsong","方正舒体","FZShuTi",
    "方正姚体","FZYaoti","华文彩云","STCaiyun","华文琥珀","STHupo","华文隶书","STLiti",
    "华文行楷","STXingkai","华文新魏","STXinwei"
]

var font_Type=0;
//进行初始赋值
var chineseFontName=[];
var htmlFontName=[];
for(var i=0;i<font_familyList.length;i++){
    if((i%2)==0){
        chineseFontName.push(font_familyList[i]);
    }
    else{
        htmlFontName.push(font_familyList[i]);
    }
    font_Type=(i/2);
}

/*
function testData(){
    var text=document.getElementById("testChineseDiv");
    var text2=document.getElementById("testEnglishDiv");
    text.innerHTML=chineseFontName;
    text2.innerHTML=htmlFontName;
}*/
/*
var text=document.getElementById("testText");
text.addEventListener("onchange",font_Show(text));
*/
function initTable(){
    var tablebody=document.getElementsByTagName("tbody")[0];
    for(var i=0;i<font_Type;i++){//通过循环来增加框
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        var td3=document.createElement("td");
        td3.setAttribute("id","show_td"+i);
        td1.style.fontFamily=htmlFontName[i];
        td1.innerHTML=chineseFontName[i];
        td2.innerHTML=htmlFontName[i];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
       //tablebody.appendChild(tr);
        tablebody.appendChild(tr);
    }
}

function font_Show(){
    var text=document.getElementById("testText").value;
    //alert(text);
    for(var i=0;i<font_Type;i++){
        var textTd=document.getElementById("show_td"+i);
        //document.getElementById("show_td"+i).innerHTML=text;
        textTd.innerHTML=text;//将输入框文本改动引入框中
        textTd.style.fontFamily=htmlFontName[i];//设置文本的字体
    }
}


