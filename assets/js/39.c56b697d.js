(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{478:function(e,t,o){"use strict";o.r(t);var r=o(42),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("IBM Z® Open Editor is an extension for Visual Studio Code that provides language support for the IBM® Enterprise "),o("a",{attrs:{href:"https://www.ibm.com/marketplace/ibm-cobol",target:"_blank",rel:"noopener noreferrer"}},[e._v("COBOL 6.3"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://www.ibm.com/marketplace/pli-compiler-zos",target:"_blank",rel:"noopener noreferrer"}},[e._v("PL/I 5.3"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://www.ibm.com/marketplace/high-level-assembler-and-toolkit-feature",target:"_blank",rel:"noopener noreferrer"}},[e._v("High Level Assembler for z/OS 2.4"),o("OutboundLink")],1),e._v(", and "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/en/SSLTBW_2.4.0/com.ibm.zos.v2r4.ikjc300/abstract.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("z/OS 2.4.0 TSO/E REXX"),o("OutboundLink")],1),e._v(" programming languages for z/OS®. This also includes capabilities for embedded statements for CICS 5.6, IMS 15.1.0 and SQL DB2 for z/OS 12.1. Earlier versions of any of these components will also work.")]),e._v(" "),o("p",[e._v("The extension realizes its language support by implementing fully functional "),o("a",{attrs:{href:"https://langserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("language servers"),o("OutboundLink")],1),e._v(" together with additional editor enhancements that enable mainframe developers to utilize features such as:")]),e._v(" "),o("ul",[o("li",[e._v("Real-time syntax checking and highlighting while you type")]),e._v(" "),o("li",[e._v("Problems view with all syntax errors and (in COBOL) unreachable code")]),e._v(" "),o("li",[e._v("Outline view and outline search")]),e._v(" "),o("li",[e._v("For both variables and paragraphs:\n"),o("ul",[o("li",[e._v("Declaration hovers")]),e._v(" "),o("li",[e._v("Peek definition")]),e._v(" "),o("li",[e._v("Go to definition")]),e._v(" "),o("li",[e._v("Find all references")])])]),e._v(" "),o("li",[e._v("Code and variable completion")]),e._v(" "),o("li",[e._v("Finding and navigating references")]),e._v(" "),o("li",[e._v("Previewing of copybooks and include files")]),e._v(" "),o("li",[e._v("Navigate to copybooks and include files")]),e._v(" "),o("li",[e._v('Refactoring such as "rename symbol"')]),e._v(" "),o("li",[e._v("Custom code snippet support and more than 200 example code snippets out of the box")]),e._v(" "),o("li",[e._v("Search and replace refactoring across multiple program files")])]),e._v(" "),o("p",[e._v("Notes:")]),e._v(" "),o("ul",[o("li",[e._v("For HLASM, a significant subset of the capabilities that are available for COBOL and PL/I are supported.")]),e._v(" "),o("li",[e._v("For REXX, a smaller subset of the capabilities are supported")]),e._v(" "),o("li",[e._v("For "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/zosbasics/com.ibm.zos.zconcepts/zconc_whatisjcl.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Job Control Language (JCL)"),o("OutboundLink")],1),e._v(", IBM Z Open Editor provides syntax highlighting.")])]),e._v(" "),o("p",[e._v("For a list of the enabled LSP features and in-progress features, see "),o("RouterLink",{attrs:{to:"/Docs/knownissues.html"}},[e._v("Known issues and limitations")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("New with IBM Z Open Editor 0.4.7 or later")]),e._v(": "),o("RouterLink",{attrs:{to:"/Docs/rse_tutorial.html"}},[e._v("IBM Remote System Explorer API")]),e._v(" support.")],1),e._v(" "),o("h2",{attrs:{id:"key-capabilities"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#key-capabilities"}},[e._v("#")]),e._v(" Key Capabilities")]),e._v(" "),o("p",[e._v("These are the key features and benefits of IBM Z Open Editor:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Modern editing experience for COBOL, PL/I, HLASM, and REXX development")]),e._v(" "),o("p",[e._v("IBM Z Open Editor is available as an extension for Visual Studio Code (VS Code), which is becoming the most popular development environment according to recent surveys. With so many current and next generation developers having experience with VS Code, IBM Enterprise language support in VS Code makes enterprise programming more attractive and productive by allowing developers to use this popular editor, with the option to integrate numerous other extensions from the VS Code Marketplace.")])]),e._v(" "),o("li",[o("p",[e._v("Full language support via the Language Server Protocol (LSP)")]),e._v(" "),o("p",[e._v("The extension supports many COBOL, PL/I, HLASM, and REXX capabilities that were not available in traditional editing environments such as "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/zosbasics/com.ibm.zos.zconcepts/zconcepts_138.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISPF"),o("OutboundLink")],1),e._v(", by providing "),o("a",{attrs:{href:"https://langserver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Language Server Protocol"),o("OutboundLink")],1),e._v(" implementations. See above for the list of key features. Although supported by many other editors now, the Language Server Protocol was specifically created for VS Code and therefore is a good way for providing language support in the editor.")])]),e._v(" "),o("li",[o("p",[e._v("Extended language server capabilities for more productivity")]),e._v(" "),o("p",[e._v("In addition to the capabilities specified in the Language Server Protocol, the implementation is extended with more capabilities that are useful to enterprise developers. For example, you can use hovers for COBOL "),o("code",[e._v("COPY")]),e._v(", PL/I "),o("code",[e._v("%INCLUDE")]),e._v(", and HLASM "),o("code",[e._v("COPY")]),e._v(" statements to preview the contents of the copybooks without opening in separate editor tabs and navigating away from your current editing position.")])]),e._v(" "),o("li",[o("p",[e._v("Integration with modern Software Configuration Management (SCM)")]),e._v(" "),o("p",[e._v("Even if your organization does not standardize on an SCM, using the Git that is integrated in VS Code or using popular extensions such as "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitLens"),o("OutboundLink")],1),e._v(' locally in a workspace will boost your productivity. You can work on COBOL, PL/I, HLASM, and REXX programs on your local workspace and snapshot work at any point, go back or branch into alternative explorations, merge your or your colleagues\' branches back in, or revert to any earlier state of your code in a flash. Use side-by-side views and "blame" annotations to explore the changes between snapshots, how they looked before, and the time of changes. See exactly for each line when it was last changed and by whom. Explore the entire history of all changes for a specific file or all files in your workspace in a chronological history viewer.')])]),e._v(" "),o("li",[o("p",[e._v("z/OS interactions using the open source Zowe clients")]),e._v(" "),o("p",[e._v("If you have z/OSMF or "),o("RouterLink",{attrs:{to:"/Docs/setup_integration.html#installing-the-requisite-ibm-rse-api-z-os-host-component"}},[e._v("IBM Remote System Explorer API (RSE API)")]),e._v(" configured, you can use "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI"),o("OutboundLink")],1),e._v(", the "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/ze-install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe Explorer VS Code Extension (Zowe Explorer)"),o("OutboundLink")],1),e._v(", or both, to load and edit your files directly from z/OS or download them into your local workspace and then upload the changed files into the same or new data sets to compile and run your application. You can do all of these operations from IBM Z Open Editor directly with right-clicks and dialog interactions, and perform command-line operations using the VS Code Terminal view that integrates right below your editor, giving you one central view to everything.")],1),e._v(" "),o("p",[e._v("After configuration, IBM Z Open Editor can also take advantage of the Zowe CLI protocol for resolving dependencies over the network. For example, you can edit your COBOL programs locally, but resolve copybook dependencies directly out of MVS™ using the same Zowe connections.")])]),e._v(" "),o("li",[o("p",[e._v("IBM User Build")]),e._v(" "),o("p",[e._v("IBM User Build allows z/OS developers who have the IBM Dependency Based Build (DBB) host component to run user builds right from their local integrated development environment (IDE). With the User Build setting enabled in your IDE, you can access IBM User Build options simply by right-clicking inside a COBOL, PL/I, or HLASM file. Refer to the "),o("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSCH39_1.0.0/com.ibm.wazi.development.client.doc/setting_user_build.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("full IBM User Build documentation"),o("OutboundLink")],1),e._v(" to learn more about how to leverage User Build.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);