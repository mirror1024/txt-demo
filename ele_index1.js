var __encode ='sojson.com', _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(window);JScriptCodeDom.CodeParseException: Unexcepted Token : QuoteStart , Requires BlockEnd , Line 399, Char 10 ---> System.Exception: Unexcepted Token : QuoteStart , Requires BlockEnd at JScriptCodeDom.CodeParser.ReadAndCheckToken(CodeTokenType equalto) at JScriptCodeDom.CodeParser.ParseBlockObjectExpression() at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) at JScriptCodeDom.CodeParser.ParseBlockObjectExpression() at JScriptCodeDom.CodeParser.ParseLazyExpressionCore(Boolean bthrowerr) at JScriptCodeDom.CodeParser.ParseLazyExpression(Boolean bthrowerr) at JScriptCodeDom.CodeParser.ParseCommaSplitedCollection() at JScriptCodeDom.CodeParser.ContinueExpressionCore(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement) at JScriptCodeDom.CodeParser.ContinueExpression(CodeExpression leftexp, Boolean allowcommer, Boolean parsingFunctionStatement) at JScriptCodeDom.CodeParser.ParseVarStatement(String vartype) at JScriptCodeDom.CodeParser.InternalParseStatementCore() at JScriptCodeDom.CodeParser.InternalParseStatement() at JScriptCodeDom.CodeParser.ParseStatement() at JScriptCodeDom.CodeParser.ParseBlock() at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum) --- End of inner exception stack trace --- at JScriptCodeDom.CodeParser.Parse(String code, String filename, Int32 lineoffset, Boolean keeplinenum) at ProtectorV1.Protect(String[] codes) at ProtectorV1.Protect(String code) at ASP.javascript_obfuscator_aspx.Button1_Click(Object sender, EventArgs e)