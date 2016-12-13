var buttons = ['9','8','7','6','5','4','3','2','1','0','+','-','*','/','.','='];

function calculator() {
    var container = document.createElement('div');

    container.id = 'container';

    container.appendChild(calculatorBuild());
    
    document.body.appendChild(container);
}

function calculatorBuild() {
    var calcWrap = document.createElement('div');
    calcWrap.id = 'calculator';
    var input = document.createElement('input');
    input.id = 'calc-input';
    input.className = 'calin';
    calcWrap.appendChild(input);

    buttons.forEach(function(content) {
        var button = document.createElement('button');
        button.id = content;
        button.className = 'calbut';
        button.appendChild(document.createTextNode(content));
        button.addEventListener('click', click, false);
        calcWrap.appendChild(button);
    });
    return calcWrap;
}

function click(event){
    var input = document.getElementById('calc-input');
    if(event.target.id == '='){
        input.value = math.eval(input.value);
    }else{
        input.value = input.value + event.target.id;
    }
}
calculator();
