<?php
    header("Content-type: text/html; charset=utf-8"); 
    
    include('./simple_html_dom.php');
    
    function get_html($url)
{ 
    $html = new simple_html_dom();  
  
    // // 从url中加载  
    // $html->load_file('http://www.jb51.net');  
      
    // // 从字符串中加载  
    // $html->load('<html><body>从字符串中加载html文档演示</body></html>');  
      
    //从文件中加载  
    $html->load_file($url);  

    return $html;
}

   function getAdId($array_div,$tr,$key)
    {
        $adid;
        $array_div = $tr->find('div[class=inner]');
        foreach($array_div as $div_tmp){
            if($div_tmp->innertext==$key){ 
                $span=$tr->find('span[class=field-value]',0);
                $adid = $span->innertext;     
            }
        }
        return $adid;
    }
    function parserAd($url,$save_file)
    {
         // get DOM from URL or file
         $html = get_html($url);
         if(!$html){
             echo "open html fail";
             return;
         }
        //<table class="table media-table js-media-details">
        $ad_table = $html->find('table[class=table media-table js-media-details]',0);
        if(!$ad_table){
            echo "find ad_table fail";
            return;
        }
        //<div class="media-body">
        $div = $html->find('div[class=media media-info-general]',0); 
        //tbody/tr
 
        $strAppId;
        $strAppName;
        $strAppPackage; 
        //<h4 class="media-heading" title="儿童涂色动物园ios"
        $h4 = $div->find('span[class=text]',0);
        $strAppName = $h4->innertext;
        //<span class="field-value">1106701789</span>
        $span = $div->find('span[class=field-value]',0);
        $strAppId = $span->innertext; 
        
        
        echo $strAppId;
        echo "\n";
        echo $strAppName;
        echo "\n";
        echo $strAppPackage;
        echo "\n\n";
        
        $strAdIdSplash;
        $strAdIdInsert;
        $strAdIdBanner;
        //解析广告位
        
        
        $isFindSplash = false;
        $isFindInsert = false;
        $isFindBanner= false;
        //tbody/tr
        $array_tr = $ad_table->find('tbody/tr');
        foreach($array_tr as $tr){
            
            {
                //原生

                if(!$strAdIdNative){
                    $adid = getAdId(array_div,$tr,"原生"); 
                    if($adid){
                        $strAdIdNative = $adid;
                        echo "native ad id: \n"; 
                        echo $adid;
                        echo "\n"; 
                    }
                    
                }

                //开屏
                if(!$strAdIdSplash){
                    $adid = getAdId(array_div,$tr,"开屏"); 
                    if($adid){
                        $strAdIdSplash = $adid;
                        echo "splash ad id: \n"; 
                        echo $adid;
                        echo "\n"; 
                    }
                    
                }

                 
                
                //插屏 
 
                if(!$strAdIdInsert){
                    $adid = getAdId(array_div,$tr,"插屏"); 
                    if($adid){
                        $strAdIdInsert = $adid;
                        echo "insert ad id: \n"; 
                        echo $adid;
                        echo "\n"; 
                    }
                    
                }

                
                //横幅

                if(!$strAdIdBanner){
                    $adid = getAdId(array_div,$tr,"Banner"); 
                    if($adid){
                        $strAdIdBanner = $adid;
                        echo "banner ad id: \n"; 
                        echo $adid;
                        echo "\n"; 
                    }
                    
                } 
                
            }
            
            
        }
        
        $adid_default = "0";
        if(!$strAdIdNative){
            $strAdIdNative = $adid_default;
        }
        if(!$strAdIdSplash){
            $strAdIdSplash = $adid_default;
        }
        if(!$strAdIdInsert){
            $strAdIdInsert = $adid_default;
        }
        if(!$strAdIdBanner){
            $strAdIdBanner = $adid_default;
        }

        $list = array(); 
        $element = array 
        (     
         'source'=>urlencode("gdt"),  
         'appname'=>urlencode($strAppName), 
         'appid'=>urlencode($strAppId),
         'key_splash'=>urlencode($strAdIdSplash),
         'key_splash_insert'=>urlencode($strAdIdInsert),
         'key_insert'=>urlencode($strAdIdInsert),
         'key_native'=>urlencode($strAdIdNative),
         'key_banner'=>urlencode($strAdIdBanner)
         ); 
        array_push( $list,$element);
        
        $arr = array('List'=>$list);
        $jsn = urldecode(json_encode($arr));

        $fp = fopen($save_file, "w");
        if(!$fp){
            echo "打开文件失败<br>";
            return;
        }
        $flag=fwrite($fp,$jsn); 
        if(!$flag) 
        { 
            echo "写入文件失败<br>"; 
            
        } 
        fclose($fp);
    }
     
    
    
     parserAd('../gdt.htm',"../gdt.json"); 
    echo 'done<br>';
    ?>
