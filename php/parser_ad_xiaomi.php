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
    
    function parserHomeList($url,$save_file)
    {
        echo "parserHomeList\n";
        // return;
        
        // get DOM from URL or file
        // $html = file_get_html($url);
        $html = get_html($url);
       

        if(!$html){
            echo "open html fail";
        } 
        /*
         <tr role="row" class="odd"><td>2882303761517687402</td><td>com.moonma.pintufruit.pad</td><td>宝宝水果拼图HD</td>
         */
        // 查找第0个
        $tr = $html->find('tr[class=odd]',0);
         
        $count = count($tr);
        echo "find tr count=";
        echo $count;
        echo "\n";
        printf("tr count=%d",$count);
        
        if(!$tr){
            echo "找不到tr<br>";
            return;
        }
        $fp = fopen($save_file, "w");
        if(!$fp){
            echo "打开文件失败<br>";
            return;
        }
        
        
        $index = 0;
        $strAppId;
        $strAppName;
        $strAppPackage;
        foreach($tr->find('td') as $td){
            echo $index;
            echo ":\n";
            echo $td->innertext;
            echo "\n";
            if($index==0){
                $strAppId = $td->innertext;
            }
            if($index==1){
                $strAppPackage = $td->innertext;
            }
            if($index==2){
                $strAppName = $td->innertext;
            }
            
            
            $index++;
        }
        
        
        echo $strAppId;
        echo "\n";
        echo $strAppPackage;
        echo "\n";
        echo $strAppName;
        echo "\n";
        
        $strAdIdSplash;
        $strAdIdInsert;
        $strAdIdBanner;
        $strAdIdVideo;
        //解析广告位
        /*
         <td>插屏</td><td>1eda97e03d7f1c1b1c2f24e490fe725f</td>
         */
        $array_td = $html->find('td');
        $isFindSplash = false;
        $isFindInsert = false;
        $isFindBanner= false;
        $isFindVideo= false;

        foreach($array_td as $td){
            
            {
                if($td->innertext=="开屏"){
                    echo "find splash ad \n";
                    $isFindSplash = true;
                    continue;
                }
                if($isFindSplash == true){
                    $isFindSplash = false;
                    echo "splash ad id: \n";
                    $strAdIdSplash = $td->innertext;
                    echo $strAdIdSplash;
                    echo "\n";
                }
            }
            
            
            {
                if($td->innertext=="插屏"){
                    echo "find insert ad \n";
                    $isFindInsert = true;
                    continue;
                }
                if($isFindInsert == true){
                    $isFindInsert = false;
                    echo "insert ad id: \n";
                    $strAdIdInsert = $td->innertext;
                    echo $strAdIdInsert;
                    echo "\n";
                }
            }
            
            {
                if(($td->innertext=="横幅")&&(!$strAdIdBanner)){
                    echo "find banner ad \n";
                    $isFindBanner = true;
                    continue;
                }
                if($isFindBanner == true){
                    $isFindBanner = false;
                    echo "banner ad id: \n";
                    $strAdIdBanner = $td->innertext;
                    echo $strAdIdBanner;
                    echo "\n";
                }


                
            }
            
            //video 
            {
                if(($td->innertext=="视频")&&(!$strAdIdVideo)){
                    echo "find video ad \n";
                    $isFindVideo = true;
                    continue;
                }
                if($isFindVideo == true){
                    $isFindVideo = false;
                    echo "video ad id: \n";
                    $strAdIdVideo = $td->innertext;
                    echo $strAdIdVideo;
                    echo "\n";
                } 
            }
            
            
            
        }
        
        if(!$strAdIdSplash){
            $strAdIdSplash ="0";
        }
        if(!$strAdIdVideo){
            $strAdIdVideo ="0";
        }
        
        $list = array(); 
        $element = array
        (
         'source'=>urlencode("xiaomi"),
         'appname'=>urlencode($strAppName),
         'appid'=>urlencode($strAppId),
         'appkey'=>urlencode("0"), 
         'key_splash'=>urlencode($strAdIdSplash),
         'key_splash_insert'=>urlencode($strAdIdInsert),
         'key_insert'=>urlencode($strAdIdInsert),
         'key_banner'=>urlencode($strAdIdBanner),
         'key_video'=>urlencode($strAdIdVideo)
         );
        array_push( $list,$element);
        
        $arr = array('List'=>$list);
        $jsn = urldecode(json_encode($arr));
        $flag=fwrite($fp,$jsn);
        if(!$flag)
        {
            echo "写入文件失败<br>"; 
        }
        fclose($fp);
    }
    
    
    
    parserHomeList('../xiaomi.html',"../xiaomi.json");
    
    echo 'done<br>';
    ?>
