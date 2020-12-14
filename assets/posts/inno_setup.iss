; Script generated by the Inno Setup Script Wizard.
; SEE THE DOCUMENTATION FOR DETAILS ON CREATING INNO SETUP SCRIPT FILES!

#define MyAppName "快乐至上科技发展有限公司"
#define MyAppVersion "1.0.0"
#define MyAppPublisher "TopHappy.cn"
#define MyAppURL "http://www.happytop.cn/"
#define MyAppExeName "TxMainApp.exe"

[Setup]
; NOTE: The value of AppId uniquely identifies this application.
; Do not use the same AppId value in installers for other applications.
; (To generate a new GUID, click Tools | Generate GUID inside the IDE.)
AppId={{06CF67B3-AF31-4940-8D25-7DA0FD99389C}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
;AppVerName={#MyAppName} {#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
AppSupportURL={#MyAppURL}
AppUpdatesURL={#MyAppURL}
DefaultDirName={pf}\4Dogs\tx
DefaultGroupName={#MyAppName}

OutputDir=D:\Desktop
OutputBaseFilename=TxInstaller
DisableProgramGroupPage=yes
LicenseFile=D:\4Dogs\V3.0_TX\Installer\SoftwareLicence.txt
SetupIconFile=D:\4Dogs\V3.0_TX\App.ico
Compression=lzma
SolidCompression=yes
UninstallDisplayIcon={app}\{#MyAppExeName}


[Languages]
Name: "chinesesimplified"; MessagesFile: "compiler:Languages\ChineseSimplified.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked
Name: "install_nmap"; Description: "安装 Nmanp Setup"; GroupDescription: "{cm:Other}";  Flags: checkablealone 
Name: "install_hasp"; Description: "安装 HASPUserSetup"; GroupDescription: "{cm:Other}"; Flags: checkablealone 


[Files]
Source: "D:\MyShare\20190829\Debug\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs
Source: "D:\4Dogs\Installer\HASPUserSetup.exe"; DestDir: "{app}"; Flags: ignoreversion deleteafterinstall; Tasks :install_hasp
Source: "D:\4Dogs\Installer\nmap-7.12-setup.exe"; DestDir: "{app}"; Flags: ignoreversion deleteafterinstall ;Tasks :install_nmap
Source: "D:\4Dogs\Installer\dotNet4.5-x86-x64.3505182529.exe"; DestDir: "{app}"; Flags: ignoreversion deleteafterinstall ;

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"
Name: "{commondesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "启动 {#MyAppName}"; Flags: postinstall skipifsilent
Filename: "{app}\nmap-7.12-setup.exe"; StatusMsg: "安装 Nmanp Setup"; Check: IsWin64(); Tasks: install_nmap;
Filename: "{app}\HASPUserSetup.exe"; StatusMsg: "安装 HASPUserSetup"; Check: IsWin64(); Tasks: install_hasp;
Filename: "{app}\dotNet4.5-x86-x64.3505182529.exe"; StatusMsg: "安装 dotNet4.5-x86-x64.3505182529.exe"; Check: IsWin64();


[Code]
function InitializeSetup(): boolean;
var
  ResultStr, SubKeyName: String;
  ResultCode: Integer;
begin
  if (IsWin64()) then begin
  SubKeyName := 'Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\{06CF67B3-AF31-4940-8D25-7DA0FD99389C}_is1'; 
    RegQueryStringValue(HKLM64,SubKeyName,'UninstallString',ResultStr);
    end else begin
  SubKeyName := 'Software\Microsoft\Windows\CurrentVersion\Uninstall\{06CF67B3-AF31-4940-8D25-7DA0FD99389C}_is1';
    RegQueryStringValue(HKLM32,SubKeyName,'UninstallString',ResultStr);
    end;

  ResultStr := RemoveQuotes(ResultStr);
  Exec(ResultStr, '', '', SW_HIDE, ewWaitUntilTerminated, ResultCode);
  result := true;
end;

procedure CurUninstallStepChanged(CurUninstallStep: TUninstallStep);
begin
  if CurUninstallStep = usDone then
    begin
    DelTree(ExpandConstant('{app}'), True, True, True);
    end;
end;

