function foo(param1){console.log(this, param1);}
// undefined
changedCtx = foo.bind({name:'Pariwesh'}, 234234);
foo(param1){console.log(this, param1);}
foo()
VM1747:1 Window {window: Window, self: Window, document: document, name: "", location: Location, …} undefined
// undefined
foo(12121)
VM1747:1 Window {window: Window, self: Window, document: document, name: "", location: Location, …} 12121
// undefined
changedCtx()
