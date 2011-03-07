<?

function proxy($url)
{
  global $phonegap_settings;
  if($phonegap_settings['debug'])
  {
    return proxy_url(array('url'=>$url));
  }
  return $url;
}