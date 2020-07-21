; ============================================================================
; Name and version information
; ============================================================================

Unicode true
!ifdef NSIS_INCLUDE_DIR
!addincludedir ${NSIS_INCLUDE_DIR}
!endif

; HM NIS Edit Wizard helper defines
!define PRODUCT_NAME "4Dogs"
!define PRODUCT_VERSION "1.0"
!define PRODUCT_WEB_SITE "http://www.4dogs.cn/"
!define PRODUCT_PUBLISHER "快乐至上（北京）科技发展有限公司"
!define CONTROL_PANEL_NAME "快乐至上相亲平台"

!define PROGRAM_NAME "TxMainApp"
!define PROGRAM_UNINSTALLER_NAME "uninstall.exe"
!define PROGRAM_FULL_NAME "The ${PRODUCT_NAME} Penetration Test Platform"
!define PROGRAM_NAME_PATH "${PROGRAM_NAME}.exe"
!define PROGRAM_DIR_REGKEY "Software\Microsoft\Windows\CurrentVersion\App Paths\${PROGRAM_NAME}.exe"
!define PROGRAM_UNINST_KEY "Software\Microsoft\Windows\CurrentVersion\Uninstall\${PROGRAM_NAME}"
!define PROGRAM_UNINST_ROOT_KEY "HKLM"
; MUI end ------
Name "${CONTROL_PANEL_NAME}"

XPStyle on

Section ""
!macro IsWiresharkRunning
; See if Wireshark is running
; https://nsis.sourceforge.io/Check_whether_your_application_is_running
${Do}

    System::Call 'kernel32::OpenMutex(i 0x100000, b 0, t "Global\${PROGRAM_NAME}-is-running-{51729CE3-0FCC-4984-A3CA-644FE923600A}") i .R0'
        IntCmp $R0 0 checkRunningSession
        System::Call 'kernel32::CloseHandle(i $R0)'
        Goto isRunning

checkRunningSession:
    System::Call 'kernel32::OpenMutex(i 0x100000, b 0, t "${PROGRAM_NAME}-is-running-{51729CE3-0FCC-4984-A3CA-644FE923600A}") i .R0'
        IntCmp $R0 0 notRunning
        System::Call 'kernel32::CloseHandle(i $R0)'

isRunning:
    ; You'd better go catch it.
    MessageBox MB_RETRYCANCEL|MB_ICONEXCLAMATION "${PROGRAM_NAME} or one of its associated programs is running.$\r$\nPlease close it first." /SD IDCANCEL IDRETRY continueChecking
    Quit

notRunning:
    ${ExitDo}

continueChecking:
${Loop}
!macroend
SectionEnd