(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{467:function(e,o,t){"use strict";t.r(o);var i=t(42),s=Object(i.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"known-issues-and-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues-and-limitations"}},[e._v("#")]),e._v(" Known issues and limitations")]),e._v(" "),t("p",[e._v("The IBM Z® Open Editor extension has some known issues and limitations. This page provides the status of the current release. Also review the list of open issues and enhancement requests in our "),t("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github repository"),t("OutboundLink")],1),e._v(". It might list issues that are not yet documented here.")]),e._v(" "),t("h2",{attrs:{id:"javatm-8-64-bit-jre-or-sdk-required"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javatm-8-64-bit-jre-or-sdk-required"}},[e._v("#")]),e._v(" Java™ 8 64-Bit JRE or SDK required")]),e._v(" "),t("p",[e._v("If the right version of Java cannot be found in the current user's path or if no "),t("code",[e._v("JAVA_HOME")]),e._v(" environment variable was defined, you might see error messages in the Output view of VS Code. Such errors could also be caused by other reasons such as not enough free memory for Java on your system.")]),e._v(" "),t("p",[e._v("Go through all the steps described in the "),t("a",{attrs:{href:"./getting_started"}},[e._v("Getting Started")]),e._v(" page for configuring Java to try out different options.")]),e._v(" "),t("h2",{attrs:{id:"resetting-language-servers-or-vs-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resetting-language-servers-or-vs-code"}},[e._v("#")]),e._v(" Resetting Language Servers or VS Code")]),e._v(" "),t("p",[e._v("It might happen that the language servers provided by IBM Z Open Editor become inconsistent and do not behave as expected. For example, one language server might stop reporting syntax errors, or it cannot resolve copybooks anymore. Instead of quitting and restarting VS Code completely, you can try pressing the F1 key and type the following commands to reset one or more language servers.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("IBM Z Open Editor: Pause the COBOL Language Server")]),e._v(": Stops the COBOL language server and restarts it when you open a COBOL file again.")]),e._v(" "),t("li",[t("code",[e._v("IBM Z Open Editor: Pause the PL/I Language Server")]),e._v(": Stops the PL/I language server and restarts it when you open a PL/I file again.")]),e._v(" "),t("li",[t("code",[e._v("IBM Z Open Editor: Pause the Assembler Language Server")]),e._v(": Stops the HLASM language server and restarts it when you open an HLASM file again.")]),e._v(" "),t("li",[t("code",[e._v("IBM Z Open Editor: Reload Zowe Profiles")]),e._v(": If you have changed the password of your Zowe CLI profile that is used to load your remote include files such as copybooks, you need to run this command to refresh the Zowe profile.")]),e._v(" "),t("li",[t("code",[e._v("Developer: Reload Window")]),e._v(": Restarts the current VS Code window and all of its extensions. If you have many editor windows open at the same time, you can use this command to reset just the current window in which you run the command.")])]),e._v(" "),t("h2",{attrs:{id:"limitations-for-visual-studio-code-multi-root-workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-for-visual-studio-code-multi-root-workspaces"}},[e._v("#")]),e._v(" Limitations for Visual Studio Code Multi-Root Workspaces")]),e._v(" "),t("p",[e._v("IBM Z® Open Editor supports "),t("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code multi-root workspaces"),t("OutboundLink")],1),e._v("; however, be aware that property groups defining path names for COBOL, PL/I, and HLASM resource dependencies are managed as so-called Window-level VS Code settings. This means that these property groups need to be defined for multi-root workspaces for the entire workspace. Project-level settings will be ignored. If you intend to use a project as part of a workspace as well as independent of the workspace, then you need to have two copies of your property groups in each location. When you work in the workspace, the editor will look for property groups in the "),t("code",[e._v(".code-workspace")]),e._v(" file. When you work just in a project directory outside of a workspace, it will look for property groups in the workspace "),t("code",[e._v(".vscode/settings.json")]),e._v(" file.")]),e._v(" "),t("p",[e._v("See more details about this limitation in "),t("RouterLink",{attrs:{to:"/Docs/setting_propertygroup.html#quick-tips-for-setting-ibm-z-open-editor-property-groups-local-files-only"}},[e._v("Setting property groups")]),e._v(".")],1),e._v(" "),t("p",[e._v("ZAPP files currently do not support multi-root workspaces.")]),e._v(" "),t("h2",{attrs:{id:"limitations-of-using-z-open-editor-with-eclipse-che-and-red-hat-codeready-workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-using-z-open-editor-with-eclipse-che-and-red-hat-codeready-workspaces"}},[e._v("#")]),e._v(" Limitations of using Z Open Editor with Eclipse Che and Red Hat CodeReady Workspaces")]),e._v(" "),t("p",[e._v("Almost all capabilities described in this documentation are available when you use IBM Z Open Editor with Eclipse Che or Red Hat CodeReady Workspaces. However, be noted about the following limitation.")]),e._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/Docs/snippets.html"}},[e._v("Code snippets")]),e._v(": The extensive IBM Z Open Editor code snippet library is not supported if you use IBM Z Open Editor with Eclipse Che or Red Hat CodeReady Workspaces. It is available only in VS Code at the moment.")],1),e._v(" "),t("p",[e._v("The Theia editor utilized in Eclipse Che and CodeReady Workspaces does not provide a snippet gallery as VS Code does. Therefore, you cannot define your own custom code snippets with the Theia editor. In VS Code, code snippets provided by VS Code extensions, such as IBM Z Open Editor, can normally be inserted via the code completion features using the Ctrl+Space shortcut. However, that capability currently has a "),t("a",{attrs:{href:"https://github.com/eclipse/che/issues/16502",target:"_blank",rel:"noopener noreferrer"}},[e._v("known defect in Eclipse Che"),t("OutboundLink")],1),e._v(" and therefore is not supported in CodeReady Workspaces, either. This defect prevents the code snippets from appearing at all.")])]),e._v(" "),t("li",[t("p",[e._v("Zowe CLI Secure Credentials are currently not supported with Z Open Editor on CodeReady Workspaces. Although Z Open Editor added full support for the "),t("a",{attrs:{href:"https://github.com/zowe/zowe-cli-scs-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI Secure Credentials Plugin"),t("OutboundLink")],1),e._v(" with release 1.1.0, there are still limitations for Eclipse Che and Red Hat CodeReady Workspaces.")])]),e._v(" "),t("li",[t("p",[e._v("ZAPP files are not working in Red Hat CodeReady Workspaces and Eclipse Che. Support for ZAPP files will be added in a later release.")])]),e._v(" "),t("li",[t("p",[e._v("See a full list of Red Hat CodeReady Workspaces 2.3 issues in "),t("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_workspaces/2.3/html/release_notes_and_known_issues/known-issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Release Notes and Known Issues"),t("OutboundLink")],1),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"language-specific-features-and-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#language-specific-features-and-limitations"}},[e._v("#")]),e._v(" Language-specific features and limitations")]),e._v(" "),t("h3",{attrs:{id:"jcl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jcl"}},[e._v("#")]),e._v(" JCL")]),e._v(" "),t("p",[e._v("There is currently no language server for JCL. When you open JCL files, syntax highlighting is enabled, but no additional language server capabilities are available for these files. The observable limitations include:")]),e._v(" "),t("ul",[t("li",[e._v("No contents are shown in the Outline view.")]),e._v(" "),t("li",[e._v("Ctrl+Space shows code templates, but no syntactical completions.")]),e._v(" "),t("li",[e._v("Many menu options are unavailable.")])]),e._v(" "),t("h3",{attrs:{id:"cobol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cobol"}},[e._v("#")]),e._v(" COBOL")]),e._v(" "),t("p",[e._v("The following lists show the implementation status of the COBOL language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),t("h4",{attrs:{id:"enabled-features-of-cobol-program-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-cobol-program-files"}},[e._v("#")]),e._v(" Enabled features of COBOL program files")]),e._v(" "),t("ul",[t("li",[e._v("Syntax highlighting")]),e._v(" "),t("li",[e._v("Syntax errors")]),e._v(" "),t("li",[e._v("Document highlighting")]),e._v(" "),t("li",[e._v("Hover")]),e._v(" "),t("li",[e._v("Go to declaration")]),e._v(" "),t("li",[e._v("Find all references in file and across the multiple files")]),e._v(" "),t("li",[e._v("Peek references in file and across the multiple files")]),e._v(" "),t("li",[e._v("Rename symbol in file and across the multiple files")]),e._v(" "),t("li",[e._v("Outline view")]),e._v(" "),t("li",[e._v("Code completion")]),e._v(" "),t("li",[e._v("Snippets")]),e._v(" "),t("li",[e._v("Copybook resolving and copybook hover support")]),e._v(" "),t("li",[e._v("Document link support to open copybook by using Ctrl+Click (Windows) or Cmd+Click (Mac)")]),e._v(" "),t("li",[e._v("Embedded languages support such as SQL, CICS®, and DLI")])]),e._v(" "),t("h4",{attrs:{id:"limitations-of-cobol-program-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-cobol-program-files"}},[e._v("#")]),e._v(" Limitations of COBOL program files")]),e._v(" "),t("p",[e._v("False unreachable code warnings: In some cases, the editor incorrectly reports that code is unreachable in embedded SQL and CICS statements such as "),t("code",[e._v("EXEC CICS HANDLE")]),e._v(". One such case is reported in "),t("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/52",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),t("OutboundLink")],1),e._v(". You can use a user setting to disable warnings for unreachable code completely as described in "),t("RouterLink",{attrs:{to:"/Docs/setting_unreachablecodewarnings.html"}},[e._v("Enabling and disabling unreachable COBOL code warnings")]),e._v(".")],1),e._v(" "),t("h4",{attrs:{id:"enabled-features-of-cobol-copybook-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-cobol-copybook-files"}},[e._v("#")]),e._v(" Enabled features of COBOL copybook files")]),e._v(" "),t("ul",[t("li",[e._v("Syntax errors")]),e._v(" "),t("li",[e._v("Find all references in file")]),e._v(" "),t("li",[e._v("Peek references in file")]),e._v(" "),t("li",[e._v("Rename symbol in file")]),e._v(" "),t("li",[e._v("Outline view")]),e._v(" "),t("li",[e._v("Syntax highlighting")]),e._v(" "),t("li",[e._v("Code completion")]),e._v(" "),t("li",[e._v("Snippets")]),e._v(" "),t("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")])]),e._v(" "),t("h4",{attrs:{id:"limitations-of-cobol-copybook-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-cobol-copybook-files"}},[e._v("#")]),e._v(" Limitations of COBOL copybook files")]),e._v(" "),t("ul",[t("li",[e._v("No support for Hover")]),e._v(" "),t("li",[e._v("No support for Go to declaration")]),e._v(" "),t("li",[e._v("No support for Find all references across the multiple files")]),e._v(" "),t("li",[e._v("No support for Peek references across the multiple files")]),e._v(" "),t("li",[e._v("No support for Rename symbol from a copybook to the files that include it")])]),e._v(" "),t("h3",{attrs:{id:"pl-i"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pl-i"}},[e._v("#")]),e._v(" PL/I")]),e._v(" "),t("p",[e._v("The following lists show the implementation status of the PL/I language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),t("h4",{attrs:{id:"enabled-features-of-pl-i-program-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-pl-i-program-files"}},[e._v("#")]),e._v(" Enabled features of PL/I program files")]),e._v(" "),t("ul",[t("li",[e._v("Syntax highlighting")]),e._v(" "),t("li",[e._v("Syntax errors")]),e._v(" "),t("li",[e._v("Document highlighting")]),e._v(" "),t("li",[e._v("Hover")]),e._v(" "),t("li",[e._v("Go to declaration")]),e._v(" "),t("li",[e._v("Find all references in file and across the multiple files")]),e._v(" "),t("li",[e._v("Peek references in file and across the multiple files")]),e._v(" "),t("li",[e._v("Rename symbol in file and across the multiple files")]),e._v(" "),t("li",[e._v("Outline view")]),e._v(" "),t("li",[e._v("Code completion")]),e._v(" "),t("li",[e._v("Include file resolving and include file hover support")]),e._v(" "),t("li",[e._v("Document link support to open include file by using Ctrl+Click (Windows) or Cmd+Click (Mac)")]),e._v(" "),t("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")]),e._v(" "),t("li",[t("code",[e._v("*process")]),e._v(" (or "),t("code",[e._v("%process")]),e._v(") compile options statements, such as:\n"),t("ul",[t("li",[t("code",[e._v("*process source MARGINS(2,120);")])]),e._v(" "),t("li",[t("code",[e._v("*process SYSTEM(CIS, DB2);")])]),e._v(" "),t("li",[t("code",[e._v("*process LIST TEST;")])]),e._v(" "),t("li",[e._v("Syntax and other supported compiler options can be found in:\n"),t("ul",[t("li",[t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSY2V3_5.3.0/com.ibm.ent.pl1.zos.doc/lr/ctlproc.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("%PROCESS directive"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSY2V3_5.3.0/com.ibm.ent.pl1.zos.doc/pg/optns.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Compile-time option descriptions"),t("OutboundLink")],1)])])])])])]),e._v(" "),t("h4",{attrs:{id:"limitations-of-pl-i-program-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-pl-i-program-files"}},[e._v("#")]),e._v(" Limitations of PL/I program files")]),e._v(" "),t("ul",[t("li",[e._v("No support for macros")])]),e._v(" "),t("h4",{attrs:{id:"enabled-features-of-pl-i-include-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-pl-i-include-files"}},[e._v("#")]),e._v(" Enabled features of PL/I include files")]),e._v(" "),t("ul",[t("li",[e._v("Syntax errors (lexing and parsing)")]),e._v(" "),t("li",[e._v("Find all references in file")]),e._v(" "),t("li",[e._v("Peek references in file")]),e._v(" "),t("li",[e._v("Rename symbol in file")]),e._v(" "),t("li",[e._v("Outline view")]),e._v(" "),t("li",[e._v("Syntax highlighting")]),e._v(" "),t("li",[e._v("Code completion")]),e._v(" "),t("li",[e._v("Embedded languages support such as SQL, CICS, and DLI")])]),e._v(" "),t("h4",{attrs:{id:"limitations-of-pl-i-include-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-pl-i-include-files"}},[e._v("#")]),e._v(" Limitations of PL/I include files")]),e._v(" "),t("ul",[t("li",[e._v("No support for showing syntax errors for resolving variables")]),e._v(" "),t("li",[e._v("No support for Hover")]),e._v(" "),t("li",[e._v("No support for Go to declaration")]),e._v(" "),t("li",[e._v("No support for Find all references across the multiple files")]),e._v(" "),t("li",[e._v("No support for Peek references across the multiple files")]),e._v(" "),t("li",[e._v("No support for Rename symbol across the multiple files")])]),e._v(" "),t("h3",{attrs:{id:"hlasm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hlasm"}},[e._v("#")]),e._v(" HLASM")]),e._v(" "),t("p",[e._v("The following lists show the implementation status of the HLASM language server. Use these lists to check that the feature that you are looking for was implemented or is regarded as a known issue. Let us know if you have any additional issues.")]),e._v(" "),t("h4",{attrs:{id:"enabled-features-of-hlasm-program-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-features-of-hlasm-program-files"}},[e._v("#")]),e._v(" Enabled features of HLASM program files")]),e._v(" "),t("ul",[t("li",[e._v("Syntax highlighting")]),e._v(" "),t("li",[e._v("Syntax errors which also include the following:\n"),t("ul",[t("li",[e._v("Copy statements not resolved")]),e._v(" "),t("li",[e._v("Spaces in continuation line")])])]),e._v(" "),t("li",[e._v("Document highlighting")]),e._v(" "),t("li",[e._v("Hover on operations and operands")]),e._v(" "),t("li",[e._v("Go to declaration")]),e._v(" "),t("li",[e._v("Find all references in file")]),e._v(" "),t("li",[e._v("Peek references in file")]),e._v(" "),t("li",[e._v("Outline view for macros, CSECTs, and DSECTs")]),e._v(" "),t("li",[e._v("Code completion")]),e._v(" "),t("li",[e._v("Copybook file resolving and copybook file hover support")]),e._v(" "),t("li",[e._v("SYS1.MACLIB Macro remote file resolving and content hover support")]),e._v(" "),t("li",[e._v("Document link support to open copybook file by using Ctrl+Click (Windows) or Cmd+Click (Mac)")]),e._v(" "),t("li",[e._v("Quick fix hints for lines that are too long and spaces in the continuation line")])]),e._v(" "),t("h4",{attrs:{id:"limitations-of-hlasm-program-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limitations-of-hlasm-program-files"}},[e._v("#")]),e._v(" Limitations of HLASM program files")]),e._v(" "),t("ul",[t("li",[e._v("No support for symbols defined in different files")]),e._v(" "),t("li",[e._v("Syntax highlighting limitations for continuation lines")])]),e._v(" "),t("h2",{attrs:{id:"ibm-rse-api-plug-in-for-zowe-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("#")]),e._v(" IBM RSE API Plug-in for Zowe CLI")]),e._v(" "),t("p",[e._v("Known issues and limitations for IBM RSE API Plug-in for Zowe CLI (RSE CLI plug-in)")]),e._v(" "),t("h3",{attrs:{id:"rse-cli-plug-in-with-zowe-secure-credential-store-plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rse-cli-plug-in-with-zowe-secure-credential-store-plugin"}},[e._v("#")]),e._v(" RSE CLI plug-in with Zowe Secure Credential Store plugin")]),e._v(" "),t("ul",[t("li",[e._v("Node 14 is not fully supported by the Zowe Secure Credential Store (SCS) plugin and may cause errors. Node 12 is recommended.")]),e._v(" "),t("li",[e._v("When changing node versions, SCS will have to be uninstalled and then re-installed.")]),e._v(" "),t("li",[e._v("For Mac users with Zowe SCS plug-in, the user will be prompted 2 times for credentials due to 2 secure fields (user and password) within the RSE profile.")])]),e._v(" "),t("h3",{attrs:{id:"rse-cli-plug-in-with-json-web-tokens"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rse-cli-plug-in-with-json-web-tokens"}},[e._v("#")]),e._v(" RSE CLI plug-in with JSON Web Tokens")]),e._v(" "),t("ul",[t("li",[e._v("Time-sensitive JSON Web Tokens (JWT) will be stored in plain text within the profile's YAML file at this time.")]),e._v(" "),t("li",[e._v("JSON Web Tokens are not supported by Zowe Explorer 1.9.0 or previous versions.")]),e._v(" "),t("li",[e._v("If you create an RSE profile by using Zowe Explorer and leave the username and password values blank, you will be required to add the "),t("code",[e._v("--user")]),e._v(" and "),t("code",[e._v("--pass")]),e._v(" tags with the appropriate values when you use command line operations with that profile, even if a JWT has been issued for the profile at this time. We recommend creating the profile using command line operations.")]),e._v(" "),t("li",[e._v("The JWT logout command "),t("code",[e._v("zowe rse auth logout")]),e._v(" is not supported by the host component RSE API 1.0.0.")]),e._v(" "),t("li",[e._v("If VS Code is opened during the "),t("code",[e._v("auth login")]),e._v(" and "),t("code",[e._v("auth logout")]),e._v(" a refresh of VS Code is required to grab the changes to the profile's YAML file for profile updates to be used in Zowe Explorer.")])]),e._v(" "),t("h3",{attrs:{id:"rse-cli-plug-in-tso-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rse-cli-plug-in-tso-commands"}},[e._v("#")]),e._v(" RSE CLI plug-in TSO commands")]),e._v(" "),t("ul",[t("li",[e._v("The command "),t("code",[e._v("zowe rse issue command {COMMAND}")]),e._v(", which can be used to issue a TSO command, is not supported by the host component RSE API 1.0.0.")]),e._v(" "),t("li",[e._v("Issuing a command with an RSE profile via Zowe Explorer is not supported yet.")])]),e._v(" "),t("h3",{attrs:{id:"rse-cli-plug-in-support-in-the-zowe-explorer-vs-code-extension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rse-cli-plug-in-support-in-the-zowe-explorer-vs-code-extension"}},[e._v("#")]),e._v(" RSE CLI plug-in support in the Zowe Explorer VS Code extension")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Uploading USS files in Zowe Explorer does not recognize the profile's default encoding at this time.")])]),e._v(" "),t("li",[t("p",[e._v("If a default profile is not set for RSE CLI plug-in, Z Open Editor will not activate with Zowe Explorer. You can see if a default profile is set by issuing the command:")]),e._v(" "),t("p",[t("code",[e._v("zowe profiles list rse")])]),e._v(" "),t("p",[e._v("If a default profile is set, then "),t("code",[e._v("(default)")]),e._v(" should show up next to the default profile's name. If no default profile is set, you can issue the following command, replacing "),t("code",[e._v("<profileName>")]),e._v(" with the name of the profile you would like to be the default:")]),e._v(" "),t("p",[t("code",[e._v("zowe profiles set-default rse <profileName>")])])]),e._v(" "),t("li",[t("p",[e._v("Profiles created via CLI without username and password and secured with SCS cannot be deleted using Zowe Explorer. Instead, these profiles will need to be deleted via command line with the following command, replacing "),t("code",[e._v("<profileName>")]),e._v(" with the name of the profile you would like to delete.")]),e._v(" "),t("p",[t("code",[e._v("zowe profiles delete rse <profileName>")])])])]),e._v(" "),t("h4",{attrs:{id:"mvs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mvs"}},[e._v("#")]),e._v(" MVS")]),e._v(" "),t("p",[e._v("The following features are not implemented yet:")]),e._v(" "),t("ul",[t("li",[e._v("Copy and paste a data set member")]),e._v(" "),t("li",[e._v("Create a Binary Data Set type")])]),e._v(" "),t("h4",{attrs:{id:"jes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jes"}},[e._v("#")]),e._v(" JES")]),e._v(" "),t("p",[e._v("The following features are not implemented yet:")]),e._v(" "),t("ul",[t("li",[e._v("Issue a Modify command")]),e._v(" "),t("li",[e._v("Issue a Stop command")])]),e._v(" "),t("h4",{attrs:{id:"known-issues-with-uss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues-with-uss"}},[e._v("#")]),e._v(" Known issues with USS")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("USS does not accept the upload of a directory or file names with spaces in them.")])]),e._v(" "),t("li",[t("p",[e._v('An error occurs when you specify uss path "/u/userid" in the Windows Git Bash terminal due to a known issue with '),t("a",{attrs:{href:"https://github.com/git-for-windows/msys2-runtime/pull/11",target:"_blank",rel:"noopener noreferrer"}},[e._v("git-for-windows"),t("OutboundLink")],1),e._v(". To solve the issue, add a variable "),t("code",[e._v("MSYS_NO_PATHCONV")]),e._v(" with a value of "),t("code",[e._v("1")]),e._v(" to User Variables in Environment Variables and restart terminal.")])])]),e._v(" "),t("h2",{attrs:{id:"reporting-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reporting-issues"}},[e._v("#")]),e._v(" Reporting issues")]),e._v(" "),t("p",[e._v("If you want to provide feedback or report an issue, open an issue in the "),t("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repository"),t("OutboundLink")],1),e._v(". Any report and feedback is appreciated.")])])}),[],!1,null,null,null);o.default=s.exports}}]);