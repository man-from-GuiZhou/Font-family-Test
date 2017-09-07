/**
 * Created by yuhao on 2017/9/7.
 */
var font_familyList=["����","SimSun","����","SimHei","΢���ź�","Microsoft YaHei",
    "΢��������","Microsoft JhengHei","������","NSimSun",
    "��ϸ����","PMingLiU","ϸ����","MingLiU","�꿬��","DFKai-SB","����","FangSong",
    "����","KaiTi","����_GB2312","FangSong_GB2312","����_GB2312","KaiTi_GB2312",
    "����ϸ��","STHeiti Light [STXihei]","���ĺ���","STHeiti","���Ŀ���","STKaiti",
    "��������","STSong","���ķ���","STFangsong","���� Pro","LiHei Pro Medium",
    "���� Pro","LiSong Pro Light","�˿��w","BiauKai","�O�����к�","Apple LiGothic Medium",
    "�O��������","Apple LiSung Light","�¼����w","PMingLiU","�����w","MingLiU",
    "�˿��w","DFKai-SB","����","LiSu","��Բ","YouYuan","����ϸ��","STXihei","���Ŀ���","STKaiti",
    "��������","STSong","��������","STZhongsong","���ķ���","STFangsong","��������","FZShuTi",
    "����Ҧ��","FZYaoti","���Ĳ���","STCaiyun","��������","STHupo","��������","STLiti",
    "�����п�","STXingkai","������κ","STXinwei"
]

var font_Type=0;
//���г�ʼ��ֵ
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
    for(var i=0;i<font_Type;i++){//ͨ��ѭ�������ӿ�
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
        textTd.innerHTML=text;//��������ı��Ķ��������
        textTd.style.fontFamily=htmlFontName[i];//�����ı�������
    }
}


