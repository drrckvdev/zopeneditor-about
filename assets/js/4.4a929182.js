(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{337:function(e,t,r){e.exports=r.p+"assets/img/hlasm-completion.fadb3a30.gif"},338:function(e,t,r){e.exports=r.p+"assets/img/hlasm-hover.790b17af.gif"},339:function(e,t,r){e.exports=r.p+"assets/img/hlasm-definition.a3dca10f.gif"},340:function(e,t,r){e.exports=r.p+"assets/img/hlasm-copy.286cfa75.gif"},341:function(e,t,r){e.exports=r.p+"assets/img/hlasm-references.5c2e4df2.gif"},342:function(e,t,r){e.exports=r.p+"assets/img/hlasm-outline.10effc2b.gif"},343:function(e,t,r){e.exports=r.p+"assets/img/hlasm-tabs.c6d77789.gif"},397:function(e,t,r){"use strict";r.r(t);var o=r(33),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ibm-z-open-editor-a-modern-ide-for-ibm-high-level-assembler"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ibm-z-open-editor-a-modern-ide-for-ibm-high-level-assembler"}},[e._v("#")]),e._v(" IBM Z Open Editor: A modern IDE for IBM High Level Assembler")]),e._v(" "),o("blockquote",[o("p",[e._v("By Daniel Beall")])]),e._v(" "),o("p",[e._v("It may seem that an assembler editor simply needs syntax highlighting. After all, don't assembler programmers need only the most spartan of tools? However, after collaborating with IBMer assembler experts Brenton Belmar, a STSM of the zMilicode Team, Mike Fulton, a DE and "),o("a",{attrs:{href:"https://makingdeveloperslivesbetter.wordpress.com/2019/09/09/ibm-z-open-automation-utilities/",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Z Open Automation Utilities"),o("OutboundLink")],1),e._v(" creator, and Walter Church of the z/VM team, this sentiment could not be proven more wrong. We found that assembler deserves, just like COBOL and PL/I (two languages our IBM Z Open Editor also supports), much more attention. The IBM Z Open Editor adds, with version 1.0 available June 12th, 2020, a new language server for IBM High Level Assembler (HLASM), bringing support for developers who want to use Visual Studio Code or "),o("a",{attrs:{href:"https://www.ibm.com/products/wazi-for-red-hat-codeready-workspaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("Red Hat CodeReady Workspaces"),o("OutboundLink")],1),e._v(" to develop and maintain their applications.")]),e._v(" "),o("p",[e._v("Before we dive into the specifics of our assembler support, you might be wondering what exactly language servers and the Z Open Editor are. "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Z Open Editor"),o("OutboundLink")],1),e._v(' is an extension for Visual Studio Code that provides language support for IBM Enterprise COBOL and PL/I. The language server is what "powers" our tooling for languages like COBOL, PL/I, and now HLASM. Language\nservers are implementations of language server protocol which is an initiative to standardize communication between editors and programming language tooling.')]),e._v(" "),o("p",[e._v("The process of building a language server for HLASM and adding it to our extension was not trivial, and we could not have done it without listening to users. From Brenton, Mike, and Walter, we discovered several important points about assembler:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("HLASM has very advanced features compared to traditional assembly languages such as macros, copybooks, and conditional \t  assembler.")])]),e._v(" "),o("li",[o("p",[e._v("HLASM programs can be very large. We found assembler programs with upwards of thirty thousand lines of code and of symbols. Navigating and exploring such large programs requires the ability to have indexes in the form of outline views and cross-refencing support in the editor that is language aware and goes beyond simple search.")])]),e._v(" "),o("li",[o("p",[e._v("z/Architecture is a CISC, or complex instruction set computer-architecture, with a myriad of instructions. In addition to bread-and-butter instructions, the latest mainframes support state-of-the-art "),o("a",{attrs:{href:"https://www.ibm.com/support/pages/sites/default/files/support/swg/swgtech.nsf/0/7df1aa86f5dbfd3085257ac0004ef2e6/%24FILE/Transactional_Execution_Facility.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("hardware transactional memory"),o("OutboundLink")],1),e._v(", cryptographic, and SIMD instructions. The programmer must be able tohave code completion for instructions as well as inspect them.")])])]),e._v(" "),o("p",[e._v("It's clear the collaborative process helped us keep the uniqueness of assembler in mind. While designing the outline view, we experimented with including every symbol within a program. However, after better learning our user's needs, we found that it is better to simply have only CSECTs, DSECTs, and macros in the outline view. Often, if every symbol were to be included, the outline view would become extremely cluttered. The outline view is not the only feature where we've kept assembler's distinctiveness firmly in mind. In our code completion, we include reference information about assembler instructions. And, last but not least, we have included configurable vertical bars and tab stops to help users easily 'eyeball' sequence numbers and continuation line indicators. We feel these features will help assembler programmers, both veterans and novices alike, have a better experience working with language in our editor.")]),e._v(" "),o("h2",{attrs:{id:"editor-features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#editor-features"}},[e._v("#")]),e._v(" Editor Features")]),e._v(" "),o("p",[e._v("Let me walk you through some of the capabilities we added and how we think they can be useful for assembler developers.")]),e._v(" "),o("p",[e._v("Code Completion: When typing an instruction or operand, the editor will suggest instructions or symbol names. Since HLASM has over a thousand instructions, we found this to be very useful for quickly searching for relevant instructions.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(337),alt:"COMPLETION GIF"}})]),e._v(" "),o("p",[e._v("Hover: Never worry about having to scroll to find the contents of a symbol again. To preview the contents of an operand symbol, simply move your mouse cursor over the symbol.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(338),alt:"HOVER GIF"}})]),e._v(" "),o("p",[e._v("Go to Definition: To go to where a symbol is defined, simply right click an operand symbol, and click 'Go to Definition.' This is very convenient for large assembler programs. Having to scroll through a program or press Ctrl +F (Windows) or Cmd+F (Mac) to search through every use of a symbol is very tedious in comparison.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(339),alt:"GO TO DEFINITION GIF"}})]),e._v(" "),o("p",[e._v("Copybook Resolution: To preview the contents of a copybook, move your mouse cursor over the copybook name in a COPY statement. You can also open the copybook in a separate editor by pressing Ctrl+Click (Windows) or Cmd+Click (Mac). To use this feature "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/setting_propertygroup.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("property groups"),o("OutboundLink")],1),e._v(" will have to be set.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(340),alt:"COPYBOOK GIF"}})]),e._v(" "),o("p",[e._v("Peek References: A results references view is displayed underneath symbols. Click any result to go to that location within a file.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(341),alt:"HLASM PEEK REFERENCES GIF"}})]),e._v(" "),o("p",[e._v("Outline View: Explore and navigate assembler code. Relevant macros, CSECTs, and DSECTs are shown in the outline view.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(342),alt:"HLASM OUTLINE GIF"}})]),e._v(" "),o("p",[e._v("Configurable Vertical Rulers and Tabstops: Easily navigate within a line. Press Tab to move forward and Shift+Tab to move backwards.\nVertical rulers are included by default. Please see our "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/setting_tabstops.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),o("OutboundLink")],1),e._v(" to adjust vertical rulers and tabstops from defaults.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(343),alt:"HLASM RULERS AND TABSTOPS GIF"}})]),e._v(" "),o("p",[o("strong",[e._v("Excited to try the Z Open Editor with HLASM support? Here's how")])]),e._v(" "),o("p",[e._v("First, find out more about our editor at our "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("About Page"),o("OutboundLink")],1),e._v(", and then see a full list of features on our "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation Page"),o("OutboundLink")],1),e._v(". Next, please ensure "),o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/getting_started.html#prerequisites",target:"_blank",rel:"noopener noreferrer"}},[e._v("prerequisites"),o("OutboundLink")],1),e._v(" for our editor are installed. Then, download the extension through the "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=IBM.zopeneditor",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code Marketplace"),o("OutboundLink")],1),e._v(". Once the extension is installed, open an assembler file of your choice, or one of our "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("samples"),o("OutboundLink")],1),e._v(". The editor should offer syntax highlighting and the features described above.")]),e._v(" "),o("h2",{attrs:{id:"we-would-love-to-hear-from-you"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#we-would-love-to-hear-from-you"}},[e._v("#")]),e._v(" We would love to hear from you")]),e._v(" "),o("p",[e._v("We're incredibly thankful for having the opportunity to work with assembler experts such as Brenton, Walter, and Mike. But, at the same time, we want to better meet the needs of users external to IBM. We greatly welcome any feedback about our editor and how you and your organization are using assembler.")]),e._v(" "),o("p",[e._v("Having said that, we've created two ways for you to easily provide your comments:")]),e._v(" "),o("p",[e._v("1. Take our "),o("a",{attrs:{href:"http://ibm.biz/HLASMsurvey",target:"_blank",rel:"noopener noreferrer"}},[e._v("survey"),o("OutboundLink")],1),e._v(" about HLASM editors and tooling.")]),e._v(" "),o("p",[e._v("2. For any questions, issues, or enhancement ideas, please do not hesitate to open an issue at our "),o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-about/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub page"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("We're looking forward to hearing from you and appreciate any feedback to improve this solution and help you be more productive.")]),e._v(" "),o("h2",{attrs:{id:"further-resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#further-resources"}},[e._v("#")]),e._v(" Further Resources")]),e._v(" "),o("p",[e._v("In addition to trying our editor, we invite you to sample further resources related to mainframe hardware, the Z Open Editor, and HLASM.")]),e._v(" "),o("ul",[o("li",[e._v("Blog post about "),o("a",{attrs:{href:"https://www.ibm.com/cloud/blog/announcements/ibm-wazi-for-red-hat-codeready-workspaces",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBM Wazi for Red Hat CodeReady Workspaces"),o("OutboundLink")],1),e._v(" by IBM Vice President Danny Mace")]),e._v(" "),o("li",[o("a",{attrs:{href:"http://terminaltalk.net/PodcastGenerator/index.php?name=2017-07-22_episode_6_-_brenton_belmar_-_mainframe_millicode_-_7_24_2017.mp3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mainframe Milicode Podcast"),o("OutboundLink")],1),e._v(" with Brenton Belmar")]),e._v(" "),o("li",[o("a",{attrs:{href:"http://terminaltalk.net/PodcastGenerator/index.php?name=anne_dames_-_z_crypto.mp3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z Crypto Podcast"),o("OutboundLink")],1),e._v(" with Anne Dames")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://ibm.github.io/zopeneditor-about/Docs/tutorial_hlasm.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Assembler Tutorial"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/IBM/zopeneditor-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("Z Open Editor Assembler Code Samples"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);