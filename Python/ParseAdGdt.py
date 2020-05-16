from bs4 import BeautifulSoup

from urllib.request import urlopen 
import json 
 
import ssl
# 跳过ssl证书
ssl._create_default_https_context = ssl._create_unverified_context
 

class ParseAdGdt():
    title =""
    author =""
    listSort = [] 
    
    def LoadJson(self,filepath):  
        data = None
        with open(filepath) as json_file:
            data = json.load(json_file)
            return data
 

    def GetHtml(self,url):
        # return  urlopen(url).read().decode('utf-8')
        return open(url, 'r', encoding='utf-8')


    def GetAdId(self,tr,key):
        adid = None
        array_div = tr.find_all("div",class_="inner") 
        for div in array_div:
            if div.get_text()==key:
                span = tr.find("span",class_="field-value") 
                adid = span.get_text()


        return adid

     
    def ParseAd(self,url,json):
        # url = WEB_HOME_URL
        html = self.GetHtml(url)
    # 本质上是一个tag类型,生成一个tag实例对象，调用tag的方法
        soup = BeautifulSoup(html, "lxml")
        ad_table = soup.find("table",class_="table media-table js-media-details")
        if ad_table is None:
            return

        div = soup.find("div",class_="media media-info-general") 
        h4 = div.find("span",class_="text")
        strAppName = h4.get_text()
        print(strAppName)

        span = div.find("span",class_="field-value")
        strAppId = span.get_text()
        print(strAppId)
 
        strAdIdSplash = None
        strAdIdInsert = None
        strAdIdBanner = None
        strAdIdVideo = None
        strAdIdNative = None

        array_tr = ad_table.find_all('tr')
        for tr in array_tr:
            # 横幅
            if strAdIdBanner is None:
                strAdIdBanner = self.GetAdId(tr, "Banner2.0")

            # 插屏
            if strAdIdInsert is None:
                strAdIdInsert = self.GetAdId(tr, "插屏2.0")

            # 激励视频
            if strAdIdVideo is None:
                strAdIdVideo = self.GetAdId(tr, "激励视频")
            # 原生
            if strAdIdNative is None:
                strAdIdNative = self.GetAdId(tr, "原生")

            # 开屏
            if strAdIdSplash is None:
                strAdIdSplash = self.GetAdId(tr, "开屏")
        

        if strAdIdNative is None:
            strAdIdNative ="0"

        if strAdIdSplash is None:
            strAdIdSplash ="0"

        if strAdIdVideo is None:
            strAdIdVideo ="0"

        if strAdIdBanner is None:
            strAdIdBanner ="0"


        if strAdIdInsert is None:
            strAdIdInsert ="0"


        print("Banner:",strAdIdBanner)
        print("插屏:",strAdIdInsert)
        print("激励视频:",strAdIdVideo)
        print("原生:",strAdIdNative)
        print("开屏:",strAdIdSplash)  
            
        dictad = dict (source="gdt",appname= strAppName,appid= strAppId,key_splash= strAdIdSplash,key_splash_insert= strAdIdInsert,key_insert= strAdIdInsert,key_native= strAdIdNative,key_video= strAdIdVideo,key_banner= strAdIdBanner)

        jsonroot = dict (List=dictad)
        self.SaveJson(json,jsonroot)
 
  
 
    def SaveJson(self,filePath,dataRoot):  
        # 保存json
        with open(filePath, 'w') as f:
            json.dump(dataRoot, f, ensure_ascii=False,indent=4,sort_keys = False)

    
 
parse = ParseAdGdt()
parse.ParseAd("gdt.html","gdt.json")
parse.ParseAd("gdt_hd.html","gdt_hd.json")



     

