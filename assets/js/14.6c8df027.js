(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{211:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"exploring-the-sample-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-sample-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Exploring the sample files")]),e._v(" "),o("h2",{attrs:{id:"get-the-sample-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-the-sample-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Get the sample files")]),e._v(" "),o("p",[e._v("For this tutorial we provide a set of sample files that you can use to explore the editor features. These samples are provided on Github. Assuming that you have Git installed as described in the "),o("router-link",{attrs:{to:"/Docs/getting_started.html#prerequisites"}},[e._v("Prerequisites")]),e._v(", create a work directory somewhere on your machine and clone the sample repository:")],1),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/IBM/zopeneditor-sample.git\n")])])]),o("p",[e._v("Then open the directory "),o("code",[e._v("zopeneditor-tutorial")]),e._v(" using the "),o("code",[e._v("File > Open...")]),e._v(" menu. The sample files in this directory will be referred to throughout the rest of the documentation.")]),e._v(" "),o("h2",{attrs:{id:"examine-the-sample-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examine-the-sample-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Examine the sample files")]),e._v(" "),o("p",[e._v("The sample application consists of the following files:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("COBOL programs: "),o("code",[e._v("SAM1")]),e._v(" and "),o("code",[e._v("SAM2")])]),e._v(" "),o("p",[o("code",[e._v("SAM1")]),e._v(" reads in both the "),o("code",[e._v("CUSTFILE")]),e._v(" and "),o("code",[e._v("TRANFILE")]),e._v(" data files, then performs different actions on the "),o("code",[e._v("CUSTFILE")]),e._v(" based on transactions from the "),o("code",[e._v("TRANFILE")]),e._v(". Valid transactions are "),o("code",[e._v("ADD")]),e._v(", "),o("code",[e._v("UPDATE")]),e._v(", and "),o("code",[e._v("DELETE")]),e._v(". When an "),o("code",[e._v("UPDATE")]),e._v(" transaction is processed, "),o("code",[e._v("SAM1")]),e._v(" calls "),o("code",[e._v("SAM2")]),e._v(" to perform the requested update.")]),e._v(" "),o("p",[o("code",[e._v("SAM2")]),e._v(" includes some base code in place for "),o("code",[e._v("CRUNCH")]),e._v(" transactions, which can be enhanced later in the following exercise. At the end of processing the "),o("code",[e._v("TRANFILE")]),e._v(", "),o("code",[e._v("SAM1")]),e._v(" generates a report on the transactions processed and produces an updated "),o("code",[e._v("CUSTFILE")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("COPYBOOKS: "),o("code",[e._v("CUSTCOPY")]),e._v(" and "),o("code",[e._v("TRANREC")])])]),e._v(" "),o("li",[o("p",[e._v("PL/I programs: "),o("code",[e._v("PSAM1")]),e._v(" and "),o("code",[e._v("PSAM2")])]),e._v(" "),o("p",[o("code",[e._v("PSAM1")]),e._v(" reads in both the "),o("code",[e._v("PLI.CUSTFILE")]),e._v(" and "),o("code",[e._v("PLI.TRANFILE")]),e._v(" data files, then produces a report with customer information and a Totals summary section. Valid transactions are "),o("code",[e._v("PRINT")]),e._v(" and "),o("code",[e._v("TOTALS")]),e._v(". A "),o("code",[e._v("PRINT")]),e._v(" transaction prints the Customer records to the Customer section of the report. When "),o("code",[e._v("PSAM1")]),e._v(" reads in a "),o("code",[e._v("TOTALS")]),e._v(" transaction, it generates the Totals Report section. The instructions, provided later in this document, guide you through making the necessary code changes to allow "),o("code",[e._v("PSAM1")]),e._v(" to process a new type of Customer record called a Product record and generate a new line for the Service Calls in the Totals Report section.")])]),e._v(" "),o("li",[o("p",[e._v("INCLUDES: "),o("code",[e._v("BALSTATS")]),e._v(" and "),o("code",[e._v("CUSTPLI")])])]),e._v(" "),o("li",[o("p",[e._v("JCL members that set up and run the application: "),o("code",[e._v("ALLOCATE")]),e._v(", "),o("code",[e._v("RUN")]),e._v(", "),o("code",[e._v("PLIALLOC")]),e._v(", and "),o("code",[e._v("RUNPSAM1")]),e._v(".")])]),e._v(" "),o("li",[o("p",[e._v("Data source files: "),o("code",[e._v("CUSTFILE")]),e._v(", "),o("code",[e._v("TRANFILE")]),e._v(", "),o("code",[e._v("PLI.TRANFILE")]),e._v(", and "),o("code",[e._v("PLI.CUSTFILE")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);