(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{288:function(e,t,a){e.exports=a.p+"assets/img/rse-create-ds.c76fb114.gif"},377:function(e,t,a){"use strict";a.r(t);var o=a(33),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"using-the-zowe-explorer-views"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-zowe-explorer-views"}},[e._v("#")]),e._v(" Using the Zowe Explorer views")]),e._v(" "),o("p",[e._v("When you have the Zowe Explorer VS Code extension installed, you can open the following three views by clicking the Zowe icon on the VS Code Activity bar to interact with z/OS resources:")]),e._v(" "),o("ul",[o("li",[e._v("DATA SETS view that shows your data sets and members and allows you to directly open, edit, and save your programs against MVS™.")]),e._v(" "),o("li",[e._v("UNIX SYSTEM SERVICES (USS) view that shows you USS folders and files that you can also directly open, edit, and save.")]),e._v(" "),o("li",[e._v("JOBS view that gives you access to your jobs and spool files.")])]),e._v(" "),o("p",[e._v("See the "),o("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=Zowe.vscode-extension-for-zowe",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation in the VS Code Marketplace"),o("OutboundLink")],1),e._v(" for details on using and configuring each view. More examples are available in the section "),o("a",{attrs:{href:"#example-how-to-manipulate-data-sets-with-zowe-explorer"}},[e._v("How to manipulate data sets with Zowe Explorer")]),e._v(" and "),o("RouterLink",{attrs:{to:"/Docs/zowe_submitjcl.html"}},[e._v("Submitting JCL to compile, link, and run jobs")]),e._v(" sections.")],1),e._v(" "),o("p",[e._v("When you install IBM Z Open Editor from the VS Code marketplace into your VS Code, the latest version of Zowe Explorer is automatically co-installed.")]),e._v(" "),o("h2",{attrs:{id:"setting-up-using-profiles-in-zowe-explorer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-using-profiles-in-zowe-explorer"}},[e._v("#")]),e._v(" Setting up using profiles in Zowe Explorer")]),e._v(" "),o("p",[e._v("To use Zowe Explorer, you must have at least one z/OSMF profile or RSE profile.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("To use Zowe CLI z/OSMF profiles with Zowe Explorer, see "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/ze-profiles.html#working-with-zowe-explorer-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with user profiles"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Starting from Zowe Explorer 1.6, you can also use the RSE API protocol with Zowe Explorer to graphically navigate and access file and job resources. To use IBM Z Open Editor and Zowe Explorer with RSE profiles, see "),o("a",{attrs:{href:"#using-rse-api-in-zowe-explorer"}},[e._v("Using RSE API in Zowe Explorer")]),e._v(".")])])]),e._v(" "),o("p",[e._v("You can also mix and match z/OSMF and RSE CLI API profiles and use CLI commands and Zowe Explorer views with the different profiles at the same time. For example, you can access one LPAR with z/OSMF and another with RSE API from within the same VS Code workspace using Zowe Explorer and IBM Z Open Editor. IBM Z Open Editor capabilities such as COBOL copybook or PL/I include file resolving can be used with either of the two protocols as well.")]),e._v(" "),o("h3",{attrs:{id:"using-rse-api-in-zowe-explorer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-rse-api-in-zowe-explorer"}},[e._v("#")]),e._v(" Using RSE API in Zowe Explorer")]),e._v(" "),o("p",[e._v("Follow this procedure to use RSE CLI plug-in with Zowe Explorer so that you can graphically navigate and access file and job resources.")]),e._v(" "),o("h4",{attrs:{id:"setting-up-and-using-rse-profiles"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-and-using-rse-profiles"}},[e._v("#")]),e._v(" Setting up and using RSE profiles")]),e._v(" "),o("p",[e._v("To use RSE profiles in Zowe Explorer and IBM Z Open Editor, complete the following procedures:")]),e._v(" "),o("h5",{attrs:{id:"setting-up-and-using-rse-profiles-in-zowe-explorer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-and-using-rse-profiles-in-zowe-explorer"}},[e._v("#")]),e._v(" Setting up and using RSE profiles in Zowe Explorer")]),e._v(" "),o("p",[e._v("Follow these steps to create or add an RSE profile in Zowe Explorer:")]),e._v(" "),o("ol",[o("li",[e._v("Switch to the Zowe Explorer Activity Group in VS Code.")]),e._v(" "),o("li",[e._v("Click the "),o("strong",[e._v("+")]),e._v(" icon and select the RSE profile by its name or create an RSE profile using the GUI.")])]),e._v(" "),o("p",[e._v("With Zowe Explorer's GUI, you can create an RSE profile in the same way as creating a z/OSMF profile. For help on creating a profile using Zowe Explorer's GUI, see "),o("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/ze-profiles.html#working-with-zowe-explorer-profiles",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with user profiles"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Then, you can use the RSE profile for connection as you did with a z/OSMF profile. All the same operations are available with RSE API.")]),e._v(" "),o("h5",{attrs:{id:"setting-up-and-using-rse-profiles-in-ibm-z-open-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-and-using-rse-profiles-in-ibm-z-open-editor"}},[e._v("#")]),e._v(" Setting up and using RSE profiles in IBM Z Open Editor")]),e._v(" "),o("p",[e._v("You can use RSE profiles for IBM Z Open Editor operations. For example, if you edit a COBOL program and have defined "),o("RouterLink",{attrs:{to:"/Docs/setting_propertygroup.html"}},[e._v("property groups")]),e._v(" to dynamically retrieve contents of copybooks from MVS, then you can use your RSE profile for that access operation instead of the default z/OSMF CLI profile. The default precedence rules to identify which CLI profile to use are as follows:")],1),e._v(" "),o("ol",[o("li",[e._v("Use the profile that is specified by the "),o("code",[e._v("zopeneditor.zowe")]),e._v(" user setting.")]),e._v(" "),o("li",[e._v("If the profile above is not defined, then use the default RSE profile if available.")]),e._v(" "),o("li",[e._v("If the default RSE profile is not available, then use the default z/OSMF profile if available. If the default z/OSMF profile is not defined, errors are shown.")])]),e._v(" "),o("p",[e._v("The format of the "),o("code",[e._v("zopeneditor.zowe")]),e._v(" user setting is as follows:")]),e._v(" "),o("div",{staticClass:"language-json extra-class"},[o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",[o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zopeneditor.zowe"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"defaultCliProfile"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"rseCLI"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),o("p",[e._v("The value of "),o("code",[e._v("defaultCliProfile")]),e._v(" is the name of the CLI profile that you specified in the create statement above. If you cannot remember the names, then you can run this command to get the list of all your profiles and your default profile.")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("zowe profiles list rse\n")])])]),o("h2",{attrs:{id:"using-zowe-explorer-views-to-interact-with-z-os"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-zowe-explorer-views-to-interact-with-z-os"}},[e._v("#")]),e._v(" Using Zowe Explorer views to interact with z/OS")]),e._v(" "),o("p",[e._v("When you connect to the host with either a z/OSMF profile or an RSE profile, you can view a tree list of data sets, members in the DATA SETS view, UNIX files and directories in the UNIX SYSTEM SERVICES (USS) view, and jobs with spool files in the JOBS view.")]),e._v(" "),o("p",[e._v("In the three views provided by Zowe Explorer, you can perform the following tasks:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Create, edit, save, rename, delete data sets, members, UNIX files, and directories on the host. For instance:")]),e._v(" "),o("p",[o("img",{attrs:{src:a(288),alt:"Creating a New Data Set"}})]),e._v(" "),o("p",[e._v("For more information about managing data sets, see "),o("a",{attrs:{href:"#example-how-to-manipulate-data-sets-with-zowe-explorer"}},[e._v("How to manipulate data sets with Zowe Explorer")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Upload local files as a partitioned data set member or as a sequential data set.")])]),e._v(" "),o("li",[o("p",[e._v("Submit JCL data sets or members as a job. Delete jobs. Download job spool files from the host to a local directory, and view them in the text editor.")])])]),e._v(" "),o("h2",{attrs:{id:"example-how-to-manipulate-data-sets-with-zowe-explorer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-how-to-manipulate-data-sets-with-zowe-explorer"}},[e._v("#")]),e._v(" Example: How to manipulate data sets with Zowe Explorer")]),e._v(" "),o("p",[e._v("When you are connected to Zowe with a z/OSMF profile or an RSE profile, you can work with your COBOL, PL/I, and HLASM data sets in Zowe Explorer.")]),e._v(" "),o("p",[e._v("Switch to Zowe Explorer to see the DATA SETS view by clicking the Zowe icon on the Activity bar. If the DATA SETS view is not opened by default, right-click one of the headers, and select the checkbox "),o("strong",[e._v("Data Sets")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Prerequisite")]),e._v(": Before working on your data sets, you must connect to the Zowe server by expanding the node in the explorer that has the name of the connection profile you created. A list of existing profiles is shown.")]),e._v(" "),o("h3",{attrs:{id:"creating-data-sets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-data-sets"}},[e._v("#")]),e._v(" Creating data sets")]),e._v(" "),o("p",[e._v("The data set is created with the parameters defined in the User Preferences. To create a data set, complete the following steps:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Hover over the preferred profile name and select the "),o("strong",[e._v("Create New Data Set")]),e._v(" icon.")])]),e._v(" "),o("li",[o("p",[e._v("Select one option from the menu such as "),o("strong",[e._v("Data Set Binary")]),e._v(", "),o("strong",[e._v("Data Set C")]),e._v(", "),o("strong",[e._v("Data Set Classic")]),e._v(", "),o("strong",[e._v("Data Set Partitioned")]),e._v(", "),o("strong",[e._v("Data Set Sequential")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Provide a name such as "),o("code",[e._v("USER1.SAMPLE.COBOL")]),e._v(". Use your actual username instead of USER1 and click Ok.")])]),e._v(" "),o("li",[o("p",[e._v("A new data set appears in the DATA SETS view. You might need to refresh the browser to see the new data set.")])])]),e._v(" "),o("h3",{attrs:{id:"creating-new-data-set-members"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-new-data-set-members"}},[e._v("#")]),e._v(" Creating new data set members")]),e._v(" "),o("ol",[o("li",[e._v("Right-click the PDS and select "),o("strong",[e._v("Create New Member")]),e._v(".")]),e._v(" "),o("li",[e._v("Provide a name for the new member and press Enter.")]),e._v(" "),o("li",[e._v("Expand the PDS to see the new member.")])]),e._v(" "),o("h3",{attrs:{id:"migrating-and-recalling-data-sets"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-and-recalling-data-sets"}},[e._v("#")]),e._v(" Migrating and recalling data sets")]),e._v(" "),o("p",[e._v("To migrate a data set, right-click a data set and select "),o("strong",[e._v("Migrate Data Set")]),e._v(". An informational message then appears stating "),o("code",[e._v("Migration of dataset: USER1.SAMPLE.COBOL requested.")]),e._v(".")]),e._v(" "),o("p",[e._v("To recall a data set, right-click a data set that has been migrated and select "),o("strong",[e._v("Recall Data Set")]),e._v(". An informational message then appears stating "),o("code",[e._v("Recall of dataset: USER1.SAMPLE.COBOL requested.")]),e._v(".")]),e._v(" "),o("p",[e._v("You can verify the status with either of the following ways:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Refresh the DATA SETS view.")]),e._v(" "),o("ul",[o("li",[e._v("A migrated data set will have a greyed out file icon.")]),e._v(" "),o("li",[e._v("A recalled data set's icon will return to normal.")])])]),e._v(" "),o("li",[o("p",[e._v("Right-click the data set and select "),o("strong",[e._v("Show Data Set Attributes")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("For a migrated data set, the attributes will show the value "),o("code",[e._v("migr: YES")]),e._v(".")]),e._v(" "),o("li",[e._v("For a recalled data set, the attributes will show the value "),o("code",[e._v("migr: NO")]),e._v(".")])])])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" If the data set migration or recall does not work, contact your system administrator to ensure HSM is active on the host system.")]),e._v(" "),o("h3",{attrs:{id:"deleting-data-sets-or-data-set-members"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deleting-data-sets-or-data-set-members"}},[e._v("#")]),e._v(" Deleting data sets or data set members")]),e._v(" "),o("ol",[o("li",[e._v("Right-click the data set or member to delete.")]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Delete PDS")]),e._v(" or "),o("strong",[e._v("Delete Member")]),e._v(".")]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Yes")]),e._v(" to confirm the deletion.")])]),e._v(" "),o("h3",{attrs:{id:"adding-or-removing-favorites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adding-or-removing-favorites"}},[e._v("#")]),e._v(" Adding or removing favorites")]),e._v(" "),o("ol",[o("li",[e._v("Right-click a resource, for example, a data set, folder, job, or profile.")]),e._v(" "),o("li",[e._v("Select "),o("strong",[e._v("Add to Favorites")]),e._v(" or "),o("strong",[e._v("Remove Favorite")]),e._v(" to add to or remove from the Favorites tree.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);