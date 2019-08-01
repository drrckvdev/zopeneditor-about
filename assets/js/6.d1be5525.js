(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(t,e,s){"use strict";s.r(e);var a=s(0),o=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The Z Open Editor's COBOL language server provides you with all the editing capabilities discussed in the previous section and can also utilize its knowledge about COBOL to provide you with statistical counters for COBOL language elements such as Operators and Operands, as well as use those to compute various complexity metrics, such as "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Halstead_complexity_measures",target:"_blank",rel:"noopener noreferrer"}},[t._v("Halstead metrics"),s("OutboundLink")],1),t._v(" (also see "),s("a",{attrs:{href:"https://www.verifysoft.com/en_halstead_metrics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[1]"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://www.geeksforgeeks.org/software-engineering-halsteads-software-metrics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("[2]"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://www.tutorialspoint.com/software_engineering/software_design_complexity.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("[3]"),s("OutboundLink")],1),t._v("). You can use these metrics to assess the complexity of your COBOL programs as well as set thresholds for various quality metrics that you do not want violate.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The table is interactive, reacting to your edits as values get recomputed every time you save and showing you change deltas. For example:")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("You can also set thresholds for your metrics either in your personal User Preferences or in Workspace Preferences if you want to share these with your team. Follow these steps to set thresholds for your metrics:")]),t._v(" "),s("ol",[s("li",[t._v("Open the settings for the Z Open Editor for COBOL and PL/I as described in the "),s("router-link",{attrs:{to:"./setting_toc.html"}},[t._v("Settings preferences")]),t._v(".")],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("li",[t._v("You can now use code completion to quickly provide complex preference data objects.")]),t._v(" "),s("li",[t._v("Complete the preferences entry to look like this and save:")])]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[s("strong",[t._v("Next step")]),t._v(": "),s("router-link",{attrs:{to:"./git_commitchanges.html"}},[t._v("Committing changes into Git branches")])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"reviewing-your-code-using-cobol-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reviewing-your-code-using-cobol-metrics","aria-hidden":"true"}},[this._v("#")]),this._v(" Reviewing your code using COBOL Metrics")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you open a COBOL program file (for example, "),e("code",[this._v("COBOL/SAM1.cbl")]),this._v(") and click inside the editor, you will see some metrics-related annotations for that file in the editor's status bar at the bottom.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To view all of the file's COBOL program metrics, click on the "),e("code",[this._v("View All Metrics")]),this._v(" link in the status bar. This will open the metrics view on the right side of the editor. You can also open this view by right-clicking inside your open COBOL program and selecting "),e("code",[this._v("Program Metrics")]),this._v(" from the context menu. The metrics view shows a table of available metrics that you can scroll through to review. To learn about each metric, click the "),e("code",[this._v("(i)")]),this._v(" icon to access a tooltip.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("In "),s("code",[t._v("SAM1.cbl")]),t._v(", go to Line 243 and cut out the entire "),s("code",[t._v("IF")]),t._v(" block until Line 270 and save.")]),t._v(" "),s("li",[t._v("Check the table again as the "),s("code",[t._v("Your Change")]),t._v(" column was updated, showing relative changes for each metric that was impacted. For example, as nested "),s("code",[t._v("IF-ELSE")]),t._v(" statements were removed, the "),s("code",[t._v("Cyclomatic Complexity")]),t._v(" of the program went down by 5. You can see how many other metrics were also updated. The Z Open Editor presents these changes relative to the time you opened the editor. If you close and reopen it the numbers will be reset.")]),t._v(" "),s("li",[t._v("As the code that branches out to other paragraphs was cut out, you can see red squiggles and errors in the Problems view telling you about "),s("code",[t._v("Unreachable Code")]),t._v(" as no other code calls these paragraphs now.")]),t._v(" "),s("li",[t._v("Go back into the editor and press "),s("code",[t._v("Ctrl+Z")]),t._v(" (Windows) or "),s("code",[t._v("Cmd+Z")]),t._v(" (Mac) to restore the code you cut out to get back to a consistent state.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Press "),e("code",[this._v("Ctrl+Space")]),this._v(" (Windows and Mac) and select "),e("code",[this._v('"zopeneditor.cobol.metrics"')]),this._v(" and press "),e("code",[this._v("Enter")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("This adds an empty "),e("code",[this._v('"zopeneditor.cobol.metrics": [],')]),this._v(" entry to your settings on the right.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Put the cursor inside the array's square brackets, type "),e("code",[this._v("{}")]),this._v(", place the cursor inside the braces, and press "),e("code",[this._v("Ctrl+Space")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("The code completion drop down is opened and you can select the "),e("code",[this._v('"metric"')]),this._v(" property.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Select "),e("code",[this._v('"cyclomatic-complexity"')]),this._v(" from the metrics available for threshold that are proposed.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("Type a comma and press "),s("code",[t._v("Enter")]),t._v(". Then, press "),s("code",[t._v("Ctrl+Space")]),t._v(" again to select "),s("code",[t._v('"direction": "larger",')]),t._v(" and once more to select "),s("code",[t._v('"value":')]),t._v(". Set the "),s("code",[t._v("value")]),t._v(" to 15.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token property"}},[t._v('"zopeneditor.cobol.metrics"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"metric"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"comments-percentage"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"direction"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"smaller"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"value"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"metric"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"comments-percentage"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"direction"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"larger"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"value"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("60")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"metric"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"cyclomatic-complexity"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"direction"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"larger"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token property"}},[t._v('"value"')]),s("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("15")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you go back to the "),e("code",[this._v("SAM1.cbl")]),this._v(" editor and review the metrics table, you can now see:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Another column in the table called "),s("code",[t._v("Threshold")]),t._v(" that contains the values you just entered.")]),t._v(" "),s("li",[t._v("Messages about threshold violations are displayed on the far right of the table. For example, for "),s("code",[t._v("SAM1")]),t._v(", the Cyclomatic complexity is 29 and therefore larger than the threshold. The comments percentage is smaller than 15% and therefore also shown as a violation.")]),t._v(" "),s("li",[t._v("If you open the "),s("code",[t._v("SAM2.cbl")]),t._v(" program, both metrics are in the acceptable range.")])])}],!1,null,null,null);e.default=o.exports}}]);