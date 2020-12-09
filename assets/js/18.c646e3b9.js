(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{307:function(e,t,a){e.exports=a.p+"assets/img/rse-help-web.d70ac510.png"},460:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"using-command-line-to-interact-with-z-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-command-line-to-interact-with-z-os"}},[e._v("#")]),e._v(" Using command line to interact with z/OS")]),e._v(" "),s("p",[e._v("You can use the Terminal window in VS Code to run command-line operations on your client. For example, you can use the terminal to perform file-based operations and execute any kind of "),s("a",{attrs:{href:"https://git-scm.com/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git commands"),s("OutboundLink")],1),e._v(" on your local files right from this terminal.")]),e._v(" "),s("p",[e._v("In addition, you can interact with z/OS® by using commands that are provided by IBM® RSE API plug-in for Zowe™ CLI (RSE CLI plug-in), Zowe CLI, or both in the Terminal window. These commands provide various capabilities for interacting with z/OS resources that include MVS™, jobs, and USS.")]),e._v(" "),s("p",[e._v("To open the Terminal window, click "),s("strong",[e._v("Terminal > New Terminal")]),e._v(" or press Ctrl+`. It is opened at the bottom below the editor and inside the working directory that contains all the files that are shown in the Files view.")]),e._v(" "),s("h2",{attrs:{id:"comparison-between-zowe-cli-and-rse-cli-plug-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comparison-between-zowe-cli-and-rse-cli-plug-in"}},[e._v("#")]),e._v(" Comparison between Zowe CLI and RSE CLI plug-in")]),e._v(" "),s("p",[e._v("Both of Zowe CLI and RSE CLI plug-in provide the commands, with slight differences in command names and options, to let you perform the following tasks:")]),e._v(" "),s("ul",[s("li",[e._v("List, create, rename, delete USS files and directories and MVS data sets and members")]),e._v(" "),s("li",[e._v("Run JCL jobs")]),e._v(" "),s("li",[e._v("Browse job spool files")])]),e._v(" "),s("p",[e._v("Though the capabilities of Zowe CLI and RSE CLI plug-in are similar, the installation and configuration requirements are different:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("To use the commands provided by Zowe CLI to interact with z/OS, you must "),s("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/systemrequirements-zosmf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("configure z/OSMF"),s("OutboundLink")],1),e._v(" before you install Zowe CLI.")])]),e._v(" "),s("li",[s("p",[e._v("RSE CLI plug-in extends Zowe CLI to let you interact with z/OS resources by using IBM Remote System Explorer API (RSE API) as an alternative to using z/OSMF. The RSE API is a collection of REST APIs that allow a client to work with various components on the z/OS host system, including MVS data sets, z/OS UNIX files and commands, JES jobs, and more. The overall solution results in a complete set of operations that allows you to do everything as you could do with z/OSMF. Therefore, RSE CLI plug-in is a great alternative if you have used the Remote System Explorer API with other IBM offerings such as IBM Developer for z/OS or IBM Explorer for z/OS.")])])]),e._v(" "),s("p",[e._v("For more information about the commands provided by Zowe CLI and RSE CLI plug-in, see the "),s("RouterLink",{attrs:{to:"/Docs/rse_cli_command.html"}},[e._v("command mapping table")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"using-rse-cli-plug-in-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-rse-cli-plug-in-commands"}},[e._v("#")]),e._v(" Using RSE CLI plug-in commands")]),e._v(" "),s("h3",{attrs:{id:"prerequisites-installing-rse-cli-plug-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-installing-rse-cli-plug-in"}},[e._v("#")]),e._v(" Prerequisites: Installing RSE CLI plug-in")]),e._v(" "),s("p",[e._v("To install RSE CLI plug-in, see the "),s("RouterLink",{attrs:{to:"/Docs/setup_integration.html#installing-ibm-rse-api-plug-in-for-zowe-cli"}},[e._v("Installing IBM RSE API Plug-in for Zowe CLI")]),e._v(" section in topic Setting up integrations.")],1),e._v(" "),s("h3",{attrs:{id:"creating-an-rse-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-rse-profile"}},[e._v("#")]),e._v(" Creating an RSE profile")]),e._v(" "),s("p",[e._v("To avoid typing connection details on every command, you can create a user profile. You can create multiple profiles and switch between them if necessary. To create a profile via command line, issue the following command in the terminal:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe profiles create rse rseCLI --host host.company.com --port "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6800")]),e._v(" --user user --password password --base-path rseapi --reject-unauthorized "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v(" --protocol https --encoding IBM-1047\n")])])]),s("p",[s("strong",[e._v("Notes:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("rseCLI")]),e._v(": The name of the RSE profile. You can use any name that you want.")]),e._v(" "),s("li",[s("code",[e._v("--protocol")]),e._v(": To override the default value with HTTP, specify "),s("code",[e._v("--protocol http")]),e._v(". The default value is "),s("strong",[e._v("https")]),e._v(".")])]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("When setting up your profile, you must specify the protocol to be used by the RSE RESTful API.\nMake sure your administrator configured the z/OS Explorer RSE to use https for enhanced security.\nFor additional safety, set "),s("code",[e._v("rejectUnauthorized: true")]),e._v(" to reject self-signed certificates, which should not be trusted in production environments.")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("--reject-unauthorized")]),e._v(": To reject self-signed certificates, specify "),s("strong",[e._v("true")]),e._v(". The default value is "),s("strong",[e._v("false")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("--port")]),e._v(": The port on which RSE API is running on the host. The default value is "),s("strong",[e._v("6800")]),e._v(". If you do not know the port number, check with your system administrator.")]),e._v(" "),s("li",[s("code",[e._v("--base-path")]),e._v(": The base path of the API for the REST API operations. The default value is "),s("strong",[e._v("rseapi")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("--encoding")]),e._v(": The default host encoding for the profile. The default value is "),s("strong",[e._v("IBM-1047")]),e._v(".")])]),e._v(" "),s("p",[e._v("After the RSE profile is created, you can test if the connection with the IBM Remote System Explorer API is working by typing the command to list data sets, for example, "),s("code",[e._v("zowe rse list data-set HLQ")]),e._v(" where HLQ is a high-level qualifier or user ID that is accessible by the user ID in the profile that is created to view data sets.")]),e._v(" "),s("h3",{attrs:{id:"running-rse-cli-plug-in-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-rse-cli-plug-in-commands"}},[e._v("#")]),e._v(" Running RSE CLI plug-in commands")]),e._v(" "),s("p",[e._v("After installing RSE CLI plug-in, you can use it in a command-line window on your development machine. You can issue commands to perform the following tasks:")]),e._v(" "),s("ul",[s("li",[e._v("List, create, download, upload, and delete MVS data sets and members as well as USS files and directories.")]),e._v(" "),s("li",[e._v("Submit jobs, list jobs and spool files, download or view spool content, view job status, cancel a job, and delete a job.")])]),e._v(" "),s("p",[e._v("For example, after you created your RSE profile for the user "),s("code",[e._v("USER1")]),e._v(" and a data set with your COBOL programs called "),s("code",[e._v("USER1.SAMPLE.COBOL")]),e._v(", you can work on your MVS data sets with the following commands:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("List your data sets and members:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe rse "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" ds USER1\nzowe rse "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" all-members USER1.SAMPLE.COBOL\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Download members:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe rse download ds "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"USER1.SAMPLE.COBOL(SAM1)"')]),e._v("\n")])])]),s("p",[e._v("You will see that new folders appear on the left with the names based on your data set that contains the file SAM1. You can rename it by adding a "),s("code",[e._v(".cbl")]),e._v(" extension to edit it in the COBOL editor, and then upload it later using drag-and-drop or via the command line.")])]),e._v(" "),s("li",[s("p",[e._v("Check the status of your jobs:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe rse "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" js "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" ACTIVE\n")])])]),s("p",[e._v("The command above shows an example of how RSE CLI plug-in commands can be used in combination with other Linux® commands and scripts. This example returns the complete list of jobs and pipes that list into the Linux "),s("code",[e._v("grep")]),e._v(" command to filter it down to show only the active jobs. This kind of capability enables you to define all kinds of batch jobs and automation for remotely interacting with z/OS.")])])]),e._v(" "),s("p",[e._v("For the full list of available commands, see "),s("RouterLink",{attrs:{to:"/Docs/rse_cli_command.html"}},[e._v("IBM RSE API Plug-in for Zowe CLI commands")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"getting-help-about-commands-and-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-help-about-commands-and-options"}},[e._v("#")]),e._v(" Getting help about commands and options")]),e._v(" "),s("p",[e._v("To learn about a command and all options for the command, add "),s("code",[e._v("--help")]),e._v(" after the command. For instance, by specifying "),s("code",[e._v("zowe rse list --help")]),e._v(", you can see all the different items that can be listed and a help response like this in the terminal:")]),e._v(" "),s("div",{staticClass:"language-terminal extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("DESCRIPTION\n -----------\n\n   List uss file and folders, data sets and data set members, or jobs and spool\n   files. Optionally, you can list their details and attributes.\n\n USAGE\n -----\n\n   zowe rse-api-for-zowe-cli list <command>\n\n   Where <command> is one of the following:\n\n COMMANDS\n --------\n\n   all-members | am            List all members of a pds\n   data-set | ds               List data sets\n   jobs | js                   List z/OS jobs on JES spool/queues\n   spool-files-by-jobid | sfbj List spool files of a z/OS job\n   uss-files | uss             List USS files\n\nGLOBAL OPTIONS\n --------------\n\n   --response-format-json  | --rfj (boolean)\n\n      Produce JSON formatted data from a command\n\n   --help  | -h (boolean)\n\n      Display help text\n\n   --help-examples  (boolean)\n\n      Display examples for all the commands in a the group\n\n   --help-web  | --hw (boolean)\n\n      Display HTML help in browser\n\n")])])]),s("p",[e._v("If you want to view the help response in a web browser, enter "),s("code",[e._v("--help-web")]),e._v(", for example, "),s("code",[e._v("zowe rse list --help-web")]),e._v(".")]),e._v(" "),s("p",[s("img",{attrs:{src:a(307),alt:"Online Help rendered as a web page"}})]),e._v(" "),s("h2",{attrs:{id:"using-zowe-cli-z-osmf-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-zowe-cli-z-osmf-commands"}},[e._v("#")]),e._v(" Using Zowe CLI z/OSMF commands")]),e._v(" "),s("h3",{attrs:{id:"prerequisites-installing-zowe-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-installing-zowe-cli"}},[e._v("#")]),e._v(" Prerequisites: Installing Zowe CLI")]),e._v(" "),s("p",[e._v("To install Zowe CLI, see the "),s("RouterLink",{attrs:{to:"/Docs/setup_integration.html#installing-zowe-cli"}},[e._v("Installing Zowe CLI")]),e._v(" section in topic Setting up integrations.")],1),e._v(" "),s("h3",{attrs:{id:"creating-a-zowe-cli-z-osmf-profile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-zowe-cli-z-osmf-profile"}},[e._v("#")]),e._v(" Creating a Zowe CLI z/OSMF profile")]),e._v(" "),s("p",[e._v("Before using Zowe CLI, you must create a z/OSMF profile and connect to z/OS. Follow these steps to create a z/OSMF profile:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Issue this command with your hostname, z/OSMF port, username, and password:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe profiles create zosmf-profile zoweCLI --host host.company.com --port "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v(" --user USER1 --pass password --reject-unauthorized "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n")])])]),s("p",[s("strong",[e._v("Note")]),e._v(": After you create or add a Zowe profile, you need to reload the explorer views to make the profile appear in the graphical Zowe tree views provided by Zowe Explorer.")])]),e._v(" "),s("li",[s("p",[e._v("Test the profile with the following command:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe zosmf check status\n")])])])])]),e._v(" "),s("h3",{attrs:{id:"running-zowe-cli-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-zowe-cli-commands"}},[e._v("#")]),e._v(" Running Zowe CLI commands")]),e._v(" "),s("p",[e._v("For example, after you created your Zowe CLI z/OSMF profile for the user "),s("code",[e._v("USER1")]),e._v(" and a data set with your COBOL programs called "),s("code",[e._v("USER1.SAMPLE.COBOL")]),e._v(", you can work on your MVS data sets with the following commands:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("List your data sets and members:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe files "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" ds USER1\nzowe files "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" all-members USER1.SAMPLE.COBOL\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Download members:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe files download ds "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"USER1.SAMPLE.COBOL(SAM1)"')]),e._v("\n")])])]),s("p",[e._v("You will see that new folders appear on the left with the names based on your data set that contains the file SAM1. You can rename it by adding a "),s("code",[e._v(".cbl")]),e._v(" extension to edit it in the COBOL editor, and then upload it later using drag-and-drop or via the command line.")])]),e._v(" "),s("li",[s("p",[e._v("Check the status of your jobs:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("jobs")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v(" js "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" ACTIVE\n")])])]),s("p",[e._v("The command above shows an example of how Zowe CLI commands can be used in combination with other Linux commands and scripts. This example returns the complete list of jobs and pipes that list into the Linux "),s("code",[e._v("grep")]),e._v(" command to filter it down to show only the active jobs. This kind of capability enables you to define all kinds of batch jobs and automation for remotely interacting with z/OS.")])])]),e._v(" "),s("p",[e._v("For an overview of available Zowe CLI commands, type "),s("code",[e._v("zowe --help")]),e._v(".")]),e._v(" "),s("p",[e._v("To learn about all capabilities of Zowe CLI, see "),s("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/cli-usingcli.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI Online Documentation"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);