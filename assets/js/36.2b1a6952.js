(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{473:function(e,t,o){"use strict";o.r(t);var a=o(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"getting-started-with-ibm-z-open-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-ibm-z-open-editor"}},[e._v("#")]),e._v(" Getting started with IBM Z Open Editor")]),e._v(" "),o("p",[e._v("The procedure to get started with IBM Z® Open Editor is summarized as follows:")]),e._v(" "),o("ol",[o("li",[e._v("Get the latest version of Microsoft Visual Studio Code (VS Code)")]),e._v(" "),o("li",[o("a",{attrs:{href:"#prerequisites"}},[e._v("Install the prerequisites")]),e._v(" (a Java™ 8 runtime environment as a minimum)")]),e._v(" "),o("li",[o("a",{attrs:{href:"#installing-ibm-z-open-editor"}},[e._v("Install the IBM Z Open Editor VS Code extension from the VS Code Marketplace")])]),e._v(" "),o("li",[e._v("(Optional) "),o("RouterLink",{attrs:{to:"/Docs/setup_integration.html"}},[e._v("Set up integrations")]),e._v(" for extended capabilities, such as installing IBM RSE API Plug-in for Zowe CLI to interact with z/OS")],1)]),e._v(" "),o("h2",{attrs:{id:"privacy-notice"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#privacy-notice"}},[e._v("#")]),e._v(" Privacy notice")]),e._v(" "),o("p",[e._v("IBM Z Open Editor is provided free of charge, but we ask you to provide us feedback via the various means available including:")]),e._v(" "),o("ul",[o("li",[e._v("Submit an "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue in our GitHub repository"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Provide a review in the "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor#review-details",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Marketplace"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Keep the built-in telemetry and crash reports enabled")])]),e._v(" "),o("p",[e._v("This editor uses "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/telemetry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft VS Code's Telemetry"),o("OutboundLink")],1),e._v(" solution that collects telemetry data, which is used to help understand how to improve the product. While we appreciate the insights this data provides, we also know that not everyone wants to send usage data and you can disable telemetry as described in "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/getstarted/telemetry#_disable-telemetry-reporting",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disable Telemetry Reporting"),o("OutboundLink")],1),e._v(". You can also read "),o("a",{attrs:{href:"https://www.ibm.com/privacy/us/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM®'s General Privacy Statement"),o("OutboundLink")],1),e._v(" to learn more about our policies.")]),e._v(" "),o("p",[e._v("This current release of IBM Z Open Editor will collect anonymous data for the following events:")]),e._v(" "),o("ul",[o("li",[e._v("Activation of this VS Code extension")]),e._v(" "),o("li",[e._v("Opening and closing files of a specific language such as COBOL, PL/I, HLASM, REXX, JCL")]),e._v(" "),o("li",[e._v("Resolving of include files and assembler macros: success or failure")]),e._v(" "),o("li",[e._v("Using common language server operations such as code completion, references, definition, rename")]),e._v(" "),o("li",[e._v("Starting a user build")]),e._v(" "),o("li",[e._v("Deactivation of this VS Code extension")])]),e._v(" "),o("p",[e._v("Each such event is logged with the following information:")]),e._v(" "),o("ul",[o("li",[e._v("Event time")]),e._v(" "),o("li",[e._v("Operating system and version")]),e._v(" "),o("li",[e._v("Country or region")]),e._v(" "),o("li",[e._v("Anonymous user and session ID")]),e._v(" "),o("li",[e._v("The type of editor VS Code or Eclipse Theia")]),e._v(" "),o("li",[e._v("Version numbers of Microsoft VS Code and IBM Z Open Editor")]),e._v(" "),o("li",[e._v("The name of the Z programming language used")]),e._v(" "),o("li",[e._v("The name of the operation performed")])]),e._v(" "),o("h2",{attrs:{id:"installing-the-ibm-z-open-editor-vs-code-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-ibm-z-open-editor-vs-code-extension"}},[e._v("#")]),e._v(" Installing the IBM Z Open Editor VS Code Extension")]),e._v(" "),o("p",[e._v("IBM Z Open Editor is an extension for VS Code that you can install from the VS Code Marketplace. Before installation, ensure that you have installed and configured the prerequisites, most importantly a Java runtime as main parts of the extension are implemented in the Java programming language.")]),e._v(" "),o("h3",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("p",[e._v("Review the "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/raw/master/product-licenses/LICENSE.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Z Open Editor License Agreement"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/raw/master/product-licenses/NOTICES.txt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Third Party Notices"),o("OutboundLink")],1),e._v(" before downloading.")]),e._v(" "),o("p",[e._v("Prerequisites for the installation:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Visual Studio Code version 1.44 or later: As IBM Z Open Editor is delivered as an extension to VS Code instead of a stand-alone editor, you must install and configure VS Code first. We recommend using always the latest VS Code version available. However, although the required minimal version is 1.44.0 we recommend to use at least 1.45.1, which includes fixes in VS Code User Settings that can impact Z Open Editor. If you do not have VS Code installed we recommend using the "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/java#_install-visual-studio-code-for-java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code for Java Installer"),o("OutboundLink")],1),e._v(" provided by Microsoft as it automatically downloads and installs a Java SDK together with VS Code. (See, but skip the next bullet for the Java dependency, if you use this option.) For information about installation and configuration of VS Code, see its "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/setup/setup-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Java SDK or JRE version 8 or later - 64 bit: The COBOL and PL/I language servers included in this extension are implemented in Java. Therefore, you need to install and configure a 64-bit Java SDK or Runtime in order to start the extension successfully. We recommend installing VS Code for Java as described above, but if you already have VS Code or want to install Java yourself, then you can choose from the following options:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle Java 8"),o("OutboundLink")],1),e._v(" or the LTS versions 11 of Oracle Java")]),e._v(" "),o("li",[e._v("Version 8 or 11 of the "),o("a",{attrs:{href:"https://adoptopenjdk.net/releases.html?variant=openjdk8&jvmVariant=openj9",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenJDK"),o("OutboundLink")],1),e._v(". If you are using version 1.1 or newer of Z Open Editor, you can also use just a Java Runtime Environments (JRE) as well.")]),e._v(" "),o("li",[e._v("Newer versions of Java should also work, but are not as rigorously tested for Z Open Editor as Java 8 and 11.")])]),e._v(" "),o("p",[e._v("Various settings are provided to configure how the extension uses Java. See the "),o("a",{attrs:{href:"#configuring-java"}},[e._v("Configuring Java")]),e._v(" section below for more details.")])]),e._v(" "),o("li",[o("p",[e._v("Zowe Explorer VS Code extension 1.12.1 or later (required) and Zowe CLI 6.23 or later (optional): To make use of "),o("a",{attrs:{href:"https://zowe.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe"),o("OutboundLink")],1),e._v(" to open and edit files directly from z/OS® MVS™ or USS, you need Zowe client software and host components configured. More information on setting up Zowe can be found at "),o("RouterLink",{attrs:{to:"/Docs/setup_integration.html"}},[e._v("Setting up integrations to interact with z/OS")]),e._v(". Once installed, you can access z/OS resources as documented in "),o("RouterLink",{attrs:{to:"/Docs/interact_zos_overview.html"}},[e._v("Interacting with z/OS")]),e._v(".")],1),e._v(" "),o("blockquote",[o("p",[e._v("Note: When you install IBM Z Open Editor from the VS Code Marketplace into your VS Code, the latest version of the Zowe Explorer VS Code extension is automatically co-installed.")])])]),e._v(" "),o("li",[o("p",[e._v("(Optional) Git: To use the features that involve Git, you must install Git and have it available in your system path so that VS Code can display it. On Macs, Git comes out of the box. On Linux, you can install Git with your distribution's package manager. On Windows, you can get Git from "),o("a",{attrs:{href:"https://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://git-scm.com"),o("OutboundLink")],1),e._v(".")])])]),e._v(" "),o("h3",{attrs:{id:"installing-ibm-z-open-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-ibm-z-open-editor"}},[e._v("#")]),e._v(" Installing IBM Z Open Editor")]),e._v(" "),o("p",[e._v("You can install IBM Z Open Editor from VS Code Marketplace or install from a VSIX file.")]),e._v(" "),o("h4",{attrs:{id:"installing-ibm-z-open-editor-from-the-vs-code-marketplace"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-ibm-z-open-editor-from-the-vs-code-marketplace"}},[e._v("#")]),e._v(" Installing IBM Z Open Editor from the VS Code Marketplace")]),e._v(" "),o("p",[e._v("When a Java runtime is installed, you can use either of the following ways to get versions of IBM Z Open Editor that are available in the VS Code Marketplace:")]),e._v(" "),o("ul",[o("li",[e._v("Start VS Code, open the Extensions view by clicking the "),o("strong",[e._v("Extensions")]),e._v(" icon on the activity bar, or by clicking the menu "),o("strong",[e._v("File > Preferences > Extensions")]),e._v(", and search for "),o("code",[e._v("IBM Z Open Editor")]),e._v(".")]),e._v(" "),o("li",[e._v("Go to the "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ibm.zopeneditor",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Marketplace website that hosts IBM Z Open Editor"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("Then, click the "),o("strong",[e._v("Install")]),e._v(" button and wait for the installation to complete.")]),e._v(" "),o("h4",{attrs:{id:"installing-ibm-z-open-editor-from-a-vsix-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-ibm-z-open-editor-from-a-vsix-file"}},[e._v("#")]),e._v(" Installing IBM Z Open Editor from a VSIX file")]),e._v(" "),o("p",[e._v("If you have downloaded IBM Z Open Editor as a VSIX file from the "),o("a",{attrs:{href:"https://ibm.github.io/mainframe-downloads/downloads.html/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mainframe DEV Center's Downloads page"),o("OutboundLink")],1),e._v(", you can install it with the following steps in VS Code:")]),e._v(" "),o("ol",[o("li",[e._v("Click the "),o("strong",[e._v("Extensions")]),e._v(" icon in VS Code's activity bar to open the Extensions view.")]),e._v(" "),o("li",[e._v("Click the "),o("strong",[e._v("...")]),e._v(" icon in the Extensions view's upper-right corner to reveal a drop-down menu of more actions.")]),e._v(" "),o("li",[e._v("In the drop-down menu that appears, click "),o("strong",[e._v("Install from VSIX...")]),e._v(".")]),e._v(" "),o("li",[e._v("Use the file picker that pops up to navigate to and select the VSIX file you downloaded, and then click "),o("strong",[e._v("Install")]),e._v(".")]),e._v(" "),o("li",[e._v("The extension should be installed from the VSIX file.")])]),e._v(" "),o("h3",{attrs:{id:"verifying-the-installation-of-ibm-z-open-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#verifying-the-installation-of-ibm-z-open-editor"}},[e._v("#")]),e._v(" Verifying the installation of IBM Z Open Editor")]),e._v(" "),o("p",[e._v("To quickly test whether IBM Z Open Editor is installed correctly, you can open a COBOL, PL/I, HLASM, or REXX program file on your machine. If you do not have such files on your machine, you can clone the sample repository as described in the "),o("RouterLink",{attrs:{to:"/Docs/samplefiles.html"}},[e._v("Exploring the sample files")]),e._v(" section and open its COBOL, PL/I, HLASM, or REXX program files. If you see syntax highlighting on COBOL, PL/I, HLASM, or REXX code, the extension is working correctly.")],1),e._v(" "),o("h3",{attrs:{id:"configuring-java"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-java"}},[e._v("#")]),e._v(" Configuring Java")]),e._v(" "),o("p",[e._v("The IBM Z Open Editor Welcome page will show you if Java was found successfully. To open the Welcome page, press Ctrl+Shift+P (Windows) or Cmd+Shift+P (MacOS), and type "),o("strong",[e._v("IBM Z Open Editor: Welcome")]),e._v(". Check the prerequisites table on the page, and click the Java section to expand.")]),e._v(" "),o("p",[e._v("The COBOL, PL/I, HLASM, and REXX language servers used by IBM Z Open Editor were implemented using the Java programming language. Therefore, a Java Runtime is required to be available via settings or the program path to start in VS Code. The IBM Z Open Editor extension uses VS Code Settings properties, which can be added to VS Code user settings, to configure which and how Java should be used. These settings allow you to select the specific installation of Java to pick, in case you have several installations, as well as set parameters such as how much memory you want the extension to use.")]),e._v(" "),o("h4",{attrs:{id:"selecting-the-java-installation-to-use"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#selecting-the-java-installation-to-use"}},[e._v("#")]),e._v(" Selecting the Java installation to use")]),e._v(" "),o("p",[e._v("Before starting a language server, the language server clients in the IBM Z Open Editor VS Code extension try looking in different places to find a matching Java installation. They will look in the following places in this specific order and pick the first Java installation that is at least version 8 and 64 Bit. If it finds a Java that fails the test against these criteria, it will continue searching.")]),e._v(" "),o("ol",[o("li",[e._v("The "),o("code",[e._v("zopeneditor.JAVA_HOME")]),e._v(" VS Code user setting")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("java.home")]),e._v(" VS Code user setting")]),e._v(" "),o("li",[e._v("The "),o("code",[e._v("JAVA_HOME")]),e._v(" environment variable")]),e._v(" "),o("li",[e._v("The PATH defined for the environment in which Z Open Editor runs, that is, you default Windows or MacOS path")]),e._v(" "),o("li",[e._v("A typical platform-specific location. For example, on MacOS, execute the "),o("code",[e._v("/usr/libexec/java_home -V")]),e._v("; on Windows, run the "),o("code",[e._v("where java.exe")]),e._v(" commands to locate a valid Java installation.")])]),e._v(" "),o("p",[e._v("As you can see, user settings always take precedence over the other options listed, which enables you to specify a different Java version for IBM Z Open Editor than the default on your computer in case you have installed multiple versions. If you used the recommended "),o("a",{attrs:{href:"https://code.visualstudio.com/docs/languages/java#_install-visual-studio-code-for-java",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code for Java Installer"),o("OutboundLink")],1),e._v(", the "),o("code",[e._v("java.home")]),e._v(" user setting was set by this installer.")]),e._v(" "),o("p",[e._v("If Java cannot be located, check the VS Code Output view's Z Open Editor tab for any error and try to fix the problem by either setting the "),o("code",[e._v("JAVA_HOME")]),e._v(" environment variable or creating an entry in your VS Code user settings.")]),e._v(" "),o("p",[e._v("To define a user setting, use the "),o("strong",[e._v("Preferences")]),e._v(" > "),o("strong",[e._v("Settings")]),e._v(" menu and either locate the setting in the graphical editor under IBM Z Open Editor or edit the setting JSON file directly by adding an entry as follows using an absolute path name to the Java installation directory.")]),e._v(" "),o("p",[e._v("On MacOS:")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.JAVA_HOME"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home"')]),e._v("\n")])])]),o("p",[e._v("On Windows:")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.JAVA_HOME"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"C:\\\\Program Files\\\\Java\\\\jdk1.8.0_181"')]),e._v("\n")])])]),o("h4",{attrs:{id:"configuring-the-java-memory-allocation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-java-memory-allocation"}},[e._v("#")]),e._v(" Configuring the Java memory allocation")]),e._v(" "),o("p",[e._v("By default, the language server clients that start the language servers for COBOL, PL/I, HLASM, or REXX allocate a maximum of 512 MB of memory for each. In other words, they start using much less memory in the beginning, but you might run out of memory when working on large program files; or your computer might not support such a large amount of memory in the first place. To have more flexibility in how much memory the language servers are allowed to allocate, use the following VS Code settings to specify the maximum value. For example, when you use both COBOL and PL/I, you need to double the amount specified as follows:")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.server.memoryAllocation"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),e._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);