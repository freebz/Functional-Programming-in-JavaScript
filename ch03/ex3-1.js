// 3.1 Understanding your applications's control flow

var loop = optC();
while(loop) {
    var condition = optA();
    if(condition) {
	optB1();
    }
    else {
	optB2();
    }
    loop = optC();
}
optD();



optA().optB().optC().optD()
