(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{470:function(e,t,o){"use strict";o.r(t);var r=o(45),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ibm-z-open-editor-releases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibm-z-open-editor-releases"}},[e._v("#")]),e._v(" IBM Z Open Editor Releases")]),e._v(" "),o("h2",{attrs:{id:"_1-2-5-2021-06-18"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-2021-06-18"}},[e._v("#")]),e._v(" 1.2.5 - 2021/06/18")]),e._v(" "),o("ul",[o("li",[e._v("Refined COBOL Renumber and Unnumber support making it configurable to work with columns 1-6 or 73-80 or both. If content other than numberic values is already present in these locations in a specific row then it will not update that location to preserve the content. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 8"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed syntax highlighting for HLASM beyond column 16. There is still an issue with code completion that well be addressed in a later release. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/118",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 118"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Improved performance and reliability of downloading larger numbers of include files such as SYS1.MACLIB macros for the HLAMS editor hovers.")]),e._v(" "),o("li",[e._v("Removed the performance warning dialog for property groups and replaced it with log messages ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/115",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 15"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("User Build now writes its output into a separate log file for users to share and analyze.")]),e._v(" "),o("li",[e._v("Adoption of new Zowe Explorer API ICommand to allow issuing of TSO commands using RSE profiles via Zowe Explorer 1.14.0 and higher.")]),e._v(" "),o("li",[e._v("RSE CLI plug-in updates:\n"),o("ul",[o("li",[e._v("RSE CLI plug-in now prompts user for credentials for RSE profiles without user and password, during "),o("code",[e._v("zowe rse auth login")]),e._v(" command to obtain JWT token, and if RSE API token is expired to obtain new token.")]),e._v(" "),o("li",[e._v("Fixed a regression that broke uploading a file as a sequential data set.")])])])]),e._v(" "),o("h2",{attrs:{id:"_1-2-1-2021-04-21"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-2021-04-21"}},[e._v("#")]),e._v(" 1.2.1 - 2021/04/21")]),e._v(" "),o("ul",[o("li",[e._v("Made various improvements to our REXX Language Server and fixed defects:\n"),o("ul",[o("li",[e._v("Added support for nested comments in REXX")]),e._v(" "),o("li",[e._v("Added support for keyword instructions as variables in REXX (excludes DO, IF, PARSE, SELECT, TRACE).")]),e._v(" "),o("li",[e._v("Fixed a find references bug in REXX where variables and functions with the same name matched")]),e._v(" "),o("li",[e._v("Fixed a find references bug in REXX where keywords could be used to find references")]),e._v(" "),o("li",[e._v("Refined the hover content and code completion detail in REXX to make the information more concise")]),e._v(" "),o("li",[e._v("Updated the hover content in IBM Knowledge Center to point to the new IBM Documentation pages for the z/OS 2.4.0 TSO/E REXX Reference.")]),e._v(" "),o("li",[e._v("Standardized the syntax highlighting in REXX to color all keywords the same")]),e._v(" "),o("li",[e._v('Fixed a syntax highlighting bug in REXX where "value" following "address" was not displaying in color as a keyword')]),e._v(" "),o("li",[e._v('Fixed a syntax highlighting bug in REXX where the routine name following "call" was not displaying in color as a function')])])]),e._v(" "),o("li",[e._v("Reviewed and updated all output and log messages for the IBM RSE API Plug-in for Zowe CLI to ensure consistency. Locate the log file in "),o("code",[e._v("~/.zowe/zowe/logs/zowe.log")]),e._v(".")]),e._v(" "),o("li",[e._v("Updated RSE API support for Zowe CLI "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html#base-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("base profiles"),o("OutboundLink")],1),e._v(" for the "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/api-mediation/discovery-service-configuration.html#api-ml-configuration",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe API Mediation Layer (APIML)"),o("OutboundLink")],1),e._v(" Single Sign On (SSO) for User Build and using the RSE API behind the Zowe APIML. Refer to this "),o("a",{attrs:{href:"https://community.ibm.com/community/user/ibmz-and-linuxone/blogs/joe-winchester1/2021/04/14/using-the-ibm-remote-system-explorer-apis-with-the",target:"_blank",rel:"noopener noreferrer"}},[e._v("new blog post"),o("OutboundLink")],1),e._v(" for an overview about how to use RSE API with the Zowe API Mediation Layer.")])]),e._v(" "),o("h2",{attrs:{id:"_1-2-0-2021-03-19"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-0-2021-03-19"}},[e._v("#")]),e._v(" 1.2.0 - 2021/03/19")]),e._v(" "),o("ul",[o("li",[e._v("REXX Language Server: in this release we added language support for TSO/E REXX for z/OS. This first version includes syntax highlighting, syntax errors, code completion, find references, outline view, and rich documentation hover features. See our docs for all the details. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/15",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 14"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Added full support for encoding conversions to/from UTF-8 to/from international EBCDIC code pages for all our z/OS MVS interactions that use RSE API\n"),o("ul",[o("li",[e._v("Introduced a new mapping file concept to ZAPP as well as standalone JSON files that allow specifying mappings to groups or individual data sets or even members.")]),e._v(" "),o("li",[e._v("Added support for all RSE API CLI commands with new parameters as well as the ability to read mapping files that read and write to MVS.")]),e._v(" "),o("li",[e._v("All Z Open Editor remote MVS read operations using RSE API to find include files now can use mappings defined in ZAPP or user-local mappings files.")]),e._v(" "),o("li",[e._v("The Zowe Explorer integration with RSE API can also be configured to use mappings files for read and write operations of data set members.")])])]),e._v(" "),o("li",[e._v("Added EBCDIC conversion mappings for z/OS USS to User Build. Users can provide a standard .gitattributes file that specifies the encoding the program files should be converted to when uploaded to z/OS USS for a build.")]),e._v(" "),o("li",[e._v("Added context menus for COBOL with the ability to remove as well as renumber sequence numbers. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 8"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Made include file resolution case-insensitive by default to support users with lowercase filenames and property group path names on local case-sensitive file systems such as Linux. As this can lead potentially to ambiguity problems we also added a new user setting called "),o("code",[e._v("zopeneditor.enforceCaseSensitiveIncludeFileNames")]),e._v(" to enable case sensitive matching, even on case-insensitive operation systems such as Windows.")]),e._v(" "),o("li",[e._v("The command "),o("code",[e._v("Reload Zowe Profiles")]),e._v(" that you can use when you changed your Zowe profiles, which was mainly introduced for User Build, now also restarts the Language Servers and retries loading any remote MVS include files with the updated profile information.")]),e._v(" "),o("li",[e._v("Added a new Welcome page for new users that interactively checks for prerequisites and gives tips for getting started.")]),e._v(" "),o("li",[e._v("Added support for APIML SSO for remote include file resolution such as COBOL Copybooks located on MVS. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/107",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 107"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed an issue in which invalid Zowe CLI profile configurations could cause Z Open Editor to not activate. We now show error messages and the editor is still usable. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/110",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 110"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("h2",{attrs:{id:"_1-1-3-2020-12-12"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-2020-12-12"}},[e._v("#")]),e._v(" 1.1.3 - 2020/12/12")]),e._v(" "),o("ul",[o("li",[e._v("Fixed regression when resolving copybooks/include files with property groups that have multiple syslib/library entries. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/105",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 105"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("h2",{attrs:{id:"_1-1-2-2020-12-09"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-2020-12-09"}},[e._v("#")]),e._v(" 1.1.2 - 2020/12/09")]),e._v(" "),o("ul",[o("li",[e._v("Added support for "),o("code",[e._v("SYS1.MACLIB")]),e._v(" macros to HLASM for code completion. If you have a valid Zowe Explorer connection, it will even retrieve the macro definition automatically and show you in rich hovers when you typed or completed the macro name. Ensure that you enable this feature in user settings before using it.")]),e._v(" "),o("li",[e._v("Improved the way that Z Open Editor is looking for your Java Runtime or SDK. Review our updated documentation for the search order in which it tries to locate Java, as well as how you can override it with user settings. Added official support for Java Runtimes, and an SDK is not required anymore.")]),e._v(" "),o("li",[e._v("RSE CLI plug-in has added an encoding field that you can specify when creating or editing a Zowe RSE API CLI profile. You can use this field with newly added encoding tags for the commands of uploading and downloading MVS and USS files. Resolving copybooks will now use this encoding tag as well for RSE API and z/OSMF connections. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/82",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 82"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("RSE CLI plug-in now supports MVS binary downloads. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/58",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 58"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("p",[e._v("To update to RSE CLI plug-in 1.1.2, follow "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/setup_integration.html#updating-the-ibm-rse-api-plug-in-for-zowe-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("the instructions here"),o("OutboundLink")],1),e._v(" for the optional migration.")]),e._v(" "),o("h2",{attrs:{id:"_1-1-1-2020-11-6"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-2020-11-6"}},[e._v("#")]),e._v(" 1.1.1 - 2020/11/6")]),e._v(" "),o("ul",[o("li",[e._v("Added full support for "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html#base-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI Base Profiles"),o("OutboundLink")],1),e._v(" with "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Blog/rse-october-110.html#use-json-web-tokens-jwt-for-authentication-with-the-host",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSE API JWT tokens"),o("OutboundLink")],1),e._v(" for CLI commands and well as Zowe Explorer 1.10.1 or newer. To use it also update the IBM RSE API Plugin for Zowe CLI 1.1.1 and follow "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/setup_integration.html#updating-the-ibm-rse-api-plug-in-for-zowe-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("the instructions here"),o("OutboundLink")],1),e._v(" for the optional migration.")]),e._v(" "),o("li",[e._v("Fixed issue for specifying the right PL/I margin with property groups compile option settings. Note, that the left margin must be at least 2 at the moment. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/87",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 72"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Added "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/setting_compiler_options.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("new documentation"),o("OutboundLink")],1),e._v(" for the currently supported property group compile options.")]),e._v(" "),o("li",[e._v("Fixed issue with using "),o("code",[e._v("$")]),e._v(", "),o("code",[e._v("#")]),e._v(", or "),o("code",[e._v("@")]),e._v(" in HLASM and PL/I include file names. COBOL will be addressed in a future release. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/86",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 86"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("h2",{attrs:{id:"_1-1-0-2020-10-23"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-0-2020-10-23"}},[e._v("#")]),e._v(" 1.1.0 - 2020/10/23")]),e._v(" "),o("ul",[o("li",[e._v("ZAPP (Z APPlication) file support. Instead of mixing the configuration of your application with VS Code Preferences you can now specify property groups and IBM User Build configurations in a new simple yaml (or json) file located in your workspace that you can share with your team in Git. See our docs for a tutorial.")]),e._v(" "),o("li",[e._v("Added support for the Zowe CLI Secure Credentials Plugins for all Z Open Editor operations such as resolving include files or running user build ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/66",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 66"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Property Groups can now be scoped to one specific language making include file resolution more efficient as well as to support compiler options. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/72",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 72"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Added the ability to provide language-specific compiler options such as "),o("code",[e._v("OR('!')")]),e._v(" to property groups to configure the editor ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/17",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 17"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/61",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 61"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Include file resolution for COBOL and PL/I ignores SQLCA and SQLDA ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/71",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 71"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Fixed issues with COBOL 6.3 support such as "),o("code",[e._v(">>if >>else >>end-if")]),e._v(" ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/65",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 65"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("The logger now provides more configuration information that will help in your interactions with tech support.")]),e._v(" "),o("li",[e._v("Fixed issues managing Zowe Explorer favorites when using RSE API.")]),e._v(" "),o("li",[e._v("Revised profile validation in Zowe Explorer when using RSE API.")])]),e._v(" "),o("p",[e._v("We now include the IBM User Build VS Code Extension in IBM Z Open Editor. Changes since the 1.0.0 release:")]),e._v(" "),o("ul",[o("li",[e._v("In addition to COBOL we added support for building PL/I and HLASM programs with IBM Dependency-Based Build.")]),e._v(" "),o("li",[e._v("Fixed an issue with corrupted DBB log files when downloaded from USS.")]),e._v(" "),o("li",[e._v("User Build menus no longer appear for remote MVS or USS files opened via Zowe Explorer to avoid confusion about what can be built and what cannot.")]),e._v(" "),o("li",[e._v("Added more detailed log messages in the IBM User Build Output window, such as the full ssh commands executed, as a summary of all the user and workspace settings being used for a build and more. The output will list all required and optional settings and their values before the user build script is executed. If any required settings are missing, user build will stop execution explaining which setting caused the problem.")]),e._v(" "),o("li",[e._v("User Build can now run with files that contain spaces in their paths.")])]),e._v(" "),o("h2",{attrs:{id:"_1-0-3-2020-08-07"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-3-2020-08-07"}},[e._v("#")]),e._v(" 1.0.3 - 2020/08/07")]),e._v(" "),o("ul",[o("li",[e._v("Added support for specifying custom include file extensions. You can now use the IBM Z Open Editor Preferences page to add and remove the file extensions to be used when searching for local include files such as COBOL copybooks. Also consistently added the Data Sets settings for remote include files to the visual editor allowing users to remove the mappings they do not want mapped in the files.association setting ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/16",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 16"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Added branch targets to the HLASM Outline view.")]),e._v(" "),o("li",[e._v('Fixed COBOL syntax highlighting that uses a "/" character for comments ('),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/60",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 60"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v('Fixed HLASM syntax highlighting for macros starting with a "$" character ('),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/69",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 69"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("li",[e._v("Added a support for using the "),o("code",[e._v("java.home")]),e._v(" user setting for developers that install VS Code with the "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/java/java-tutorial#_setting-up-visual-studio-code-for-java-development",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Installer of VS Code for Java developer"),o("OutboundLink")],1),e._v(" or the Java Extension Pack.")]),e._v(" "),o("li",[e._v("Added a Zowe Profile validation routine that is called when adding and using RSE API profiles with Zowe Explorer 1.7 or newer.")])]),e._v(" "),o("h2",{attrs:{id:"_1-0-2-2020-06-30"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-2-2020-06-30"}},[e._v("#")]),e._v(" 1.0.2 - 2020/06/30")]),e._v(" "),o("ul",[o("li",[e._v("Merged v0.5.2 with v1.0.1 to publish v1.0.2 to the VS Code Marketplace that now includes the language server for IBM High-Level Assembler (HLASM) for z/OS 2.4.")]),e._v(" "),o("li",[e._v("Reorganized the language server packaging to reduce the size of the extension to less than half than it was before.")])]),e._v(" "),o("h2",{attrs:{id:"_1-0-1-0-5-2-2020-06-23"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-1-0-5-2-2020-06-23"}},[e._v("#")]),e._v(" 1.0.1/0.5.2 - 2020/06/23")]),e._v(" "),o("ul",[o("li",[e._v("Fixed false positives in Java compatibility check that prevented newer Java SDK versions than 8 to be used. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/57",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 57"),o("OutboundLink")],1),e._v(")")])]),e._v(" "),o("h2",{attrs:{id:"_1-0-0-2020-06-12"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-0-2020-06-12"}},[e._v("#")]),e._v(" 1.0.0 - 2020/06/12")]),e._v(" "),o("ul",[o("li",[e._v("This is our v1.0 release for which you will be able to purchase technical support from IBM.")]),e._v(" "),o("li",[e._v("Added a language server for IBM High-Level Assembler (HLASM) for z/OS 2.4.")]),e._v(" "),o("li",[e._v("Currently only available here, because of VS Code Marketplace size restrictions: "),o("a",{attrs:{href:"https://ibm.github.io/mainframe-downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ibm.github.io/mainframe-downloads/downloads.html"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"_0-5-0-2020-06-12"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-5-0-2020-06-12"}},[e._v("#")]),e._v(" 0.5.0 - 2020/06/12")]),e._v(" "),o("ul",[o("li",[e._v("Added syntax error checking for COBOL Copybooks.")]),e._v(" "),o("li",[e._v("Added support for CICS 5.6 syntax.")]),e._v(" "),o("li",[e._v("Rewrote the algorithm for searching for remote include files using Zowe CLI profiles.")]),e._v(" "),o("li",[e._v("Added user settings for specifying which Zowe CLI profile to use for finding remote include files on MVS in case you use multiple z/OSMF or RSE API CLI profiles.")]),e._v(" "),o("li",[e._v("Added Logger to analyze issues. Switch it on in the IBM Z Open Editor VS Code Preferences under User Settings.")]),e._v(" "),o("li",[e._v("Fixed bug with Unreachable Code Detection in COBOL EXECL SQL statements and switched default of the "),o("code",[e._v('"zopeneditor.cobol.enableUnreachableCodeWarnings"')]),e._v(" Preferences setting back to true. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/18",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 18"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Updated LSP4J language servers to baseline v0.9.0 and VS Code language clients to v6.1.3.")]),e._v(" "),o("li",[e._v("Improved LSP startup times.")]),e._v(" "),o("li",[e._v("Added more Java runtime checks to ensure you are using a valid Java SDK with the Z Open Editor extension.")]),e._v(" "),o("li",[e._v("Various enhancements and fixes for RSE API support such as Get JCL from the Zowe Explorer JES view as well as Migrate/Recall from the Zowe Explorer MVS view.")]),e._v(" "),o("li",[e._v("Fixed rare race condition when starting language servers. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue 45"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Various stability fixes and refinements.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-9-2020-04-23"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-9-2020-04-23"}},[e._v("#")]),e._v(" 0.4.9 - 2020/04/23")]),e._v(" "),o("ul",[o("li",[e._v("Fixed an issue when using RSE for the Zowe Explorer JES view.")]),e._v(" "),o("li",[e._v("Fixed errors messages users saw when creating z/OSMF profiles in Zowe Explorer when Zowe CLI and/or the IBM RSE API Plugin for Zowe CLI was not installed.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-7-2020-03-27"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-7-2020-03-27"}},[e._v("#")]),e._v(" 0.4.7 - 2020/03/27")]),e._v(" "),o("ul",[o("li",[e._v("Added Beta-level support for the new Remote System Explorer API (RSEAPI) REST servers that can be used as an alternative to z/OSMF for remote file operations as well as Zowe Explorer visual explorer views. If you run RSE already for IBM Developer for Z or IBM z/OS Explorer you can simply update. Go to "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://ibm.github.io/zopeneditor-about"),o("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),o("li",[e._v("Reduced the memory consumption of the extension by starting language servers only if a program in a specifc language is opened for the first time. This will avoid that you are wasting valuable PC memory for languages that you do not use. In addition we added two optional commands that you can run to pause the COBOL or PL/I language server once you finished with one language and want to free up its memory. When you open a program of that language again the language server will restart.")]),e._v(" "),o("li",[e._v("Added code actions that provide suggestions for resolving COBOL copybooks and PL/I include files by linking to Online Help pages.")]),e._v(" "),o("li",[e._v("Removed MQ code templates for now as we ran into some language compatibility issues.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-5-2020-01-07"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-5-2020-01-07"}},[e._v("#")]),e._v(" 0.4.5 - 2020/01/07")]),e._v(" "),o("ul",[o("li",[e._v("Added an additional 27 code snippets for MQ development with COBOL and 27 for MQ with PL/I.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-3-2019-12-18"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-3-2019-12-18"}},[e._v("#")]),e._v(" 0.4.3 - 2019/12/18")]),e._v(" "),o("ul",[o("li",[e._v("Added more code snippets for COBOL, PL/I and JCL, which brings it to a total of 186. For COBOL we now provide 27 General COBOL language support snippets, 12 Embedded SQL snippets, 29 for CICS, 12 for IMS, and 8 for VSAM. Similarly, we provide for PL/I 12 General PL/I language support snippets, 29 CICS, 11 IMS, and 7 VSAM. Finally, we have 27 code snippets for JCL.")])]),e._v(" "),o("h2",{attrs:{id:"_0-4-1-2019-11-21"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-4-1-2019-11-21"}},[e._v("#")]),e._v(" 0.4.1 - 2019/11/21")]),e._v(" "),o("ul",[o("li",[e._v("Language Server updates to support IBM Enterprise COBOL v6.3 and PL/I v5.3.")]),e._v(" "),o("li",[e._v("Added all new sets of IBM field contributed code snippets for COBOL embedded SQL and CICS, PL/I embedded SQL, and various new JCL snippets. This is just the beginning of us curating a larger portfolio of high-value code snippets and incrementally releasing these in the coming months. Keep and eye out and "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("let us know what you think of these snippets"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Added an import command for loading Code Snippets exported by the IBM Developer from z/OS. Do you have your own set of code snippets that you managed in the Snippets view in IDz? You can now export and import these into Z Open Editor.")]),e._v(" "),o("li",[e._v("Switched off COBOL Unreachable Code warnings by default as there are cases in which it can provide false positives ("),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/knownissues.html#limitations-of-cobol-program-files",target:"_blank",rel:"noopener noreferrer"}},[e._v("see here"),o("OutboundLink")],1),e._v(" for details). If you can accept the risk of a few false reports then you can enable it again by using the "),o("code",[e._v('"zopeneditor.cobol.enableUnreachableCodeWarnings": true')]),e._v(" VS Code user or workspace setting.")]),e._v(" "),o("li",[e._v("Fixed a code completion bug for COBOL and PL/I that would erase text to the right of the cursor.")]),e._v(" "),o("li",[e._v("Fixed cases in which COBOL statements before the IDENTIFICATION DIVISION would break syntax checking. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #9"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed exceptions thrown by the PL/I LSP when computing document links ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/13",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #13"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed issues with COBOL Unreachable Code warnings not being shown at all in some cases. ("),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/7",target:"_blank",rel:"noopener noreferrer"}},[e._v("Issue #7"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[e._v("Fixed an issue in which invalid PIC clauses would not be reported as syntax errors.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-11-2019-09-27"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-11-2019-09-27"}},[e._v("#")]),e._v(" 0.3.11 - 2019/09/27")]),e._v(" "),o("ul",[o("li",[e._v('"Unreachable Code" is not reported as an error anymore, but is now a warning message in the Problems View.')]),e._v(" "),o("li",[e._v('Switch off "Unreachable Code" detection completely with this new setting: '),o("code",[e._v('"zopeneditor.cobol.enableUnreachableCodeWarnings": false')]),e._v(".")]),e._v(" "),o("li",[e._v("We implemented GLOB pattern matching in Property Group settings for finding Copybooks on the local file system as requested in "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues/5",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(". Use with care as a very large search space will slow down the editor.")]),e._v(" "),o("li",[e._v("We added support for "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Multi-root Workspaces"),o("OutboundLink")],1),e._v(" allowing you to now specify Property Groups for finding Copybooks for a workspace comprising of many development project folders and Git repositories. To use it move your Property Groups to the Workspace File.")]),e._v(" "),o("li",[e._v("We updated and revised our documentation for using Property Groups with patterns and workspaces in the "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/setting_propertygroup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Online Help"),o("OutboundLink")],1),e._v(". We also added examples for using it on Windows versus Mac/Linux.")]),e._v(" "),o("li",[e._v("Fixed an issue with using the Tab key in Code Snippets and when using it for indentation in the editor.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-9-2019-09-23"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-9-2019-09-23"}},[e._v("#")]),e._v(" 0.3.9 - 2019/09/23")]),e._v(" "),o("ul",[o("li",[e._v("Just removed Preview flag in preparation for the announcement.")]),e._v(" "),o("li",[e._v("Stay tuned for more cool things to come.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-7-2019-09-17"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-7-2019-09-17"}},[e._v("#")]),e._v(" 0.3.7 - 2019/09/17")]),e._v(" "),o("ul",[o("li",[e._v("Fixes to the documentation and hyperlinks.")]),e._v(" "),o("li",[e._v("Renamed extension preferences configuration name.")])]),e._v(" "),o("h2",{attrs:{id:"_0-3-5-2019-09-13"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-5-2019-09-13"}},[e._v("#")]),e._v(" 0.3.5 - 2019/09/13")]),e._v(" "),o("ul",[o("li",[e._v("First public release evolving out of the Wazi technology preview. See README.md for details.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);