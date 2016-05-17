// Scope-Chains-Closurs: 1. Scopes
// Scope-Chains-Closurs: 2. Scope Chains
// Scope-Chains-Closurs: 3. Global Scope & Shadowing
function foo() {
	var bar;
	quux = "Global scope";
	function zip() {
		var quux = "Lexical";
	}
}
