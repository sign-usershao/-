@echo off
cd /d %~dp0
echo.
echo 开阳十大美食地图 - 本地预览
echo 浏览器打开: http://127.0.0.1:8080/
echo 手机微信预览请用同一 WiFi 下的电脑 IP 访问。
echo.
python -m http.server 8080
pause
